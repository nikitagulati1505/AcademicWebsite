// Alumni.js

import React, { useState, useEffect } from 'react';
import '../styles/alumni.css';
import { useNavigate } from 'react-router-dom';

const Alumni = () => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    return (
        <div className='alumni-page'>
            {/* Updated heading to match Faculty tab */}
            <div className='alumni-heading'>
                Alumni
            </div>
            <div className='alumni-card-container'>
                {/* Card 1 */}
                <div className='alumni-card'>
                    <img src='alumni_img1.jpg' alt='Issue of Various Certificates' className='alumni-image' />
                    <div className='alumni-card-content'>
                        <h3 className='alumni-card-title'>Issue of Various Certificates</h3>
                        <button
                            className='alumni-button'
                            onClick={() => navigate('/certificates')}
                        >
                            Transcript, Duplicate Degree, Other Certificates
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='alumni-card'>
                    <img src='alumni_img2.png' alt='Alumni Networking' className='alumni-image' />
                    <div className='alumni-card-content'>
                        <h3 className='alumni-card-title'>Alumni Networking</h3>
                        <div className='alumni-links'>
                            <a href='https://alumni.iiitd.ac.in/' target='_blank' rel='noopener noreferrer' className='alumni-button'>
                                Alumni Website
                            </a>
                            <a href='https://iiitdelhi.almaconnect.com/' target='_blank' rel='noopener noreferrer' className='alumni-button'>
                                Join Alumni Community
                            </a>
                            <a href='https://www.iiitd.ac.in/sites/default/files/alumnifaq.html' target='_blank' rel='noopener noreferrer' className='alumni-button'>
                                FAQs
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='alumni-card'>
                    <img src='alumni_img3.jpg' alt='Mentoring Students' className='alumni-image' />
                    <div className='alumni-card-content'>
                        <h3 className='alumni-card-title'>Mentoring Students</h3>
                        <a href='https://www.iiitd.ac.in/smp/' target='_blank' rel='noopener noreferrer' className='alumni-button'>
                            SMP Website
                        </a>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='alumni-card'>
                    <img src='alumni_img4.jpeg' alt='Academic Experience' className='alumni-image' />
                    <div className='alumni-card-content'>
                        <h3 className='alumni-card-title'>Academic Experience</h3>
                        <a href='https://www.iiitd.ac.in/shareacademicexperiences/' target='_blank' rel='noopener noreferrer' className='alumni-button'>
                            Share Your Experience
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alumni;
