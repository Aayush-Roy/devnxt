// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, ScrollView } from 'react-native';
// // import { servicesAPI } from '../../api/services';
// // import { bookingsAPI } from '../../api/bookings';
// // import Button from '../../components/Button';
// // import Input from '../../components/Input';
// // import Toast from '../../components/Toast';
// // import colors from '../../utils/colors';

// // const BookingScreen = ({ route, navigation }) => {
// //   const { serviceId } = route.params;
// //   const [service, setService] = useState(null);
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [fetching, setFetching] = useState(true);
// //   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

// //   const showToast = (message, type) => {
// //     setToast({ message, type, isVisible: true });
// //   };

// //   const hideToast = () => {
// //     setToast({ message: '', type: '', isVisible: false });
// //   };

// //   const fetchServiceDetails = async () => {
// //     try {
// //       const response = await servicesAPI.getServiceById(serviceId);
// //       setService(response.data);
// //     } catch (error) {
// //       showToast(error.message || 'Failed to fetch service details', 'error');
// //     } finally {
// //       setFetching(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchServiceDetails();
// //   }, [serviceId]);

// //   const handleBooking = async () => {
// //     if (!date || !time || !address) {
// //       showToast('Please fill in all fields', 'error');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       // const bookingData = {
// //       //   serviceId,
// //       //   date,
// //       //   time,
// //       //   address,
// //       // };
// //       const bookingData = {
// //   service: serviceId,
// //   bookingDate: date,
// //   bookingTime: time,
// //   address: address
// // };

// //       console.log("Booking Payload →", bookingData);

// //       const response = await bookingsAPI.createBooking(bookingData);
// //       showToast('Booking successful', 'success');
// //       navigation.navigate('BookingDetails', { bookingId: response.booking._id });
// //     } catch (error) {
// //       showToast(error.message || 'Booking failed', 'error');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (fetching) {
// //     return <View style={styles.container}><Text style={styles.loadingText}>Loading...</Text></View>;
// //   }

// //   if (!service) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.errorText}>Service not found</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.serviceContainer}>
// //         <Text style={styles.serviceTitle}>{service.title}</Text>
// //         <Text style={styles.servicePrice}>${service.price}</Text>
// //       </View>
      
// //       <View style={styles.formContainer}>
// //         <Text style={styles.formTitle}>Booking Details</Text>
        
// //         <Input
// //           label="Date"
// //           value={date}
// //           onChangeText={setDate}
// //           placeholder="Select date (YYYY-MM-DD)"
// //         />
        
// //         <Input
// //           label="Time"
// //           value={time}
// //           onChangeText={setTime}
// //           placeholder="Select time (HH:MM)"
// //         />
        
// //         <Input
// //           label="Address"
// //           value={address}
// //           onChangeText={setAddress}
// //           placeholder="Enter your address"
// //           multiline
// //           numberOfLines={3}
// //         />
        
// //         <Button
// //           title="Confirm Booking"
// //           onPress={handleBooking}
// //           loading={loading}
// //         />
// //       </View>
      
// //       <Toast
// //         message={toast.message}
// //         type={toast.type}
// //         isVisible={toast.isVisible}
// //         onHide={hideToast}
// //       />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: colors.background,
// //   },
// //   serviceContainer: {
// //     backgroundColor: colors.card,
// //     padding: 20,
// //     margin: 20,
// //     borderRadius: 12,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   serviceTitle: {
// //     color: colors.text,
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     flex: 1,
// //   },
// //   servicePrice: {
// //     color: colors.primary,
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   formContainer: {
// //     padding: 20,
// //   },
// //   formTitle: {
// //     color: colors.text,
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   loadingText: {
// //     color: colors.text,
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginTop: 50,
// //   },
// //   errorText: {
// //     color: colors.error,
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginTop: 50,
// //   },
// // });

// // export default BookingScreen;
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TouchableOpacity,
// //   TextInput,
// //   Image,
// // } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { Ionicons } from '@expo/vector-icons';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { servicesAPI } from '../../api/services';
// // import { bookingsAPI } from '../../api/bookings';
// // import Toast from '../../components/Toast';
// // import colors from '../../utils/colors';

// // const BookingScreen = ({ route, navigation }) => {
// //   const { serviceId } = route.params;

// //   const [service, setService] = useState(null);
// //   const [date, setDate] = useState('');
// //   const [time, setTime] = useState('');
// //   const [address, setAddress] = useState('');

// //   const [loading, setLoading] = useState(false);
// //   const [fetching, setFetching] = useState(true);

// //   const [toast, setToast] = useState({
// //     message: '',
// //     type: '',
// //     isVisible: false,
// //   });

// //   const showToast = (message, type) => {
// //     setToast({ message, type, isVisible: true });
// //   };

// //   const hideToast = () => {
// //     setToast({ message: '', type, isVisible: false });
// //   };

// //   useEffect(() => {
// //     fetchServiceDetails();
// //   }, []);

// //   const fetchServiceDetails = async () => {
// //     try {
// //       const response = await servicesAPI.getServiceById(serviceId);
// //       setService(response.data);
// //     } catch (error) {
// //       showToast('Failed to load service', 'error');
// //     } finally {
// //       setFetching(false);
// //     }
// //   };

// //   // Generate next 7 dates
// //   const dates = [];
// //   for (let i = 0; i < 7; i++) {
// //     const d = new Date();
// //     d.setDate(d.getDate() + i);
// //     dates.push({
// //       day: d.getDate(),
// //       month: d.toLocaleString('default', { month: 'short' }),
// //       weekday: d.toLocaleString('default', { weekday: 'short' }),
// //       full: d.toISOString().split('T')[0],
// //     });
// //   }

// //   const timeSlots = [
// //     '9:00 AM', '10:00 AM', '11:00 AM',
// //     '12:00 PM', '2:00 PM', '3:00 PM',
// //     '4:00 PM', '5:00 PM', '6:00 PM'
// //   ];

// // //   const handleBooking = async () => {
// // //     if (!date || !time || !address) {
// // //       showToast('Please fill all fields', 'error');
// // //       return;
// // //     }

// // //     setLoading(true);

// // //     try {
// // //       // const bookingData = {
// // //       //   service: serviceId,
// // //       //   bookingDate: date,
// // //       //   bookingTime: time,
// // //       //   address: address,
// // //       // };
// // //       const bookingData = {
// // //   serviceId: serviceId,
// // //   selectedDate: date,
// // //   selectedTime: time,
// // //   userAddress: address
// // // };


// // //       const response = await bookingsAPI.createBooking(bookingData);

// // //       showToast('Booking successful', 'success');
// // //       navigation.navigate('BookingDetails', {
// // //         bookingId: response.booking._id,
// // //       });

// // //     } catch (error) {
// // //       showToast(error.message || 'Booking failed', 'error');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
// //   const handleBooking = async () => {
// //   if (!date || !time || !address) {
// //     showToast('Please fill all fields', 'error');
// //     return;
// //   }

// //   setLoading(true);

// //   try {
// //     const bookingData = {
// //       serviceId: serviceId,
// //       selectedDate: date,
// //       selectedTime: time,
// //       userAddress: address
// //     };

// //     const response = await bookingsAPI.createBooking(bookingData);

// //     // ✅ Show success toast
// //     showToast('Booking successful', 'success');

// //     // ✅ Navigate to BookingDetails with correct bookingId
// //     navigation.navigate('BookingDetails', {
// //       bookingId: response.data._id,
// //     });

// //   } catch (error) {
// //     showToast(error.response?.data?.message || error.message || 'Booking failed', 'error');
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// //   if (fetching) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <Text style={styles.loadingText}>Loading...</Text>
// //       </SafeAreaView>
// //     );
// //   }

// //   if (!service) {
// //     return (
// //       <SafeAreaView style={styles.container}>
// //         <Text style={styles.errorText}>Service Not Found</Text>
// //       </SafeAreaView>
// //     );
// //   }
// // console.log("DATE:", date);
// // console.log("TIME:", time);
// // console.log("ADDRESS:", address);

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <ScrollView showsVerticalScrollIndicator={false}>

// //         {/* Banner Image */}
// //         <View style={styles.imageContainer}>
// //           <Image source={{ uri: service.imageUrl }} style={styles.image} />
// //           <LinearGradient
// //             colors={['transparent', 'rgba(0,0,0,0.7)']}
// //             style={styles.imageOverlay}>
// //             <View style={styles.imageTextContainer}>
// //               <Text style={styles.imageTitle}>{service.title}</Text>
// //               <Text style={styles.imageSub}>
// //                 ₹{service.price} • {service.duration || "30 min"}
// //               </Text>
// //             </View>
// //           </LinearGradient>
// //         </View>

// //         {/* Booking Details */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Select Date</Text>
// //           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// //             {dates.map((d, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 style={[
// //                   styles.dateCard,
// //                   date === d.full && styles.selectedDateCard,
// //                 ]}
// //                 onPress={() => setDate(d.full)}
// //               >
// //                 <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
// //                   {d.weekday}
// //                 </Text>
// //                 <Text style={[styles.dateDay, date === d.full && styles.selectedText]}>
// //                   {d.day}
// //                 </Text>
// //                 <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
// //                   {d.month}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>

// //         {/* Select Time */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Select Time</Text>
// //           <View style={styles.timeGrid}>
// //             {timeSlots.map((t, index) => (
// //               <TouchableOpacity
// //                 key={index}
// //                 style={[
// //                   styles.timeSlot,
// //                   time === t && styles.selectedTimeSlot,
// //                 ]}
// //                 onPress={() => setTime(t)}
// //               >
// //                 <Text
// //                   style={[
// //                     styles.timeText,
// //                     time === t && styles.selectedText,
// //                   ]}
// //                 >
// //                   {t}
// //                 </Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </View>

// //         {/* Address */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Address</Text>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Enter complete address"
// //             placeholderTextColor="#777"
// //             value={address}
// //             onChangeText={setAddress}
// //             multiline
// //           />
// //         </View>

// //         <View style={{ height: 120 }} />
// //       </ScrollView>

// //       {/* Bottom Button */}
// //       <View style={styles.footer}>
// //         <LinearGradient
// //           colors={['#F88310', '#F96D00']}
// //           style={styles.bookButton}
// //         >
// //           <TouchableOpacity onPress={handleBooking} style={styles.bookButtonInner}>
// //             <Text style={styles.bookButtonText}>
// //               {loading ? "Booking..." : "Confirm Booking"}
// //             </Text>
// //             <Ionicons name="checkmark-circle" size={22} color="#fff" />
// //           </TouchableOpacity>
// //         </LinearGradient>
// //       </View>

// //       <Toast
// //         message={toast.message}
// //         type={toast.type}
// //         isVisible={toast.isVisible}
// //         onHide={hideToast}
// //       />
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#141413',
// //   },

// //   imageContainer: {
// //     height: 220,
// //     position: 'relative',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   imageOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     justifyContent: 'flex-end',
// //   },
// //   imageTextContainer: {
// //     padding: 20,
// //   },
// //   imageTitle: {
// //     color: '#fff',
// //     fontSize: 22,
// //     fontWeight: '700',
// //   },
// //   imageSub: {
// //     color: '#F88310',
// //     marginTop: 4,
// //     fontSize: 14,
// //   },

// //   section: {
// //     padding: 20,
// //   },
// //   sectionTitle: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //     marginBottom: 12,
// //   },

// //   dateCard: {
// //     backgroundColor: '#1F1F1E',
// //     padding: 12,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: '#2A2A29',
// //     alignItems: 'center',
// //     minWidth: 70,
// //     marginRight: 10,
// //   },
// //   selectedDateCard: {
// //     backgroundColor: '#F88310',
// //     borderColor: '#F88310',
// //   },
// //   dateText: {
// //     color: '#999',
// //     fontSize: 12,
// //   },
// //   dateDay: {
// //     color: '#fff',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   selectedText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },

// //   timeGrid: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     gap: 10,
// //   },
// //   timeSlot: {
// //     backgroundColor: '#1F1F1E',
// //     paddingVertical: 12,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#2A2A29',
// //   },
// //   selectedTimeSlot: {
// //     backgroundColor: '#F88310',
// //     borderColor: '#F88310',
// //   },
// //   timeText: {
// //     color: '#fff',
// //   },

// //   input: {
// //     backgroundColor: '#1F1F1E',
// //     color: '#fff',
// //     padding: 15,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#2A2A29',
// //     textAlignVertical: 'top',
// //   },

// //   footer: {
// //     position: 'absolute',
// //     bottom: 0,
// //     width: '100%',
// //     padding: 20,
// //     backgroundColor: '#1F1F1E',
// //     borderTopWidth: 1,
// //     borderTopColor: '#2A2A29',
// //   },
// //   bookButton: {
// //     borderRadius: 10,
// //   },
// //   bookButtonInner: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingVertical: 16,
// //     gap: 10,
// //   },
// //   bookButtonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },

// //   loadingText: {
// //     color: '#fff',
// //     textAlign: 'center',
// //     marginTop: 40,
// //     fontSize: 18,
// //   },
// //   errorText: {
// //     color: 'red',
// //     textAlign: 'center',
// //     marginTop: 40,
// //     fontSize: 18,
// //   },
// // });

// // export default BookingScreen;
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { servicesAPI } from '../../api/services';
// import { bookingsAPI } from '../../api/bookings';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// const BookingScreen = ({ route, navigation }) => {
//   const { serviceId } = route.params;

//   const [service, setService] = useState(null);
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [address, setAddress] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);
//   const [toast, setToast] = useState({
//     message: '',
//     type: '',
//     isVisible: false,
//   });

//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type:"", isVisible: false });
//   };

//   useEffect(() => {
//     fetchServiceDetails();
//   }, []);

//   const fetchServiceDetails = async () => {
//     try {
//       const response = await servicesAPI.getServiceById(serviceId);
//       // Handle different response structures
//       const serviceData = response.data || response;
//       setService(serviceData);
//     } catch (error) {
//       showToast('Failed to load service', 'error');
//       console.error('Service fetch error:', error);
//     } finally {
//       setFetching(false);
//     }
//   };

//   // Generate next 7 dates
//   const dates = [];
//   for (let i = 0; i < 7; i++) {
//     const d = new Date();
//     d.setDate(d.getDate() + i);
//     dates.push({
//       day: d.getDate(),
//       month: d.toLocaleString('default', { month: 'short' }),
//       weekday: d.toLocaleString('default', { weekday: 'short' }),
//       full: d.toISOString().split('T')[0],
//     });
//   }

//   const timeSlots = [
//     '9:00 AM', '10:00 AM', '11:00 AM',
//     '12:00 PM', '2:00 PM', '3:00 PM',
//     '4:00 PM', '5:00 PM', '6:00 PM'
//   ];

//   const handleBooking = async () => {
//     if (!date || !time || !address) {
//       showToast('Please fill all fields', 'error');
//       return;
//     }

//     // Simple address validation
//     if (address.trim().length < 10) {
//       showToast('Please enter a complete address', 'error');
//       return;
//     }

//     setLoading(true);

//     try {
     
//       const bookingData = {
//       serviceId: serviceId,
//       selectedDate: date,
//       selectedTime: time,
//       userAddress: address
//     };

//       const response = await bookingsAPI.createBooking(bookingData);

//       showToast('Booking successful', 'success');
      
//       // Navigate to BookingDetails with correct bookingId
//       // Handle different response structures
//       const bookingId = response.data?._id || response._id || response.booking?._id;
//       console.log(bookingId);
      
//       if (bookingId) {
//         navigation.navigate('BookingDetails', { bookingId });
//       } else {
//         showToast('Booking created but unable to view details', 'warning');
//         navigation.goBack();
//       }

//     } catch (error) {
//       console.error('Booking error:', error);
//       const errorMessage = error.response?.data?.message || error.message || 'Booking failed';
//       showToast(errorMessage, 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (fetching) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.loadingContainer}>
//           <Text style={styles.loadingText}>Loading service details...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (!service) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.errorContainer}>
//           <Ionicons name="alert-circle-outline" size={50} color={colors.error} />
//           <Text style={styles.errorText}>Service Not Found</Text>
//           <TouchableOpacity 
//             style={styles.backButton} 
//             onPress={() => navigation.goBack()}
//           >
//             <Text style={styles.backButtonText}>Go Back</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Banner Image */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={{ uri: service.imageUrl || service.image || 'https://via.placeholder.com/400' }} 
//             style={styles.image} 
//           />
//           <LinearGradient
//             colors={['transparent', 'rgba(0,0,0,0.7)']}
//             style={styles.imageOverlay}
//           >
//             <View style={styles.imageTextContainer}>
//               <Text style={styles.imageTitle}>{service.title}</Text>
//               <Text style={styles.imageSub}>
//                 ₹{service.price} • {service.duration || "30 min"}
//               </Text>
//             </View>
//           </LinearGradient>
//         </View>

//         {/* Service Description */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>About this service</Text>
//           <Text style={styles.description}>
//             {service.description || 'Professional physiotherapy service at your doorstep.'}
//           </Text>
//         </View>

//         {/* Booking Details */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Select Date</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             {dates.map((d, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.dateCard,
//                   date === d.full && styles.selectedDateCard,
//                 ]}
//                 onPress={() => setDate(d.full)}
//               >
//                 <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
//                   {d.weekday}
//                 </Text>
//                 <Text style={[styles.dateDay, date === d.full && styles.selectedText]}>
//                   {d.day}
//                 </Text>
//                 <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
//                   {d.month}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         </View>

//         {/* Select Time */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Select Time</Text>
//           <View style={styles.timeGrid}>
//             {timeSlots.map((t, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.timeSlot,
//                   time === t && styles.selectedTimeSlot,
//                 ]}
//                 onPress={() => setTime(t)}
//               >
//                 <Text
//                   style={[
//                     styles.timeText,
//                     time === t && styles.selectedText,
//                   ]}
//                 >
//                   {t}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         {/* Address */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Service Address</Text>
//           <View style={styles.addressContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter complete address with landmark"
//               placeholderTextColor="#777"
//               value={address}
//               onChangeText={setAddress}
//               multiline
//             />
//             {address.length > 0 && address.length < 10 && (
//               <Text style={styles.addressError}>
//                 Please enter a more detailed address
//               </Text>
//             )}
//           </View>
//         </View>

//         <View style={{ height: 120 }} />
//       </ScrollView>

//       {/* Bottom Button */}
//       <View style={styles.footer}>
//         <LinearGradient
//           colors={['#F88310', '#F96D00']}
//           style={styles.bookButton}
//         >
//           <TouchableOpacity onPress={handleBooking} style={styles.bookButtonInner} disabled={loading}>
//             <Text style={styles.bookButtonText}>
//               {loading ? "Booking..." : "Confirm Booking"}
//             </Text>
//             <Ionicons name="checkmark-circle" size={22} color="#fff" />
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>

//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#141413',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   errorText: {
//     color: '#fff',
//     fontSize: 18,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   backButton: {
//     backgroundColor: colors.primary,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   backButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },

//   imageContainer: {
//     height: 220,
//     position: 'relative',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   imageOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//   },
//   imageTextContainer: {
//     padding: 20,
//   },
//   imageTitle: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   imageSub: {
//     color: '#F88310',
//     marginTop: 4,
//     fontSize: 14,
//   },

//   section: {
//     padding: 20,
//   },
//   sectionTitle: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 12,
//   },
//   description: {
//     color: '#ccc',
//     fontSize: 14,
//     lineHeight: 20,
//   },

//   dateCard: {
//     backgroundColor: '#1F1F1E',
//     padding: 12,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//     alignItems: 'center',
//     minWidth: 70,
//     marginRight: 10,
//   },
//   selectedDateCard: {
//     backgroundColor: '#F88310',
//     borderColor: '#F88310',
//   },
//   dateText: {
//     color: '#999',
//     fontSize: 12,
//   },
//   dateDay: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   selectedText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },

//   timeGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 10,
//   },
//   timeSlot: {
//     backgroundColor: '#1F1F1E',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//   },
//   selectedTimeSlot: {
//     backgroundColor: '#F88310',
//     borderColor: '#F88310',
//   },
//   timeText: {
//     color: '#fff',
//   },

//   addressContainer: {
//     position: 'relative',
//   },
//   input: {
//     backgroundColor: '#1F1F1E',
//     color: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//     textAlignVertical: 'top',
//     minHeight: 80,
//   },
//   addressError: {
//     color: '#ff6b6b',
//     fontSize: 12,
//     marginTop: 5,
//   },

//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     padding: 20,
//     backgroundColor: '#1F1F1E',
//     borderTopWidth: 1,
//     borderTopColor: '#2A2A29',
//   },
//   bookButton: {
//     borderRadius: 10,
//   },
//   bookButtonInner: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 16,
//     gap: 10,
//   },
//   bookButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });



// current location 
// export default BookingScreen;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location'; // <-- New: Import Location
import { servicesAPI } from '../../api/services';
import { bookingsAPI } from '../../api/bookings';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const BookingScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;

  const [service, setService] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [locationLoading, setLocationLoading] = useState(false); // New state for location

  const [latitude, setLatitude] = useState(null);   // <-- New State
  const [longitude, setLongitude] = useState(null);  // <-- New State

  const [toast, setToast] = useState({
    message: '',
    type: '',
    isVisible: false,
  });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type:"", isVisible: false });
  };

  useEffect(() => {
    fetchServiceDetails();
    fetchCurrentLocation(); // <-- Automatically fetch location on load
  }, []);

  const fetchServiceDetails = async () => {
    try {
      const response = await servicesAPI.getServiceById(serviceId);
      // Handle different response structures
      const serviceData = response.data || response;
      setService(serviceData);
    } catch (error) {
      showToast('Failed to load service', 'error');
      console.error('Service fetch error:', error);
    } finally {
      setFetching(false);
    }
  };
  // BookingScreen.js में नया फ़ंक्शन जोड़ें

const geocodeAddress = async (manualAddress) => {
    if (manualAddress.trim().length < 15) {
        showToast('Address is too short for accurate coordinates.', 'warning');
        return false;
    }

    setLocationLoading(true);
    showToast('Validating address...', 'info');

    try {
        // Expo-Location की जियोकोडिंग API का उपयोग करना:
        let locationResults = await Location.geocodeAsync(manualAddress);

        if (locationResults.length > 0) {
            const { latitude, longitude } = locationResults[0];

            // ⭐️ महत्वपूर्ण: मैन्युअल पते के लिए Lat/Lon अपडेट करना
            setLatitude(latitude);
            setLongitude(longitude);
            showToast('Address validated and coordinates updated.', 'success');
            return true;
        } else {
            showToast('Could not find coordinates for this address. Please refine.', 'error');
            return false;
        }
    } catch (error) {
        console.error('Manual Geocoding Error:', error);
        showToast('Validation failed. Check your network.', 'error');
        return false;
    } finally {
        setLocationLoading(false);
    }
};
  const fetchCurrentLocation = async () => {
    setLocationLoading(true);
    try {
      // 1. Request foreground permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        showToast('Permission to access location was denied', 'warning');
        return;
      }

      showToast('Fetching your current location...', 'info');

      // 2. Get current coordinates
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        timeout: 5000,
      });

      const { latitude, longitude } = location.coords;
     
      setLatitude(latitude);
  setLongitude(longitude);
      // 3. Geocode: Convert coordinates to a readable address
      let geocodedAddress = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // 4. Format the address
      if (geocodedAddress.length > 0) {
        const firstResult = geocodedAddress[0];
        // Concatenate address components (customize this format as needed)
        const formattedAddress = [
          firstResult.name,
          firstResult.street,
          firstResult.city,
          firstResult.region,
          firstResult.postalCode,
          firstResult.country,
        ].filter(Boolean).join(', '); // Remove null/undefined and join
        
        // Set the address state
        setAddress(formattedAddress);
        showToast('Current location loaded', 'success');
      } else {
        showToast('Could not determine address from coordinates', 'warning');
      }

    } catch (error) {
      console.error('Location fetch error:', error);
      showToast('Failed to get current location. Please enter manually.', 'error');
    } finally {
      setLocationLoading(false);
    }
  };
  //  console.log('Current Coordinates:', latitude, longitude);

  // Generate next 7 dates
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    dates.push({
      day: d.getDate(),
      month: d.toLocaleString('default', { month: 'short' }),
      weekday: d.toLocaleString('default', { weekday: 'short' }),
      full: d.toISOString().split('T')[0],
    });
  }

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  // const handleBooking = async () => {
  //   if (!date || !time || !address) {
  //     showToast('Please fill all fields', 'error');
  //     return;
  //   }
  //   if (!latitude || !longitude) {
  //   showToast('Location coordinates are missing. Please use "Use Current Location" button.', 'error');
  //   return;
  // }

  //   // Simple address validation
  //   if (address.trim().length < 10) {
  //     showToast('Please enter a complete address', 'error');
  //     return;
  //   }
  //   setLoading(true);
  //   let finalLatitude = latitude;
  //   let finalLongitude = longitude;
  //   setLoading(true);
  //   if (!latitude || !longitude) {
  //       const validated = await geocodeAddress(address);
  //       if (!validated) {
  //           setLoading(false);
  //           return; // Geocoding failed, stop booking
  //       }
  //       // Update final coordinates after successful geocoding
  //       finalLatitude = latitude; 
  //       finalLongitude = longitude; 
  //   }
  //   try {
     
  //     const bookingData = {
  //     serviceId: serviceId,
  //     selectedDate: date,
  //     selectedTime: time,
  //     userAddress: address,
  //     userLatitude: latitude,
  //     userLongitude: longitude,
  //   };

  //     const response = await bookingsAPI.createBooking(bookingData);

  //     showToast('Booking successful', 'success');
      
  //     // Navigate to BookingDetails with correct bookingId
  //     // Handle different response structures
  //     const bookingId = response.data?._id || response._id || response.booking?._id;
  //     console.log(bookingId);
      
  //     if (bookingId) {
  //       navigation.navigate('BookingDetails', { bookingId });
  //     } else {
  //       showToast('Booking created but unable to view details', 'warning');
  //       navigation.goBack();
  //     }

  //   } catch (error) {
  //     console.error('Booking error:', error);
  //     const errorMessage = error.response?.data?.message || error.message || 'Booking failed';
  //     showToast(errorMessage, 'error');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleBooking = async () => {
    // 1. प्राथमिक वैलिडेशन (Date, Time, Address)
    if (!date || !time || !address) {
      showToast('Please fill all fields', 'error');
      return;
    }

    // 2. एड्रेस की लंबाई की वैलिडेशन
    if (address.trim().length < 10) {
      showToast('Please enter a complete address (minimum 15 characters) with landmark.', 'error');
      return;
    }

    setLoading(true);

    let finalLatitude = latitude;
    let finalLongitude = longitude;

    // 3. ⭐️ जियोकोडिंग चेक: यदि Lat/Lon स्टेट में नहीं हैं (मतलब 'Current Location' यूज़ नहीं किया गया), 
    //    तो मैन्युअल एड्रेस को जियोकोड करने की कोशिश करें।
    if (!latitude || !longitude) {
      // geocodeAddress को कॉल करें, यह नए कोऑर्डिनेट्स को RETURN करेगा।
      const newCoords = await geocodeAddress(address); 

      if (!newCoords) {
        // जियोकोडिंग विफल होने पर, बुकिंग रोक दें।
        setLoading(false);
        return; 
      }
      
      // रिटर्न किए गए (नए) कोऑर्डिनेट्स का उपयोग करें
      finalLatitude = newCoords.latitude; 
      finalLongitude = newCoords.longitude; 
    }
    
    // 4. अंतिम सुरक्षा जाँच
    if (!finalLatitude || !finalLongitude) {
        setLoading(false);
        showToast('Failed to lock onto a location. Please try again.', 'error');
        return;
    }

    try {
      const bookingData = {
        serviceId: serviceId,
        selectedDate: date,
        selectedTime: time,
        userAddress: address,
        // ⭐️ हमेशा final variables का उपयोग करें
        userLatitude: finalLatitude, 
        userLongitude: finalLongitude,
      };

      const response = await bookingsAPI.createBooking(bookingData);

      showToast('Booking successful', 'success');
      
      const bookingId = response.data?._id || response._id || response.booking?._id;
      
      if (bookingId) {
        navigation.navigate('BookingDetails', { bookingId });
      } else {
        showToast('Booking created but unable to view details', 'warning');
        navigation.goBack();
      }

    } catch (error) {
      console.error('Booking error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Booking failed';
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
};
  if (fetching) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading service details...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!service) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={50} color={colors.error} />
          <Text style={styles.errorText}>Service Not Found</Text>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: service.imageUrl || service.image || 'https://via.placeholder.com/400' }} 
            style={styles.image} 
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.imageOverlay}
          >
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageTitle}>{service.title}</Text>
              <Text style={styles.imageSub}>
                ₹{service.price} • {service.duration || "30 min"}
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Service Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this service</Text>
          <Text style={styles.description}>
            {service.description || 'Professional physiotherapy service at your doorstep.'}
          </Text>
        </View>

        {/* Booking Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((d, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  date === d.full && styles.selectedDateCard,
                ]}
                onPress={() => setDate(d.full)}
              >
                <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
                  {d.weekday}
                </Text>
                <Text style={[styles.dateDay, date === d.full && styles.selectedText]}>
                  {d.day}
                </Text>
                <Text style={[styles.dateText, date === d.full && styles.selectedText]}>
                  {d.month}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Select Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeGrid}>
            {timeSlots.map((t, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlot,
                  time === t && styles.selectedTimeSlot,
                ]}
                onPress={() => setTime(t)}
              >
                <Text
                  style={[
                    styles.timeText,
                    time === t && styles.selectedText,
                  ]}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Address</Text>
          <View style={styles.addressContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter complete address with landmark"
              placeholderTextColor="#777"
              value={address}
              onChangeText={setAddress}
              multiline
            />
            
            {/* New Button to Fetch Location */}
            <TouchableOpacity 
              style={[styles.locationButton, locationLoading && {opacity: 0.7}]} 
              onPress={fetchCurrentLocation}
              disabled={locationLoading}
            >
              <Ionicons 
                name={locationLoading ? "hourglass" : "locate-sharp"} 
                size={20} 
                color="#fff" 
              />
              <Text style={styles.locationButtonText}>
                {locationLoading ? "Fetching..." : "Use Current Location"}
              </Text>
            </TouchableOpacity>

            {address.length > 0 && address.length < 10 && (
              <Text style={styles.addressError}>
                Please enter a more detailed address
              </Text>
            )}
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.footer}>
        <LinearGradient
          colors={['#F88310', '#F96D00']}
          style={styles.bookButton}
        >
          <TouchableOpacity onPress={handleBooking} style={styles.bookButtonInner} disabled={loading}>
            <Text style={styles.bookButtonText}>
              {loading ? "Booking..." : "Confirm Booking"}
            </Text>
            <Ionicons name="checkmark-circle" size={22} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onHide={hideToast}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141413',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  imageContainer: {
    height: 220,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    padding: 20,
  },
  imageTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  imageSub: {
    color: '#F88310',
    marginTop: 4,
    fontSize: 14,
  },

  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },

  dateCard: {
    backgroundColor: '#1F1F1E',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A29',
    alignItems: 'center',
    minWidth: 70,
    marginRight: 10,
  },
  selectedDateCard: {
    backgroundColor: '#F88310',
    borderColor: '#F88310',
  },
  dateText: {
    color: '#999',
    fontSize: 12,
  },
  dateDay: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    backgroundColor: '#1F1F1E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  selectedTimeSlot: {
    backgroundColor: '#F88310',
    borderColor: '#F88310',
  },
  timeText: {
    color: '#fff',
  },

  addressContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#1F1F1E',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2A29',
    textAlignVertical: 'top',
    minHeight: 80,
  },
  addressError: {
    color: '#ff6b6b',
    fontSize: 12,
    marginTop: 5,
  },
  
  // New Styles for Location Button
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db', 
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  locationButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  // End New Styles

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#1F1F1E',
    borderTopWidth: 1,
    borderTopColor: '#2A2A29',
  },
  bookButton: {
    borderRadius: 10,
  },
  bookButtonInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingScreen;