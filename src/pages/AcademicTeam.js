// AcademicTeam.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation
import Footer from '../components/Footer';
import '../styles/academicTeam.css';
import { ParallaxBanner } from 'react-scroll-parallax';

// Import local images if necessary
// import FacSports from '../assets/Fac_Sports-232.png';
// import AmaanSS from '../assets/amaan_ss.jpg';

const AcademicTeam = () => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate(); // Initialize navigate to handle navigation

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const getHeadingClass = () => {
        if (size > 800) return 'mainHeading';
        if (size > 500) return 'subHeadingLarge';
        return 'subHeadingSmall';
    };

    const getSubTeamClass = () => {
        if (size > 800) return 'subTeamHeadingLarge';
        if (size > 500) return 'subTeamHeadingMedium';
        return 'subTeamHeadingSmall';
    };

    const getCardClass = () => {
        if (size > 800) return 'teamCardLarge';
        if (size > 500) return 'teamCardMedium';
        return 'teamCardSmall';
    };

    const handleBackToHome = () => {
        console.log('Back button clicked'); // Debugging: Check if function is called
        navigate('/'); // Redirect to home page when clicked
    };

    // If using local images, uncomment the imports and update imgSrc accordingly
    const teamData = [
        {
            title: "DoAA",
            members: [
                {
                    name: "DR. SUMIT J DARAK",
                    designation: "DoAA",
                    imgSrc: "https://www.iiitd.ac.in/sites/default/files/images/faculty/sumit.jpg"
                }
            ]
        },
        {
            title: "Registrar",
            members: [
                {
                    name: "DR. DEEPIKA BHASKAR",
                    designation: "Registrar",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/deepika.jpg"
                }
            ]
        },
        {
            title: "Admin Academic",
            members: [
                {
                    name: "ASHUTOSH BRAHMA",
                    designation: "Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/asutosh.jpg"
                }
            ]
        },
        {
            title: "Admin B.Tech",
            members: [
                {
                    name: "NISHA NARWA",
                    designation: "Assistant Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/nisha.jpg"
                },
                {
                    name: "AAKASH GUPTA",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/aakash.jpg"
                },
                {
                    name: "ASHISH AGGARWAL",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/ashisha.jpg"
                },
                {
                    name: "AKANKSHA",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/akanksha.jpg"
                }
            ]
        },
        {
            title: "Admin M.Tech",
            members: [
                {
                    name: "SANJANA SONI",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/sanjanas.jpg"
                },
                {
                    name: "MOHIT KUMAR",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/mohit.jpg"
                }
            ]
        },
        {
            title: "Admin Ph.D",
            members: [
                {
                    name: "ANSHU DUREJA",
                    designation: "Deputy Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/anshu.jpg"
                },
                {
                    name: "RAJU BISWAS",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/raju.jpg"
                },
                {
                    name: "SUDHANSHU TAMTA",
                    designation: "Junior Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/sudhanshut.jpg"
                }
            ]
        },
        {
            title: "Admin International Affairs",
            members: [
                {
                    name: "PRACHI MUKHERJEE",
                    designation: "Assistant Manager",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/prachi.jpg"
                }
            ]
        },
        {
            title: "Support Staff",
            members: [
                {
                    name: "SAHIB",
                    designation: "Executive Assistant",
                    imgSrc: "Fac_Sports-232.png" // Update path if local
                },
                {
                    name: "AMAAN",
                    designation: "Executive Assistant",
                    imgSrc: "amaan_ss.jpg" // Update path if local
                }
            ]
        }
    ];

    return (
        <div>
            {/* Round Back Button */}
            <button className="backButton" onClick={handleBackToHome}>
                &#8592;
            </button>
            <div className={getHeadingClass()}>Academic Team</div>
            <ParallaxBanner>
                <div className="teamContainer">
                    <div className="teamBox">
                        <div className="doaaRegistrarWrapper">
                            <div className="teamSection doaaSection">
                                <div className={getSubTeamClass()}>DoAA</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(0, 1).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`doaa-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={member.name} />
                                                <div className="teamCardInfo">
                                                    <div className="teamMemberName">{member.name}</div>
                                                    <div className="teamMemberRole">{member.designation}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="teamSection registrarSection">
                                <div className={getSubTeamClass()}>Registrar</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(1, 2).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`registrar-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={member.name} />
                                                <div className="teamCardInfo">
                                                    <div className="teamMemberName">{member.name}</div>
                                                    <div className="teamMemberRole">{member.designation}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                        {teamData.slice(2).map((section, index) => (
                            <div key={`section-${index}`} className="teamSection">
                                <div className={getSubTeamClass()}>{section.title}</div>
                                <div className="teamCardWrapper">
                                    {section.members.map((member, memberIndex) => (
                                        <div className={getCardClass()} key={`member-${index}-${memberIndex}`}>
                                            <img className="teamCardImage" src={member.imgSrc} alt={member.name} />
                                            <div className="teamCardInfo">
                                                <div className="teamMemberName">{member.name}</div>
                                                <div className="teamMemberRole">{member.designation}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxBanner>
            <Footer />
        </div>
    );
}

export default AcademicTeam;
