// import React, { useState, useEffect, useCallback, useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { agentAPI } from '../../api/agent';
// import BookingCard from '../../components/BookingCard';
// import Loader from '../../components/Loader';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';
// import { AuthContext } from '../../context/AuthContext';

// const AgentDashboardScreen = ({ navigation }) => {
//   const [bookings, setBookings] = useState([]);
//   const [agentStats, setAgentStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
//   const { logout } = useContext(AuthContext);
//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type: '', isVisible: false });
//   };

//   const fetchAgentData = async () => {
//     try {
//       const response = await agentAPI.getAgentBookings();
//       console.log("AGENT BOOKING RESPONSE =>", response.data);

//       // setBookings(response.bookings || []);
//       // setAgentStats(response.stats || {});
//       setBookings(response.data || []);
//       setBookings(response.data?.data || response.data || []);

//       // setAgentStats({ totalBookings: response.count });
//       setAgentStats({ totalBookings: response.count || response.data.count || 0 });


//     } catch (error) {
//       showToast(error.message || 'Failed to fetch agent data', 'error');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchAgentData();
//   }, []);

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchAgentData();
//     }, [])
//   );

//   const renderBooking = ({ item }) => (
//     <BookingCard
//       booking={item}
//       onPress={() => navigation.navigate('AgentBookingDetails', { bookingId: item._id })}
//     />
//   );

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Agent Dashboard</Text>
      
//       {agentStats && (
//         <View style={styles.statsContainer}>
//           <View style={styles.statItem}>
//             <Text style={styles.statValue}>{agentStats.totalBookings || 0}</Text>
//             <Text style={styles.statLabel}>Total Bookings</Text>
//           </View>
//           <View style={styles.statItem}>
//             <Text style={styles.statValue}>{agentStats.rating || '0.0'}</Text>
//             <Text style={styles.statLabel}>Average Rating</Text>
//           </View>
//         </View>
//       )}
      
//       <Text style={styles.sectionTitle}>Assigned Bookings</Text>
//       <FlatList
//         data={bookings}
//         renderItem={renderBooking}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
//         }
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>No bookings assigned</Text>
//           </View>
//         }
//       />
//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//       {/* <TouchableOpacity style={styles.logoutButton} onPress={logout}>
//         <Text style={styles.logoutText}>Logout</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity 
//   style={styles.logoutButton} 
//   onPress={() => navigation.navigate("AgentProfile")}
// >
//   <Text style={styles.logoutText}>Profile</Text>
// </TouchableOpacity>


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   title: {
//     color: colors.text,
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 20,
//     paddingBottom: 10,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: colors.card,
//     marginHorizontal: 20,
//     paddingVertical: 20,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   logoutButton: {
//     marginTop: 40,
//     backgroundColor: '#ff4c4c',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   logoutText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statValue: {
//     color: colors.primary,
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   statLabel: {
//     color: colors.gray,
//     fontSize: 14,
//   },
//   sectionTitle: {
//     color: colors.text,
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 50,
//   },
//   emptyText: {
//     color: colors.gray,
//     fontSize: 16,
//   },
// });

// export default AgentDashboardScreen;
// import React, { useState, useCallback, useContext } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import { agentAPI } from '../../api/agent';
// import BookingCard from '../../components/BookingCard';
// import Loader from '../../components/Loader';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';
// import { AuthContext } from '../../context/AuthContext';

// const AgentDashboardScreen = ({ navigation }) => {
//   const [bookings, setBookings] = useState([]);
//   const [agentStats, setAgentStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
//   const { logout } = useContext(AuthContext);

//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type: '', isVisible: false });
//   };

//   const fetchAgentData = async () => {
//     try {
//       const response = await agentAPI.getAgentBookings();
//       console.log("AGENT BOOKING RESPONSE =>", response.data);

//       // Cleaned booking handling
//       const list = response.data?.data || response.data || [];
//       setBookings(list);

//       // Stats Fix
//       const stats = {
//         totalBookings: response.data?.count || response.count || list.length || 0,
//         rating: response.averageRating || response.stats?.rating || 0
//       };
//       console.log("stats-->",stats);
//       setAgentStats(stats);

//     } catch (error) {
//       showToast(error.message || 'Failed to fetch agent data', 'error');
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     fetchAgentData();
//   }, []);

//   useFocusEffect(
//     useCallback(() => {
//       setLoading(true);
//       fetchAgentData();
//     }, [])
//   );

//   const renderBooking = ({ item }) => (
//     <BookingCard
//       booking={item}
//       onPress={() => navigation.navigate('AgentBookingDetails', { bookingId: item._id })}
//     />
//   );

//   if (loading) return <Loader />;

//   return (
//     <View style={styles.container}>
      
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerTitle}>Agent Dashboard</Text>
//       </View>

//       {agentStats && (
//         <View style={styles.statsCard}>
//           <View style={styles.statBox}>
//             <Text style={styles.statValue}>{agentStats.totalBookings}</Text>
//             <Text style={styles.statLabel}>Total Bookings</Text>
//           </View>

//           <View style={styles.statBox}>
//             {/* <Text style={styles.statValue}>{agentStats?.rating.toFixed(1) || 3.7}</Text> */}
//             <Text style={styles.statValue}>4</Text>
//             <Text style={styles.statLabel}>Avg. Rating</Text>
//           </View>
//         </View>
//       )}

//       <Text style={styles.sectionTitle}>Assigned Bookings</Text>

//       <FlatList
//         data={bookings}
//         renderItem={renderBooking}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={styles.list}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.primary} />
//         }
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyText}>No bookings assigned</Text>
//           </View>
//         }
//       />

//       <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onHide={hideToast} />

//       <TouchableOpacity 
//         style={styles.profileButton} 
//         onPress={() => navigation.navigate("AgentProfile")}
//       >
//         <Text style={styles.profileButtonText}>View Profile</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },

//   headerContainer: {
//     paddingTop: 45,
//     paddingBottom: 25,
//     paddingHorizontal: 20,
//     backgroundColor: colors.primary,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     elevation: 6,
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 26,
//     fontWeight: 'bold',
//   },

//   statsCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 20,
//     marginTop: -30,
//     padding: 20,
//     borderRadius: 16,
//     backgroundColor: colors.card,
//     elevation: 5,
//   },

//   statBox: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   statValue: {
//     color: colors.primary,
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 14,
//     color: colors.gray,
//   },

//   sectionTitle: {
//     marginTop: 25,
//     marginBottom: 10,
//     marginLeft: 20,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: colors.text,
//   },

//   list: { paddingHorizontal: 20 },

//   emptyContainer: {
//     marginTop: 60,
//     alignItems: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: colors.gray,
//   },

//   profileButton: {
//     margin: 20,
//     paddingVertical: 14,
//     backgroundColor: colors.primary,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   profileButtonText: {
//     color: '#fff',
//     fontSize: 17,
//     fontWeight: '600',
//   },
// });

// export default AgentDashboardScreen;
import React, { useState, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { agentAPI } from '../../api/agent';
import BookingCard from '../../components/BookingCard';
import Loader from '../../components/Loader';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';
import { AuthContext } from '../../context/AuthContext';

const AgentDashboardScreen = ({ navigation }) => {
  const [bookings, setBookings] = useState([]);
  const [agentStats, setAgentStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const { logout } = useContext(AuthContext);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  const fetchAgentData = async () => {
    try {
      const response = await agentAPI.getAgentBookings();
      console.log("AGENT BOOKING RESPONSE =>", response.data);

      const list = response.data?.data || response.data || [];
      setBookings(list);

      const stats = {
        totalBookings: response.data?.count || response.count || list.length || 0,
        rating: response.averageRating || response.stats?.rating || 4.5
      };
      setAgentStats(stats);

    } catch (error) {
      showToast(error.message || 'Failed to fetch agent data', 'error');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAgentData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchAgentData();
    }, [])
  );

  const renderBooking = ({ item }) => (
    <BookingCard
      booking={item}
      onPress={() => navigation.navigate('AgentBookingDetails', { bookingId: item._id })}
    />
  );

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      
      {/* CLEAN HEADER */}
      {/* <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View> */}

      {/* SIMPLE STATS - 2 CARDS ONLY */}
      {agentStats && (
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="calendar-outline" size={20} color={colors.primary} style={styles.statIcon} />
            <Text style={styles.statNumber}>{agentStats.totalBookings}</Text>
            <Text style={styles.statLabel}>Total Bookings</Text>
          </View>

          <View style={styles.statCard}>
            <Ionicons name="star" size={20} color="#4CAF50" style={styles.statIcon} />
            <Text style={styles.statNumber}>{agentStats.rating?.toFixed(1) || '4.5'}</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
        </View>
      )}

      {/* BOOKINGS SECTION */}
      <View style={styles.bookingsContainer}>
        <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
        
        <FlatList
          data={bookings}
          renderItem={renderBooking}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh} 
              tintColor={colors.primary} 
            />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="briefcase-outline" size={56} color={colors.gray} />
              <Text style={styles.emptyText}>No bookings assigned yet</Text>
              <Text style={styles.emptySubtext}>Bookings will appear here</Text>
            </View>
          }
        />
      </View>
      {/* <TouchableOpacity 
        style={styles.profileButton} 
        onPress={() => navigation.navigate("AgentBookingScreen")}
      >
        <Ionicons name="person-outline" size={20} color="#fff" />
        <Text style={styles.profileButtonText}>View Bookings</Text>
      </TouchableOpacity> */}

      {/* FIXED BOTTOM BUTTON */}
      <TouchableOpacity 
        style={styles.profileButton} 
        onPress={() => navigation.navigate("AgentProfile")}
      >
        <Ionicons name="person-outline" size={20} color="#fff" />
        <Text style={styles.profileButtonText}>View Profile</Text>
      </TouchableOpacity>

      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onHide={hideToast} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // CLEAN HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  notificationBtn: {
    padding: 8,
  },

  // SIMPLE 2-CARD STATS
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIcon: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: '500',
  },

  // CLEAN BOOKINGS SECTION
  bookingsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
    marginTop: 10,
  },
  list: {
    paddingBottom: 100,
  },

  // EMPTY STATE
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 4,
    textAlign: 'center',
  },

  // FIXED PROFILE BUTTON
  profileButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default AgentDashboardScreen;
