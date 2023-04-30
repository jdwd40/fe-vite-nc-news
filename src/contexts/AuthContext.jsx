import { createContext, useState, useContext } from 'react';
//import axios from 'axios';
import apiClient from '../apiClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username) => {
    try {
      console.log(username);
      const response = await apiClient.get(`/users/${username}`);

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        if (data.user.msg) {
          setError(data.user.msg);
        } else {
          setUser(data.user);
          setError(null);
        }
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.log('Error logging in:', error);
      setError('Login failed');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
