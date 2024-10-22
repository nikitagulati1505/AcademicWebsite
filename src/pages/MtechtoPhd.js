import React, { useEffect, useState } from 'react';

const MtechToPhD = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 300);
    }, []);

    return (
        <div className="mtech-container">
            <h1 className="mtech-heading">M.Tech. to Ph.D.</h1>
            <p className={`mtech-text ${visible ? 'visible' : ''}`}>
                An M.Tech. student can change his/her program, if permitted, to Ph.D. and continue
                to do the course/research work to enable him/her to meet the requirements of the
                Ph.D. degree. Only students with CGPA &gt; 8.00 and who have completed a minimum of 2 semesters
                and 20 credits in M.Tech. program will be eligible to apply for the change to Ph.D.
                program. The student will be eligible for Ph.D. stipend only from the time he/she is approved
                for enrollment as a Ph.D. student. Such a student, for Ph.D. credit requirements,
                may be treated as if he/she had joined the Ph.D. program from the start of the PG
                (here, M.Tech.) program. The student may be granted an M.Tech. degree also, provided he/she fulfils all the
                academic requirements for the same. Such a student may also be refunded his/her
                M.Tech. tuition fee, if he/she successfully completes the Ph.D. program.
            </p>
        </div>
    );
};

// CSS styles embedded in the component for M.Tech to PhD program
const styles = `
.mtech-container {
    background-color: #f9f9f9;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    max-width: 1200px;
    margin: auto;
    margin-top: 40px;
}

.mtech-heading {
    font-size: 2.5em;
    text-align: center;
    color: rgb(3, 168, 163);
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
}

.mtech-text {
    color: #333;
    font-size: 16px;
    text-align: left;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}

.mtech-text.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive Design */

/* For large desktops */
@media (min-width: 1200px) {
    .mtech-container {
        max-width: 900px;
    }

    .mtech-heading {
        font-size: 2.8em;
    }

    .mtech-text {
        font-size: 18px;
    }
}

/* For tablets and smaller desktops (768px to 1200px) */
@media (max-width: 1200px) {
    .mtech-container {
        max-width: 1000px;
    }

    .mtech-heading {
        font-size: 2.2em;
    }

    .mtech-text {
        font-size: 16px;
    }
}

/* For mobile phones and smaller screens */
@media (max-width: 768px) {
    .mtech-container {
        padding: 15px;
        max-width: 100%;
    }

    .mtech-heading {
        font-size: 2em;
    }

    .mtech-text {
        font-size: 14px;
    }
}
`;

// Inject the CSS styles into the page
const StyleInjector = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.append(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return null;
};

const MtechToPhDPage = () => {
    return (
        <>
            <StyleInjector />
            <MtechToPhD />
        </>
    );
};

export default MtechToPhDPage;
