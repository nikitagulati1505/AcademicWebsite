// Student.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Student.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const StudentPage = ({ setBeforeArrive, setAcademicTeam, setFAQ }) => {
    const navigate = useNavigate();

    return (
        <div className='student-page'>
            <ParallaxBanner
                style={{ minHeight: '100vh' }} // Ensures the banner covers full viewport height
                layers={[]}
            >
                <div className='student-heading'>
                    Students
                </div>
                <div className="student-boxContainer">
                    {/* Student Boxes */}
                    <div className="student-box">
                        <div className="student-subHeading">Incoming Students</div>
                        <a className="student-projectLinks1" onClick={() => navigate('/academic-team')}>
                            Primary Contact
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/beforeyouarrive')}>
                            Before you arrive
                        </a>
                        <a className="student-projectLinks1" href="http://online.fliphtml5.com/npkwf/zpfc/#p=1" target="_blank" rel="noopener noreferrer">
                            Student Handbook
                        </a>
                    </div>

                    <div className="student-box">
                        <div className="student-subHeading">Academic Matters</div>
                        <a className="student-projectLinks1" onClick={() => navigate('/examination')}>
                            Examination & Assessment
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/life/discipline-grievance/disciplinary-action" target="_blank" rel="noopener noreferrer">
                            Student Conduct
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/academics/issue-resolution" target="_blank" rel="noopener noreferrer">
                            Complaints & Acad Appeals
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/form_docs" target="_blank" rel="noopener noreferrer">
                            Forms
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/academics/resources/acad-dishonesty" target="_blank" rel="noopener noreferrer">
                            Academic Dishonesty
                        </a>
                    </div>

                    <div className="student-box">
                        <div className="student-subHeading">Fees & Funding</div>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/admission/fees" target="_blank" rel="noopener noreferrer">
                            Course Fee
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/admission/scholarships" target="_blank" rel="noopener noreferrer">
                            Scholarships (UG & PG)
                        </a>
                        <a className="student-projectLinks1" href="https://awards.iiitd.edu.in/" target="_blank" rel="noopener noreferrer">
                            Prizes & Awards
                        </a>
                        <a className="student-projectLinks1" href="https://payments.iiitd.edu.in/pg/studentsfee/" target="_blank" rel="noopener noreferrer">
                            Fee Portal
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/travel')} style={{ cursor: 'pointer' }}>
                            Travel Assistance
                        </a>
                    </div>

                    <div className="student-box">
                        <div className="student-subHeading">Graduation Requirement</div>
                        <a className="student-projectLinks1" href="https://academics.iiitd.edu.in/docs/Graduation%20Requirements%20and%20Award%20of%20Degree.pdf" target="_blank" rel="noopener noreferrer">
                            Graduation Requirement
                        </a>
                        <a className="student-projectLinks1" href="https://academics.iiitd.edu.in/docs/Issue%20of%20Transcript%20&%20Degree.pdf" target="_blank" rel="noopener noreferrer">
                            Academic Transcript & Degree
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/graduation')} style={{ cursor: 'pointer' }}>
                            Graduation Checklist
                        </a>
                    </div>

                    <div className="student-box">
                        <div className="student-subHeading">Higher Studies at IIITD</div>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/sites/default/files/docs/education/2024/2024%20-July-%20Dual%20Degree%20Regulations%20CSE%20&%20ECE.pdf" target="_blank" rel="noopener noreferrer">
                            Dual Degree (CSE and ECE)
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/sites/default/files/docs/education/2024/2024-July-Dual%20Degree%20Regulations%20CB.pdf" target="_blank" rel="noopener noreferrer">
                            Dual Degree (CB)
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/btechtophd')} style={{ cursor: 'pointer' }}>
                            B.Tech. to Ph.D.
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/mtechtoPhd')} style={{ cursor: 'pointer' }}>
                            M.Tech. to Ph.D.
                        </a>
                    </div>

                    <div className="student-box">
                        <div className="student-subHeading">FAQ</div>
                        <a className="student-projectLinks1" onClick={() => navigate('/ugfaqs')} style={{ cursor: 'pointer' }}>
                            Undergraduate
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/pgfaqs')} style={{ cursor: 'pointer' }}>
                            Postgraduate
                        </a>
                    </div>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default StudentPage;
