import React from 'react';

const Examination = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Examination and Assessment</h1>
      <p style={styles.text}>
        Each course is conducted by the assigned Instructor with the assistance of teaching fellows and/or teaching assistants. The Instructor is responsible for conducting lectures, tutorials, and labs, holding the tests and examinations, evaluating the performance of the students, and awarding grades at the end of
      </p>
      <h3 style={styles.subheading}>Plagiarism</h3>
      <p style={styles.text}>
        IIIT Delhi maintains global academic standards and does not tolerate any form of academic dishonesty. Almost all violations of academic honesty in course submissions (homework assignments, project reports) are instances of plagiarism. An example of Academic dishonesty is when some part(s) of a student's assignment are someone else's writing/idea/art (for example a friend, a solution manual, a website), but the student claims it as his/her own by not explicitly making it clear that these parts are someone else's.
      </p>
      <p style={styles.text}>
        If, for whatever reason, a student has to use some existing work, the student cannot copy and can only borrow. Therefore, it is the student's responsibility to explicitly indicate which parts are borrowed. A student is allowed to borrow definitions, formulae, figures, one sentence, etc. by:
      </p>
      <ul style={styles.list}>
        <li>Attributing it to the original source and</li>
        <li>Making it absolutely clear that the copied part is not the student's own (a student needs to do both)</li>
      </ul>
      <h7 style={styles.linkText}>For more information: 
        <a href="https://www.iiitd.ac.in/academics/ay24-25" style={styles.link}>
          Follow this link
        </a>
      </h7>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '50px 20px',
    maxWidth: '800px',
    margin: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  subheading: {
    textAlign: 'center',
    color: '#34495e',
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  text: {
    textAlign: 'left',
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    textAlign: 'left',
    marginLeft: '20px',
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  linkText: {
    fontSize: '18px',
    color: '#2980b9',
    marginTop: '20px',
    display: 'block',
    textAlign: 'left',
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px',
  },
};

export default Examination;
