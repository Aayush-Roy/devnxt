import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { bookingsAPI } from '../../api/bookings';
import BookingCard from '../../components/BookingCard';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const MyBookingsScreen = ({ navigation }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  // const fetchBookings = async () => {
  //   try {
  //     const response = await bookingsAPI.getUserBookings();
      
  //     setBookings(response.data || []);
  //     console.log(response.data);
  //   } catch (error) {
  //     showToast(error.message || 'Failed to fetch bookings', 'error');
  //   } finally {
  //     setLoading(false);
  //     setRefreshing(false);
  //   }
  // };
  const fetchBookings = async () => {
  try {
    const response = await bookingsAPI.getUserBookings();
    setBookings(response.data|| []);
    console.log("res->",response.data);
  } catch (error) {
    showToast(error.message || 'Failed to fetch bookings', 'error');
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchBookings();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchBookings();
    }, [])
  );

  const renderBooking = ({ item }) => (
    <BookingCard
      booking={item}
      onPress={() => navigation.navigate('BookingDetails', { bookingId: item._id })}
    />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No bookings found</Text>
          </View>
        }
      />
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    color: colors.gray,
    fontSize: 16,
  },
});

export default MyBookingsScreen;