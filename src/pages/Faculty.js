import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Parallax } from 'react-scroll-parallax';
import '../styles/faculty.css';

const Faculty = () => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate(); // Hook to programmatically navigate

    // State for Popup Visibility
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    // Handler to open the popup
    const handleMeetingMinutesClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowPopup(true);
    };

    // Handler to close the popup
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='page1' style={{ backgroundColor: "rgb(239, 239, 240)" }}>
            <div className={size > 820 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>
                Faculty
            </div>
            <div className="rows">
                {[
                    { title: "Teaching & Learning", link: "https://iiitd.ac.in/iqac", text: "IQAC" },
                    { title: "Guidelines", link: "/blank", text: "SOP" },  // Update link to navigate
                    { title: "Academic Regulations", link: "https://iiitd.ac.in/academics/resources", text: "Regulations" },
                    { title: "Meeting Minutes", link: "https://academics.iiitd.edu.in/meetings/list.php", text: "Minutes" },
                    { title: "Point of Contact", link: "/blank", text: "Academic Team" },  // Update link to navigate
                    { title: "Awards", link: "https://awards.iiitd.edu.in/", text: "Awards" },
                ].map((item, index) => (
                    <Parallax
                        key={index}
                        className="Parallax-module__smallLinear--MqSo+"
                    >
                        <div className={size > 820 ? 'faculty' : size > 500 ? 'smallFaculty' : 'vSmallFaculty'}>
                            <div className="section1">
                                <div className="subHeading1">
                                    <strong>{item.title}</strong>: 
                                    {item.title === "Meeting Minutes" ? (
                                        // If the item is "Meeting Minutes", trigger popup on click
                                        <span
                                            className="projectLinks clickable-section"
                                            onClick={handleMeetingMinutesClick}
                                        >
                                            {item.text}
                                        </span>
                                    ) : (
                                        // For other items, retain the link behavior
                                        <a
                                            className="projectLinks"
                                            href={item.link}
                                            onClick={(e) => {
                                                if (item.link === '/blank') {
                                                    e.preventDefault(); // Prevent default link behavior
                                                    navigate('/blank'); // Navigate to Blank component
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

            {/* Popup Modal */}
            {showPopup && (
                <div className="modal-overlay" onClick={handleClosePopup}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={handleClosePopup}>&times;</span>
                        <p>It will be uploaded soon.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Faculty;
