import React, { useState, useEffect } from 'react';
import '../styles/alumni.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Alumni = ({ certificate, setCertificate }) => {
    const [size, setSize] = useState(window.innerWidth);
    const navigate = useNavigate(); // Hook to programmatically navigate

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);

        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const getBannerHeight = () => {
        if (size > 800) return '700px';
        if (size > 600) return '600px';
        return '500px';
    };

    return (
        <div className='page2'>
            <ParallaxBanner
                style={{ height: getBannerHeight() }}
                layers={[]}
            >
                <div className={size > 820 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>Alumni</div>
                <div className='policyButtons imageRow'>
                    <button className="policyButton">
                        <img src='alumni_img1.jpg' alt='Image 1' className='alumniImage' />
                        <div className="section2">
                            <div className="subHeading2">Issue of Various Certificates</div>
                            <a className="projectLinks2" style={{ cursor: 'pointer' }} onClick={() => navigate('/certificates')}>Transcript, Duplicate Degree, Other Certificates</a>
                        </div>
                    </button>
                    <button className="policyButton">
                        <img src='alumni_img2.png' alt='Image 2' className='alumniImage' />
                        <div className="section2">
                            <div className="subHeading2">Alumni Networking</div>
                            <div className="subButtonsContainer">
                                <a className="subButton" href="https://alumni.iiitd.ac.in/">Alumni website</a>
                                <a className="subButton" href="https://iiitdelhi.almaconnect.com/">Join Alumni Community</a>
                                <a className="subButton" href="https://www.iiitd.ac.in/sites/default/files/alumnifaq.html">FAQs</a>
                            </div>
                        </div>
                    </button>
                    <button className="policyButton">
                        <img src='alumni_img3.jpg' alt='Image 3' className='alumniImage' />
                        <div className="section2">
                            <div className="subHeading2">Mentoring Students</div>
                            <a className="projectLinks2" href="https://www.iiitd.ac.in/smp/">SMP Website</a>
                        </div>
                    </button>
                    <button className="policyButton">
                        <img src='alumni_img4.jpeg' alt='Image 4' className='alumniImage' />
                        <div className="section2">
                            <div className="subHeading2">Academic Experience</div>
                            <a className="projectLinks2" href="https://www.iiitd.ac.in/shareacademicexperiences/">Share Your Experience</a>
                        </div>
                    </button>
                </div>
            </ParallaxBanner>
        </div>
    );
}

export default Alumni;
