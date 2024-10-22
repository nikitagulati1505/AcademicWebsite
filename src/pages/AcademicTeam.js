import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle navigation
import Footer from '../components/Footer';
import '../styles/academicTeam.css';
import { ParallaxBanner } from 'react-scroll-parallax';

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
        navigate('/');
    };

    // Team Data
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
            title: "UG and PG Chair",
            members: [
                {
                    name: "SNEH SAURABH",
                    designation: "PG Affairs",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/faculty/sneh.jpg"
                },
                {
                    name: "DEBAJYOTI BERA",
                    designation: "UG Affairs",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/faculty/debajyoti.jpg"
                }
            ]
        },
        {
            title: "Admin Academic",
            members: [
                {
                   name: "ASHUTOSH BRAHMA",
                    designation: "Administrative Officer (Academics)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/asutosh.jpg"
                }
            ]
        },
        {
            title: "Admin B.Tech",
            members: [
                {
                    name: "NISHA NARWA",
                    designation: "Assistant Administrative Officer(SG)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/nisha.jpg"
                },
                {
                    name: "AAKASH GUPTA",
                    designation: "Junior Administrative Officer ",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/aakash.jpg"
                },
                {
                    name: "ASHISH AGGARWAL",
                    designation: "Junior Administrative Officer ",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/ashisha.jpg"
                },
                {
                    name: "AKANKSHA",
                    designation: "Junior Administrative Officer ",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/akanksha.jpg"
                },
                {
                    name: "RAJU BISWAS",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/raju.jpg"
                }
            ]
        },
        {
            title: "Admin M.Tech",
            members: [
                {
                    name: "SANJANA SONI",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/sanjanas.jpg"
                },
                {
                    name: "MOHIT KUMAR",
                    designation: "Assistant Administrative Officer (IRD)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/mohit.jpg"
                },
                {
                    name: "PRACHI MUKHERJEE",
                    designation: "Assistant Administrative Officer(SG)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/prachi.jpg"
                }
            ]
        },
        {
            title: "Admin Ph.D",
            members: [
                {
                    name: "ANSHU DUREJA",
                    designation: "Deputy Administrative Officer (Academics)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/anshu.jpg"
                },
                {
                    name: "SUDHANSHU TAMTA",
                    designation: "Junior Administrative Officer(SG)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/sudhanshut.jpg"
                }
            ]
        }
    ];

    return (
        <div>
            {/* Round Back Button */}
           
            <div className={getHeadingClass()}>Academic Team</div>
            <ParallaxBanner>
                <div className="teamContainer">
                    <div className="teamBox">
                        {/* DoAA, UG Chair, and PG Chair Sections in One Row */}
                        <div className="doaaUgPgChairWrapper">
                            <div className="teamSection doaaSection">
                                <div className={getSubTeamClass()}>DoAA</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(0, 1).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`doaa-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
                                                <div className="teamCardInfo">
                                                    <div className="teamMemberName">{member.name}</div>
                                                    <div className="teamMemberRole">{member.designation}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="teamSection ugChairSection">
                                <div className={getSubTeamClass()}>UG Chair</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(2, 3).map((section, sectionIndex) =>
                                        section.members.filter(member => member.designation === "UG Affairs").map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`ugChair-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
                                                <div className="teamCardInfo">
                                                    <div className="teamMemberName">{member.name}</div>
                                                    <div className="teamMemberRole">{member.designation}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                            <div className="teamSection pgChairSection">
                                <div className={getSubTeamClass()}>PG Chair</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(2, 3).map((section, sectionIndex) =>
                                        section.members.filter(member => member.designation === "PG Affairs").map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`pgChair-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
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

                        {/* Admin Academic and Registrar Sections in One Row */}
                        <div className="adminAcademicRegistrarWrapper">
                            <div className="teamSection adminAcademicSection">
                                <div className={getSubTeamClass()}>Admin Academic</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(3, 4).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`adminAcademic-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
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
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
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

                        {/* Admin B.Tech Section */}
                        <div className="adminBTechWrapper">
                            <div className="teamSection adminBTechSection">
                                <div className={getSubTeamClass()}>Admin B.Tech</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(4, 5).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`adminBTech-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
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

                        {/* Admin M.Tech and Admin Ph.D Sections in One Row */}
                        <div className="adminMTechPhdWrapper">
                            <div className="teamSection adminMTechSection">
                                <div className={getSubTeamClass()}>Admin M.Tech</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(5, 6).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`adminMTech-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
                                                <div className="teamCardInfo">
                                                    <div className="teamMemberName">{member.name}</div>
                                                    <div className="teamMemberRole">{member.designation}</div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            <div className="teamSection adminPhdSection">
                                <div className={getSubTeamClass()}>Admin Ph.D</div>
                                <div className="teamCardWrapper">
                                    {teamData.slice(6, 7).map((section, sectionIndex) =>
                                        section.members.map((member, memberIndex) => (
                                            <div className={getCardClass()} key={`adminPhd-${sectionIndex}-${memberIndex}`}>
                                                <img className="teamCardImage" src={member.imgSrc} alt={`${member.name} - ${member.designation}`} />
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
                    </div>
                </div>
            </ParallaxBanner>
            <Footer />
        </div>
    );
};

export default AcademicTeam;
