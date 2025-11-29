import { BASE_URL } from './base';

export const authAPI = {
  userSignup: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Signup failed');
      return data;
    } catch (error) {
      throw error;
    }
  },

  userLogin: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');
      return data;
    } catch (error) {
      throw error;
    }
  },

  agentSignup: async (agentData) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/agent/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agentData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Agent signup failed');
      return data;
    } catch (error) {
      throw error;
    }
  },
  resetPassword: async (emailData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Password reset failed');
    return data;
  } catch (error) {
    throw error;
  }
},
  agentLogin: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/agent/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Agent login failed');
      return data;
    } catch (error) {
      throw error;
    }
  },
};