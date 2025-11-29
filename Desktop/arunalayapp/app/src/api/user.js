import { get, put } from './base';

export const userAPI = {
  getUserProfile: async () => {
    try {
      return await get('/users/profile');
    } catch (error) {
      throw error;
    }
  },

  updateUserProfile: async (profileData) => {
    try {
      return await put('/users/profile', profileData);
    } catch (error) {
      throw error;
    }
  },
};