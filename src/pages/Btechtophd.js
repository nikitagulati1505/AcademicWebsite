import React, { useEffect, useState } from 'react';

// CSS embedded in the component for simplicity
const BTechToPhD = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Add a slight delay to animate the info box after page load
        setTimeout(() => {
            setVisible(true);
        }, 300);
    }, []);

    return (
        <div className="beforeArrive-container">
            {/* Main Heading */}
            <h1 className="heading">Transitioning from BTech to PhD</h1>

            {/* Subheading */}
            <h2 className="subheading">Why Transition from BTech to PhD?</h2>

            {/* Info Section */}
            <div className={`info ${visible ? 'visible' : ''}`}>
                Here are some benefits of transitioning from a BTech to a PhD program:
            </div>

            {/* Benefits Section (Box 2 aligned to the left) */}
            <div className={`info visible1 ${visible ? 'visible1' : ''}`}>
                <ul className="checklist smaller-font left-align">
                    <li>
                        Students admitted to the PhD program after completing their BTech can earn an MTech along the way, provided they meet the necessary requirements.
                    </li>
                    <li>
                        Additionally, IIIT-Delhi BTech students who enter the PhD program will receive an ORF (Outstanding Research Fellowship), even without an external fellowship.
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className="footer">
                For more information, please contact the admissions office at IIIT-Delhi.
            </div>
        </div>
    );
};

// CSS styles embedded within the component itself for ease of use
const styles = `
.beforeArrive-container {
    background-color: #f9f9f9;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    max-width: 1200px;
    margin: auto;
}

/* Heading and Subheading */
.heading {
    font-size: 2.5em;
    text-align: center;
    color: rgb(3, 168, 163);
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
}

.subheading {
    font-size: 1.8em;
    text-align: center;
    color: #34495e;
    margin-bottom: 30px;
}

/* Info box with transition effect */
.info {
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    color: #333;
    background-color: #ffffff;
    opacity: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    transition: all 0.5s ease-in-out;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.info.visible {
    opacity: 1;
    transform: translateY(0);
}

.info.visible1 {
    opacity: 1;
    transform: translateY(0);
    font-weight: bold;
    color: #2c3e50;
}

/* Reducing font size in Box 2 and aligning content to the left */
.smaller-font {
    font-size: 14px;
}

.left-align {
    text-align: left; /* Align text to the left */
}

/* Checklist Styling */
.checklist {
    margin-left: 40px;
    padding-left: 20px;
    list-style: decimal;
    color: #555;
    line-height: 1.6;
    font-size: 16px;
    max-width: 900px;
    margin: auto;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.checklist li {
    margin-bottom: 15px;
}

/* Footer */
.footer {
    margin-top: 40px;
    padding: 20px;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    font-size: 14px;
}

/* Responsive Design */

/* For screens larger than 1200px (Desktop) */
@media (min-width: 1200px) {
    .contentSection {
        width: 60%; /* Adjust to smaller width for large desktops */
    }

    .heading {
        font-size: 2.8em;
    }

    .info {
        font-size: 18px;
    }
}

/* For tablets and small desktops (768px to 1200px) */
@media (max-width: 1200px) {
    .beforeArrive-container {
        max-width: 1000px;
    }

    .heading {
        font-size: 2.2em;
    }

    .subheading {
        font-size: 1.6em;
    }

    .info {
        font-size: 16px;
    }
}

/* For screens smaller than 768px (Phones and smaller tablets) */
@media (max-width: 768px) {
    .beforeArrive-container {
        padding: 15px;
        max-width: 100%;
    }

    .heading {
        font-size: 2em;
    }

    .subheading {
        font-size: 1.5em;
    }

    .info, .checklist {
        font-size: 1em;
        padding: 15px;
        max-width: 100%;
    }

    .checklist {
        margin-left: 10px;
    }
}
`;

// Inject CSS styles into the page
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

const BTechToPhDPage = () => {
    return (
        <>
            <StyleInjector />
            <BTechToPhD />
        </>
    );
};

export default BTechToPhDPage;
