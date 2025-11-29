
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = "http://192.168.1.45:5000/api";
3
// "https://arunalayabackendv2.vercel.app/api";
// 'https://arunalayabackendv2-1.onrender.com/api';
// export const BASE_URL = "";

export const apiRequest = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  
  try {
  let token = await AsyncStorage.getItem('token');

  // Fix: remove wrapping quotes if present
  if (token && token.startsWith('"') && token.endsWith('"')) {
    token = token.slice(1, -1);
  }

  if (token) {
    defaultOptions.headers.Authorization = `Bearer ${token}`;
  }
} catch (error) {
  console.error('Error getting token', error);
}

  
  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Request failed');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};

export const get = (endpoint) => apiRequest(endpoint, { method: 'GET' });
export const post = (endpoint, data) => apiRequest(endpoint, {
  method: 'POST',
  body: JSON.stringify(data),
});
export const put = (endpoint, data) => apiRequest(endpoint, {
  method: 'PUT',
  body: JSON.stringify(data),
});
export const del = (endpoint) => apiRequest(endpoint, { method: 'DELETE' });
