import React, { useState, useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity, 
    ActivityIndicator,
    Alert 
} from 'react-native';
import axios from 'axios'; // Axios for API calls

// --- Configuration (Aapke Variables Yahan Aayenge) ---
const BASE_URL = 'http://192.168.1.33:5000/api';
// Replace with the actual Agent Token
const AGENT_JWT_TOKEN = 'YOUR_AGENT_TOKEN_HERE'; 

const AgentBookingScreen = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // --- 1. Pending Bookings Fetch Karne ka Function ---
    const fetchPendingBookings = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${BASE_URL}/agents/bookings/all?status=pending`,
                {
                    headers: {
                        'Authorization': `Bearer ${AGENT_JWT_TOKEN}`,
                    },
                }
            );
            // Assuming the data is in response.data
            setBookings(response.data); 
        } catch (error) {
            console.error("Error fetching bookings:", error.response ? error.response.data : error.message);
            Alert.alert("Error", "Bookings fetch nahi ho payi. Please check console.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        fetchPendingBookings();
    }, [fetchPendingBookings]);

    // --- 2. Booking Accept Karne ka Function ---
    const handleAcceptBooking = async (bookingId) => {
        setLoading(true);
        try {
            await axios.put(
                `${BASE_URL}/agents/bookings/${bookingId}/status`,
                {
                    bookingStatus: 'confirmed', // Status ko confirmed par set karna
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${AGENT_JWT_TOKEN}`,
                    },
                }
            );
            
            Alert.alert("Success", "Booking successfully accept ho gayi!");
            // Booking accept hone ke baad list ko refresh karna
            fetchPendingBookings(); 

        } catch (error) {
            console.error("Error accepting booking:", error.response ? error.response.data : error.message);
            Alert.alert("Error", "Booking accept nahi ho payi. Please try again.");
            setLoading(false);
        }
    };

    // --- FlatList mein Item Render (Display) Karne ka Tareeka ---
    const renderBookingItem = ({ item }) => (
        <View style={styles.bookingCard}>
            <Text style={styles.serviceTitle}>{item.serviceId ? item.serviceId.title : 'Service Name Not Found'}</Text>
            <Text style={styles.detailText}>
                🗓️ Date: <Text style={styles.bold}>{item.selectedDate}</Text> at <Text style={styles.bold}>{item.selectedTime}</Text>
            </Text>
            <Text style={styles.detailText}>
                📍 Address: {item.userAddress}
            </Text>
            <Text style={styles.detailText}>
                👤 User: {item.userId ? item.userId.name : 'Unknown User'}
            </Text>

            {/* Accept Button */}
            <TouchableOpacity 
                style={styles.acceptButton}
                onPress={() => handleAcceptBooking(item._id)}
                disabled={loading} // Disable button while loading to prevent multiple presses
            >
                <Text style={styles.acceptButtonText}>
                    ✅ Accept Booking
                </Text>
            </TouchableOpacity>
        </View>
    );

    if (loading && !refreshing) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007bff" />
                <Text>Loading Bookings...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Pending Bookings 📋</Text>
            
            {bookings.length === 0 ? (
                <View style={styles.center}>
                    <Text style={styles.noBookingsText}>Koi Pending Booking Nahi Hai! 🎉</Text>
                </View>
            ) : (
                <FlatList
                    data={bookings}
                    renderItem={renderBookingItem}
                    keyExtractor={(item) => item._id}
                    onRefresh={fetchPendingBookings} // Pull-to-refresh
                    refreshing={refreshing}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 15,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookingCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    serviceTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#007bff',
        marginBottom: 5,
    },
    detailText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    acceptButton: {
        backgroundColor: '#28a745', // Green color
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    acceptButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    noBookingsText: {
        fontSize: 18,
        color: '#888',
    }
});

export default AgentBookingScreen;