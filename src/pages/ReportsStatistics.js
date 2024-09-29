import React, { useState, useEffect } from 'react';
import '../styles/reports.css';
import { ParallaxBanner } from 'react-scroll-parallax';


const ReportsStatistics = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);


    return (
        <div className='main-container'>
            <ParallaxBanner
                style={{ height: size > 800 ? '95vh' : '80vh' }}
                layers={[]}
            >
                <div className={size > 800 ? 'large-heading' : size > 500 ? 'medium-heading' : 'small-heading'}>
                    Report & Statistics
                </div>

                <div style={styles.container}>
                    <h1 style={styles.text}>Information will be uploaded soon</h1>
                </div>
            </ParallaxBanner>

        </div>
    );
    

    /*
        <div className={size > 920 ? 'large-report' : size > 640 ? 'medium-report' : 'small-report'}>
            <div className='report-row'>
                <div className='report-section'>
                    <div className='report-subheading'>Admission Report</div>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/PhD%20admission%20report%20September%202021.pdf' target='_blank' rel='noopener noreferrer'>Ph.D</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/M.Tech%20Admission%20Report%202021.pdf' target='_blank' rel='noopener noreferrer'>M.Tech</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/BTech%20Admission%20Report%202021.pdf' target='_blank' rel='noopener noreferrer'>B.Tech</a>
                </div>
                <div className='report-section'>
                    <div className='report-subheading'>Semester Summary Report</div>
                    <a className='report-link' href='https://academics.iiitd.edu.in/iiitd-reports-statistics.html#' target='_blank' rel='noopener noreferrer'>Winter 2022</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/iiitd-reports-statistics.html#' target='_blank' rel='noopener noreferrer'>Monsoon 2021</a>
                </div>
            </div>
            <div className='report-row'>
                <div className='report-section'>
                    <div className='report-subheading'>Ranking Report</div>
                    <a className='report-link' href='https://iiitd.ac.in/nirf' target='_blank' rel='noopener noreferrer'>NIRF</a>
                    <a className='report-link' href='https://iiitd.ac.in/ariia' target='_blank' rel='noopener noreferrer'>ARIIA</a>
                    <a className='report-link' href='https://iiitd.ac.in/rankings' target='_blank' rel='noopener noreferrer'>Others</a>
                </div>
                <div className='report-section'>
                    <div className='report-subheading'>Affiliation Report</div>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/EOA_Report_2020-21.pdf' target='_blank' rel='noopener noreferrer'>AICTE</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/18-01-2018_NBA_CSE_PG.pdf' target='_blank' rel='noopener noreferrer'>NBA: CSE-PG</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/30.09.2021_NBA_CSE_UG.pdf' target='_blank' rel='noopener noreferrer'>NBA: CGE-UG</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/31-01-2020_NBA_ECE_UG.pdf' target='_blank' rel='noopener noreferrer'>NBA: ECE-UG</a>
                    <a className='report-link' href='https://academics.iiitd.edu.in/docs/NAAC%20Letter%202015.pdf' target='_blank' rel='noopener noreferrer'>NAAC</a>
                </div>
            </div>
        </div>
    </ParallaxBanner>
</div>
); */
};
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: 'rgb(239, 239, 240)',

    },
    text: {
      color: '#333',
      fontSize: '24px',
      textAlign: 'center',
    },
  };
export default ReportsStatistics;
