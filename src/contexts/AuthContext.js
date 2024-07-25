import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('authUser');

    if (savedToken) {
      setToken(savedToken);
    }

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser) {
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Error parsing authUser:', error);
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3333/auth/login', { email, password });
      const { access_token, user } = response.data;

      setUser(user);
      setToken(access_token);
      localStorage.setItem('authToken', access_token);
      localStorage.setItem('authUser', JSON.stringify(user));

      navigate('/Baki'); // Girişten sonra hedef sayfaya yönlendir
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);