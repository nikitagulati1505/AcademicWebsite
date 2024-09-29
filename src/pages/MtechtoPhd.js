import React from 'react';

const MtechtoPhd = () => {
  return (
    <div style={styles.container}>
        <h1>M.Tech. to Ph.D.</h1>
      <p style={styles.text}>An M.Tech. student can change his/her program, if permitted, to Ph.D. and continue
to do the course/research work to enable him/her to meet the requirements of the
Ph.D. degree.
Only students with CGPA &gt 8.00 and who have completed minimum of 2 semesters
and 20 credits in M.Tech. program will be eligible to apply for the change to Ph.D.
program.
The student will be eligible for Ph.D. stipend only from the time he/she is approved
for enrollment as the Ph.D. student. Such a student, for Ph.D. credit requirement,
may be treated as if he/she had joined the Ph.D. program from the start of the PG
(here, M.Tech.) program.
The student may be granted an M.Tech. degree also, provided he/she fulfils all the
academic requirements for the same. Such a student may also be refunded his/her
M.Tech. tuition fee, if he/she successfully completes the Ph.D. program.</p>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    marginTop:'40px',
    marginLeft:'20px',
    marginRight:'20px',
  },
  h1:{
textAlign:'center'
  },
  text: {
    color: '#333',
    fontSize: '15px',
    textAlign: 'left',
  },
};

export default MtechtoPhd;