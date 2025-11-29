// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';
// import colors from '../utils/colors';

// const Toast = ({ message, type, isVisible, onHide }) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;
  
//   useEffect(() => {
//     if (isVisible) {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
      
//       const timer = setTimeout(() => {
//         Animated.timing(fadeAnim, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }).start(() => onHide());
//       }, 3000);
      
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, fadeAnim, onHide]);

//   if (!isVisible) return null;

//   const getBackgroundColor = () => {
//     switch (type) {
//       case 'success':
//         return colors.success;
//       case 'error':
//         return colors.error;
//       case 'warning':
//         return colors.warning;
//       default:
//         return colors.primary;
//     }
//   };

//   return (
//     <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: getBackgroundColor() }]}>
//       <Text style={styles.message}>{message}</Text>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//     right: 20,
//     padding: 15,
//     borderRadius: 8,
//     zIndex: 1000,
//   },
//   message: {
//     color: colors.text,
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default Toast;
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import colors from '../utils/colors';

const Toast = ({ message = "", type = "info", isVisible, onHide }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start(() => onHide && onHide());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const getBackgroundColor = () => {
    if (!type) return colors.primary || "#333";   // safety

    switch (type) {
      case 'success':
        return colors.success || "#4BB543";
      case 'error':
        return colors.error || "#FF5252";
      case 'warning':
        return colors.warning || "#FFC107";
      default:
        return colors.primary || "#444";
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, backgroundColor: getBackgroundColor() },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 8,
    zIndex: 999,
  },
  message: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Toast;
