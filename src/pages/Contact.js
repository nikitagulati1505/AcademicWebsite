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
        <div className="contactContainer page" style={{ backgroundColor: "rgb(239, 239, 240)" }}>
            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>
                Contact Academic Department
            </div>
            <div className={size > 800 ? 'contact' : 'contactSmall'}>
                <div className={size > 800 ? 'contactForm' : 'contactFormSmall'}>
                    <div className={size > 800 ? 'sub' : size > 500 ? 'subSmall' : 'vSubSmall'}>Enquire Us</div>
                    <form className="form" onSubmit={handleSubmit}>
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
                        <textarea className='query' placeholder="Enter your query here"></textarea>
                        <button className='submit'>SEND</button>
                    </form>
                </div>
                <div className={size > 800 ? 'contactInfo' : 'contactInfoSmall'}>
                    <div>
                        <div className={size > 800 ? 'sub' : size > 500 ? 'subSmall' : 'vSubSmall'}>Location</div>
                        <div className={size > 800 ? "content" : size > 500 ? "contentSmall" : 'vContentSmall'}>
                            Old Academic Building, 2nd Floor
                            IIITD,
                            Okhla Phase -III, New Delhi - 110020
                        </div>
                    </div>
                   
                    <div>
                        <div className={size > 800 ? 'sub' : size > 500 ? 'subSmall' : 'vSubSmall'}>Mail Info</div>
                        <div className={size > 800 ? "content" : size > 500 ? "contentSmall" : 'vContentSmall'}>
                            admin-academics@iiitd.ac.in</div>
                            
                            <div className={size > 800 ? "content" : size > 500 ? "contentSmall" : 'vContentSmall'}>

                            B.Tech.: admin-btech@iiitd.ac.in</div>
                            <div className={size > 800 ? "content" : size > 500 ? "contentSmall" : 'vContentSmall'}>

                            M.Tech.: admin-mtech@iiitd.ac.in</div>
                            <div className={size > 800 ? "content" : size > 500 ? "contentSmall" : 'vContentSmall'}>

                            Ph.D: admin-phd@iiitd.ac.in</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Contact;
