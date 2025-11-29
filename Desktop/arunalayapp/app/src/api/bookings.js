import { get, post, put } from './base';

export const bookingsAPI = {
  createBooking: async (bookingData) => {
    try {
      return await post('/bookings', bookingData);
    } catch (error) {
      throw error;
    }
  },

  getUserBookings: async () => {
    try {
      return await get('/bookings/my');
    } catch (error) {
      throw error;
    }
  },

  
  // getBookingDetails: async (id) => {
  //   try {
  //     return await get(`/bookings/${id}`);
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  getBookingDetails: async (id) => {
  console.log("🔥 API CALL → /bookings/" + id);
  try {
    const res = await get(`/bookings/${id}`);
    console.log("📩 API RESPONSE →", res);
    return res;
  } catch (error) {
    console.log("❌ API ERROR →", error);
    throw error;
  }
},


   cancelBooking:async (id) =>{
    try{
      return await put(`/bookings/${id}/cancel`);
    }catch(error){
      throw error;
    }
  }

 
};