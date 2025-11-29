import { get, post } from './base';

export const feedbackAPI = {
  submitFeedback: async (feedbackData) => {
    try {
      return await post('/feedback', feedbackData);
    } catch (error) {
      throw error;
    }
  },

  getUserFeedbacks: async () => {
    try {
      return await get('/feedback/my');
    } catch (error) {
      throw error;
    }
  },
};