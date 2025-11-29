import { get, put } from './base';

export const agentAPI = {

  getAgentProfile: async () => {
    try {
      return await get('/agents/profile');
    } catch (error) {
      throw error;
    }
  },

  updateAgentProfile: async (profileData) => {
    try {
      return await put('/agents/profile', profileData);
    } catch (error) {
      throw error;
    }
  },

  getAgentBookings: async () => {
    try {
      return await get('/agents/bookings');
    } catch (error) {
      throw error;
    }
  },
  getBookingDetails: async (id) => {
  return await get(`/agents/bookings/${id}`);
},
  updateBookingStatus: async (id, status) => {
    try {
      return await put(`/agents/bookings/${id}/status`, { status });
    } catch (error) {
      throw error;
    }
  },

  // updatePaymentStatus: async (id) => {
  //   try {
  //     return await put(`/agents/bookings/${id}/payment`);
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  updatePaymentStatus: async (id) => {
  return await put(`/agents/bookings/${id}/payment`, {
    paymentStatus: "paid",
  });
},

};