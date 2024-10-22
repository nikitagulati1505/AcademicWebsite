import React from 'react';
import '../styles/examination.css';

const Examination = () => {
  return (
    <div className="examination-container">
      <h1 className="examination-heading">Examination and Assessment</h1>
      <p className="examination-text">
        Each course is conducted by the assigned Instructor with the assistance of teaching fellows and/or teaching assistants. The Instructor is responsible for conducting lectures, tutorials, and labs, holding the tests and examinations, evaluating the performance of the students, and awarding grades at the end of the course.
      </p>

      {/* Plagiarism Section in a Box */}
      <div className="plagiarism-box">
        <h3 className="examination-subheading">Plagiarism</h3>
        <p className="examination-text">
          IIIT Delhi maintains global academic standards and does not tolerate any form of academic dishonesty. Almost all violations of academic honesty in course submissions (homework assignments, project reports) are instances of plagiarism.
        </p>
        <p className="examination-text">
          If, for whatever reason, a student has to use some existing work, the student cannot copy and can only borrow. Therefore, it is the student's responsibility to explicitly indicate which parts are borrowed.
        </p>
        <ul className="examination-list">
          <li>Attributing it to the original source and</li>
          <li>Making it absolutely clear that the copied part is not the student's own (a student needs to do both).</li>
        </ul>
      </div>

      <h7 className="examination-link-text">For more information: 
        <a href="https://www.iiitd.ac.in/academics/ay24-25" className="examination-link">
          Follow this link
        </a>
      </h7>
    </div>
  );
};

export default Examination;
