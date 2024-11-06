// src/pages/Classrooms.js

import React from 'react';
import '../styles/classrooms.css';
import { ParallaxBanner } from 'react-scroll-parallax';

const Classrooms = () => {
  return (
    <div className="classroomContainer">
      <div className="heading">
        Classroom Facilities
      </div>

      {/* Flexbox container for video and buttons */}
      <div className="videoAndButtonsContainer">
        {/* Video Container */}
        <div className="videoContainer">
          <ParallaxBanner
            layers={[
              {
                children: (
                  <video
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    src="campustour.mp4"
                    aria-label="Campus Tour Video"
                    title="Campus Tour Video"
                  />
                ),
              },
            ]}
            style={{ height: '100%', width: '100%' }}  
          />
        </div>
        
        {/* Buttons for Buildings */}
        <div className="classContainer">
          {/* Academic Building Button */}
          <a href='./Old.jpg' className="classLink" aria-label="View Academic Building">
            <div className="cell">
              <img src="Old_Academic_Block_IIITD.jpg" alt="Old Academic Block" />
              <div>Academic Building</div>
            </div>
          </a>
          
          {/* Lecture Hall Complex Button */}
          <a href="./Lhc.jpg" className="classLink" aria-label="View Lecture Hall Complex">
            <div className="cell">
              <img src="https://iiitd.ac.in/gallery/assets/img/Institute/institute19-1.jpg" alt="Lecture Hall Complex" />
              <div>Lecture Hall Complex</div>
            </div>
          </a>
          
          {/* R & D Building Button */}
          <a href="./R&d.jpg" className="classLink" aria-label="View R & D Building">
            <div className="cell">
              <img src="https://images.shiksha.com/mediadata/images/articles/1607484338php8JZWhd.jpeg" alt="R&D Building" />
              <div>R & D Building</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Classrooms;
