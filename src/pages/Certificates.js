// src/components/Certificates.js

import React, { useState, useEffect, useRef } from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const buttonsRef = useRef(null);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Update window size on resize
        const updateWindowDimensions = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    // Function to handle scrolling to sections
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Function to update active section based on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['degree', 'duplicate', 'transcript', 'record', 'misc', 'correction'];
            const scrollPosition = window.scrollY + 200; // Adjust as needed

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    if (element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='certificatesWrapper'>
            {/* Navbar */}
            <div className='navbar-container'>
                <div className='buttons' ref={buttonsRef}>
                    <button 
                        onClick={() => scrollToSection("degree")} 
                        className={`nav-button ${activeSection === 'degree' ? 'active' : ''}`}
                        aria-label="Scroll to Degree & Provisional Certificate Section">
                        Degree & Provisional Certificate
                    </button>
                    <button 
                        onClick={() => scrollToSection("duplicate")} 
                        className={`nav-button ${activeSection === 'duplicate' ? 'active' : ''}`}
                        aria-label="Scroll to Duplicate Degree Section">
                        Duplicate Degree
                    </button>
                    <button 
                        onClick={() => scrollToSection("transcript")} 
                        className={`nav-button ${activeSection === 'transcript' ? 'active' : ''}`}
                        aria-label="Scroll to Transcript Section">
                        Transcript
                    </button>
                    <button 
                        onClick={() => scrollToSection("record")} 
                        className={`nav-button ${activeSection === 'record' ? 'active' : ''}`}
                        aria-label="Scroll to Sending Official Academic Record Section">
                        Sending Official Academic Record
                    </button>
                    <button 
                        onClick={() => scrollToSection("misc")} 
                        className={`nav-button ${activeSection === 'misc' ? 'active' : ''}`}
                        aria-label="Scroll to Other Documents Section">
                        Other Documents
                    </button>
                    <button 
                        onClick={() => scrollToSection("correction")} 
                        className={`nav-button ${activeSection === 'correction' ? 'active' : ''}`}
                        aria-label="Scroll to Name Change/Correction Section">
                        Name Change/Correction
                    </button>
                </div>
            </div>

            {/* Content Box */}
            <div className='contentBox'>
                {/* Degree & Provisional Certificate Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="degree">
                    Degree & Provisional Certificate
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>What is a Degree Certificate?</div>
                            <div className='answer'>
                                The <b>Degree Certificate</b> is an official document awarded to students upon the successful completion of all graduation requirements and necessary administrative formalities. This certificate is presented during the Convocation Ceremony and serves as proof of your academic achievement.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>What is a Provisional Degree Certificate?</div>
                            <div className='answer'>
                                A <b>Provisional Degree Certificate</b> is issued to students who have fulfilled all academic and administrative requirements but have not yet received the official Degree Certificate. This provisional certificate assists students in completing job applications, higher education enrollments, or other formalities that require proof of degree completion before the official certificate is available.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>How to Obtain a Provisional Degree Certificate?</div>
                            <div className='answer'>
                                To obtain a Provisional Degree Certificate, follow these steps:
                                <ol>
                                    <li>Ensure that you have completed all graduation requirements, including coursework, exams, and administrative formalities such as submitting the graduation checklist and obtaining No-Dues Clearance.</li>
                                    <li><b>Fill out the Google form</b> available on the Certificates section of the university website at least 15 days prior to the required date.</li>
                                    <li>Submit all necessary documents along with your request.</li>
                                    <li>For any queries or assistance, email your respective admin at 
                                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>What is the Timeline for Issuing the Provisional Degree Certificate?</div>
                            <div className='answer'>
                                The Provisional Degree Certificate is typically issued within <b>15 working days</b> after submitting the required form and completing all formalities.
                            </div>
                        </li>
                    </ol>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to your respective administrative office at 
                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                    </p>
                </div>

                {/* Duplicate Degree Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="duplicate">
                    Duplicate Degree
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>What is a Duplicate Degree?</div>
                            <div className='answer'>
                                A <b>Duplicate Degree</b> is an official reissue of your Degree Certificate, provided in cases where the original certificate has been lost, damaged, or destroyed.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Under What Conditions Can I Apply for a Duplicate Degree?</div>
                            <div className='answer'>
                                You can apply for a Duplicate Degree under the following conditions:
                                <ol>
                                    <li>The original Degree Certificate is lost, stolen, or damaged beyond repair.</li>
                                    <li>You have notified the loss in a leading newspaper.</li>
                                    <li>You have filed an FIR (First Information Report) with the local police and have attached a copy of it with your application.</li>
                                    <li>You have executed a <b>Declaration (Affidavit)</b> on Non-Judicial Stamp Paper of Rs.100/-, duly attested by a <b>First Class Magistrate</b> or <b>Notary Public</b>.</li>
                                    <li>You have attached a photocopy of the original Degree Certificate or Grade Sheet, if available.</li>
                                    <li>You have submitted a demand draft of Rs.2950/- (comprising Rs.2500/- as the fee and Rs.450/- as 18% GST) in favor of “IIIT Delhi Collection Account” towards the fee for issuing the Duplicate Degree. For international requests, the fee is US $250. Payment can be made <span style={{ color: "blue" }}>online</span>.</li>
                                    <li>You have emailed your request for the Duplicate Degree to <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a> or <a href='mailto:admin-academics@iiitd.ac.in'>admin-academics@iiitd.ac.in</a> at least 15 days after the press release.</li>
                                    <li><b>Timeline:</b> The entire process typically takes <b>at least four weeks</b> to complete.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>How Do I Initiate the Process for a Duplicate Degree?</div>
                            <div className='answer'>
                                Follow these steps to initiate the process:
                                <ol>
                                    <li>Prepare all the required documents as mentioned above.</li>
                                    <li>Submit the completed Google form available on the Certificates section of the university website.</li>
                                    <li>Ensure that you have attached all necessary documents and payment receipts.</li>
                                    <li>Send an email to the appropriate administrative email addresses with your request and attachments.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Are There Any Additional Charges for International Requests?</div>
                            <div className='answer'>
                                Yes, for international requests, the fee is higher to cover additional postage and handling costs. The fee is US $250. Ensure that you specify your international address when submitting the request.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Can I Expedite the Processing of My Duplicate Degree?</div>
                            <div className='answer'>
                                Currently, there is no provision to expedite the processing of Duplicate Degree requests. The standard timeline of four weeks should be considered while planning.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>What Should I Do If I Receive an Incorrect Duplicate Degree?</div>
                            <div className='answer'>
                                If you notice any discrepancies or errors in your Duplicate Degree Certificate, immediately contact the administrative office via email at <a href='mailto:admin-academics@iiitd.ac.in'>admin-academics@iiitd.ac.in</a> or <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>. Provide details of the errors and request for corrections. Additional verification documents may be required.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Can I Apply for a Duplicate Degree More Than Once?</div>
                            <div className='answer'>
                                Yes, you can apply for a Duplicate Degree more than once if necessary. However, each application must meet all the required conditions and you must pay the applicable fees each time.
                            </div>
                        </li>
                    </ol>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to the administrative office at 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a> or 
                        <a href='mailto:admin-academics@iiitd.ac.in'>admin-academics@iiitd.ac.in</a>.
                    </p>
                </div>

                {/* Transcript Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="transcript">
                    Transcript
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>What is a Transcript?</div>
                            <div className='answer'>
                                A <b>Transcript</b> is an official academic document detailing your semester-wise courses, grades received, SGPA, and CGPA. It serves as a comprehensive record of your academic performance throughout your program.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Who is Eligible to Receive a Transcript?</div>
                            <div className='answer'>
                                Transcripts are issued to both current students and alumni. For current students, the transcript indicates incomplete graduation requirements, while for alumni, it shows completed status.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>How Many Times Can I Request a Transcript?</div>
                            <div className='answer'>
                                Transcripts can be requested multiple times as needed. There is no limit to the number of transcripts you can request.
                            </div>
                        </li>
                    </ol>
                    <b>Process for Issuing Transcripts:</b>
                    <div className='currentStudents'>
                        <p><b><u>For Existing Students:</u></b></p>
                        <ol>
                            <li>An official transcript can be issued after completing at least one semester and the publication of semester results.</li>
                            <li>Payment of Rs.50/- per copy is required.</li>
                            <li>Payment can be made <span style={{ color: "blue" }}>online</span> or offline in the accounts office.</li>
                            <li><b>After making the payment, fill out the Google form.</b></li>
                            <li>For follow-ups, email your respective admin at 
                                <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                            </li>
                            <li><b>Timeline:</b> Generally two to three working days.</li>
                        </ol>
                    </div>
                    <div className='studentsAlumni'>
                        <p><b><u>For Alumni:</u></b></p>
                        <ol>
                            <li>An official transcript with completed status is issued at the time of convocation along with the degree.</li>
                            <li>For a fresh transcript, alumni need to pay Rs.59/- [Rs.50/- transcript charge + Rs.9/- GST].</li>
                            <li>Payment can be made <span style={{ color: "blue" }}>online</span> or offline in the accounts office.</li>
                            <li><b>After making the payment, fill out the Google form.</b></li>
                            <li>For follow-ups, email your respective admin at 
                                <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                            </li>
                            <li><b>Timeline:</b> Generally two to three working days.</li>
                            <li>If you want the institute to post/courier the transcript, additional charges apply. Share the address with a mobile number where you wish to receive the transcript. [Currently within India: Rs.100/- and outside India: Rs.2700/-]</li>
                        </ol>
                    </div>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to the administrative office at 
                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                    </p>
                </div>

                {/* Sending Official Academic Record Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="record">
                    Sending Official Academic Record through Institute
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>What is an Official Academic Record?</div>
                            <div className='answer'>
                                An <b>Official Academic Record</b> comprises official transcripts and other required documents that detail your academic performance and achievements during your tenure at the institute.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>How to Request Sending Official Academic Record to an Institution?</div>
                            <div className='answer'>
                                To request sending your Official Academic Record to an external institution, follow these steps:
                                <ol>
                                    <li>Submit a formal request through an official letter or email specifying the required records and the destination address.</li>
                                    <li>Ensure that all payment requirements for transcripts are fulfilled as mentioned in the Transcript section.</li>
                                    <li>Email your request along with necessary attachments to 
                                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                                    </li>
                                    <li><b>Timeline:</b> Generally two to three working days.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Are There Any Additional Charges for Sending Records Directly?</div>
                            <div className='answer'>
                                Yes, there are additional charges for postage and handling. Please refer to the Transcript section for details on the fees associated with sending transcripts internationally or domestically.
                            </div>
                        </li>
                    </ol>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to the administrative office at 
                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                    </p>
                </div>

                {/* Other Documents Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="misc">
                    Other Documents
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>How to Request Additional Official Documents?</div>
                            <div className='answer'>
                                For any official documents not covered in the above sections, follow these steps:
                                <ol>
                                    <li>Email your request specifying the required document and its purpose to 
                                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                                    </li>
                                    <li>Include all necessary details and any supporting documents required for the request.</li>
                                    <li>Ensure that all related fees are paid as per the guidelines in the relevant sections.</li>
                                    <li><b>Timeline:</b> The processing time varies depending on the type of document requested.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>What Types of Documents Are Considered 'Other Documents'?</div>
                            <div className='answer'>
                                'Other Documents' include but are not limited to:
                                <ol>
                                    <li>Affidavits</li>
                                    <li>No-Dues Certificates</li>
                                    <li>Bonafide Certificates</li>
                                    <li>Enrollment Letters</li>
                                    <li>Any other official documentation required for academic or professional purposes.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>How Long Does It Take to Receive 'Other Documents'?</div>
                            <div className='answer'>
                                The processing time for 'Other Documents' depends on the complexity and type of the document requested. Typically, it ranges from two to four working days.
                            </div>
                        </li>
                    </ol>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to the administrative office at 
                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                    </p>
                </div>

                {/* Name Change/Correction Section */}
                <div className={windowSize > 800 ? 'sectionHeading' : windowSize > 500 ? 'smallSectionHeading' : 'verySmallSectionHeading'} id="correction">
                    Name Change/Correction
                </div>
                <div className={windowSize > 800 ? 'contentInfo' : windowSize > 500 ? 'smallContentInfo' : 'verySmallContentInfo'}>
                    <ol>
                        <li>
                            <div className='vSmallHeading'>How to Request a Name Change or Correction in Official Documents?</div>
                            <div className='answer'>
                                To request a name change or correction in your official documents, follow these steps:
                                <ol>
                                    <li>Prepare a formal request letter detailing the required changes.</li>
                                    <li>Attach supporting documents such as a gazette notification or court order, if applicable.</li>
                                    <li>Submit the request along with the supporting documents to 
                                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                                    </li>
                                    <li>Wait for confirmation and processing of your request.</li>
                                    <li><b>Timeline:</b> Processing times vary depending on the nature of the correction and the documentation provided.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>What Supporting Documents Are Required for Name Change/Correction?</div>
                            <div className='answer'>
                                The following documents are typically required:
                                <ol>
                                    <li>A gazette notification or court order certifying the name change.</li>
                                    <li>Photocopy of the original Degree Certificate or other relevant academic documents.</li>
                                    <li>Identification proof such as a passport or Aadhaar card.</li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Is There a Fee Associated with Name Change/Correction?</div>
                            <div className='answer'>
                                Currently, there is no fee for requesting a name change or correction. However, if any additional administrative costs arise, you will be notified accordingly.
                            </div>
                        </li>
                        <li>
                            <div className='vSmallHeading'>Can I Change My Name Multiple Times?</div>
                            <div className='answer'>
                                Yes, you can request multiple name changes or corrections as needed. Each request must be accompanied by the necessary supporting documents.
                            </div>
                        </li>
                    </ol>
                    <b>Contact Information:</b>
                    <p>
                        For any further assistance, please reach out to the administrative office at 
                        <a href='mailto:admin-btech@iiitd.ac.in'>admin-btech@iiitd.ac.in</a>, 
                        <a href='mailto:admin-mtech@iiitd.ac.in'>admin-mtech@iiitd.ac.in</a>, or 
                        <a href='mailto:admin-phd@iiitd.ac.in'>admin-phd@iiitd.ac.in</a>.
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Certificates;
