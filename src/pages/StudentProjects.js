import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/projects.css';
import { Parallax } from 'react-scroll-parallax';

const StudentProjects = () => {
    return (
        <div className='page'>
            <div className='heading' style={{ margin: '3vh' }}>
                Student Projects
            </div>
            <div className="content">
                <div className="rows3">
                    <Parallax>
                        <div className="section3">
                            <div className="subHeading3">Ph.D. Thesis</div>
                            <a className="projectLinksx" href="https://repository.iiitd.edu.in/xmlui/" target="_blank" rel="noopener noreferrer">
                                Awarded Ph.D Thesis
                            </a>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="section3">
                            <div className="subHeading3">M.Tech. Thesis</div>
                            <a className="projectLinks3" href="https://awards.iiitd.edu.in/" target="_blank" rel="noopener noreferrer">
                                Awarded M.Tech. Thesis
                            </a>
                            <a className="projectLinks3" href="https://academics.iiitd.edu.in/mtechthesis.html" target="_blank" rel="noopener noreferrer">
                                All Thesis Repository
                            </a>
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="section3">
                            <div className="subHeading3">B.Tech. Project</div>
                            <a className="projectLinks3" href="https://awards.iiitd.edu.in/" target="_blank" rel="noopener noreferrer">
                                Awarded B.Tech. Project (BTP)
                            </a>
                            <a className="projectLinks3" href="https://iiitd.ac.in/academics/btps" target="_blank" rel="noopener noreferrer">
                                All B.Tech. Projects
                            </a>
                        </div>
                    </Parallax>
                </div>
                <div className="singleImageContainer">
                    <img src="Untitled design.png" alt="Student Projects" />
                </div>
            </div>
        </div>
    );
};

export default StudentProjects;
