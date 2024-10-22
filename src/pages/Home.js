// src/pages/Home.js
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
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
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
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    // Example notifications array (modify or fetch dynamically as needed)
    const notifications = [
        "Notification 1: Welcome to the new semester!",
        "Notification 2: Academic calendar has been updated.",
        "Notification 3: New courses available for registration.",
        // Add more notifications as needed
    ];

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
            <Marquee /> {/* Retain if used elsewhere */}
            <Navbar 
                home={home} student={student} faculty={faculty} alumni={alumni} 
                projects={projects} report={report} convocation={convocation} 
                classroom={classroom} contact={contact} 
                certificate={certificate} 
                setCertificate={setCertificate} beforeArrive={beforeArrive} 
                setBeforeArrive={setBeforeArrive} FAQ={FAQ} setFAQ={setFAQ} 
            />
            <div className='homepage-container'>
                <div ref={home}></div>
                <AdCarousel />
                <ParallaxBanner
                    style={{ 
                        height: size > 800 ? '350px' : size > 500 ? '250px' : '560px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        marginTop: '0' ,
                        marginRight:'10px',
                        textAlign: 'left',
                    }}
                    layers={[{        
                        image: '',
                        speed: -30,
                    }]}
                > 
                    <div className={size > 800 ? "aboutUsContainer" : size > 500 ? "smallAbout" : "vSmallAbout"}>
                        <img src="/homepageiiitd.jpeg" alt="IIITD" />
                        <div className="textContainer">
                            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'} style={{ fontWeight: 'bold' }}>
                                About Academics
                            </div>
                            <div className={size > 800 ? 'para' : size > 500 ? 'paraSmall' : 'vParaSmall'}>
                                <p>
                                    The Academic Office exists to help facilitate, initiate and co-ordinate the academic work of the Institute starting from admission, course registration, examination, and convocation; basically the teaching and assessment of students. It acts as the repository of grades and academic records of all students, both past and present. It provides administrative support to the Senate, which is the highest academic body of the Institute.
                                </p>
                            </div>
                        </div>
                    </div>
                </ParallaxBanner>

                {/* Buttons Section */}
                <div className="academics">
                    <div className="academic">
                        <Parallax>
                            <div className="team">
                                <div className="section">
                                    {/* Academic Team Link - Opens in a new tab */}
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
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
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
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
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
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
                                <div className="section">
                                    <a 
                                        href="https://iiitd.ac.in/academics/resources" 
                                        style={{ textDecoration: 'none', color: 'white' }} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <img src='/document.png' alt="Regulations" />
                                        Regulations
                                    </a>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
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
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
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
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="team">
                                <div className="section">
                                    {/* "Important Minutes" triggers a popup */}
                                    <div 
                                        className="clickable-section" 
                                        onClick={handleImportantMinutesClick} 
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img src='/online-meeting.png' alt="Important Minutes" />
                                        <p>Important Minutes</p>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </div>
                <div className="button-container">
                    <Parallax>
                        <div className="section wide-button">
                            <div>
                                <a 
                                    className="projectLinks" 
                                    href="https://iiitd.ac.in/sites/default/files/docs/education/2024/Academic%20Calendar_Monsoon%20Semester%202024%20AY%202024-25%20V2.pdf" 
                                    target="_blank" 
                                    style={{ textDecoration: 'none' }}
                                >
                                    Academic Calendar: Monsoon Semester 2024
                                </a>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="section wide-button">
                            <div>
                                <a 
                                    className="projectLinks" 
                                    href="https://iiitd.ac.in/sites/default/files/docs/education/2024/Pre%20Registration%20TT_Monsoon%202024%20AY%202024-25_V2.pdf" 
                                    target="_blank" 
                                    style={{ textDecoration: 'none' }}
                                >
                                    TimeTable: Monsoon 2024 Semester
                                </a>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="section wide-button">
                            <div>
                                <a 
                                    className="projectLinks" 
                                    href="https://www.iiitd.ac.in/academics/ay23-24" 
                                    target="_blank" 
                                    style={{ textDecoration: 'none' }}
                                >
                                    Examinations: Page to be uploaded
                                </a>
                            </div>
                        </div>
                    </Parallax>
                </div>

                {/* Flex container for image and notification box */}
                <div className="resource-container">
                    {/* Image */}
                    <div className="image-container">
                        <img src="/iitdimg.jpg" alt="IIITD" className="resource-image" />
                    </div>

                    {/* Blue Notification Box */}
                    <div className="notification-box">
                        <div className="vertical-marquee">
                            {notifications.concat(notifications).map((note, index) => (
                                <div className="marquee-content" key={index}>
                                    {note}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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

                {/* Popup Modal */}
                {showPopup && (
                    <div className="modal-overlay" onClick={handleClosePopup}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={handleClosePopup}>&times;</span>
                            <p>This information will be uploaded soon.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
