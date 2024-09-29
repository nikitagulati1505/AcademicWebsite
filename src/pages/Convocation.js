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
                    className="Parallax-module__smallLinear--MqSo+"
                    opacity={[0, 2.5]}
                >
                    <a href="https://www.iiitd.ac.in/convocation2023/#:~:text=For%2012th%20Convocation%202023%2C%20the,as%20a%20token%20of%20appreciation." style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                        <div className='convoCont'>
                            Recent 12th Convocation
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3927.jpg" alt="Recent Convocation" />
                        </div>
                    </a>
                </Parallax>
                <Parallax
                    className="Parallax-module__smallLinear--MqSo+"
                    opacity={[0, 2.5]}
                >
                    <a href="https://iiitd.ac.in/academics/pastconvocations" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                        <div className='convoCont'>
                            Previous Convocations
                            <img className="prev" src="https://www.iiitd.ac.in/convocation21/assets/images/galleryslider/IMG_3511.jpg" alt="Previous Convocations" />
                        </div>
                    </a>
                </Parallax>
            </div>
        </div>
    );
};

export default Convocation;
