import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/academicTeam.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const TeamSection = ({ title, members, getCardClass, getSubTeamClass }) => (
    <div className="teamSection">
        <div className={getSubTeamClass()}>{title}</div>
        <div className="teamCardWrapper">
            {members.map((member, index) => (
                <div className={getCardClass()} key={`${title}-${index}`}>
                    <img
                        className="teamCardImage"
                        src={member.imgSrc}
                        alt={`${member.name} - ${member.designation}`}
                    />
                    <div className="teamCardInfo">
                        <div className="teamMemberName">{member.name}</div>
                        <div className="teamMemberRole">{member.designation}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const AcademicTeam = () => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate();

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
            title: "UG Chair",
            members: [
                {
                    name: "DR. DEBAJYOTI BERA",
                    designation: "UG Affairs",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/faculty/debajyoti.jpg"
                }
            ]
        },
        {
            title: "PG Chair",
            members: [
                {
                    name: "DR. SNEH SAURABH",
                    designation: "PG Affairs",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/faculty/sneh.jpg"
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
            title: "Admin B.Tech.",
            members: [
                {
                    name: "NISHA NARWA",
                    designation: "Assistant Administrative Officer(SG)",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/nisha.jpg"
                },
                {
                    name: "AAKASH GUPTA",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/aakash.jpg"
                },
                {
                    name: "ASHISH AGGARWAL",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/ashisha.jpg"
                },
                {
                    name: "AKANKSHA",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/akanksha.jpg"
                }
              
            ]
        },
        {
            title: "Admin M.Tech.",
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
            title: "Admin Ph.D.",
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
                },
                {
                    name: "RAJU BISWAS",
                    designation: "Junior Administrative Officer",
                    imgSrc: "https://iiitd.ac.in/sites/default/files/images/admin/staff/raju.jpg"
                }
            ]
        }
    ];

    return (
        <div>
            {/* Back to Home Button */}
            <button className="backButton" onClick={handleBackToHome} aria-label="Back to Home">
                &#8592;
            </button>

            <div className={getHeadingClass()}>Academic Team</div>
            <ParallaxBanner>
                <div className="teamContainer">
                    <div className="teamBox">
                        {/* Row 1: DoAA, UG Chair, PG Chair */}
                        <div className="rowWrapper">
                            <TeamSection
                                title="DoAA"
                                members={teamData[0].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                            <TeamSection
                                title="UG Chair"
                                members={teamData[2].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                            <TeamSection
                                title="PG Chair"
                                members={teamData[3].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                        </div>

                        {/* Row 2: Registrar (Dean), Admin Academic */}
                        <div className="rowWrapper">
                            <TeamSection
                                title="Registrar"
                                members={teamData[1].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                            <TeamSection
                                title="Admin Academic"
                                members={teamData[4].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                        </div>

                        {/* Row 3: Admin B.Tech. */}
                        <div className="rowWrapper singleRow">
                            <TeamSection
                                title="Admin B.Tech."
                                members={teamData[5].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                        </div>

                        {/* Row 4: Admin M.Tech. */}
                        <div className="rowWrapper singleRow">
                            <TeamSection
                                title="Admin M.Tech."
                                members={teamData[6].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                        </div>

                        {/* Row 5: Admin Ph.D. */}
                        <div className="rowWrapper singleRow">
                            <TeamSection
                                title="Admin Ph.D."
                                members={teamData[7].members}
                                getCardClass={getCardClass}
                                getSubTeamClass={getSubTeamClass}
                            />
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <Footer />
        </div>
    );
};

export default AcademicTeam;
