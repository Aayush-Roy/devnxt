
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = "https://arunalayabackendv2-1.onrender.com/api";
// "https://arunalayabackendv2-1.onrender.com/api"
// "http://192.168.1.33:5000/api";
// 3
// "";
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


// base.js

// import AsyncStorage from '@react-native-async-storage/async-storage';

// // 💡 BASE_URL को अपनी सही URL पर सेट करें
// export const BASE_URL = "https://arunalayabackendv2-1.onrender.com/api"; 

// export const apiRequest = async (endpoint, options = {}) => {
//   const url = `${BASE_URL}${endpoint}`;
  
//   const defaultOptions = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
  
//   try {
//     // ⭐️ FIX: AsyncStorage key 'token' से बदलकर 'userToken' किया गया
//     let token = await AsyncStorage.getItem('userToken'); 
    
//     // टोकन को डी-कोट करने का लॉजिक (यदि यह स्ट्रिंग के अंदर स्ट्रिंग के रूप में सहेजा गया है)
//     if (token && token.startsWith('"') && token.endsWith('"')) {
//       token = token.slice(1, -1);
//     }

//     if (token) {
//       // ⭐️ AUTH FIX: Bearer Token को Authorization Header में जोड़ना
//       defaultOptions.headers.Authorization = `Bearer ${token}`;
//       // console.log("Token added to header."); // Debugging के लिए
//     } else {
//       // console.log("No token found for this request."); // Debugging के लिए
//     }
//   } catch (error) {
//     console.error('Error getting token from AsyncStorage', error);
//   }

//   const config = {
//     ...defaultOptions,
//     ...options,
//     headers: {
//       ...defaultOptions.headers,
//       ...options.headers,
//     },
//   };

//   try {
//     const response = await fetch(url, config);
//     const data = await response.json();
    
//     if (!response.ok) {
//       // 🚨 यह यहाँ Error message दिखाएगा (जैसे: Not authorized, token failed)
//       throw new Error(data.message || `Request failed with status ${response.status}`);
//     }
    
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const get = (endpoint) => apiRequest(endpoint, { method: 'GET' });
// export const post = (endpoint, data) => apiRequest(endpoint, {
//   method: 'POST',
//   body: JSON.stringify(data),
// });
// export const put = (endpoint, data) => apiRequest(endpoint, {
//   method: 'PUT',
//   body: JSON.stringify(data),
// });
// export const del = (endpoint) => apiRequest(endpoint, { method: 'DELETE' });