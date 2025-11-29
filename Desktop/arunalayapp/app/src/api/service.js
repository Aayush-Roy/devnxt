// File: ../../api/service.js (Simulated Backend Call)

export const serviceAPI = {
  // Simulates fetching service data from your backend using the booking ID
  fetchServiceDetails: (bookingId) => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        if (bookingId) {
          // Mock data based on the booking ID
          resolve({
            name: 'Deluxe Home Deep Cleaning Service',
            description: 'This was a comprehensive cleaning service for a 3BHK apartment, including kitchen and bathroom sanitization.',
            imageUrl: 'https://picsum.photos/400/200?random=1', // Placeholder image
            provider: 'QuickClean Solutions',
            date: 'Oct 25, 2024',
          });
        } else {
          reject(new Error("Booking ID not found."));
        }
      }, 1500); // 1.5 second delay
    });
  },
};