import React, { useState, useEffect } from 'react';
import '../styles/beforeArrive.css';
import Footer from '../components/Footer';

const BeforeYouArrive = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [isVisible, setIsVisible] = useState(false);

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

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="beforeArrive-container">
            <div className={size > 800 ? 'heading' : size > 500 ? 'smallHeading' : 'vSmallHeading'}>
                Before Arrival
            </div>
            <h2 className="subheading">How a new student should prepare</h2>
            <div className="beforeArrival">
                <div className={`info ${isVisible ? 'visible1' : ''}`}>
                    Starting at university can feel like stepping into the unknown, but there is no need to worry. By completing all relevant tasks in the checklist below, you can ensure your arrival at the University goes smoothly.
                </div>
                <div className={`info ${isVisible ? 'visible' : ''}`}>
                    <ol className="checklist">
                        <li>Email id is the most important way of communication here at IIITD when you accept the offer. So, be active on your personal email id which you have given at the time of application. After your joining, an IIITD email will be assigned to you.</li>
                        <li>Induction is an important program which will give you glimpse of IIITD through various session. So, you should not miss this program.</li>
                        <li>Institute I-card will be issued after few days of your joining, so most be ready an softcopy of your recent photograph (in .JPG format, Front Facing, White/Light background, Max Size - 4 MB, Width*Height : 792*840 pixel) and get your blood group checked. Blood group is mentioned on your I-card to meet any medical emergency.</li>
                        <li>Accommodations are provided on request. For details you can visit the hostel accommodation website.</li>
                        <li>Student conduct is an important part of student life. Before reaching campus you must go through the various policies on student conduct.</li>
                        <li>IIIT-Delhi wishes to maintain global academic standards in its own education system. Therefore it does not tolerate any form of Academic Dishonesty. For more details visit the academic page.</li>
                        <li>Organizing your finance is also an important factor before you start your studies. The scholarship details will provide advice on support available to students, or who experience financial difficulty during their studies.</li>
                        <li>Those who join IIITD are advised to open an Bank Account as an individual not a joint account to receive various kind of scholarship (if any) in future.</li>
                        <li>In order to provide 24X7 medical facility for our Faculty, Staff and students staying in hostel and day scholars. The Institute has set up a Health Center at Ground Floor of the Student Center Building. For more details visit our facilities page.</li>
                    </ol>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BeforeYouArrive;
