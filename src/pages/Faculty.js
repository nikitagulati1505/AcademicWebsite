// faculty.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import '../styles/faculty.css';

const Faculty = () => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate();

    // State for Popup Visibility
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    // Handler to open the popup
    const handleGuidelinesClick = (e) => {
        e.preventDefault();
        setPopupContent('guidelines');
        setShowPopup(true);
    };

    const handleMeetingMinutesClick = (e) => {
        e.preventDefault();
        setPopupContent('meetingMinutes');
        setShowPopup(true);
    };

    // Handler to close the popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    // Split items into two rows
    const items = [
        { title: "Teaching & Learning", link: "https://iiitd.ac.in/iqac", text: "IQAC" },
        { title: "Guidelines", link: "/blank", text: "SOP" },
        { title: "Meeting Minutes", link: "https://academics.iiitd.ac.in/meetings/list.php", text: "Minutes" },
        { title: "Academic Regulations", link: "https://iiitd.ac.in/academics/resources", text: "Regulations" },
        { title: "Awards", link: "https://awards.iiitd.edu.in/", text: "Awards" },
    ];

    const firstRowItems = items.slice(0, 3); // First 3 items
    const secondRowItems = items.slice(3);    // Remaining items

    return (
        <div className='faculty-page' style={{ backgroundColor: "rgb(239, 239, 240)" }}>
            <div className={size > 820 ? 'faculty-heading' : size > 500 ? 'faculty-smallHeading' : 'faculty-vSmallHeading'}>
                Faculty
            </div>
            <div className="faculty-rows">
                <div className="faculty-row">
                    {firstRowItems.map((item, index) => (
                        <Parallax
                            key={index}
                            className="faculty-parallax"
                        >
                            <div className={size > 820 ? 'faculty-box' : size > 500 ? 'faculty-smallBox' : 'faculty-vSmallBox'}>
                                <div className="faculty-section">
                                    <div className="faculty-subheading">
                                        <strong>{item.title}</strong>
                                        <br />
                                        {item.title === "Guidelines" ? (
                                            <span
                                                className="faculty-link faculty-clickable"
                                                onClick={handleGuidelinesClick}
                                            >
                                                {item.text}
                                            </span>
                                        ) : item.title === "Meeting Minutes" ? (
                                            <span
                                                className="faculty-link faculty-clickable"
                                                onClick={handleMeetingMinutesClick}
                                            >
                                                {item.text}
                                            </span>
                                        ) : (
                                            <a
                                                className="faculty-link"
                                                href={item.link}
                                                onClick={(e) => {
                                                    if (item.link === '/blank') {
                                                        e.preventDefault();
                                                        navigate('/blank');
                                                    }
                                                }}
                                            >
                                                {item.text}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    ))}
                </div>
                <div className="faculty-row">
                    {secondRowItems.map((item, index) => (
                        <Parallax
                            key={index}
                            className="faculty-parallax"
                        >
                            <div className={size > 820 ? 'faculty-box' : size > 500 ? 'faculty-smallBox' : 'faculty-vSmallBox'}>
                                <div className="faculty-section">
                                    <div className="faculty-subheading">
                                        <strong>{item.title}</strong>
                                        <br />
                                        <a
                                            className="faculty-link"
                                            href={item.link}
                                            onClick={(e) => {
                                                if (item.link === '/blank') {
                                                    e.preventDefault();
                                                    navigate('/blank');
                                                }
                                            }}
                                        >
                                            {item.text}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    ))}
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && popupContent === 'guidelines' && (
                <div className="faculty-modal-overlay" onClick={handleClosePopup}>
                    <div className="faculty-modal-content faculty-larger-popup" onClick={(e) => e.stopPropagation()}>
                        <span className="faculty-close-button" onClick={handleClosePopup}>&times;</span>
                        <p><a className="faculty-pdf-link" href="Guidelines for Online Programs In Collaboration.pdf" target="_blank" rel="noopener noreferrer">Faculty Guidelines for Online Programs</a></p>
                        <p><a className="faculty-pdf-link" href="Guidelines for proposing changes in existing program.pdf" target="_blank" rel="noopener noreferrer">Guidelines for proposing changes in existing program</a></p>
                        <p><a className="faculty-pdf-link" href="Guidelines for starting a new regular program_New.pdf" target="_blank" rel="noopener noreferrer">Guidelines for starting a new regular program</a></p>
                    </div>
                </div>
            )}

            {showPopup && popupContent === 'meetingMinutes' && (
                <div className="faculty-modal-overlay" onClick={handleClosePopup}>
                    <div className="faculty-modal-content faculty-larger-popup" onClick={(e) => e.stopPropagation()}>
                        <span className="faculty-close-button" onClick={handleClosePopup}>&times;</span>
                        <p>It will be uploaded soon.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Faculty;
