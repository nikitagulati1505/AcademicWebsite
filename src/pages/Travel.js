import React from 'react';

const Travel = () => {
  return (
    <div style={styles.container}>
        <h1>Travel Assistance</h1>
      <p style={styles.text}>----</p>
<h7>For more Information:
    <a href="https://www.iiitd.ac.in/sites/default/files/docs/forms/2024/Office%20Order%20-%20Travel%20Assistance%20for%20Btech%20&%20Mtech%20Students%20(Revised).pdf">
    Follow the link</a></h7>
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

export default Travel;