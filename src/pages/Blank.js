import React from 'react';

const Blank = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Information will be uploaded soon</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#333',
    fontSize: '24px',
    textAlign: 'center',
  },
};

export default Blank;
