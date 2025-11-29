
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// import { bookingsAPI } from '../../api/bookings';
// import { billingAPI } from '../../api/billing';
// import Button from '../../components/Button';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';
// const BookingDetailsScreen = ({ route, navigation }) => {
//   const { bookingId } = route.params;
//   console.log(bookingId)
//   const [booking, setBooking] = useState(null);
//   const [billing, setBilling] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => setToast({ message, type, isVisible: true });
//   const hideToast = () => setToast({ message: '', type: '', isVisible: false });

//   // const fetchBookingDetails = async () => {
//   //   try {
//   //     const bookingResponse = await bookingsAPI.getBookingDetails(bookingId)
 

//   //     setBooking(bookingResponse.data);
//   //     console.log(bookingResponse.data)
//   //     const billingResponse = await billingAPI.getBillingDetails(bookingId);
//   //     setBilling(billingResponse.billing);
//   //   } catch (error) {
//   //     showToast(error.message || 'Failed to fetch booking details', 'error');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchBookingDetails = async () => {
//   try {
//     const bookingResponse = await bookingsAPI.getBookingDetails(bookingId);

//     console.log("📌 bookingResponse.data:", bookingResponse.data);

//     const bookingData = bookingResponse.data;

//     console.log("📌 final bookingData:", bookingData);

//     setBooking(bookingData);   // ✅ This is correct
//   } catch (error) {
//     console.log("❌ Fetch error:", error);
//     showToast(
//       error.response?.data?.message || "Failed to fetch booking details",
//       "error"
//     );
//   } finally {
//     setLoading(false);
//   }
// };

//   console.log(booking);
//   useEffect(() => { fetchBookingDetails(); }, [bookingId]);

//   const handleFeedback = () => navigation.navigate('Feedback', { bookingId });

//   const handleCancelBooking = async () => {
//     try {
//       await bookingsAPI.cancelBooking(bookingId);
//       showToast('Booking cancelled successfully', 'success');
//       fetchBookingDetails();
//     } catch (err) {
//       showToast(err.message || 'Failed to cancel booking', 'error');
//     }
//   };

//   const getStatusColor = () => {
//     switch (booking?.bookingStatus) {
//       case 'pending': return colors.warning;
//       case 'confirmed':
//       case 'on-the-way': return colors.primary;
//       case 'completed': return colors.success;
//       case 'cancelled': return colors.error;
//       default: return colors.gray;
//     }
//   };

//   if (loading) return <View style={styles.container}><Text style={styles.loadingText}>Loading...</Text></View>;
//   if (!booking) return <View style={styles.container}><Text style={styles.errorText}>Booking not found</Text></View>;

//   const isCancellable = ['pending', 'confirmed'].includes(booking.bookingStatus);

//   return (
//     <ScrollView style={styles.container}>
//       {/* STATUS */}
//       <View style={styles.statusContainer}>
//         <Text style={styles.statusLabel}>Status</Text>
//         <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
//           <Text style={styles.statusText}>{booking.bookingStatus}</Text>
//         </View>
//       </View>

//       {/* SERVICE DETAILS WITH IMAGE */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Service Details</Text>
//         <View style={styles.card}>
//           {booking?.serviceId?.imageUrl && (
//             <Image source={{ uri: booking.serviceId.imageUrl }} style={styles.serviceImage} />
//           )}
//           <Text style={styles.serviceTitle}>{booking?.serviceId?.title}</Text>
//           <Text style={styles.serviceCategory}>{booking?.serviceId?.category}</Text>
//           <Text style={styles.servicePrice}>₹{booking?.serviceId?.price}</Text>
//         </View>
//       </View>

//       {/* BOOKING INFORMATION */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Booking Information</Text>
//         <View style={styles.card}>
//           <Text style={styles.detailLabel}>Date:</Text>
//           <Text style={styles.detailValue}>{booking?.selectedDate}</Text>

//           <Text style={styles.detailLabel}>Time:</Text>
//           <Text style={styles.detailValue}>{booking?.selectedTime}</Text>

//           <Text style={styles.detailLabel}>Address:</Text>
//           <Text style={styles.detailValue}>{booking?.userAddress}</Text>
//         </View>
//       </View>

//       {/* BILLING */}
//       {billing && (
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Billing Details</Text>
//           <View style={styles.card}>
//             <View style={styles.billingRow}>
//               <Text style={styles.billingLabel}>Service Cost:</Text>
//               <Text style={styles.billingValue}>₹{billing.serviceCost}</Text>
//             </View>
//             <View style={styles.billingRow}>
//               <Text style={styles.billingLabel}>Travel Cost:</Text>
//               <Text style={styles.billingValue}>₹{billing.travelCost}</Text>
//             </View>
//             <View style={styles.billingRow}>
//               <Text style={styles.billingLabel}>Total:</Text>
//               <Text style={styles.billingTotal}>₹{billing.total}</Text>
//             </View>
//             <View style={styles.billingRow}>
//               <Text style={styles.billingLabel}>Payment Status:</Text>
//               <Text style={styles.billingValue}>{billing.paymentStatus}</Text>
//             </View>
//           </View>
//         </View>
//       )}

//       {/* CANCEL BOOKING BUTTON */}
//       {isCancellable && (
//         <View style={styles.section}>
//           <Button
//             title="Cancel Booking"
//             style={{ backgroundColor: colors.error }}
//             onPress={handleCancelBooking}
//           />
//         </View>
//       )}

//       {/* FEEDBACK BUTTON */}
//       {booking.bookingStatus === 'completed' && (
//         <View style={styles.section}>
//           <Button title="Leave Feedback" onPress={handleFeedback} />
//         </View>
//       )}

//       <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onHide={hideToast} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: colors.background },
//   statusContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: colors.card, margin: 20, borderRadius: 12 },
//   statusLabel: { color: colors.text, fontSize: 18, fontWeight: 'bold' },
//   statusBadge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
//   statusText: { color: colors.text, fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' },
//   section: { marginHorizontal: 20, marginBottom: 20 },
//   sectionTitle: { color: colors.text, fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   card: { backgroundColor: colors.card, padding: 15, borderRadius: 12 },
//   serviceImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 10 },
//   serviceTitle: { color: colors.text, fontSize: 18, fontWeight: '700' },
//   serviceCategory: { color: colors.gray, fontSize: 14, marginTop: 2 },
//   servicePrice: { color: colors.primary, fontSize: 16, fontWeight: '700', marginTop: 5 },
//   detailLabel: { color: colors.gray, fontSize: 14, marginTop: 10 },
//   detailValue: { color: colors.text, fontSize: 16 },
//   billingRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 },
//   billingLabel: { color: colors.gray, fontSize: 15 },
//   billingValue: { color: colors.text, fontSize: 15 },
//   billingTotal: { color: colors.primary, fontSize: 17, fontWeight: '700' },
//   loadingText: { color: colors.text, fontSize: 18, textAlign: 'center', marginTop: 50 },
//   errorText: { color: colors.error, fontSize: 18, textAlign: 'center', marginTop: 50 },
// });

// export default BookingDetailsScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, Platform } from 'react-native';
// Make sure to install and import your Icon library (e.g., react-native-vector-icons)
import Ionicons from 'react-native-vector-icons/Ionicons'; 

import { bookingsAPI } from '../../api/bookings';
import { billingAPI } from '../../api/billing';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

// Helper function to format date
const formatDate = (dateString, timeString) => {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(dateString);
        // Format date: e.g., Nov 20, 2025 at 10:00 AM
        return `${date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} at ${timeString}`;
    } catch {
        return dateString;
    }
};

const BookingDetailsScreen = ({ route, navigation }) => {
    const { bookingId } = route.params;
    const [booking, setBooking] = useState(null);
    const [billing, setBilling] = useState(null); // Assuming billing will be fetched separately
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

    const showToast = (message, type) => setToast({ message, type, isVisible: true });
    const hideToast = () => setToast({ message: '', type: '', isVisible: false });

    const fetchBookingDetails = async () => {
        setLoading(true);
        try {
            const bookingResponse = await bookingsAPI.getBookingDetails(bookingId);
            const bookingData = bookingResponse.data;
            setBooking(bookingData);

            // Fetch billing details only if booking fetch is successful
            const billingResponse = await billingAPI.getBillingDetails(bookingId);
            setBilling(billingResponse.billing); // Assuming the billing details are in billingResponse.billing

        } catch (error) {
            console.log("❌ Fetch error:", error);
            showToast(
                error.response?.data?.message || "Failed to fetch booking/billing details",
                "error"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchBookingDetails(); }, [bookingId]);

    const handleFeedback = () => navigation.navigate('Feedback', { bookingId });

    const handleCancelBooking = async () => {
        // Add confirmation prompt here for better UX
        try {
            await bookingsAPI.cancelBooking(bookingId);
            showToast('Booking cancelled successfully', 'success');
            fetchBookingDetails(); // Refetch to update status
        } catch (err) {
            showToast(err.message || 'Failed to cancel booking', 'error');
        }
    };

    const getStatusColor = () => {
        switch (booking?.bookingStatus) {
            case 'pending': return '#FFC107'; // Warning Yellow
            case 'confirmed': return colors.primary || '#1877F2';
            case 'on-the-way': return '#20C997'; // Light Green/Teal
            case 'completed': return colors.success || '#00C853';
            case 'cancelled': return colors.error || '#D32F2F';
            default: return colors.gray || '#9E9E9E';
        }
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <ActivityIndicator size="large" color={colors.primary || '#1877F2'} />
                <Text style={styles.loadingText}>Loading Details...</Text>
            </View>
        );
    }
    
    if (!booking) {
        return (
            <View style={[styles.container, styles.centerContent]}>
                <Text style={styles.errorText}>Booking not found or network error.</Text>
                <Button title="Try Again" onPress={fetchBookingDetails} buttonStyle={{marginTop: 20}} />
            </View>
        );
    }

    const isCancellable = ['pending', 'confirmed'].includes(booking.bookingStatus);
    const formattedDate = formatDate(booking?.selectedDate, booking?.selectedTime);

    return (
        <View style={styles.outerContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* 📌 STATUS CARD (Prominent) */}
                <View style={styles.statusSection}>
                    <Text style={styles.sectionTitle}>Current Status</Text>
                    <View style={styles.card}>
                        <View style={styles.statusRow}>
                            <Ionicons name="checkmark-circle-outline" size={24} color={getStatusColor()} />
                            <Text style={styles.statusLabel}>Booking ID: {bookingId}</Text>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
                            <Text style={styles.statusText}>{booking.bookingStatus.toUpperCase()}</Text>
                        </View>
                        {booking.bookingStatus === 'completed' && booking.finalBillAmount && (
                            <Text style={styles.finalBill}>
                                Paid: ₹{booking.finalBillAmount.toFixed(2)}
                            </Text>
                        )}
                    </View>
                </View>

                {/* 📌 SERVICE DETAILS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Service Details</Text>
                    <View style={styles.card}>
                        {booking?.serviceId?.imageUrl ? (
                            <Image source={{ uri: booking.serviceId.imageUrl }} style={styles.serviceImage} />
                        ) : (
                            <View style={styles.imagePlaceholder}><Text style={styles.placeholderText}>No Image</Text></View>
                        )}
                        <Text style={styles.serviceTitle}>{booking?.serviceId?.title || 'Service Title N/A'}</Text>
                        <Text style={styles.serviceCategory}>Category: {booking?.serviceId?.category || 'N/A'}</Text>
                        <Text style={styles.servicePrice}>Base Price: ₹{(booking?.servicePrice || booking?.serviceId?.price || 0).toFixed(2)}</Text>
                    </View>
                </View>

                {/* 📌 BOOKING INFORMATION (Icons added) */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Booking & Location</Text>
                    <View style={styles.card}>
                        {/* Date & Time */}
                        <View style={styles.detailRow}>
                            <Ionicons name="calendar-outline" size={20} color={colors.primary} style={styles.detailIcon} />
                            <View>
                                <Text style={styles.detailLabel}>Scheduled For:</Text>
                                <Text style={styles.detailValue}>{formattedDate}</Text>
                            </View>
                        </View>
                        {/* Address */}
                        <View style={styles.detailRow}>
                            <Ionicons name="location-outline" size={20} color={colors.primary} style={styles.detailIcon} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.detailLabel}>Service Address:</Text>
                                <Text style={styles.detailValue}>{booking?.userAddress || 'Address N/A'}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* 📌 BILLING (Improved Layout) */}
                {/* Note: I'm using booking.finalBillAmount/travelCost as billing details were missing in the second fetch attempt */}
                {/* You should ideally use the `billing` state object if `billingAPI.getBillingDetails` works */}
                {(billing || booking?.finalBillAmount || booking?.servicePrice) && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Billing Summary</Text>
                        <View style={styles.card}>
                            <BillingRow label="Service Price" value={`₹${(billing?.serviceCost || booking?.servicePrice || 0).toFixed(2)}`} />
                            <BillingRow label="Travel/Convenience" value={`₹${(billing?.travelCost || booking?.travelCost || 0).toFixed(2)}`} />
                            
                            <View style={styles.separator} />

                            <BillingRow 
                                label="Final Amount" 
                                value={`₹${(billing?.total || booking?.finalBillAmount || 0).toFixed(2)}`} 
                                isTotal
                            />
                            <BillingRow 
                                label="Payment Status" 
                                value={billing?.paymentStatus?.toUpperCase() || booking?.paymentStatus?.toUpperCase() || 'N/A'} 
                            />
                        </View>
                    </View>
                )}

                {/* 📌 ACTION BUTTONS */}
                <View style={styles.actionSection}>
                    {booking.bookingStatus === 'completed' && (
                        <Button 
                            title="★ Leave Feedback" 
                            onPress={handleFeedback} 
                            buttonStyle={styles.feedbackButton}
                        />
                    )}
                    {isCancellable && (
                        <Button
                            title="Cancel Booking"
                            style={styles.cancelButton}
                            textStyle={styles.cancelButtonText}
                            onPress={handleCancelBooking}
                        />
                    )}
                </View>
                <View style={{height: 40}} />
            </ScrollView>

            <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onHide={hideToast} />
        </View>
    );
};

// --- Component for Billing Row ---
const BillingRow = ({ label, value, isTotal = false }) => (
    <View style={styles.billingRow}>
        <Text style={[styles.billingLabel, isTotal && styles.billingTotalLabel]}>{label}</Text>
        <Text style={[styles.billingValue, isTotal && styles.billingTotalValue]}>{value}</Text>
    </View>
);

// --- Styles for Premium Urban Company Look ---
const styles = StyleSheet.create({
    outerContainer: { flex: 1, backgroundColor: colors.background || '#F9F9F9' },
    scrollContent: { padding: 20 },
    centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    loadingText: { color: colors.text, fontSize: 18, marginTop: 10 },
    errorText: { color: colors.error, fontSize: 18, textAlign: 'center' },

    // Status Section
    statusSection: { marginBottom: 20 },
    sectionTitle: { color: colors.text || '#1A1A1A', fontSize: 18, fontWeight: '700', marginBottom: 10 },
    
    // Elevated Card Style
    card: { 
        backgroundColor: colors.card || '#FFFFFF', 
        padding: 15, 
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4, 
    },
    
    // Status Badge inside Card
    statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    statusLabel: { color: colors.text, fontSize: 16, fontWeight: '600', marginLeft: 10, flex: 1 },
    statusBadge: { 
        position: 'absolute', // Position badge clearly
        top: 15,
        right: 15,
        paddingHorizontal: 12, 
        paddingVertical: 4, 
        borderRadius: 20,
    },
    statusText: { color: colors.white || '#fff', fontSize: 13, fontWeight: 'bold', textTransform: 'uppercase' },
    finalBill: { color: colors.primary, fontSize: 20, fontWeight: '700', marginTop: 10 },

    // Service Details
    serviceImage: { width: '100%', height: 160, borderRadius: 8, marginBottom: 15 },
    imagePlaceholder: { width: '100%', height: 160, borderRadius: 8, marginBottom: 15, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
    placeholderText: { color: colors.gray, fontSize: 16 },
    serviceTitle: { color: colors.text, fontSize: 20, fontWeight: '700' },
    serviceCategory: { color: colors.gray, fontSize: 14, marginTop: 4, marginBottom: 8 },
    servicePrice: { color: colors.primary, fontSize: 17, fontWeight: '700' },

    // Booking Information Detail Rows
    detailRow: { flexDirection: 'row', alignItems: 'flex-start', marginVertical: 10, paddingVertical: 5 },
    detailIcon: { marginRight: 15, marginTop: 2 },
    detailLabel: { color: colors.gray || '#777', fontSize: 13, textTransform: 'uppercase' },
    detailValue: { color: colors.text || '#333', fontSize: 16, fontWeight: '500', marginTop: 2, marginRight: 10 },
    
    // Billing
    billingRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
    billingLabel: { color: colors.text, fontSize: 15 },
    billingValue: { color: colors.text, fontSize: 15, fontWeight: '600' },
    billingTotalLabel: { color: colors.text, fontSize: 17, fontWeight: '700' },
    billingTotalValue: { color: colors.primary, fontSize: 17, fontWeight: '700' },
    separator: { height: 1, backgroundColor: '#eee', marginVertical: 10 },

    // Actions
    actionSection: { marginTop: 20, marginBottom: 40 },
    feedbackButton: { backgroundColor: colors.primary, marginBottom: 15, borderRadius: 8, height: 50 },
    cancelButton: { 
        backgroundColor: colors.white, 
        borderColor: colors.error, 
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
    },
    cancelButtonText: { color: colors.error, fontWeight: '700' },
});

export default BookingDetailsScreen;