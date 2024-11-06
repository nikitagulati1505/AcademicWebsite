// src/pages/Convocation.js

import React from 'react';
import '../styles/convocation.css';
import { Parallax } from 'react-scroll-parallax';

const Convocation = () => {
    return (
        <div className='pagex'>
            <div className='heading'>Convocation</div>
            <div className="convocation">
                <Parallax
                    className="parallax-item"
                    opacity={[0, 2.5]}
                >
                    <a href="https://www.iiitd.ac.in/convocation2024/#:~:text=Join%20us%20LIVE%20for%20IIIT,award%20presentations%2C%20and%20proud%20moments!" 
                       style={{ textDecoration: 'none' }} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       aria-label="Recent 13th Convocation Details"
                    >
                        <div className='convoCont'>
                            <h2 className='convocation-title'>Recent 13th Convocation</h2>
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3927.jpg" alt="Recent Convocation" />
                        </div>
                    </a>
                </Parallax>
                <Parallax
                    className="parallax-item"
                    opacity={[0, 2.5]}
                >
                    <a href="https://iiitd.ac.in/academics/pastconvocations" 
                       style={{ textDecoration: 'none' }} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       aria-label="Previous Convocations Details"
                    >
                        <div className='convoCont'>
                            <h2 className='convocation-title'>Previous Convocations</h2>
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3511.jpg" alt="Previous Convocations" />
                        </div>
                    </a>
                </Parallax>
            </div>
        </div>
    );
};

export default Convocation;
