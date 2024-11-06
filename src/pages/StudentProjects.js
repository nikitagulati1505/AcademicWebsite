// src/components/StudentProjects.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/projects.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const StudentProjects = () => {
    const projects = [
        {
            title: "Ph.D. Thesis",
            links: [
                { text: "Awarded Ph.D Thesis", url: "https://repository.iiitd.edu.in/xmlui/" }
            ],
            bgColor: "#4a90e2"
        },
        {
            title: "M.Tech. Thesis",
            links: [
                { text: "Awarded M.Tech. Thesis", url: "https://awards.iiitd.edu.in/" },
                { text: "All Thesis Repository", url: "https://repository.iiitd.edu.in/xmlui/" }
            ],
            bgColor: "#50e3c2"
        },
        {
            title: "B.Tech. Project",
            links: [
                { text: "Awarded B.Tech. Project (BTP)", url: "https://awards.iiitd.edu.in/" },
                { text: "All B.Tech. Projects", url: "https://iiitd.ac.in/academics/btps" }
            ],
            bgColor: "#f5a623"
        }
    ];

    return (
        <ParallaxProvider>
            <div className='page'>
                <div className='heading'>
                    Student Projects
                </div>
                <div className="content">
                    {projects.map((project, index) => (
                        <Parallax key={index} y={[-20, 20]} tagOuter="div">
                            <div className="card">
                                <div className="card-header" style={{ color: project.bgColor }}>
                                    {project.title}
                                </div>
                                <div className="card-links">
                                    {project.links.map((link, idx) => (
                                        <a 
                                            key={idx} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Parallax>
                    ))}
                    
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default StudentProjects;
