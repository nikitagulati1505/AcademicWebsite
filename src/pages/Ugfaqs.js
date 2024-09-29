// src/components/Ufaq.js

import React, { useState, useEffect, useRef } from 'react';
import '../styles/FAQ.css'; // Ensure this path is correct based on your project structure

const Ufaq = () => {
    // State variables for each FAQ section
    const [thirdFourthYear, setThirdFourthYear] = useState(true);
    const [courseRegistration, setCourseRegistration] = useState(false);
    const [courseRelated, setCourseRelated] = useState(false);
    const [erpRelated, setErpRelated] = useState(false);
    const [feeLoan, setFeeLoan] = useState(false);
    const [generalQueries, setGeneralQueries] = useState(false);
    const [onlineCourses, setOnlineCourses] = useState(false);
    const [sgCwRelated, setSgCwRelated] = useState(false);
    const [taRelated, setTaRelated] = useState(false);
    const [repeatRules, setRepeatRules] = useState(false);
    const [upcomingSemester, setUpcomingSemester] = useState(false);

    // Reference for the buttons container (useful if you choose to implement scroll arrows)
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    // Function to switch between FAQ sections
    const switchBar = (button) => {
        setThirdFourthYear(button === "thirdFourthYear");
        setCourseRegistration(button === "courseRegistration");
        setCourseRelated(button === "courseRelated");
        setErpRelated(button === "erpRelated");
        setFeeLoan(button === "feeLoan");
        setGeneralQueries(button === "generalQueries");
        setOnlineCourses(button === "onlineCourses");
        setSgCwRelated(button === "sgCwRelated");
        setTaRelated(button === "taRelated");
        setRepeatRules(button === "repeatRules");
        setUpcomingSemester(button === "upcomingSemester");
    };

    useEffect(() => {
        // Handle window resize if needed in the future
        const updateWindowDimensions = () => {
            // You can use this to adjust states based on window size if required
        };
        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    return (
        <div className='faq'>
            {/* Navbar Container */}
            <div className='navbar-container'>
                { <button className="scroll-button left" onClick={() => buttonsRef.current.scrollBy({ left: -800, behavior: 'smooth' })} aria-label="Scroll Left">&#8592;</button> }
                
                {/* Buttons Container */}
                <div className='buttons' ref={buttonsRef}>
                    <button
                        className={thirdFourthYear ? 'selected' : 'unselected'}
                        onClick={() => switchBar("thirdFourthYear")}
                        aria-pressed={thirdFourthYear}
                    >
                        3rd/4th Year Related
                    </button>
                    <button
                        className={courseRegistration ? 'selected' : 'unselected'}
                        onClick={() => switchBar("courseRegistration")}
                        aria-pressed={courseRegistration}
                    >
                        Course Registration Related
                    </button>
                    <button
                        className={courseRelated ? 'selected' : 'unselected'}
                        onClick={() => switchBar("courseRelated")}
                        aria-pressed={courseRelated}
                    >
                        Course Related
                    </button>
                    <button
                        className={erpRelated ? 'selected' : 'unselected'}
                        onClick={() => switchBar("erpRelated")}
                        aria-pressed={erpRelated}
                    >
                        ERP Related
                    </button>
                    <button
                        className={feeLoan ? 'selected' : 'unselected'}
                        onClick={() => switchBar("feeLoan")}
                        aria-pressed={feeLoan}
                    >
                        Fee/Loan Related
                    </button>
                    <button
                        className={generalQueries ? 'selected' : 'unselected'}
                        onClick={() => switchBar("generalQueries")}
                        aria-pressed={generalQueries}
                    >
                        General Queries
                    </button>
                    <button
                        className={onlineCourses ? 'selected' : 'unselected'}
                        onClick={() => switchBar("onlineCourses")}
                        aria-pressed={onlineCourses}
                    >
                        Online Courses
                    </button>
                    <button
                        className={sgCwRelated ? 'selected' : 'unselected'}
                        onClick={() => switchBar("sgCwRelated")}
                        aria-pressed={sgCwRelated}
                    >
                        SG/CW Related
                    </button>
                    <button
                        className={taRelated ? 'selected' : 'unselected'}
                        onClick={() => switchBar("taRelated")}
                        aria-pressed={taRelated}
                    >
                        TA Related
                    </button>
                    <button
                        className={repeatRules ? 'selected' : 'unselected'}
                        onClick={() => switchBar("repeatRules")}
                        aria-pressed={repeatRules}
                    >
                        First Year Repeat/Repeators/Repeat-Terminate Rules
                    </button>
                    <button
                        className={upcomingSemester ? 'selected' : 'unselected'}
                        onClick={() => switchBar("upcomingSemester")}
                        aria-pressed={upcomingSemester}
                    >
                        Regarding Upcoming Semester (Winter 2021)
                    </button>
                </div>

                {/* Optional: Scroll Right Button */}
                { <button className="scroll-button right" onClick={() => buttonsRef.current.scrollBy({ left: 200, behavior: 'smooth' })} aria-label="Scroll Right">&#8594;</button> }
            </div>

            {/* FAQ Sections */}
            <div>
                {thirdFourthYear && (
                    <div id='thirdFourthYear' className="faq-container">
                        <div className="heading">3rd/4th Year Related</div>
                        <hr />
                        <div className='que'>
        <ol>
            <li>
                <div className='vSmallHeading'>If we take up a 6 months internship, like other colleges do we get some credits for it?</div>
                <div className='answer'>There are no credits for any internship. You will have to plan your semesters accordingly. Also, if you are going for an internship any time before Semester 8, you have to take Semester Leave.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can we do a 6 month internship without dropping a sem?</div>
                <div className='answer'>There are no credits for any internship. You will have to plan your semesters accordingly. Also, if you are going for internship any time before Semester 8, you have to take Semester Leave.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can we do internship and in parallel register credits in summer?</div>
                <div className='answer'>You can only register SG/CW credits in summer along with doing an internship.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Are external BTP/IP collaborations allowed?</div>
                <div className='answer'>A student can do a BTP/IP with anyone outside. However, it is mandatory to have an internal supervisor who should be regular faculty of IIITD.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can a B.Tech. student do BTP with a guest or a visiting faculty?</div>
                <div className='answer'>BTP is allowed only with regular faculty or visiting faculty with Ph.D.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can a B.Tech. student do IP/IS/UR with a guest or a visiting faculty?</div>
                <div className='answer'>IP/IS is allowed with regular and visiting faculty, but not with Adjunct or Guest faculty.</div>
            </li>
            <li>
                <div className='vSmallHeading'>What if my BTP advisor leaves after a semester?</div>
                <div className='answer'>You can continue with the same advisor till the completion of your BTP and take an internal co-advisor.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can we do both BTP and IP together in a sem?</div>
                <div className='answer'>Yes. However, maximum 12 credits of BTP and 8 credits of IP/IS/UR combined are allowed in the complete B.Tech. Program.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can we do 2 IPs or an IP and IS, UR in a semester?</div>
                <div className='answer'>Yes, you can do any such combination. However, maximum 8 credits of IP/IS/UR combined are allowed in all in the B.Tech program. However, if you are taking more than 1 IP/IS/UR in a single semester, you have to seek necessary approval from admin-btech.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Requirements/ procedure of taking course overload/Process of taking the course overload.</div>
                <div className='answer'>Refer Regulations for rules. Course Overload form can be found in the link provided.</div>
            </li>
            <li>
                <div className='vSmallHeading'>How many internships are necessary for a BTech?</div>
                <div className='answer'>None.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Can I take the core course mentioned in a particular slot in the later semesters?</div>
                <div className='answer'>Yes, the mentioned slots are indicative. However, to complete the graduation requirements in time, it is highly recommended to take the courses in the mentioned slots only.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Are DSP/DCS core courses for ECE students?</div>
                <div className='answer'>No, these courses are recommended Electives.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Is there any CGPA requirement to do BTP?</div>
                <div className='answer'>No. Please refer the BTP Page on the website. The link is placed in the right column.</div>
            </li>
            <li>
                <div className='vSmallHeading'>What kind of courses are offered in the Summer Term?</div>
                <div className='answer'>Generally, Self-growth and Community Work is offered during the Summer Term. However, any other refresher course, as decided by the concerned authorities, can also be offered.</div>
            </li>
            <li>
                <div className='vSmallHeading'>What is the Travel reimbursement policy of the institute for BTech students?</div>
                <div className='answer'>The travel reimbursement is done for Travel Assistance for academic work, conferences, or student activities. The maximum amount to be reimbursed is Rs. 10,000 in the whole BTech tenure.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will SSH courses of 2xx level be counted towards 2xx courses limit?</div>
                <div className='answer'>Yes, such courses will count towards the 2xx course limit for CSSS students, but not for others. Applicable from 2019 batch onwards.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will CN count towards 32 credits of CSE requirement?</div>
                <div className='answer'>Since CN is a 2xx level course, it won't count towards 32 credits. 32 credits should come from 3xx or above level courses. Exception: For 2018 and previous batches, CN will count towards 32 credits.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will 3xx courses listed as core courses in Semester 5 and onwards count towards 32 credits?</div>
                <div className='answer'>Yes, only for the CSAM branch.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will CN count towards the 2xx course limit of 2 courses?</div>
                <div className='answer'>CN will not count towards the 2xx course limit for the specialization for which it is a core course. However, it will count towards the 2xx course limit for other specializations. Applicable from 2018 batch onwards.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will CSE or DES or HSS etc courses of 2xx level taken in the last 2 years count towards 32 credits of a particular branch?</div>
                <div className='answer'>No, 32 credits should come from 3xx or above level courses. Exception: For 2018 and previous batches, 2xx level courses done in the last 4 semesters will count towards 32 credits of the respective bucket.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Does the above FAQ hold for all ECE/CSE/BIO/Maths courses?</div>
                <div className='answer'>Yes, this is true for all ECE/CSE/BIO/Maths courses, so a maximum of 2 such courses are allowed and these courses will NOT satisfy the 32 credits requirement for any B.Tech program. Applicable from 2018 batch onwards.</div>
            </li>
            <li>
                <div className='vSmallHeading'>If I take a 1xx or 2xx level core course for improvement in 3rd or 4th year, will it count towards the 2xx limit?</div>
                <div className='answer'>No, any core course taken for improvement will not count towards the 2xx limit.</div>
            </li>
            <li>
                <div className='vSmallHeading'>I am pursuing BTech (CSAM/CSE/CSD/CSSS/CSB/CSAI). Can I apply for MTech (CSE) dual degree program?</div>
                <div className='answer'>Yes.</div>
            </li>
            <li>
                <div className='vSmallHeading'>I am pursuing BTech (ECE). Can I apply for MTech (CSE)?</div>
                <div className='answer'>No.</div>
            </li>
            <li>
                <div className='vSmallHeading'>I am pursuing BTech (CSAM/CSE/CSD/CSSS/CSB/CSAI). Can I apply for MTech (ECE)?</div>
                <div className='answer'>No.</div>
            </li>
            <li>
                <div className='vSmallHeading'>In dual degree program, how many degrees will I get?</div>
                <div className='answer'>You will get 2 degrees. One B.Tech degree after completion of B.Tech and one M.Tech degree after completion of your M.Tech.</div>
            </li>
            <li>
                <div className='vSmallHeading'>What is the maximum reimbursement amount per BTP poster?</div>
                <div className='answer'>It is Rs. 400 per poster.</div>
            </li>
            <li>
                <div className='vSmallHeading'>What is the allowed BTP poster size?</div>
                <div className='answer'>It should be A1.</div>
            </li>
            <li>
                <div className='vSmallHeading'>When and where to submit the poster bill?</div>
                <div className='answer'>Right after the presentation to admin-btech so that the process of reimbursement can be initiated without delay.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Which code should I register for in case of dual code of courses?</div>
                <div className='answer'>Courses where the same two codes with lower and higher numbers are available, the lower code is for UG students. Courses that are listed across the disciplines, say a course is listed with both BIO and CSE numbers. Students can choose any of these codes and the course will count towards the bucket of courses based on the course numbers.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will evaluation be the same for courses with two different codes 3xx/5xx level?</div>
                <div className='answer'>No.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will courses like IP/IS/UR/BTP count towards 32 credits requirement?</div>
                <div className='answer'>No.</div>
            </li>
            <li>
                <div className='vSmallHeading'>Will courses like IP/IS/UR/BTP count towards 12 extra discipline credits to be done to complete Honors requirement?</div>
                <div className='answer'>No.</div>
            </li>
        </ol>
                        </div>
                    </div>
                )}

                {courseRegistration && (
                    <div id='courseRegistration' className="faq-container">
                    <div className="heading">Course Registration Related</div>
                    <hr />
                    <div className='que'>
                        <ol>
                            <li>
                                <div className='vSmallHeading'>I have not done Pre-registration? Am I allowed to register for courses during ADD/DROP?</div>
                                <div className='answer'>Pre-registration is a necessary part of the academic registration. In case a student fails to do pre-registration of courses, a penalty may be imposed if the student does not register his/her preference within the stipulated period. Same will be conveyed by the admin from time to time.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>How can I do pre-registration? I don't have an Aadhar card?</div>
                                <div className='answer'>You can use any other government-issued ID such as PAN card or passport for pre-registration.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>When is pre-registration done?</div>
                                <div className='answer'>Pre-registration is typically conducted at the beginning of each semester. Please refer to the academic calendar for exact dates.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>What if I miss the pre-registration deadline?</div>
                                <div className='answer'>If you miss the pre-registration deadline, you may be subject to penalties or restrictions during the ADD/DROP period. It's advisable to complete pre-registration on time.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>Can I register for courses if they are full?</div>
                                <div className='answer'>If a course is full, you can opt for the waitlist or choose an alternative course that has available seats.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>How can I swap courses during ADD/DROP?</div>
                                <div className='answer'>To swap courses during ADD/DROP, navigate to the course registration portal, select the course you wish to drop, and choose the new course you want to add.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>Is there any fee for ADD/DROP?</div>
                                <div className='answer'>Generally, there is no additional fee for ADD/DROP. However, make sure to check the latest fee notification for any updates.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>How can I view my course selection?</div>
                                <div className='answer'>You can view your course selection by logging into the ERP portal and navigating to the course registration section.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>Can I change my branch during course registration?</div>
                                <div className='answer'>Changing your branch is a significant decision and typically requires approval from the academic department. Please consult with your academic advisor before making such changes.</div>
                            </li>
                            <li>
                                <div className='vSmallHeading'>Courses with which code are counted in the SSH course bucket?</div>
                                <div className='answer'>Courses with codes SSH, ECO, PSY, SOC, MGT are counted towards the SSH course bucket. Courses with ENT code are NOT counted towards the SSH course bucket.</div>
                            </li>
                        </ol>
                    </div>
                </div>
                
                )}

                {courseRelated && (
                    <div id='courseRelated' className="faq-container">
                        <div className="heading">Course Related</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                {/* Add your specific "Course Related" FAQs here */}
                                {/* Example Placeholder */}
                                <li>
                                    <div className='vSmallHeading'>Will courses from other branches count towards the 32 credits needed to do in the last 4 semesters?</div>
                                    <div className='answer'>There are some approved courses which satisfy the credit requirement of other branches. Refer list available on IIITD website. Also, if a course is floated with a DES code say DES513 a student need to register it with same code and he will get the benefit of this course both as DES and CSE, however, he can count it towards one of the credit requirements i.e. DES or CSE.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will CP1/2 taken in first four semesters not count towards 32 CSE credits required to be done in the last 4 semesters?</div>
                                    <div className='answer'>CPI is a 2xx level course and hence won't count towards 32 credits requirement. CPII is a 4xx level course and hence if taken in any semester after 2nd year will count towards 32 credits CSE requirements</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>If I taken CP1 for improvement in last 4 semesters will it count towards 2xx level course limit </div>
                                    <div className='answer'>Yes</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>If I take CP1 for improvement in last 4 semesters will it count towards 32 credits </div>
                                    <div className='answer'>No</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>If I get do a failed course again and passed it, will the F grade reflect in my trancript</div>
                                    <div className='answer'>All courses and the grades remain in trancript. However, the pass grade will count towards CGPA</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can you please confirm whether there is a cap on the number of SSH credits we can register for, in a semester?</div>
                                    <div className='answer'>No there is no such cap</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I opt for two courses offered during the same slot in timetable?
                                    </div>
                                    <div className='answer'>No you cannot take two courses in same slot</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>GMT has ECO num, will it suffice both ECO minors and Math dept. credits?</div>
                                    <div className='answer'>Yes</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Courses with which code are counted in SSH course bucket</div>
                                    <div className='answer'>Courses with codes SSH,ECO,PSY,SOC,MGT are counted towards SSH couse bucket. Courses with ENT code are NOT counted towards SSH course bucket</div>
                                </li>
                                {/* Add more questions as needed */}
                            </ol>
                        </div>
                    </div>
                )}

                {erpRelated && (
                    <div id='erpRelated' className="faq-container">
                        <div className="heading">ERP Related</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>From where can I get the password for my ERP Account?</div>
                                    <div className='answer'>Click on the "Forgot Password" link on the home page of ERP.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I drop courses on ERP?</div>
                                    <div className='answer'>Click on the delete button in the top right corner, select the course you want to drop, and then click save.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I run ERP from my home?</div>
                                    <div className='answer'>
                                        Please follow these steps:
                                        <ol>
                                            <li>Install and configure VPN from Forticlient. Refer to page number 8 for configuration on IIITD VPN.</li>
                                            <li>Connect VPN using your IIITD Domain credentials and let it be connected.</li>
                                            <li>Open the URL <a href="https://erp.iiitd.edu.in" target="_blank" rel="noopener noreferrer">https://erp.iiitd.edu.in</a>.</li>
                                        </ol>
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What if I cannot view my Result?</div>
                                    <div className='answer'>Your result might have been blocked because of the non-submission of course feedback by you. If that is not the case, please contact admin-btech.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>I was able to see my grades earlier, however, now the grades are not visible.</div>
                                    <div className='answer'>Please write to admin-btech to recalculate your results.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I get my Name/DOB changed on ERP?</div>
                                    <div className='answer'>Write an email to admin-btech with your class 10th Certificate.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How to get my Address changed on ERP?</div>
                                    <div className='answer'>Contact the Student Affairs Department.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {feeLoan && (
                    <div id='feeLoan' className="faq-container">
                        <div className="heading">Fee/Loan Related</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>Will I be charged a fine if I pay the fee after the due date?</div>
                                    <div className='answer'>Yes, please refer to the fee notification for the amount.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I confirm if my fee is paid or not?</div>
                                    <div className='answer'>Contact the finance department, First Floor, Old Academic Building.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can we pay the fee in two installments as the debit card limit is 50K?</div>
                                    <div className='answer'>Yes.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Where can I resolve issues related to the fee?</div>
                                    <div className='answer'>Contact the finance department, First Floor, Old Academic Building.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I pay the fee through NEFT?</div>
                                    <div className='answer'>Yes.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I make payment in case of an education loan?</div>
                                    <div className='answer'>
                                        You can make payment through NEFT. Bank details can be taken from the Finance Department after submitting the loan letter. After payment, submit the UTR number to the Finance office.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>From where can I get the demand letter?</div>
                                    <div className='answer'>Contact the finance department, First Floor, Old Academic Building.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>From where can I get a bonafide certificate for the issue of a loan?</div>
                                    <div className='answer'>You can request the issue of a bonafide certificate via email to admin-btech. You will receive the bonafide in 3 working days.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I get my result for a loan?</div>
                                    <div className='answer'>You can get your result from ERP and get it stamped and signed by admin-btech.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>I am on an extended semester and want to register for 4 credits. How much fee do I have to pay?</div>
                                    <div className='answer'>The fee mentioned in the schedule is for 16 credits; for 4 credits, you have to pay the fee on a pro-rata basis.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {generalQueries && (
                    <div id='generalQueries' className="faq-container">
                        <div className="heading">General Queries</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>When are the semester results declared?</div>
                                    <div className='answer'>Semester results are declared 10-15 days after the moderation. On the declaration of results, students are informed through email.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the procedure for getting an official transcript?</div>
                                    <div className='answer'>
                                        You have to pay Rs. 50 per transcript through this link, or physically at the Finance department. Collect the receipt and submit the same to admin-btech for the issue of the transcript. The receipt should be given in person and not via email.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the procedure to get a Bonafide certificate or fee demand letter for loan purposes?</div>
                                    <div className='answer'>
                                        Visit the academic office during visiting hours and get it done. Students should note that parents are not allowed to come for getting such letters issued.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can my parents come to the institute to collect a bonafide, or get some documents signed?</div>
                                    <div className='answer'>No, parents are not allowed to come for any such purpose. Students should approach the academic office themselves for all such things.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How many days does it take to get a transcript?</div>
                                    <div className='answer'>3-4 working days.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I get my I-card reissued?</div>
                                    <div className='answer'>
                                        Fill out the Google form on the website (link) for the issue of an I-card. Submit an online FIR, and Rs. 200 receipt to the Academic Department. Collect the same within 3-4 working days.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I get my NTSE form signed?</div>
                                    <div className='answer'>Fill out your form and submit it to the Academics Department. You can collect the same after 2 days.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I get my NOC for visa purposes?</div>
                                    <div className='answer'>You can send an email to admin-btech stating the dates, place, and purpose of your visit and collect the NOC after 2 days from the Academic office.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What shall I do if I have missed my class because of a medical reason?</div>
                                    <div className='answer'>You can submit the hard copy of the medical certificate along with the prescription to Admin-BTech the next day you rejoin college.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I apply for Semester leave?</div>
                                    <div className='answer'>Please fill out the form on the website and submit it to admin-btech.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What support is provided if a student is not performing well due to personal/academic issues?</div>
                                    <div className='answer'>
                                        For academic issues, a student can reach out to their HOD. Also, the course instructor and the teaching fellows can always be reached for their help. For personal-related issues, we have in-house counselors available at all times.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the hierarchy for academic issue resolution?</div>
                                    <div className='answer'>Please refer to the link provided.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>I want to withdraw my admission from college. What is the procedure?</div>
                                    <div className='answer'>
                                        You need to fill out the no-dues form available on the website. Get no-dues from all the departments and submit it to the academic section with your I-card and a canceled cheque. The security amount will be refunded to your bank account within 45 days.
                                    </div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What if I miss an exam due to an ill-health condition?</div>
                                    <div className='answer'>
                                        You need to inform the instructor of your course and admin-btech before the exam. They will send you a Google form that you need to submit along with the certificate and prescriptions.
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {onlineCourses && (
                    <div id='onlineCourses' className="faq-container">
                        <div className="heading">Online Courses</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>Will CSE, ECE, DES, etc. (branch-specific) online courses count towards the 32 credits required to be done in the last 4 semesters?</div>
                                    <div className='answer'>Yes, if the courses are done in the last 4 semesters.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I do any online course?</div>
                                    <div className='answer'>No, only approved courses can be enrolled in. The Institute follows limited online courses every semester during ADD/Drop, and students can choose from the approved list only.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Do I need to give an exam at the NPTEL Exam Centre if I opt for an NPTEL Online Course?</div>
                                    <div className='answer'>Yes, it is a mandatory requirement.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will online courses MGT999A and ECO9991 be counted towards my SSH credit requirements?</div>
                                    <div className='answer'>No.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will any 2xx CSE course taken as an elective in the last 2 years be counted for satisfying the 32 credits requirement that is to be satisfied in the last 2 years?</div>
                                    <div className='answer'>No.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will online courses MGT999A and ECO9991 satisfy the ECO minors requirement?</div>
                                    <div className='answer'>No.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Do I have to pay a fee for the NPTEL Exam?</div>
                                    <div className='answer'>Yes, you have to pay by yourself. It will get reimbursed by the institute once you pass the exam.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can we take more than one online course in a semester?</div>
                                    <div className='answer'>Yes, however, you can take a maximum of 8 credits in the complete B.Tech. program and a maximum of 4 credits in a semester.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Where do I have to register for an online course?</div>
                                    <div className='answer'>You need to register on the platform on which the course is offered as well as on ERP for getting credits from the online course.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How are online courses graded?</div>
                                    <div className='answer'>S/X - S meaning Satisfactory, X meaning Unsatisfactory.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I drop an online course?</div>
                                    <div className='answer'>Yes, before the late drop date.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>If I get an X in an online course, can I take another online course, or are these credits wasted?</div>
                                    <div className='answer'>You can take another online course in its place; however, you can take a maximum of 8 credits of online courses in the complete B.Tech. program.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How is the evaluation of online courses done?</div>
                                    <div className='answer'>Students registered for online courses need to mandatorily appear for the exams organized by the organizing agency.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can 2nd-year students take online courses?</div>
                                    <div className='answer'>Yes, however, the credits of the course will count towards the overall credit load that a student can take in a semester.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will online courses done in Semester 3/4 count towards the 32 credits requirement?</div>
                                    <div className='answer'>No.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will online SSH courses count towards the 12 credits of SSH requirements?</div>
                                    <div className='answer'>No.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {sgCwRelated && (
                    <div id='sgCwRelated' className="faq-container">
                        <div className="heading">SG/CW Related</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>What is the policy for the self-growth credit?</div>
                                    <div className='answer'>You can refer to the guidelines available at Self-Growth Guidelines.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the policy for the Community work credit?</div>
                                    <div className='answer'>You can refer to the guidelines available at Community Work Guidelines.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the portal for SG and CW?</div>
                                    <div className='answer'>The portal for SG and CW is available at SG/CW Portal.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I do SG/CW during the Winter Term?</div>
                                    <div className='answer'>No, SG/CW is allowed only during Monsoon/Winter/Summer Semester and not during Winter Holidays.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can SG/CW be late dropped?</div>
                                    <div className='answer'>Yes, but only by the last date of the late drop. However, the late drop rules mentioned in the regulations are applicable.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Are online courses allowed for SG?</div>
                                    <div className='answer'>No.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>I don’t have a certificate, but I have completed my course. Will I get credits?</div>
                                    <div className='answer'>No, the certificate is mandatory.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What if I have done half the activity? Can I continue it in the next semester?</div>
                                    <div className='answer'>You will get an X grade if you are not able to complete your activity in the semester in which you registered.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What if I don't present my work in the immediate next semester?</div>
                                    <div className='answer'>You will get an X grade and will have to do the work again.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the SG/CW Portal Application Procedure?</div>
                                    <div className='answer'>You can refer to the procedure at SG/CW Portal Application Procedure.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What are the old SG and CW portal links?</div>
                                    <div className='answer'>
                                        The old SG and CW portal links (only for accessing archives of previous batches) are:
                                        <ul>
                                            <li><a href="https://sgportal.example.com" target="_blank" rel="noopener noreferrer">SG Portal</a></li>
                                            <li><a href="https://cwportal.example.com" target="_blank" rel="noopener noreferrer">CW Portal</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {taRelated && (
                    <div id='taRelated' className="faq-container">
                        <div className="heading">TA Related</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>Does TA duty count towards semester load?</div>
                                    <div className='answer'>Yes, TA duty of a 4-credit course counts as a 4-credit semester load. Also, TA duty of a 4-credit course taken for credits will count as 2 credits towards graduation requirements.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the eligibility criteria to be a TA?</div>
                                    <div className='answer'>You need to have a CGPA &gt; 8 and an A- or a better grade in the course that you are opting for a TA duty.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>How can I apply for TA duty?</div>
                                    <div className='answer'>Approach the faculty you want to do TA duty with.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>If a faculty approves my case and I meet the eligibility criteria, will I surely get the TA duty?</div>
                                    <div className='answer'>No, UG TAs are approved on a case-by-case basis.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {repeatRules && (
                    <div id='repeatRules' className="faq-container">
                        <div className="heading">First Year Repeat/Repeators/Repeat-Terminate Rules</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>Will my roll number change if I need to repeat my first year?</div>
                                    <div className='answer'>No, your roll number will remain the same.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will I get a different I-card?</div>
                                    <div className='answer'>No, you can use the same I-card.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Can I apply for a branch transfer if I am a repeater?</div>
                                    <div className='answer'>Yes.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>When do I need to repeat the first year?</div>
                                    <div className='answer'>Refer to clause 7.1 of the UG Regulations.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What will be the fee applicable to me if I repeat the year?</div>
                                    <div className='answer'>Repeat year students need to pay the fee in accordance with the fresh batch students.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Since IED is no longer on offer, how can I clear my backlog in IED or improve my grades in IED?</div>
                                    <div className='answer'>By doing an extra elective design course. This is applicable only for the 2019 and previous batches.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Since CAOS is no longer on offer, how can I clear my backlog in CAOS or improve my grades in CAOS?</div>
                                    <div className='answer'>By doing CO or OS. However, if any of these courses is a core course of your branch, you have to fulfill the requirement by taking the other course. This is applicable only for the 2019 and previous batches.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Since SM is no longer on offer, how can I clear my backlog in SM or improve my grades in SM?</div>
                                    <div className='answer'>By doing an extra CSE course over and above the requirements defined for B.Tech CSE, CS+X, and ECE programs. This is applicable only for the 2019 and previous batches.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Since PIS is no longer on offer, how can I clear my backlog in PIS or improve my grades in PIS?</div>
                                    <div className='answer'>By doing DIS or ELD. However, if any of these courses is a core course of your branch, you have to fulfill the requirement by taking the other course. This is applicable only for the 2019 and previous batches.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}

                {upcomingSemester && (
                    <div id='upcomingSemester' className="faq-container">
                        <div className="heading">Regarding Upcoming Semester (Winter 2021)</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li>
                                    <div className='vSmallHeading'>What is the start date of the next semester (Winter 2021) for senior students?</div>
                                    <div className='answer'>11th January 2021.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>What is the start date of the first semester for the UG 2020 batch?</div>
                                    <div className='answer'>4th January 2021.</div>
                                </li>
                                <li>
                                    <div className='vSmallHeading'>Will the next semester be in online mode or offline mode?</div>
                                    <div className='answer'>It will start in online mode.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );

};

export default Ufaq;
