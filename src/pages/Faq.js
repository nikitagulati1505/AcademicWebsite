import React, { useState, useEffect } from 'react'
import '../styles/FAQ.css'
import Footer from '../components/Footer'

const Faq = ({ setFAQ }) => {
    const [size, setSize] = useState(window.innerWidth)
    const [registration, setRegistration] = useState(true)
    const [specialisation, setSpecialisation] = useState(false)
    const [thesis, setThesis] = useState(false)
    const [intern, setIntern] = useState(false)
    const [graduation, setGraduation] = useState(false)
    const [operation, setOperation] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const switchBar = (e, button) => {
        setRegistration(button === "registration");
        setSpecialisation(button === "specialisation");
        setThesis(button === "thesis");
        setIntern(button === "intern");
        setGraduation(button === "graduation");
        setOperation(button === "operation");
    }
    useEffect(() => {
        const updateWindowDimensions = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        console.log(size);
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [window.innerWidth])
    return (
        <div className='faq'>
            <div className='buttons'>
                <button className={registration ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "registration") }}>Course & Registration </button>
                <button className={specialisation ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "specialisation") }}>Specialization </button>
                <button className={thesis ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "thesis") }}>Thesis/SP/ CapP </button>
                <button className={intern ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "intern") }}>Internship</button>
                <button className={graduation ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "graduation") }}>Graduation Requirement</button>
                <button className={operation ? 'selected' : 'unselected'} onClick={(e) => { switchBar(e, "operation") }}>Operational</button>
            </div>

            <div>
                {registration ?
                     <div id='cr' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Course & Registration</div>
                        <hr></hr>
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>How should we plan for taking courses? </ div>
                                    <div className='answer'>Should consult the concerned program coordinator before pre-registration</div></li>
                                <li><div className='vSmallHeading'>If we wish to take two courses, however in the time table both the courses are clashing, whom should we request?</ div>
                                    <div className='answer'>Student Senate</ div></li>
                                <li><div className='vSmallHeading'>If a few important courses are not offered, however these courses satisfy the core/bucket or specialization requirement, whom should we request to explore the possibility of offering the course?</ div>
                                    <div className='answer'>HOD of respective Department; You can just request and not demand for offering a course as offering of course depends on many other aspects</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to register IP and IS together in a semester?</ div>
                                    <div className='answer'>Allowed</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to register IP/IS under visiting Faculty?</ div>
                                    <div className='answer'>Allowed)</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to register IP/IS under Guest Faculty?</ div>
                                    <div className='answer'>Allowed only when the Guest faculty is taking a course in the same semester</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to register IP/IS under Adjunct Faculty?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>Can we give improvement exam in courses?</ div>
                                    <div className='answer'>Yes, by registering the course again in the subsequent semesters and then appearing for the exam)  </div></li>
                                <li><div className='vSmallHeading'>When can we replace a course?</ div>
                                    <div className='answer'>Any time after publication of results of a particular semester, provided it doesn’t result in under load</div></li>
                                <li><div className='vSmallHeading'>How many credits a student should have registered to be eligible to replace a course?</ div>
                                    <div className='answer'>If the student has done additional courses over & above normal load i.e. 12 credits of courses including IP/IS in a semester with pass grade (other than Thesis/SP, OOPD, RM & TA load</div></li>
                                <li><div className='vSmallHeading'>What does replacement of a course means?</ div>
                                    <div className='answer'>Replacement means the courses which are replaced will not be counted in CGPA, however will be shown in the transcript </ div></li>
                                <li><div className='vSmallHeading'>How do we request to replace a course after publication of results?</ div>
                                    <div className='answer'>Fill the form available on our website and submit it to admin-mtech</div></li>
                                <li><div className='vSmallHeading'>How do we request to replace a course at the time of graduation, after completion of all my credits?</ div>
                                    <div className='answer'>There is a provision in graduation requirement form, you need to mention the courses which you have replaced earlier along with a fresh  course/s, if any</div></li>
                                <li><div className='vSmallHeading'>Is it mandatory to replace a course if we have done additional courses?</ div>
                                    <div className='answer'>(No, it is upto the student; if we do  not get any request from the students, all the courses done will be counted towards CGPA</div></li>
                                <li><div className='vSmallHeading'>Can we replace core course in a specialization?</ div>
                                    <div className='answer'>Allowed, only with a core course</div></li>
                                <li><div className='vSmallHeading'>Can we replace specialization elective?</ div>
                                    <div className='answer'>Allowed, only with a specialization elective</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to replace a regular in-class course with IP/IS?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to do online courses? If yes, then how?</ div>
                                    <div className='answer'>[Yes, but only as Independent study (IS)]</div></li>
                                <li><div className='vSmallHeading'>Where can we find the description of courses?</ div>
                                    <div className='answer'>IIITD Website <a href="https://www.iiitd.ac.in/academics/courses" target="_blank">https://www.iiitd.ac.in/academics/courses</a> & <a href="http://techtree.iiitd.edu.in/" target="_blank">http://techtree.iiitd.edu.in</a> </div></li>
                                <li><div className='vSmallHeading'>Are we allowed registering SSH or courses of other departments?</ div>
                                    <div className='answer'>Yes</div></li>
                                <li><div className='vSmallHeading'>When can we take IP/IS?</ div>
                                    <div className='answer'>Any term as far as the guide/advisor allows</div></li>
                                <li><div className='vSmallHeading'>When and how taking overload is allowed in each semester?</ div>
                                    <div className='answer'>Overload is allowed after 1st semester if CGPA{'>'}=8</div></li>
                                <li><div className='vSmallHeading'>Do we need to take approval for overload if our CGPA{'>'}= 8?</ div>
                                    <div className='answer'>No, sometimes ERP does not allow due to semester limit; in that case just email admin-mtech to increase the credit limit of your batch for that semester</div></li>
                                <li><div className='vSmallHeading'>Is it necessary to complete the bucket courses in first year only?</ div>
                                    <div className='answer'>It is advisable to complete specialization and bucket courses requirement as early as possible,</div></li>
                                <li><div className='vSmallHeading'>Does IP/IS have to be from the same domain as the specialization?</ div>
                                    <div className='answer'>Not necessary</div></li>
                                <li><div className='vSmallHeading'>Can the projects (IP/IS) be done in groups?</ div>
                                    <div className='answer'>It depends upon the guide/advisor </div></li>
                                <li><div className='vSmallHeading'>Can we sit through a course and not register it on ERP?</ div>
                                    <div className='answer'>Yes, you can with the permission of Instructor</div></li>
                                <li><div className='vSmallHeading'>How can we register a course as Audit?</ div>
                                    <div className='answer'>Course registration is done through ERP and there is provision of registering a course as Audit or Credit on ERP</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to convert a course registration from audit to credit or vice versa?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>What is late drop?</ div>
                                    <div className='answer'>Late drop is related to dropping a course in between a semester i.e.  generally, after Mid-Sem, however a late dropped course will show in your transcript with a grade "W". This is just to facilitate a student where the student is not able to cope up with a course. A student can request for late drop within the late drop period only as per the dates announced in the academic calendar</div></li>
                                <li><div className='vSmallHeading'>What is Project Registration?</ div>
                                    <div className='answer'>This is an additional registration process for registration of IP/IS/Thesis/CapP/SP; these are project based learning courses where you have to register with a faculty advisor. This is done under the project module tab on ERP. After you register the credits in registration tab, proceed for project registration. This is the responsibility of the student to ensure that the project is approved by the faculty</div></li>
                                <li><div className='vSmallHeading'>If we are working on a Thesis/CapP/SP which is continued from last semester; do we still have to do the project registration?</ div>
                                    <div className='answer'>Yes, after registering the credits in multiples of 4, go to project module and extend the same topic from previous/last semester</div></li>
                                <li><div className='vSmallHeading'>How does the summer registration happen?</ div>
                                    <div className='answer'>It is the same process like a regular semester where pre-registration, registration, project registration is done in ERP. The time table and academic calendar are also announced  similar to a regular semester</div></li>
                                <li><div className='vSmallHeading'>If a course has pre-requisites which as  M.Tech. students we have not completed here at IIITD, however we have required background from our previous institute; how to proceed for registration?</ div>
                                    <div className='answer'>Contact your instructor and seek his/her approval to register for this</div></li>
                                <li><div className='vSmallHeading'>We are not able to register few courses which are visible in ERP?</ div>
                                    <div className='answer'>Some courses are flagged as "Popular courses", which a student can’t register from his/her login. Necessary information regarding additions if allowed in the course will be sent to the students for such courses and in that case, the student need to email admin-mtech showing the interest for registration</div></li>
                                <li><div className='vSmallHeading'>There is a lack of IP/Cap under most of the professors and hence we are unable to complete the internship requirement of 32 credits until summer term. Whom to approach?</ div>
                                    <div className='answer'>Approach the respective HOD</div></li>
                                <li><div className='vSmallHeading'>Are there any credits for doing internship?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>Can we register for a course or project while on an internship?</ div>
                                    <div className='answer'>No, before going for internship, one has to complete graduation requirements</div></li>
                            </ol>
                        </div>
                    </div> : null}
                {specialisation ?
                    <div id='spz' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Specialization</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>Where can we find the specialization requirements?</ div>
                                    <div className='answer'>IIITD Website; go through the Specific regulations of CSE & ECE & CB and the  specialization pages for the specialization courses</div></li>
                                <li><div className='vSmallHeading'>Can we switch between program i.e. M.Tech. (CSE) to M.Tech. (ECE) / M.Tech (CB) or vice versa?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>If we are doing  Thesis/SP in a domain other than our specialization, then are we eligible for that specialization ?</ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>If we are not opting for Thesis/SP/CapP, are we eligible for specialization? </ div>
                                    <div className='answer'>Not for all porgrams, allowed only in ECE (CPS & ML) </div></li>
                                <li><div className='vSmallHeading'>Can AI specialization student obtain the without specialization degree by doing general core courses buckets?</ div>
                                    <div className='answer'>Yes, check the regulations for details</div></li>
                                <li><div className='vSmallHeading'>Can one course fulfill both specialization and bucket requirements? </ div>
                                    <div className='answer'>Yes, if it is in both buckets. Credits will be considered once only; except for M.Tech CSE-AI</div></li>
                            </ol>
                        </div>
                    </div> : null}
                {thesis ?
                    <div id='tsc' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Thesis/SP/ CapP </div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>Can we switch between Thesis/ SP? </ div>
                                    <div className='answer'>Conversion of SP to Thesis and vice versa is allowed</div></li>
                                <li><div className='vSmallHeading'>What is the process of conversion of Thesis to SP and vice versa? </ div>
                                    <div className='answer'>By sending an email to admin-mtech with the approval of supervisor</div></li>
                                <li><div className='vSmallHeading'>What will happen to the registered credits with grades of Thesis if it is converted to SP? </ div>
                                    <div className='answer'>All the credits will be shown in your transcript, only a note will be mentioned in the footnote that "Student has converted from Thesis to SP"</div></li>
                                <li><div className='vSmallHeading'>Is internal guide necessary when registering with an Adjunct faculty? </ div>
                                    <div className='answer'>Yes, when registering afresh. However, if a faculty left the institute after registration, internal guide is not necessary</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to register for Thesis/ SP/ CapP during the internship? </ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>How can we change our supervisor? </ div>
                                    <div className='answer'>Yes, by filling the Supervisor Change Form</div></li>
                                <li><div className='vSmallHeading'>Can we register Thesis after Capstone project or vive versa? </ div>
                                    <div className='answer'>Yes, with approval from AAC. However, earned credit will not be transferred</div></li>
                                <li><div className='vSmallHeading'>Do the grades of both Thesis & Capstone calculated in CGPA, if we consider only Thesis as a part of graduation requirement? </ div>
                                    <div className='answer'>Yes</div></li>
                                <li><div className='vSmallHeading'>Is there any deadline for Thesis defense and submission of report for SP/ IndP/ CapP? </ div>
                                    <div className='answer'>As per Academic Calendar & guidelines</div></li>
                                <li><div className='vSmallHeading'>How can we opt for Capstone Project? </ div>
                                    <div className='answer'>You need to search on your own, approach IIITD faculty member with mutual research interest</div></li>
                                <li><div className='vSmallHeading'>When an "I" grade in Thesis is to be converted to "S/X"? </ div>
                                    <div className='answer'>One month after the completion of the semester</div></li>
                                <li><div className='vSmallHeading'>How is the grading done for Thesis/CapP/SP. </ div>
                                    <div className='answer'><a href="https://iiitd.ac.in/academics/resources" target="_blank">Refer the Thesis/SP evaluation guidelines</a></div></li>
                                <li><div className='vSmallHeading'>Do we need to tell beforehand which option (with thesis or without thesis) are we choosing? </ div>
                                    <div className='answer'>It is implied as you are doing the registration in ERP</div></li>
                                <li><div className='vSmallHeading'>Can we only register for projects (IP/IS/Thesis/CapP/SP) and not any course in a semester? </ div>
                                    <div className='answer'>Yes, but it is advisable that utmost care must be taken while you take these project in your 1st  and 2nd semester; for degree you need to complete your course work as well i.e. your bucket/core and specialization courses </div></li>
                                <li><div className='vSmallHeading'>Can projects (Thesis/CapP/SP) be done in groups? </ div>
                                    <div className='answer'>Depends on the supervisor; only in case of Thesis the work can't be defended together, hence the project work need to be distributed properly so that two students will have two different title and defend the thesis separately</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to opt for Thesis and Capstone in a semester? </ div>
                                    <div className='answer'>No</div></li>
                            </ol>
                        </div>
                    </div> : null}
                {intern ?
                    <div id='internship' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Internship</div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>How can we go for an internship? </ div>
                                    <div className='answer'>There is a detailed guideline for Internship available <a href="https://iiitd.ac.in/academics/resources" target="_blank">on our website</a></div></li>
                                <li><div className='vSmallHeading'>What is student interaction? </ div>
                                    <div className='answer'>Interaction with program coordinators/Admin Academics to discuss about course registration, graduation requirements etc.</div></li>
                                <li><div className='vSmallHeading'>Can a GATE admit drop TAship? </ div>
                                    <div className='answer'>TAship is mandatory for GATE admits</div></li>
                                <li><div className='vSmallHeading'>Is there a minimum requirement of course work? </ div>
                                    <div className='answer'>Yes, see the regulations for details</div></li>
                                <li><div className='vSmallHeading'>Is there any maximum credits limit that can be registered in whole M.Tech program? </ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>Are we eligible to get the degree if we got an X in TAship? </ div>
                                    <div className='answer'>Yes, but not eligible for Internship</div></li>
                                <li><div className='vSmallHeading'>Are we eligible to get t the degree if we  drop TAship? </ div>
                                    <div className='answer'>Yes, but not be eligible for Internship</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to sit for FTE placement roles if we drop TAship? </ div>
                                    <div className='answer'>Yes</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to sit for FTE placement roles if we get an X in TAship? </ div>
                                    <div className='answer'>Yes</div></li>
                            </ol>
                        </div>
                    </div> : null}
                {graduation ?
                    <div id='gr' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Graduation Requirement </div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>What is the credit requirement for M.Tech Degree? </ div>
                                    <div className='answer'>48 Credit, see regulations for details</div></li>
                                <li><div className='vSmallHeading'>What is the minimum CGPA requirement for graduation? </ div>
                                    <div className='answer'>6.5</div></li>
                                <li><div className='vSmallHeading'>Are we allowed to do more credit than the minimum requirement? </ div>
                                    <div className='answer'>Yes</div></li>
                                <li><div className='vSmallHeading'>What is the maximum time to complete M.Tech. Degree? </ div>
                                    <div className='answer'>No Upper Limit</div></li>
                                <li><div className='vSmallHeading'>Does 300-400 level courses get counted towards 48 credits requirement for all specialization? </ div>
                                    <div className='answer'>Yes, up to certain limit, read the regulation to know the limit</div></li>
                                <li><div className='vSmallHeading'>In case of plagiarism/F/low cgpa in a course, is it required to re-take that course for improvement? </ div>
                                    <div className='answer'>Not necessary, but you have to  fulfill all the requirements</div></li>
                                <li><div className='vSmallHeading'>If we have completed the credit requirement, however only thesis defense is pending; what should we register in a semester? </ div>
                                    <div className='answer'>Register the course Thesis/SP/CaPP Progress</div></li>
                            </ol>
                        </div>
                    </div> : null}
                {operation ?
                    <div id='opr' className="faq-container">
                        <div className="heading" style={{ color: 'black' }}>Operational </div>
                        <hr />
                        <div className='que'>
                            <ol>
                                <li><div className='vSmallHeading'>Where can we get Identity Card/ Access Card? </ div>
                                    <div className='answer'>Contact Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>How to get email id login and password? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>What is the minimum SGPA/CGPA to avail Stipend? </ div>
                                    <div className='answer'>6.0</div></li>
                                <li><div className='vSmallHeading'>What is the minimum SGPA/CGPA to continue the program? </ div>
                                    <div className='answer'>6.0</div></li>
                                <li><div className='vSmallHeading'>How can we reset our password of Email id? </ div>
                                    <div className='answer'>Approach IT Help Desk; <a href="mailto:it-helpdesk@iiitd.ac.in" >it-helpdesk@iiitd.ac.in</a></div></li>
                                <li><div className='vSmallHeading'>How to get ERP login ID & Password? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>How can we reset our password of ERP? </ div>
                                    <div className='answer'>Clink on the forgot password link available on the home page of ERP</div></li>
                                <li><div className='vSmallHeading'>Where to apply for internet access? </ div>
                                    <div className='answer'>Approach IT Help Desk; <a href="mailto:it-helpdesk@iiitd.ac.in" >it-helpdesk@iiitd.ac.in</a></div></li>
                                <li><div className='vSmallHeading'>What is the basis of hostel allotment? </ div>
                                    <div className='answer'>Depends upon availability, for more info contact Student Affairs office</div></li>
                                <li><div className='vSmallHeading'>Are we (Day Scholar) allowed in Hostel during examination? </ div>
                                    <div className='answer'>Upon prior approval & Availability; contact student affair office</div></li>
                                <li><div className='vSmallHeading'>How to get transcript & other certificate? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>How to get bonafide certificate? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>When can we get a provisional certificate? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>Is there any certificate given for TAship as Experience? </ div>
                                    <div className='answer'>It will be mentioned in your Transcript, however, a certificate may be issued upon your request)</div></li>
                                <li><div className='vSmallHeading'>What is the procedure of withdrawal? </ div>
                                    <div className='answer'>Approach Admin-M.Tech</div></li>
                                <li><div className='vSmallHeading'>Do we have to pay the semester fees during internship? </ div>
                                    <div className='answer'>Yes if any installment is left, there is fixed time line for payment of fees</div></li>
                                <li><div className='vSmallHeading'>What is the process left after Thesis Defense and Submission of report? </ div>
                                    <div className='answer'>You need to complete other administrative formalities which will be informed by admin-mtech</div></li>
                                <li><div className='vSmallHeading'>What is the leave policy for M.Tech student?</ div>
                                    <div className='answer'>30 days per year, refer regulations for more details</div></li>
                                <li><div className='vSmallHeading'>Do the student without TAship/RA/Fellow need 75% attendance? </ div>
                                    <div className='answer'>No</div></li>
                                <li><div className='vSmallHeading'>How many leave are we allowed?</ div>
                                    <div className='answer'>30 days per year</div></li>
                                <li><div className='vSmallHeading'>What is the maximum period of semester leave? </ div>
                                    <div className='answer'>Maximum of two semester, subject to the approval of the competent authority</div></li>
                                <li><div className='vSmallHeading'>What is digital attendance? </ div>
                                    <div className='answer'>Attendance taken through Wi-Fi registering the MAC id of Mob or Laptop or through Biometric; depending on the availability of technology in the institute</div></li>
                                <li><div className='vSmallHeading'>What is AICTE-DBT? </ div>
                                    <div className='answer'>Payment of M.Tech stipend directly from AICTE</div></li>
                                <li><div className='vSmallHeading'>How can we become a member of  student council/Student Senate? </ div>
                                    <div className='answer'>Apply when student council/student senate nominations are rolled out</div></li>
                                <li><div className='vSmallHeading'>Is there any specific credit requirement to be eligible for placement drive? </ div>
                                    <div className='answer'>Consult Training and Placement for more clarification</div></li>
                                <li><div className='vSmallHeading'>Is there any specific CGPA requirement to be eligible for placement drive? </ div>
                                    <div className='answer'>Contact Training and Placement for more clarification</div></li>
                            </ol>
                        </div>
                    </div> : null}
            </div>
            <Footer />
        </div>
    )
}

export default Faq
