// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import colors from '../utils/colors';

// import HomeScreen from '../screens/User/HomeScreen';
// import MyBookingsScreen from '../screens/User/MyBookingsScreen';
// import ProfileScreen from '../screens/User/ProfileScreen';

// const Tab = createBottomTabNavigator();

// const UserTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'My Bookings') {
//             iconName = focused ? 'calendar' : 'calendar-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: colors.primary,
//         tabBarInactiveTintColor: colors.gray,
//         tabBarStyle: {
//           backgroundColor: colors.card,
//           borderTopColor: colors.border,
//           height: 60,
//           paddingBottom: 5,
//         },
//         headerStyle: {
//           backgroundColor: colors.card,
//           borderBottomColor: colors.border,
//           borderBottomWidth: 1,
//         },
//         headerTintColor: colors.text,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Services' }} />
//       <Tab.Screen name="My Bookings" component={MyBookingsScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default UserTabs;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import colors from '../utils/colors';

// import HomeScreen from '../screens/User/HomeScreen';
// import MyBookingsScreen from '../screens/User/MyBookingsScreen';
// import ProfileScreen from '../screens/User/ProfileScreen';
// import OffersScreen from '../screens/User/OffersScreen';
// import SignupScreen from '../screens/Auth/SignupScreen';

// const Tab = createBottomTabNavigator();

// const UserTabs = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } 
//             else if (route.name === 'My Bookings') {
//               iconName = focused ? 'clipboard' : 'clipboard-outline';
//             } 
//                     else if (route.name === 'Offers') {
//   iconName = focused ? 'pricetag' : 'pricetag-outline';
// }
//             else if (route.name === 'Profile') {
//               iconName = focused ? 'person-circle' : 'person-circle-outline';
//             }
   


//             return <Ionicons name={iconName} size={22} color={color} />;
//           },

//           tabBarActiveTintColor: colors.primary,
//           tabBarInactiveTintColor: colors.gray,

//           tabBarStyle: {
//             backgroundColor: colors.card,
//             borderTopColor: colors.border,
//             height: 58,
//             paddingBottom: 6,
//             paddingTop: 6,
//           },

//           headerStyle: {
//             backgroundColor: colors.card,
//             borderBottomColor: colors.border,
//             borderBottomWidth: 1,
//           },
//           headerTintColor: colors.text,
//           headerTitleStyle: {
//             fontWeight: '600',
//             fontSize: 18,
//           },

//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Services',headerShown:false }} />
//         <Tab.Screen name="My Bookings" component={MyBookingsScreen} options={{headerShown:false}} />
//         <Tab.Screen name="Offers" component={OffersScreen} options={{headerShown:false}}/>
//         <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
//         <Tab.Screen name="Signup" component={SignupScreen} options={{headerShown:false}} />
        
        
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// export default UserTabs;
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import colors from '../utils/colors';

// import HomeScreen from '../screens/User/HomeScreen';
// import MyBookingsScreen from '../screens/User/MyBookingsScreen';
// import ProfileScreen from '../screens/User/ProfileScreen';
// import OffersScreen from '../screens/User/OffersScreen';
// import SignupScreen from '../screens/Auth/SignupScreen';
// const Tab = createBottomTabNavigator()
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const UserTabs = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let icon = '';

//             if (route.name === 'Home') icon = focused ? 'home' : 'home-outline';
//             else if (route.name === 'MyBookings') icon = focused ? 'clipboard' : 'clipboard-outline';
//             else if (route.name === 'Offers') icon = focused ? 'pricetag' : 'pricetag-outline';
//             else if (route.name === 'Profile') icon = focused ? 'person-circle' : 'person-circle-outline';
//             else if (route.name === 'Signup') icon = focused ? 'log-in' : 'log-in-outline';

//             return <Ionicons name={icon} size={22} color={color} />;
//           },
//           tabBarActiveTintColor: colors.primary,
//           tabBarInactiveTintColor: colors.gray,
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Tab.Screen name="MyBookings" component={MyBookingsScreen} options={{ headerShown: false }} />
//         <Tab.Screen name="Offers" component={OffersScreen} options={{ headerShown: false }} />

//         {user ? (
//           <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//         ) : (
//           <Tab.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
//         )}
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };
// export default UserTabs;
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';

import HomeScreen from '../screens/User/HomeScreen';
import MyBookingsScreen from '../screens/User/MyBookingsScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import OffersScreen from '../screens/User/OffersScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

import { AuthContext } from "../context/AuthContext";
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let icon = '';

          if (route.name === 'Home') icon = focused ? 'home' : 'home-outline';
          else if (route.name === 'MyBookings') icon = focused ? 'clipboard' : 'clipboard-outline';
          else if (route.name === 'Offers') icon = focused ? 'pricetag' : 'pricetag-outline';
          else if (route.name === 'Profile') icon = focused ? 'person-circle' : 'person-circle-outline';
          else if (route.name === 'Signup') icon = focused ? 'log-in' : 'log-in-outline';

          return <Ionicons name={icon} size={22} color={color} />;
        },

        tabBarStyle: {
          backgroundColor: colors.card,   // DARK RAKHEGA
          height: 58,
          paddingBottom: 6,
          paddingTop: 6,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,

        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyBookings" component={MyBookingsScreen} />
      <Tab.Screen name="Offers" component={OffersScreen} />

      {user ? (
        <Tab.Screen name="Profile" component={ProfileScreen} />
      ) : (
        <Tab.Screen name="Signup" component={SignupScreen} />
      )}
    </Tab.Navigator>
    </SafeAreaView>
  );
};

export default UserTabs;
