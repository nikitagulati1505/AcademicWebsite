require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const app = express();

// Secret key for JWT (use a strong secret in production)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust if your frontend runs on a different port
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'your_db_host',
  user: process.env.DB_USER || 'your_db_user',
  password: process.env.DB_PASSWORD || 'your_db_password',
  database: process.env.DB_NAME || 'your_db_name',
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database.');
});

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER, // e.g., 'academicwesbiteiiitd@gmail.com'
    pass: process.env.EMAIL_PASS, // your email password or app-specific password
  },
});

// Verify email transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('Email setup error:', error);
  } else {
    console.log('Email server is ready to take messages.');
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Token is expected to be in the format "Bearer TOKEN"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user;
    next();
  });
};

// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};
app.use(logger);

// Register API
app.post('/api/register', [
  body('username').notEmpty(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  console.log('Register endpoint hit');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = 'INSERT INTO admin (username, password) VALUES (?, ?)';
  db.query(sql, [username, hashedPassword], (err, result) => {
    if (err) {
      console.error('Failed to register user:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('User registered successfully');
  });
});

// Login API
app.post('/api/login', [
  body('username').notEmpty(),
  body('password').notEmpty()
], (req, res) => {
  console.log('Login endpoint hit');
  const { username, password } = req.body;

  const sql = 'SELECT * FROM admin WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      console.log('No user found with username:', username);
      return res.status(400).send('Invalid credentials');
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      console.log('Invalid password for user:', username);
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Contact Form Endpoint
app.post('/api/contact', [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('subject').notEmpty(),
  body('program').notEmpty(),
  body('message').notEmpty(),
], async (req, res) => {
  console.log('Contact form submission received.');
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors in contact form:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, program, message } = req.body;

  // Insert into the database
  const insertSql = `INSERT INTO contacts (name, email, subject, program, message, submission_date) VALUES (?, ?, ?, ?, ?, NOW())`;
  db.query(insertSql, [name, email, subject, program, message], (err, result) => {
    if (err) {
      console.error('Failed to insert contact form data:', err);
      return res.status(500).send('Server error');
    }
    console.log('Contact form data inserted with ID:', result.insertId);
    
    // Determine the recipient based on the program
    let recipientEmail = '';
    switch (program) {
      case 'B.Tech':
        recipientEmail = 'admin-btech@iiitd.ac.in';
        break;
      case 'M.Tech':
        recipientEmail = 'admin-mtech@iiitd.ac.in';
        break;
      case 'Ph.D':
        recipientEmail = 'admin-phd@iiitd.ac.in';
        break;
      case 'Others':
      default:
        recipientEmail = 'nikitagulati515@gmail.com';
        break;
    }

    // Prepare the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        New Contact Form Submission from ${name}

        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Program: ${program}
        Message: ${message}
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending contact form email:', error);
        return res.status(500).send('Failed to send email');
      }
      console.log('Contact form email sent:', info.response);
      res.status(200).send('Your message has been sent successfully!');
    });
  });
});

// Respond Endpoint
app.post('/api/respond', authenticateToken, [
  body('contact_id').notEmpty().isInt(),
  body('response_message').notEmpty()
], (req, res) => {
  console.log('Response submission received.');

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors in respond form:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { contact_id, response_message } = req.body;

  // Fetch the corresponding contact
  const getContactSql = 'SELECT * FROM contacts WHERE id = ?';
  db.query(getContactSql, [contact_id], (err, contactResults) => {
    if (err) {
      console.error('Failed to fetch contact:', err);
      return res.status(500).send('Server error');
    }

    if (contactResults.length === 0) {
      return res.status(404).send('Contact not found');
    }

    const contact = contactResults[0];

    // Insert the response into the responses table
    const insertResponseSql = 'INSERT INTO responses (contact_id, response_message, response_date) VALUES (?, ?, NOW())';
    db.query(insertResponseSql, [contact_id, response_message], (err, responseResult) => {
      if (err) {
        console.error('Failed to insert response:', err);
        return res.status(500).send('Server error');
      }

      console.log('Response inserted with ID:', responseResult.insertId);

      // Send an email back to the user from the academic website email
      const userEmail = contact.email;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: `Response to your query: ${contact.subject}`,
        text: `
          Hello ${contact.name},

          This is in response to your query submitted on our academic website.

          Your original query:
          Program: ${contact.program}
          Subject: ${contact.subject}
          Message: ${contact.message}

          Our Response:
          ${response_message}

          Thank you,
          Academic Department
        `
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending response email:', error);
          return res.status(500).send('Failed to send response email');
        }

        console.log('Response email sent:', info.response);
        res.status(200).send('Response recorded and email sent successfully!');
      });
    });
  });
});

// NEW ENDPOINT: Fetch all contact queries (Protected)
app.get('/api/contacts', authenticateToken, (req, res) => {
  const sql = 'SELECT * FROM contacts ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Failed to fetch contacts:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

// Fetch Academic Team
app.get('/api/academic-team', (req, res) => {
  const sql = 'SELECT * FROM academic_team ORDER BY team_order, `order`';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Failed to fetch academic team data:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

// Add Academic Team Member (Protected)
app.post('/api/academic-team', authenticateToken, (req, res) => {
  const { name, designation, team, order, imgSrc } = req.body;
  if (!name || !designation || !team) {
    console.log('Missing required fields in add member request');
    return res.status(400).send('Missing required fields');
  }

  const sql = 'INSERT INTO academic_team (name, designation, team, `order`, imgSrc) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, designation, team, order, imgSrc], (err, result) => {
    if (err) {
      console.error('Failed to add member:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Member added successfully');
  });
});

// Update Academic Team Member (Protected)
app.put('/api/academic-team/:id', authenticateToken, (req, res) => {
  const { name, designation, team, order, imgSrc } = req.body;
  const { id } = req.params;

  if (!name || !designation || !team) {
    console.log('Missing required fields in update member request');
    return res.status(400).send('Missing required fields');
  }

  const sql = 'UPDATE academic_team SET name = ?, designation = ?, team = ?, `order` = ?, imgSrc = ? WHERE id = ?';
  db.query(sql, [name, designation, team, order, imgSrc, id], (err, result) => {
    if (err) {
      console.error('Failed to update member:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Member updated successfully');
  });
});

// Delete Academic Team Member (Protected)
app.delete('/api/academic-team/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM academic_team WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Failed to delete member:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Member deleted successfully');
  });
});

// Notifications Endpoints
app.get('/api/notifications', (req, res) => {
  const sql = 'SELECT * FROM notifications ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Failed to fetch notifications:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

app.post('/api/notifications', authenticateToken, (req, res) => {
  const { notification_text } = req.body;
  if (!notification_text) {
    return res.status(400).send('Notification text is required');
  }

  const sql = 'INSERT INTO notifications (notification_text) VALUES (?)';
  db.query(sql, [notification_text], (err, result) => {
    if (err) {
      console.error('Failed to add notification:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Notification added successfully');
  });
});

app.put('/api/notifications/:id', authenticateToken, (req, res) => {
  const { notification_text } = req.body;
  const { id } = req.params;

  if (!notification_text) {
    return res.status(400).send('Notification text is required');
  }

  const sql = 'UPDATE notifications SET notification_text = ? WHERE id = ?';
  db.query(sql, [notification_text, id], (err, result) => {
    if (err) {
      console.error('Failed to update notification:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Notification updated successfully');
  });
});

app.delete('/api/notifications/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM notifications WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Failed to delete notification:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Notification deleted successfully');
  });
});

// Wide Buttons Endpoints
app.get('/api/wide-buttons', (req, res) => {
  const sql = 'SELECT * FROM calenders ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Failed to fetch wide buttons:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

app.post('/api/wide-buttons', authenticateToken, (req, res) => {
  const { button_text, url } = req.body;
  if (!button_text || !url) {
    return res.status(400).send('Button text and URL are required');
  }

  const sql = 'INSERT INTO calenders (button_text, url) VALUES (?, ?)';
  db.query(sql, [button_text, url], (err, result) => {
    if (err) {
      console.error('Failed to add wide button:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send('Wide button added successfully');
  });
});

app.put('/api/wide-buttons/:id', authenticateToken, (req, res) => {
  const { button_text, url } = req.body;
  const { id } = req.params;

  if (!button_text || !url) {
    return res.status(400).send('Button text and URL are required');
  }

  const sql = 'UPDATE calenders SET button_text = ?, url = ? WHERE id = ?';
  db.query(sql, [button_text, url, id], (err, result) => {
    if (err) {
      console.error('Failed to update wide button:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Wide button updated successfully');
  });
});

app.delete('/api/wide-buttons/:id', authenticateToken, (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM calenders WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Failed to delete wide button:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).send('Wide button deleted successfully');
  });
});

// Catch-all for unhandled requests
app.use((req, res, next) => {
  console.log(`Unhandled request: ${req.method} ${req.originalUrl}`);
  res.status(404).send('Not Found');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
