// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { servicesAPI } from '../../api/services';
// import Button from '../../components/Button';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// const ServiceDetailsScreen = ({ route, navigation }) => {
//   const { serviceId } = route.params;
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type: '', isVisible: false });
//   };

//   const fetchServiceDetails = async () => {
//     try {
//       const response = await servicesAPI.getServiceById(serviceId);
//       setService(response.data);
//     } catch (error) {
//       showToast(error.message || 'Failed to fetch service details', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServiceDetails();
//   }, [serviceId]);

//   const handleBookNow = () => {
//     navigation.navigate('Booking', { serviceId });
//   };

//   if (loading) {
//     return <View style={styles.container}><Text style={styles.loadingText}>Loading...</Text></View>;
//   }

//   if (!service) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Service not found</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{ uri: service.imageUrl }} style={styles.image} />
//       <View style={styles.content}>
//         <Text style={styles.title}>{service.title}</Text>
//         <View style={styles.categoryContainer}>
//           <Text style={styles.category}>{service.category}</Text>
//           <View style={styles.rating}>
//             <Text style={styles.ratingText}>{service.avgRating} ⭐</Text>
//           </View>
//         </View>
//         <Text style={styles.price}>₹{service.price}</Text>
//         <Text style={styles.description}>{service.description}</Text>
        
//         <View style={styles.detailsContainer}>
//           <Text style={styles.detailsTitle}>Service Details</Text>
//           <Text style={styles.detailsText}>{service.details}</Text>
//         </View>
        
//         <Button
//           title="Book Now"
//           onPress={handleBookNow}
//           style={styles.bookButton}
//         />
//       </View>
      
//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   image: {
//     width: '100%',
//     height: 250,
//   },
//   content: {
//     padding: 20,
//   },
//   title: {
//     color: colors.text,
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   category: {
//     color: colors.gray,
//     fontSize: 16,
//   },
//   rating: {
//     backgroundColor: colors.card,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   ratingText: {
//     color: colors.text,
//     fontSize: 14,
//   },
//   price: {
//     color: colors.primary,
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   description: {
//     color: colors.text,
//     fontSize: 16,
//     lineHeight: 24,
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     marginBottom: 30,
//   },
//   detailsTitle: {
//     color: colors.text,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   detailsText: {
//     color: colors.gray,
//     fontSize: 16,
//     lineHeight: 24,
//   },
//   bookButton: {
//     marginVertical: 20,
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

// export default ServiceDetailsScreen;
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Added for the back button
import { servicesAPI } from '../../api/services';
import Button from '../../components/Button';
import Loader from '../../components/Loader'; // Use existing Loader
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const { height } = Dimensions.get('window');

const ServiceDetailsScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  const fetchServiceDetails = async () => {
    try {
      const response = await servicesAPI.getServiceById(serviceId);
      // Ensure the service object has all expected fields, adding dummy data if missing
      const fetchedService = {
        ...response.data,
        // Assuming your service API provides durationMins. 
        // If not, use dummy data or remove it.
        durationMins: response.data?.durationMins || 90, 
        avgRating: response.data?.avgRating || 4.5,
      }
      setService(fetchedService);
    } catch (error) {
      showToast(error.message || 'Failed to fetch service details', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetails();
  }, [serviceId]);

  const handleBookNow = () => {
    navigation.navigate('Booking', { serviceId, serviceTitle: service.title, servicePrice: service.price });
  };

  if (loading) {
    return <Loader />; // Use the existing Loader component
  }

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service not found</Text>
      </View>
    );
  }
  
  // Helper function to format duration
  const formatDuration = (mins) => {
    if (!mins) return 'N/A';
    if (mins >= 60) {
      const hours = Math.floor(mins / 60);
      const remainingMins = mins % 60;
      return `${hours} hr${remainingMins > 0 ? ` ${remainingMins} min` : ''}`;
    }
    return `${mins} min`;
  };


  return (
    <View style={styles.fullScreenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 1. HERO IMAGE WITH OVERLAY AND BACK BUTTON */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: service.imageUrl }} style={styles.image} />
          {/* Back Button (Absolute Position) */}
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-circle" size={30} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* 2. MAIN CONTENT AREA */}
        <View style={styles.content}>
          
          {/* TITLE & RATING */}
          <View style={styles.titleRatingRow}>
            <Text style={styles.title}>{service.title}</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{service.avgRating} ⭐</Text>
            </View>
          </View>
          
          {/* CATEGORY CHIP */}
          <Text style={styles.category}>{service.category}</Text>

          {/* PRICE & DURATION CHIPS */}
          <View style={styles.chipRow}>
            <View style={styles.chip}>
              <Ionicons name="cash-outline" size={16} color={colors.primary} />
              <Text style={styles.chipText}>₹{service.price}</Text>
            </View>
            <View style={styles.chip}>
              <Ionicons name="time-outline" size={16} color={colors.primary} />
              <Text style={styles.chipText}>{formatDuration(service.durationMins)}</Text>
            </View>
          </View>
          
          {/* DESCRIPTION SECTION (Card Look) */}
          <View style={styles.sectionCard}>
            <Text style={styles.detailsTitle}>Overview</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>
          
          {/* DETAILS SECTION (Card Look) */}
          {service.details && (
            <View style={styles.sectionCard}>
              <Text style={styles.detailsTitle}>What's Included</Text>
              <Text style={styles.detailsText}>{service.details}</Text>
            </View>
          )}

          {/* Add more sections here (Reviews, FAQs, etc.) */}

          {/* PADDING FOR FIXED BUTTON */}
          <View style={{ height: 100 }} /> 

        </View>
      </ScrollView>
      
      {/* 3. FIXED BOTTOM BUTTON/FOOTER */}
      <View style={styles.bottomBar}>
        <View>
            <Text style={styles.bottomPriceLabel}>Total Price</Text>
            <Text style={styles.bottomPrice}>₹{service.price}</Text>
        </View>
        <Button
          title="Book Now"
          onPress={handleBookNow}
          style={styles.bookButton}
        />
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
    paddingBottom: 0, // Removed padding bottom to allow bottomBar to overlap slightly
  },
  
  // 1. IMAGE/HERO SECTION
  imageContainer: {
    width: '100%',
    height: height * 0.35, // Use screen height for responsive image size
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 50, // Safe area padding simulation
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 2,
  },

  // 2. MAIN CONTENT AREA
  content: {
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    // Add negative margin to pull the content slightly over the image, 
    // a common modern app effect
    marginTop: -20, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  titleRatingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 26,
    fontWeight: 'bold',
    marginRight: 10,
  },
  rating: {
    backgroundColor: colors.lightPrimary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'center',
  },
  ratingText: {
    color: colors.primary, // Use primary color for rating text
    fontSize: 14,
    fontWeight: '600',
  },
  category: {
    color: colors.gray,
    fontSize: 14,
    marginBottom: 20,
  },

  // CHIPS (Price/Duration)
  chipRow: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    // Optional: subtle shadow for chip
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  chipText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },

  // SECTION CARDS (Description/Details)
  sectionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailsTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
  },
  detailsText: {
    color: colors.gray,
    fontSize: 15,
    lineHeight: 22,
  },

  // 3. FIXED BOTTOM BAR
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.white, // Solid background
    borderTopWidth: 1,
    borderTopColor: colors.border || '#E0E0E0',
  },
  bottomPriceLabel: {
    fontSize: 13,
    color: colors.gray,
    fontWeight: '500',
  },
  bottomPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  bookButton: {
    width: '50%',
    paddingVertical: 12, // Reduced vertical padding for a modern button look
  },
  // Existing loading/error styles (kept simple)
  loadingText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
  errorText: {
    color: colors.error,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ServiceDetailsScreen;