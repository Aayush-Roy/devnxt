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
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../utils/colors';

import HomeScreen from '../screens/User/HomeScreen';
import MyBookingsScreen from '../screens/User/MyBookingsScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import OffersScreen from '../screens/User/OffersScreen';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } 
            else if (route.name === 'My Bookings') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } 
                    else if (route.name === 'Offers') {
  iconName = focused ? 'pricetag' : 'pricetag-outline';
}
            else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
   


            return <Ionicons name={iconName} size={22} color={color} />;
          },

          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,

          tabBarStyle: {
            backgroundColor: colors.card,
            borderTopColor: colors.border,
            height: 58,
            paddingBottom: 6,
            paddingTop: 6,
          },

          headerStyle: {
            backgroundColor: colors.card,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
          },

        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Services',headerShown:false }} />
        <Tab.Screen name="My Bookings" component={MyBookingsScreen} options={{headerShown:false}} />
        <Tab.Screen name="Offers" component={OffersScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
        
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default UserTabs;
