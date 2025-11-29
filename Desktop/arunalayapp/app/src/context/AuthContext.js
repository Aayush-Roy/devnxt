import React, { createContext, useState, useEffect } from 'react';
import { getData, removeData, storeData } from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedUser = await getData('user');
        const storedUserType = await getData('userType');
        const storedToken = await getData('token');

        if (storedUser && storedToken) {
          setUser(storedUser);
          setUserType(storedUserType);
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error loading stored data', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, []);

  const login = async (userData, userType, token) => {
    setUser(userData);
    setUserType(userType);
    setToken(token);
    
    await storeData('user', userData);
    await storeData('userType', userType);
    await storeData('token', token);
  };

  const logout = async () => {
    setUser(null);
    setUserType(null);
    setToken(null);
    
    await removeData('user');
    await removeData('userType');
    await removeData('token');
  };

  return (
    <AuthContext.Provider value={{ user, userType, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};