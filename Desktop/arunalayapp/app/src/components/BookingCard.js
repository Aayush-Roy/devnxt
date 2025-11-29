// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import colors from '../utils/colors';

// const BookingCard = ({ booking, onPress }) => {
//   const getStatusColor = () => {
//     switch (booking.status) {
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

//   return (
//     <TouchableOpacity style={styles.container} onPress={onPress}>
//       <View style={styles.header}>
//         <Text style={styles.serviceTitle}>{booking.service.title}</Text>
//         <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
//           <Text style={styles.statusText}>{booking.status}</Text>
//         </View>
//       </View>
//       <View style={styles.details}>
//         <Text style={styles.detailText}>Date: {booking.date}</Text>
//         <Text style={styles.detailText}>Time: {booking.time}</Text>
//         <Text style={styles.detailText}>Price: ${booking.price}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.card,
//     borderRadius: 12,
//     padding: 15,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   serviceTitle: {
//     color: colors.text,
//     fontSize: 16,
//     fontWeight: 'bold',
//     flex: 1,
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   statusText: {
//     color: colors.text,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   details: {
//     marginTop: 5,
//   },
//   detailText: {
//     color: colors.gray,
//     fontSize: 14,
//     marginBottom: 2,
//   },
// });

// export default BookingCard;
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import colors from '../utils/colors';

// const BookingCard = ({ booking, onPress }) => {
//   const getStatusColor = () => {
//     switch (booking.bookingStatus) {
//       case 'pending':
//         return colors.warning;
//       case 'confirmed':
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

//   return (
//     <TouchableOpacity style={styles.container} onPress={onPress}>
//       <View style={styles.header}>
//         <Text style={styles.serviceTitle}>
//           {booking.serviceId?.title || 'Service'}
//         </Text>

//         <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
//           <Text style={styles.statusText}>{booking.bookingStatus}</Text>
//         </View>
//       </View>

//       <View style={styles.details}>
//         <Text style={styles.detailText}>
//           Date: {new Date(booking.selectedDate).toDateString()}
//         </Text>
//         <Text style={styles.detailText}>Time: {booking.selectedTime}</Text>
//         <Text style={styles.detailText}>
//           Price: ₹{booking.finalBillAmount}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.card,
//     borderRadius: 12,
//     padding: 15,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   serviceTitle: {
//     color: colors.text,
//     fontSize: 16,
//     fontWeight: 'bold',
//     flex: 1,
//   },
//   statusBadge: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 6,
//   },
//   statusText: {
//     color: colors.text,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   details: {
//     marginTop: 5,
//   },
//   detailText: {
//     color: colors.gray,
//     fontSize: 14,
//     marginBottom: 2,
//   },
// });

// export default BookingCard;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../utils/colors';

const BookingCard = ({ booking, onPress }) => {
  const getStatusColor = () => {
    switch (booking.bookingStatus) {
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

  const imageUrl =
    booking.serviceId?.imageUrl ||
    'https://cdn-icons-png.flaticon.com/512/820/820535.png';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {/* IMAGE */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* CONTENT */}
      <View style={styles.infoContainer}>
        
        {/* TITLE + BADGE */}
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>
            {booking.serviceId?.title}
          </Text>

          <View style={[styles.badge, { backgroundColor: getStatusColor() }]}>
            <Text style={styles.badgeText} numberOfLines={1}>
              {booking.bookingStatus}
            </Text>
          </View>
        </View>

        {/* DETAILS */}
        <Text style={styles.detail} numberOfLines={1}>
          📅 {new Date(booking.selectedDate).toDateString()}
        </Text>
        <Text style={styles.detail} numberOfLines={1}>
          ⏱ {booking.selectedTime}
        </Text>
        <Text style={styles.price} numberOfLines={1}>
          ₹{booking.finalBillAmount}
        </Text>

      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 10,

    // Premium soft shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
    marginRight: 12,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 17,
    color: colors.text,
    fontWeight: '700',
    flex: 1,
    marginRight: 8,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  detail: {
    color: colors.gray,
    fontSize: 14,
    marginTop: 3,
  },

  price: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
  },
});

export default BookingCard;
