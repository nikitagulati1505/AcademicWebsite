// src/components/Contact.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/contact.css';

const Contact = () => {
  const [size, setSize] = useState(window.innerWidth);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    program: '',
    message: '',
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your backend API endpoint
    const apiEndpoint = 'http://localhost:5000/api/contact';

    try {
      const response = await axios.post(apiEndpoint, formData);
      if (response.status === 200) {
        alert('Your message has been sent successfully!');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          program: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <div
      className="contactWrapper contactPage"
      style={{ backgroundColor: 'rgb(239, 239, 240)' }}
    >
      <div
        className={
          size > 800
            ? 'heading'
            : size > 500
            ? 'smallHeading'
            : 'vSmallHeading'
        }
      >
        Contact Academic Department
      </div>
      <div
        className={size > 800 ? 'contactSection' : 'contactSectionSmall'}
      >
        <div
          className={
            size > 800
              ? 'contactFormContainer'
              : 'contactFormContainerSmall'
          }
        >
          <div
            className={
              size > 800
                ? 'subTitle'
                : size > 500
                ? 'subTitleSmall'
                : 'subTitleVSmall'
            }
          >
            Enquire Us
          </div>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <select
  name="program"
  id="program"
  value={formData.program}
  onChange={handleChange}
>
  <option value="">Select Program</option>
  <option value="Others">Others</option>
  <option value="B.Tech">B.Tech</option>
  <option value="M.Tech">M.Tech</option>
  <option value="Ph.D">Ph.D</option>
</select>

           
            <textarea
              className="contactQuery"
              name="message"
              placeholder="Enter your query here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submitButton">
              SEND
            </button>
          </form>
        </div>
        <div
          className={
            size > 800
              ? 'contactInfoContainer'
              : 'contactInfoContainerSmall'
          }
        >
          <div>
            <div
              className={
                size > 800
                  ? 'subTitle'
                  : size > 500
                  ? 'subTitleSmall'
                  : 'subTitleVSmall'
              }
            >
              Location
            </div>
            <div
              className={
                size > 800
                  ? 'infoContent'
                  : size > 500
                  ? 'infoContentSmall'
                  : 'infoContentVSmall'
              }
            >
              Old Academic Building, 2nd Floor
              <br />
              IIITD,
              <br />
              Okhla Phase -III, New Delhi - 110020
            </div>
          </div>

          <div>
            <div
              className={
                size > 800
                  ? 'subTitle'
                  : size > 500
                  ? 'subTitleSmall'
                  : 'subTitleVSmall'
              }
            >
              Mail Info
            </div>
            <div
              className={
                size > 800
                  ? 'infoContent'
                  : size > 500
                  ? 'infoContentSmall'
                  : 'infoContentVSmall'
              }
            >
              admin-academics@iiitd.ac.in
            </div>
            <div
              className={
                size > 800
                  ? 'infoContent'
                  : size > 500
                  ? 'infoContentSmall'
                  : 'infoContentVSmall'
              }
            >
              B.Tech.: admin-btech@iiitd.ac.in
            </div>
            <div
              className={
                size > 800
                  ? 'infoContent'
                  : size > 500
                  ? 'infoContentSmall'
                  : 'infoContentVSmall'
              }
            >
              M.Tech.: admin-mtech@iiitd.ac.in
            </div>
            <div
              className={
                size > 800
                  ? 'infoContent'
                  : size > 500
                  ? 'infoContentSmall'
                  : 'infoContentVSmall'
              }
            >
              Ph.D: admin-phd@iiitd.ac.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
