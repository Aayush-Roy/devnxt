import { get } from './base';

export const billingAPI = {
  getBillingDetails: async (bookingId) => {
    try {
      return await get(`/billing/${bookingId}`);
    } catch (error) {
      throw error;
    }
  },
};