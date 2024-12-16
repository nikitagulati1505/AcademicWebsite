// Home.js
import React, { useRef, useState, useEffect } from 'react';
import AdCarousel from '../components/AdCarousel';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import Navbar from '../components/Navbar';
import Student from './Student';
import '../styles/home.css';
import Faculty from './Faculty';
import Alumni from './Alumni';
import StudentProjects from './StudentProjects';
import ReportsStatistics from './ReportsStatistics';
import Convocation from './Convocation';
import Classrooms from './Classrooms';
import Contact from './Contact';
import { Parallax } from 'react-scroll-parallax';
import Certificates from './Certificates';
import BeforeYouArrive from './BeforeYouArrive';
import Faq from './Faq';

const Home = () => {
  const home = useRef(null);
  const student = useRef(null);
  const faculty = useRef(null);
  const alumni = useRef(null);
  const projects = useRef(null);
  const report = useRef(null);
  const convocation = useRef(null);
  const classroom = useRef(null);
  const contact = useRef(null);
  
  const [size, setSize] = useState(window.innerWidth);
  const [certificate, setCertificate] = useState(false);
  const [beforeArrive, setBeforeArrive] = useState(false);
  const [FAQ, setFAQ] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  const [notifications, setNotifications] = useState([]); // State for notifications
  const [wideButtons, setWideButtons] = useState([]); // State for wide buttons
  
  const [loadingNotifications, setLoadingNotifications] = useState(true);
  const [loadingWideButtons, setLoadingWideButtons] = useState(true);
  
  const [errorNotifications, setErrorNotifications] = useState('');
  const [errorWideButtons, setErrorWideButtons] = useState('');
  
  useEffect(() => {
    const updateWindowDimensions = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);
  
  useEffect(() => {
    fetchNotifications();
    fetchWideButtons(); 
  }, []);
  
  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/notifications');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      const data = await response.json(); // data is an array of objects {id, notification_text}
      setNotifications(data);
      setLoadingNotifications(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setErrorNotifications('Error fetching notifications');
      setLoadingNotifications(false);
    }
  };
  
  const fetchWideButtons = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/wide-buttons');
      if (!response.ok) {
        throw new Error('Failed to fetch wide buttons');
      }
      const data = await response.json(); // data is an array of objects {id, button_text, url}
      setWideButtons(data);
      setLoadingWideButtons(false);
    } catch (error) {
      console.error('Error fetching wide buttons:', error);
      setErrorWideButtons('Error fetching wide buttons');
      setLoadingWideButtons(false);
    }
  };
  
  // Handler to open the popup
  const handleImportantMinutesClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowPopup(true);
  };
  
  // Handler to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div className='homepage'>
      <Marquee />
      <Navbar
        home={home}
        student={student}
        faculty={faculty}
        alumni={alumni}
        projects={projects}
        report={report}
        convocation={convocation}
        classroom={classroom}
        contact={contact}
        certificate={certificate}
        setCertificate={setCertificate}
        beforeArrive={beforeArrive}
        setBeforeArrive={setBeforeArrive}
        FAQ={FAQ}
        setFAQ={setFAQ}
      />
      <div className='homepage-container'>
        <div ref={home}></div>
        <AdCarousel />
        <div className="container">
          {/* About Us Container */}
          <div className="aboutUsContainer">
            <img src="/homepageiiitd.jpeg" alt="IIITD" />
            <div className="textContainer">
              <div className='heading' style={{ fontWeight: 'bold' }}>
                About Academics
              </div>
              <div className='para'>
                <p>
                  The Academic Office exists to help facilitate, initiate, and coordinate the academic work of the Institute starting from admission, course registration, examination, and convocation; basically, the teaching and assessment of students. It acts as the repository of grades and academic records of all students, both past and present. It provides administrative support to the Senate, which is the highest academic body of the Institute.
                </p>
              </div>
            </div>
          </div>
  
          {/* Buttons Section */}
          <div className="academics">
            <div className="academic">
              <div className="team">
                {/* Blue Buttons */}
                <Parallax>
                  <div className="section">
                    <a
                      href="/academic-team"
                      target="_parent"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}
                    >
                      <img src='/group.png' alt="Academic Team" />
                      IIITD Academic Team
                    </a>
                  </div>
                </Parallax>
                <Parallax>
                  <div className="section">
                    <a
                      href='https://iiitd.ac.in/academics/academic-administration'
                      style={{ textDecoration: 'none', color: 'white' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src='/team.png' alt="Administration" />
                      Administration
                    </a>
                  </div>
                </Parallax>
                <Parallax>
                  <div className="section">
                    <a
                      href='https://iiitd.ac.in/academics/issue-resolution'
                      style={{ textDecoration: 'none', color: 'white' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src='/question.png' alt="Issue Resolution" />
                      <p>Issue Resolution</p>
                    </a>
                  </div>
                </Parallax>
                <Parallax>
                  <div className="section">
                    <a
                      href="https://iiitd.ac.in/form_docs"
                      style={{ textDecoration: 'none', color: 'white' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src='/form.png' alt="Internal Forms" />
                      <p>Internal Forms</p>
                    </a>
                  </div>
                </Parallax>
                <Parallax>
                  <div className="section">
                    <a
                      href="https://iiitd.nurecampus.com/dashboard-login"
                      style={{ textDecoration: 'none', color: 'white' }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src='/graduate-cap.png' alt="ERP" />
                      <p>ERP</p>
                    </a>
                  </div>
                </Parallax>
                <Parallax>
                  <div className="section">
                    <div
                      className="clickable-section"
                      onClick={handleImportantMinutesClick}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }}
                    >
                      <img src='/online-meeting.png' alt="Important Minutes" />
                      <p>Important Minutes</p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
  
          {/* Wide Buttons */}
          <div className="button-container">
            {loadingWideButtons ? (
              <p>Loading wide buttons...</p>
            ) : errorWideButtons ? (
              <p>{errorWideButtons}</p>
            ) : wideButtons.length > 0 ? (
              wideButtons.map((button) => (
                <Parallax key={button.id}>
                  <div className="wide-button">
                    <a
                      className="projectLinks"
                      href={button.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {button.button_text}
                    </a>
                  </div>
                </Parallax>
              ))
            ) : (
              <p>No wide buttons available.</p>
            )}
          </div>
  
          {/* Resource Container */}
          <div className="resource-container">
            <div className="image-container">
              <img src="/iitdimg.jpg" alt="IIITD" className="resource-image" />
            </div>
            <div className="notification-box">
              <div className="vertical-marquee">
                {loadingNotifications ? (
                  <p>Loading notifications...</p>
                ) : errorNotifications ? (
                  <p>{errorNotifications}</p>
                ) : notifications.length > 0 ? (
                  notifications.concat(notifications).map((note) => (
                    <div className="marquee-content" key={note.id}>
                      {note.notification_text}
                    </div>
                  ))
                ) : (
                  <p>No notifications available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
  
        {/* Other Components */}
        <div ref={student}>
          <Student setBeforeArrive={setBeforeArrive} setFAQ={setFAQ} />
        </div>
        <div ref={faculty}>
          <Faculty />
        </div>
        <div ref={alumni}>
          <Alumni certificate={certificate} setCertificate={setCertificate} />
        </div>
        <div ref={projects}>
          <StudentProjects />
        </div>
        <div ref={report}>
          <ReportsStatistics />
        </div>
        <div ref={convocation}>
          <Convocation />
        </div>
        <div ref={classroom}>
          <Classrooms />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
        <Footer />
  
        {showPopup && (
          <div className="modal-overlay" onClick={handleClosePopup}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={handleClosePopup}>
                &times;
              </span>
              <p>This information will be uploaded soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
