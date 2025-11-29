import { get } from './base';

export const servicesAPI = {
  getAllServices: async () => {
    try {
      return await get('/services');
    } catch (error) {
      throw error;
    }
  },

  getServiceById: async (id) => {
    try {
      return await get(`/services/${id}`);
    } catch (error) {
      throw error;
    }
  },
};