// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const existingToken = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (data) => {
    localStorage.setItem('token', data);
    setAuthToken(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
