// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { agentAPI } from '../../api/agent';
// import { bookingsAPI } from '../../api/bookings';
// import { billingAPI } from '../../api/billing';
// import Button from '../../components/Button';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';
// const AgentBookingDetailsScreen = ({ route, navigation }) => {
//   const { bookingId } = route.params;
//   console.log(bookingId)
//   const [booking, setBooking] = useState(null);
//   const [billing, setBilling] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type: '', isVisible: false });
//   };

// //   const fetchBookingDetails = async () => {
// //     try {
// //       const bookingResponse = await bookingsAPI.getBookingDetails(bookingId);
// //       console.log("-->", bookingResponse)
// //       // setBooking(bookingResponse.booking);
// //       setBooking(
// //   bookingResponse.booking ||
// //   bookingResponse.data?.booking ||
// //   bookingResponse.data ||
// //   null
// // );

      
// //       const billingResponse = await billingAPI.getBillingDetails(bookingId);
// //       setBilling(billingResponse.billing);
// //     } catch (error) {
// //       showToast(error.message || 'Failed to fetch booking details', 'error');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// // const fetchBookingDetails = async () => {
// //   try {
// //     const bookingResponse = await bookingsAPI.getBookingDetails(bookingId);
// //     console.log("BOOKING =>", bookingResponse);
    
// //     // setBooking(bookingResponse.data?.booking || bookingResponse.booking || null);
// //     setBooking(bookingResponse.data?.booking || bookingResponse.booking || null);


// //     const billingResponse = await billingAPI.getBillingDetails(bookingId);
// //     setBilling(billingResponse.data?.billing || billingResponse.billing || null);

// //   } catch (error) {
// //     showToast(error.message || 'Failed to fetch booking details', 'error');
// //   } finally {
// //     setLoading(false);
// //   }
// // };


// const fetchBookingDetails = async () => {
//   try {
//     const bookingResponse = await agentAPI.getBookingDetails(bookingId);

//     console.log("BOOKING DETAILS FETCHED →", bookingResponse.data);

//     setBooking(bookingResponse.data || null);
//     const billingResponse = await billingAPI.getBillingDetails(bookingId);
//     setBilling(billingResponse.data?.billing || billingResponse.billing || null);
//     console.log("billing->",billingResponse.data);

//   } catch (error) {
//     console.log("❌ Screen Error →", error);
//     showToast(error.message || 'Failed to fetch booking details', 'error');
//   } finally {
//     setLoading(false);
//   }
// };
//  useEffect(()=>{
//   fetchBookingDetails()
//  },[])

//   const updateBookingStatus = async (status) => {
//     setUpdating(true);
//     try {
//       await agentAPI.updateBookingStatus(bookingId, status);
//       setBooking({ ...booking, status });
//       showToast(`Booking status updated to ${status}`, 'success');
//     } catch (error) {
//       showToast(error.message || 'Failed to update booking status', 'error');
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const updatePaymentStatus = async () => {
//     setUpdating(true);
//     try {
//       await agentAPI.updatePaymentStatus(bookingId);
//       setBilling({ ...billing, paymentStatus: 'paid' });
//       showToast('Payment status updated to paid', 'success');
//     } catch (error) {
//       showToast(error.message || 'Failed to update payment status', 'error');
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const getStatusColor = () => {
//     switch (booking?.status) {
//       case 'pending':
//         return colors.warning;
//       case 'confirmed':
//         return colors.primary;
//       case 'on-the-way':
//         return colors.primary;
//       case 'completed':
//         return colors.success;
//       case 'cancelled':
//         return colors.error;
//       default:
//         return colors.gray;
//     }
//   };

//   if (loading) {
//     return <View style={styles.container}><Text style={styles.loadingText}>Loading...</Text></View>;
//   }

//   if (!booking) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Bookings not found</Text>
//       </View>
//     );
//   }

//   // return (
//   //   <ScrollView style={styles.container}>
//   //     <View style={styles.statusContainer}>
//   //       {/* <Text style={styles.statusLabel}>Status</Text> */}
//   //       <Text style={styles.statusText}>{booking.bookingStatus}</Text>

//   //       <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
//   //         <Text style={styles.statusText}>{booking.status}</Text>
//   //       </View>
//   //     </View>
      
//   //     <View style={styles.section}>
//   //       <Text style={styles.sectionTitle}>Service Details</Text>
//   //       <View style={styles.card}>
//   //         <Text style={styles.serviceTitle}>{booking.title}</Text>
//   //         <Text style={styles.serviceCategory}>{booking.category}</Text>
//   //         <Text style={styles.servicePrice}>${booking.price}</Text>
//   //       </View>
//   //     </View>
      
//   //     <View style={styles.section}>
//   //       <Text style={styles.sectionTitle}>Customer Information</Text>
//   //       <View style={styles.card}>
//   //         <Text style={styles.detailLabel}>Name:</Text>
//   //         <Text style={styles.detailValue}>{booking.name}</Text>
          
//   //         <Text style={styles.detailLabel}>Email:</Text>
//   //         <Text style={styles.detailValue}>{booking.email}</Text>
          
//   //         <Text style={styles.detailLabel}>Phone:</Text>
//   //         <Text style={styles.detailValue}>{booking.phone}</Text>
//   //       </View>
//   //     </View>
      
//   //     <View style={styles.section}>
//   //       <Text style={styles.sectionTitle}>Booking Information</Text>
//   //       <View style={styles.card}>
//   //         <Text style={styles.detailLabel}>Date:</Text>
//   //         <Text style={styles.detailValue}>{booking.date}</Text>
          
//   //         <Text style={styles.detailLabel}>Time:</Text>
//   //         <Text style={styles.detailValue}>{booking.time}</Text>
          
//   //         <Text style={styles.detailLabel}>Address:</Text>
//   //         <Text style={styles.detailValue}>{booking.address}</Text>
//   //       </View>
//   //     </View>
      
//   //     {billing && (
//   //       <View style={styles.section}>
//   //         <Text style={styles.sectionTitle}>Billing Details</Text>
//   //         <View style={styles.card}>
//   //           <View style={styles.billingRow}>
//   //             <Text style={styles.billingLabel}>Service Cost:</Text>
//   //             <Text style={styles.billingValue}>${billing.serviceCost}</Text>
//   //           </View>
//   //           <View style={styles.billingRow}>
//   //             <Text style={styles.billingLabel}>Travel Cost:</Text>
//   //             <Text style={styles.billingValue}>${billing.travelCost}</Text>
//   //           </View>
//   //           <View style={styles.billingRow}>
//   //             <Text style={styles.billingLabel}>Total:</Text>
//   //             <Text style={styles.billingTotal}>${billing.total}</Text>
//   //           </View>
//   //           <View style={styles.billingRow}>
//   //             <Text style={styles.billingLabel}>Payment Status:</Text>
//   //             <Text style={styles.billingValue}>{billing.paymentStatus}</Text>
//   //           </View>
            
//   //           {billing.paymentStatus !== 'paid' && (
//   //             <Button
//   //               title="Mark as Paid"
//   //               onPress={updatePaymentStatus}
//   //               loading={updating}
//   //               style={styles.paymentButton}
//   //             />
//   //           )}
//   //         </View>
//   //       </View>
//   //     )}
      
//   //     <View style={styles.section}>
//   //       <Text style={styles.sectionTitle}>Update Status</Text>
//   //       <View style={styles.statusButtonsContainer}>
//   //         {booking.status === 'pending' && (
//   //           <Button
//   //             title="Confirm"
//   //             onPress={() => updateBookingStatus('confirmed')}
//   //             loading={updating}
//   //             style={styles.statusButton}
//   //           />
//   //         )}
          
//   //         {booking.status === 'confirmed' && (
//   //           <Button
//   //             title="On The Way"
//   //             onPress={() => updateBookingStatus('on-the-way')}
//   //             loading={updating}
//   //             style={styles.statusButton}
//   //           />
//   //         )}
          
//   //         {booking.status === 'on-the-way' && (
//   //           <Button
//   //             title="Complete"
//   //             onPress={() => updateBookingStatus('completed')}
//   //             loading={updating}
//   //             style={styles.statusButton}
//   //           />
//   //         )}
          
//   //         {booking.status !== 'completed' && booking.status !== 'cancelled' && (
//   //           <Button
//   //             title="Cancel"
//   //             onPress={() => updateBookingStatus('cancelled')}
//   //             loading={updating}
//   //             style={[styles.statusButton, styles.cancelButton]}
//   //           />
//   //         )}
//   //       </View>
        
//   //     </View>
      
//   //     <Toast
//   //       message={toast.message}
//   //       type={toast.type}
//   //       isVisible={toast.isVisible}
//   //       onHide={hideToast}
//   //     />
//   //   </ScrollView>
//   // );

//   return (
//   <ScrollView style={styles.container}>

//     {/* STATUS */}
//     <View style={styles.statusContainer}>
//       <Text style={styles.statusText}>{booking.bookingStatus}</Text>

//       <View style={[styles.statusBadge, { backgroundColor: getStatusColor(booking.bookingStatus) }]}>
//         <Text style={styles.statusText}>{booking.bookingStatus}</Text>
//       </View>
//     </View>

//     {/* SERVICE DETAILS */}
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Service Details</Text>
//       <View style={styles.card}>
//         <Text style={styles.serviceTitle}>{booking.serviceId?.title}</Text>
//         <Text style={styles.serviceCategory}>{booking.serviceId?.category}</Text>
//         <Text style={styles.servicePrice}>₹{booking.serviceId?.price}</Text>
//       </View>
//     </View>

//     {/* CUSTOMER INFO */}
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Customer Information</Text>
//       <View style={styles.card}>
//         <Text style={styles.detailLabel}>Name:</Text>
//         <Text style={styles.detailValue}>{booking.userId?.name}</Text>

//         <Text style={styles.detailLabel}>Email:</Text>
//         <Text style={styles.detailValue}>{booking.userId?.email}</Text>

//         <Text style={styles.detailLabel}>Phone:</Text>
//         <Text style={styles.detailValue}>{booking.userId?.phone}</Text>
//       </View>
//     </View>

//     {/* BOOKING INFO */}
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Booking Information</Text>
//       <View style={styles.card}>
//         <Text style={styles.detailLabel}>Date:</Text>
//         <Text style={styles.detailValue}>{booking.selectedDate?.split('T')[0]}</Text>

//         <Text style={styles.detailLabel}>Time:</Text>
//         <Text style={styles.detailValue}>{booking.selectedTime}</Text>

//         <Text style={styles.detailLabel}>Address:</Text>
//         <Text style={styles.detailValue}>{booking.userAddress}</Text>
//       </View>
//     </View>

//     {/* BILLING */}
//     {billing && (
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Billing Details</Text>
//         <View style={styles.card}>
//           <View style={styles.billingRow}>
//             <Text style={styles.billingLabel}>Service Cost:</Text>
//             <Text style={styles.billingValue}>₹{billing.servicePrice}</Text>
//           </View>
//           <View style={styles.billingRow}>
//             <Text style={styles.billingLabel}>Travel Cost:</Text>
//             <Text style={styles.billingValue}>₹{billing.travelCost}</Text>
//           </View>
//           <View style={styles.billingRow}>
//             <Text style={styles.billingLabel}>Total:</Text>
//             <Text style={styles.billingTotal}>₹{billing.totalAmount}</Text>
//           </View>
//           <View style={styles.billingRow}>
//             <Text style={styles.billingLabel}>Payment Status:</Text>
//             <Text style={styles.billingValue}>{booking.paymentStatus}</Text>
//           </View>

//           {billing.paymentStatus !== 'paid' && (
//             <Button
//               title="Mark as Paid"
//               onPress={updatePaymentStatus}
//               loading={updating}
//               style={styles.paymentButton}
//             />
//           )}
//         </View>
//       </View>
//     )}

//     {/* UPDATE STATUS BUTTONS */}
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Update Status</Text>
//       <View style={styles.statusButtonsContainer}>
        
//         {booking.bookingStatus === 'pending' && (
//           <Button
//             title="Confirm"
//             onPress={() => updateBookingStatus('confirmed')}
//             loading={updating}
//             style={styles.statusButton}
//           />
//         )}

//         {booking.bookingStatus === 'confirmed' && (
//           <Button
//             title="On The Way"
//             onPress={() => updateBookingStatus('on-the-way')}
//             loading={updating}
//             style={styles.statusButton}
//           />
//         )}

//         {booking.bookingStatus === 'on-the-way' && (
//           <Button
//             title="Complete"
//             onPress={() => updateBookingStatus('completed')}
//             loading={updating}
//             style={styles.statusButton}
//           />
//         )}

//         {booking.bookingStatus !== 'completed' &&
//           booking.bookingStatus !== 'cancelled' && (
//             <Button
//               title="Cancel"
//               onPress={() => updateBookingStatus('cancelled')}
//               loading={updating}
//               style={[styles.statusButton, styles.cancelButton]}
//             />
//           )}
//       </View>
//     </View>

//     <Toast
//       message={toast.message}
//       type={toast.type}
//       isVisible={toast.isVisible}
//       onHide={hideToast}
//     />

//   </ScrollView>
// );

// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: colors.card,
//     margin: 20,
//     borderRadius: 12,
//   },
//   statusLabel: {
//     color: colors.text,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   statusBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   statusText: {
//     color: colors.text,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   section: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     color: colors.text,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: colors.card,
//     padding: 15,
//     borderRadius: 12,
//   },
//   serviceTitle: {
//     color: colors.text,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   serviceCategory: {
//     color: colors.gray,
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   servicePrice: {
//     color: colors.primary,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   detailLabel: {
//     color: colors.gray,
//     fontSize: 14,
//     marginTop: 10,
//   },
//   detailValue: {
//     color: colors.text,
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   billingRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   billingLabel: {
//     color: colors.gray,
//     fontSize: 16,
//   },
//   billingValue: {
//     color: colors.text,
//     fontSize: 16,
//   },
//   billingTotal: {
//     color: colors.primary,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   paymentButton: {
//     marginTop: 15,
//   },
//   statusButtonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   statusButton: {
//     width: '48%',
//     marginBottom: 10,
//   },
//   cancelButton: {
//     backgroundColor: colors.error,
//   },
//   loadingText: {
//     color: colors.text,
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   errorText: {
//     color: colors.error,
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });

// export default AgentBookingDetailsScreen;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { agentAPI } from '../../api/agent';
import { billingAPI } from '../../api/billing';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const { width } = Dimensions.get('window');

const AgentBookingDetailsScreen = ({ route, navigation }) => {
    const { bookingId } = route.params;
    const [booking, setBooking] = useState(null);
    const [billing, setBilling] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

    const showToast = (message, type) => {
        setToast({ message, type, isVisible: true });
    };

    const hideToast = () => {
        setToast({ message: '', type: '', isVisible: false });
    };

    const fetchBookingDetails = async () => {
        try {
            const bookingResponse = await agentAPI.getBookingDetails(bookingId);
            const fetchedBooking = bookingResponse.data || null;

            setBooking(fetchedBooking);

            if (fetchedBooking) {
                const billingResponse = await billingAPI.getBillingDetails(bookingId);
                setBilling(billingResponse.data?.billing || billingResponse.billing || null);
            }

        } catch (error) {
            console.log("❌ Screen Error →", error);
            showToast(error.message || 'Failed to fetch booking details', 'error');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchBookingDetails();
    }, [bookingId]);

    useEffect(() => {
        fetchBookingDetails();
    }, [bookingId]);

    const updateBookingStatus = async (status) => {
        setUpdating(true);
        try {
            await agentAPI.updateBookingStatus(bookingId, status);
            setBooking(prev => ({ ...prev, bookingStatus: status }));
            showToast(`Booking status updated to ${status}`, 'success');
        } catch (error) {
            showToast(error.message || 'Failed to update booking status', 'error');
        } finally {
            setUpdating(false);
        }
    };

    const updatePaymentStatus = async () => {
        setUpdating(true);
        try {
            await agentAPI.updatePaymentStatus(bookingId);
            setBilling(prev => ({ ...prev, paymentStatus: 'paid' }));
            setBooking(prev => ({ ...prev, paymentStatus: 'paid' }));
            showToast('Payment status updated to paid', 'success');
        } catch (error) {
            showToast(error.message || 'Failed to update payment status', 'error');
        } finally {
            setUpdating(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
                return colors.warning;
            case 'confirmed':
            case 'on-the-way':
                return colors.primary;
            case 'completed':
                return colors.success;
            case 'cancelled':
                return colors.error;
            default:
                return colors.gray;
        }
    };

    // UC Style Detail Item (Chiclet)
    const DetailChiclet = ({ iconName, label, value }) => (
        <View style={styles.chicletContainer}>
            <Ionicons name={iconName} size={24} color={colors.primary} />
            <Text style={styles.chicletLabel}>{label}</Text>
            <Text style={styles.chicletValue} numberOfLines={2}>{value || 'N/A'}</Text>
        </View>
    );
    
    // UC Style Info Row
    const InfoRow = ({ label, value, isTotal = false }) => (
        <View style={[styles.infoRow, isTotal && styles.infoRowTotal]}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={[styles.infoValue, isTotal && styles.infoValueTotal]}>{value}</Text>
        </View>
    );

    // Renders the appropriate action buttons based on the current status
    const renderActionButtons = () => {
        const currentStatus = booking.bookingStatus;

        if (currentStatus === 'completed' || currentStatus === 'cancelled') {
            return (
                <View style={styles.finalStatusTextContainer}>
                    <Text style={[styles.finalStatusText, { color: getStatusColor(currentStatus) }]}>
                        {currentStatus === 'completed' ? 'JOB COMPLETED' : 'BOOKING CANCELLED'}
                    </Text>
                </View>
            );
        }

        let nextAction = null;

        if (currentStatus === 'pending') {
            nextAction = { title: "Confirm Booking", status: 'confirmed' };
        } else if (currentStatus === 'confirmed') {
            nextAction = { title: "Start Travel (On Way)", status: 'on-the-way' };
        } else if (currentStatus === 'on-the-way') {
            nextAction = { title: "Mark as Completed", status: 'completed' };
        }
        
        return (
            <View style={styles.statusButtonsContainer}>
                {nextAction && (
                    <Button
                        title={nextAction.title}
                        onPress={() => updateBookingStatus(nextAction.status)}
                        loading={updating}
                        style={styles.statusButton}
                    />
                )}
                {/* Cancel is always an option if not final */}
                <Button
                    title="Cancel"
                    onPress={() => updateBookingStatus('cancelled')}
                    loading={updating}
                    style={[styles.statusButton, styles.cancelButton]}
                />
            </View>
        );
    };


    if (loading) {
        return <View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading...</Text></View>;
    }

    if (!booking) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.errorText}>Booking details not found</Text>
            </View>
        );
    }

    const { serviceId, userId, selectedDate, selectedTime, userAddress, bookingStatus, paymentStatus } = booking;
    const dateString = selectedDate ? new Date(selectedDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : 'N/A';
    const timeString = selectedTime || 'N/A';

    return (
        <View style={styles.fullScreenContainer}>
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
                }
            >

                {/* HEADER & STATUS */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Booking #{bookingId?.slice(-6)}</Text>
                    <View style={[styles.statusBadge, { backgroundColor: getStatusColor(bookingStatus) }]}>
                        <Text style={styles.statusText}>
                            {bookingStatus?.toUpperCase() || 'N/A'}
                        </Text>
                    </View>
                </View>

                {/* 1. SERVICE DETAILS CARD */}
                <View style={styles.mainCard}>
                    <Text style={styles.cardSectionTitle}>Service</Text>
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceTitle}>{serviceId?.title || 'Unknown Service'}</Text>
                        <Text style={styles.serviceCategory}>Category: {serviceId?.category}</Text>
                        
                        <View style={styles.chipRow}>
                            <View style={styles.chip}>
                                <Ionicons name="cash-outline" size={16} color={colors.primary} />
                                <Text style={styles.chipText}>₹{serviceId?.price}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* 2. BOOKING CHICLETS (Date/Time/Customer) */}
                <View style={styles.mainCard}>
                    <Text style={styles.cardSectionTitle}>Booking & Customer Info</Text>
                    <View style={styles.chicletsRow}>
                        <DetailChiclet
                            iconName="calendar-outline"
                            label="Date"
                            value={dateString}
                        />
                        <DetailChiclet
                            iconName="time-outline"
                            label="Time"
                            value={timeString}
                        />
                         <DetailChiclet
                            iconName="person-outline"
                            label="Customer"
                            value={userId?.name}
                        />
                    </View>
                    
                    <View style={styles.addressContainer}>
                        <Ionicons name="location-outline" size={20} color={colors.primary} />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.addressLabel}>Address</Text>
                            <Text style={styles.addressValue}>{userAddress || 'N/A'}</Text>
                        </View>
                         <TouchableOpacity onPress={() => navigation.navigate('Map', { address: userAddress })} style={styles.mapButton}>
                            <Ionicons name="map-outline" size={20} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* 3. BILLING DETAILS */}
                {billing && (
                    <View style={styles.mainCard}>
                        <Text style={styles.cardSectionTitle}>Payment & Billing</Text>
                        
                        <InfoRow label="Service Cost" value={`₹${billing.servicePrice}`} />
                        <InfoRow label="Travel Cost" value={`+ ₹${billing.travelCost}`} />
                        <InfoRow label="Total Amount" value={`₹${billing.totalAmount}`} isTotal={true} />
                        
                        <View style={styles.paymentStatusRow}>
                            <Text style={styles.paymentStatusLabel}>Payment Status:</Text>
                            <Text style={[styles.paymentStatusValue, { color: paymentStatus === 'paid' ? colors.success : colors.error }]}>
                                {paymentStatus?.toUpperCase() || 'PENDING'}
                            </Text>
                        </View>

                        {paymentStatus !== 'paid' && bookingStatus === 'completed' && (
                            <Button
                                title="Mark as Paid (Cash Received)"
                                onPress={updatePaymentStatus}
                                loading={updating}
                                style={styles.markPaidButton}
                                buttonColor={colors.success}
                            />
                        )}
                        {paymentStatus !== 'paid' && bookingStatus !== 'completed' && (
                           <Text style={styles.paymentNote}>Payment can be marked paid after job completion.</Text>
                        )}
                    </View>
                )}
                
                {/* Padding for the fixed footer */}
                <View style={{ height: 120 }} />

            </ScrollView>

            {/* 4. FIXED FOOTER ACTIONS */}
            <View style={styles.bottomBar}>
                {renderActionButtons()}
            </View>

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onHide={hideToast}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        paddingHorizontal: 15, // Reduced padding
        paddingBottom: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    loadingText: {
        color: colors.text,
        fontSize: 18,
    },
    errorText: {
        color: colors.error,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },

    // 1. HEADER & STATUS
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    statusText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.white,
    },
    
    // 2. MAIN CARD STYLING (UC Look)
    mainCard: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    cardSectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border || '#f0f0f0',
        paddingBottom: 8,
    },

    // Service Info
    serviceInfo: {
        paddingHorizontal: 5,
    },
    serviceTitle: {
        color: colors.text,
        fontSize: 22,
        fontWeight: 'bold',
    },
    serviceCategory: {
        color: colors.gray,
        fontSize: 14,
        marginTop: 5,
        marginBottom: 10,
    },
    chipRow: {
        flexDirection: 'row',
        marginTop: 5,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightPrimary,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    chipText: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '500',
        color: colors.primary,
    },

    // Chiclets (Mini-Cards)
    chicletsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    chicletContainer: {
        width: width * 0.28, 
        backgroundColor: colors.card,
        borderRadius: 10,
        padding: 10,
        alignItems: 'flex-start',
    },
    chicletLabel: {
        fontSize: 11,
        color: colors.gray,
        marginTop: 5,
    },
    chicletValue: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.text,
    },

    // Address
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderTopColor: colors.border || '#f0f0f0',
        paddingTop: 15,
        paddingHorizontal: 5,
    },
    addressLabel: {
        fontSize: 12,
        color: colors.gray,
        fontWeight: '600',
    },
    addressValue: {
        fontSize: 15,
        color: colors.text,
        marginTop: 2,
    },
    mapButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.lightPrimary,
    },

    // Billing Rows
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.border || '#f5f5f5',
    },
    infoRowTotal: {
        borderBottomWidth: 0,
        borderTopWidth: 2,
        borderTopColor: colors.lightPrimary,
        marginTop: 5,
        paddingTop: 12,
    },
    infoLabel: {
        color: colors.text,
        fontSize: 15,
    },
    infoValue: {
        color: colors.text,
        fontSize: 15,
        fontWeight: '500',
    },
    infoValueTotal: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    // Payment Status
    paymentStatusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    paymentStatusLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
    },
    paymentStatusValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    markPaidButton: {
        marginTop: 15,
    },
    paymentNote: {
        fontSize: 13,
        color: colors.gray,
        textAlign: 'center',
        marginTop: 10,
    },

    // 4. FIXED BOTTOM BAR
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: colors.border || '#E0E0E0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
    statusButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusButton: {
        width: '48%',
    },
    cancelButton: {
        backgroundColor: colors.error,
    },
    finalStatusTextContainer: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    finalStatusText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AgentBookingDetailsScreen;