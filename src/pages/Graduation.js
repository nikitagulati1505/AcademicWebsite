import React from 'react';

const Graduation = () => {
  return (
    <div style={styles.container}>
        <h1>Graduation Checklist</h1>
      <p style={styles.text}>----</p>
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

export default Graduation;