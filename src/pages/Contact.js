import React, { useState, useEffect } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contactWrapper contactPage" style={{ backgroundColor: "rgb(239, 239, 240)" }}>
            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>
                Contact Academic Department
            </div>
            <div className={size > 800 ? 'contactSection' : 'contactSectionSmall'}>
                <div className={size > 800 ? 'contactFormContainer' : 'contactFormContainerSmall'}>
                    <div className={size > 800 ? 'subTitle' : size > 500 ? 'subTitleSmall' : 'subTitleVSmall'}>
                        Enquire Us
                    </div>
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                        <input type="text" name="email" id="email" placeholder="Enter Your Email" />
                        <input type="text" name="subject" id="subject" placeholder='Enter Subject' />
                        <select name="dropdown" id="dropdown">
                            <option value="">Select Program</option>
                            <option name="others" id="others">Others</option>
                            <option name="btech" id="btech">B.Tech</option>
                            <option name="mtech" id="mtech">M.Tech</option>
                            <option name="phd" id="phd">PhD</option>
                        </select>
                        <textarea className='contactQuery' placeholder="Enter your query here"></textarea>
                        <button className='submitButton'>SEND</button>
                    </form>
                </div>
                <div className={size > 800 ? 'contactInfoContainer' : 'contactInfoContainerSmall'}>
                    <div>
                        <div className={size > 800 ? 'subTitle' : size > 500 ? 'subTitleSmall' : 'subTitleVSmall'}>
                            Location
                        </div>
                        <div className={size > 800 ? "infoContent" : size > 500 ? "infoContentSmall" : 'infoContentVSmall'}>
                            Old Academic Building, 2nd Floor<br />
                            IIITD,<br />
                            Okhla Phase -III, New Delhi - 110020
                        </div>
                    </div>
                   
                    <div>
                        <div className={size > 800 ? 'subTitle' : size > 500 ? 'subTitleSmall' : 'subTitleVSmall'}>
                            Mail Info
                        </div>
                        <div className={size > 800 ? "infoContent" : size > 500 ? "infoContentSmall" : 'infoContentVSmall'}>
                            admin-academics@iiitd.ac.in
                        </div>
                        <div className={size > 800 ? "infoContent" : size > 500 ? "infoContentSmall" : 'infoContentVSmall'}>
                            B.Tech.: admin-btech@iiitd.ac.in
                        </div>
                        <div className={size > 800 ? "infoContent" : size > 500 ? "infoContentSmall" : 'infoContentVSmall'}>
                            M.Tech.: admin-mtech@iiitd.ac.in
                        </div>
                        <div className={size > 800 ? "infoContent" : size > 500 ? "infoContentSmall" : 'infoContentVSmall'}>
                            Ph.D: admin-phd@iiitd.ac.in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
