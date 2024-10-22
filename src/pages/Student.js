import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Student.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const StudentPage = ({ setBeforeArrive, setAcademicTeam, setFAQ }) => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    return (
        <div className='student-page'>
            <ParallaxBanner
                style={{ height: size > 930 ? '800px' : size > 690 ? '700px' : size > 500 ? '1200px' : '950px' }}
                layers={[]}
            >
                <div className={size > 820 ? 'student-heading' : size > 500 ? 'student-smallHeading' : 'student-vSmallHeading'}>
                    Students
                </div>
                <div className="student-boxContainer">
                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">Incoming Students</div>
                        <a className="student-projectLinks1" onClick={() => navigate('/academic-team')} style={{ cursor: 'pointer' }}>
                            Primary Contact
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/beforeyouarrive')} style={{ cursor: 'pointer' }}>
                            Before you arrive
                        </a>
                        <a className="student-projectLinks1" href="http://online.fliphtml5.com/npkwf/zpfc/#p=1">
                            Student Handbook
                        </a>
                    </div>

                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">Academic Matters</div>
                        <a className="student-projectLinks1" onClick={() => navigate('/examination')}>
                            Examination & Assessment
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/life/discipline-grievance/disciplinary-action">
                            Student Conduct
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/academics/issue-resolution">
                            Complaints & acad Appeals
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/form_docs">
                            Forms
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/academics/resources/acad-dishonesty">
                            Academic Dishonesty
                        </a>
                    </div>

                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">Fees & Funding</div>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/admission/fees">
                            Course Fee
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/admission/scholarships">
                            Scholarships (UG & PG)
                        </a>
                        <a className="student-projectLinks1" href="https://awards.iiitd.edu.in/">
                            Prizes & Awards
                        </a>
                        <a className="student-projectLinks1" href="https://payments.iiitd.edu.in/pg/studentsfee/">
                            Fee Portal
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/travel')} >
                            Travel Assistance
                        </a>
                    </div>

                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">Graduation Requirement</div>
                        <a className="student-projectLinks1" href="https://academics.iiitd.edu.in/docs/Graduation%20Requirements%20and%20Award%20of%20Degree.pdf">
                            Graduation Requirement
                        </a>
                        <a className="student-projectLinks1" href="https://academics.iiitd.edu.in/docs/Issue%20of%20Transcript%20&%20Degree.pdf">
                            Academic Transcript & Degree
                        </a>
                        <a className="student-projectLinks1" onClick={() => navigate('/graduation')} >
                            Graduation Checklist
                        </a>
                    </div>

                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">Higher studies at IIITD</div>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/sites/default/files/docs/education/2024/2024%20-July-%20Dual%20Degree%20Regulations%20CSE%20&%20ECE.pdf">
                            Dual Degree ( CSE and ECE )
                        </a>
                        <a className="student-projectLinks1" href="https://iiitd.ac.in/sites/default/files/docs/education/2024/2024-July-Dual%20Degree%20Regulations%20CB.pdf">
                            Dual Degree( CB )
                        </a>
                        <a className="student-projectLinks1" style={{ cursor: 'pointer' }} onClick={() => navigate('/btechtophd')}>
                            B.Tech. to Ph.D.
                        </a>
                        <a className="student-projectLinks1" style={{ cursor: 'pointer' }} onClick={() => navigate('/mtechtoPhd')}>
                            M.Tech. to Ph.D.
                        </a>
                    </div>

                    <div className="student-box student-image-container">
                        <div className="student-overlay-top-leftx"></div>
                        <div className="student-overlay-bottom-rightx"></div>
                        <div className="student-subHeading">FAQ</div>
                        <a className="student-projectLinks1" style={{ cursor: 'pointer' }} onClick={() => navigate('/ugfaqs')}>
                            Undergraduate
                        </a>
                        <a className="student-projectLinks1" style={{ cursor: 'pointer' }} onClick={() => navigate('/pgfaqs')}>
                            Postgraduate
                        </a>
                    </div>
                </div>
            </ParallaxBanner>
        </div>
    );
};

export default StudentPage;
