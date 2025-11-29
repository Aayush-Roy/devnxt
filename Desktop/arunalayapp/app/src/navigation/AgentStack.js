// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import colors from '../utils/colors';

// import AgentDashboardScreen from '../screens/Agent/AgentDashboardScreen';
// import AgentBookingDetailsScreen from '../screens/Agent/AgentBookingDetailsScreen';

// const Stack = createStackNavigator();

// const AgentStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.card,
//           borderBottomColor: colors.border,
//           borderBottomWidth: 1,
//         },
//         headerTintColor: colors.text,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//       <Stack.Screen 
//         name="AgentDashboard" 
//         component={AgentDashboardScreen} 
//         options={{ title: 'Agent Dashboard' }} 
//       />
//       <Stack.Screen 
//         name="AgentBookingDetails" 
//         component={AgentBookingDetailsScreen} 
//         options={{ title: 'Booking Details' }} 
//       />
//     </Stack.Navigator>
//   );
// };

// export default AgentStack;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import colors from '../utils/colors';

import AgentDashboardScreen from '../screens/Agent/AgentDashboardScreen';
import AgentBookingDetailsScreen from '../screens/Agent/AgentBookingDetailsScreen';
import AgentProfileScreen from '../screens/Agent/AgentProfileScreen'; // Import the new screen
import { TouchableOpacity } from 'react-native';
import AgentLoginScreen from '../screens/Auth/AgentLoginScreen';
import AgentSignupScreen from '../screens/Auth/AgentSignupScreen';
import AgentBookingScreen from '../screens/Agent/AgentBookingScreen';

const Stack = createStackNavigator();

const AgentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({ // Add navigation prop to access it
        headerStyle: {
          backgroundColor: colors.card,
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => ( // Add header button
          <TouchableOpacity onPress={() => navigation.navigate('AgentProfile')} style={{ marginRight: 15 }}>
            <Ionicons name="person-circle-outline" size={28} color={colors.text} />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen 
        name="AgentDashboard" 
        component={AgentDashboardScreen} 
        options={{ title: 'Dashboard', headerRight: () => null , headerShown:true}} // No profile button on dashboard itself
      />
      <Stack.Screen 
        name="AgentBookingDetails" 
        component={AgentBookingDetailsScreen} 
        options={{ title: 'Booking Details' }} 
      />
      <Stack.Screen 
        name="AgentBookingScreen" 
        component={AgentBookingScreen} 
        options={{ title: 'Booking Screen' }} 
      />
      <Stack.Screen 
        name="AgentProfile" 
        component={AgentProfileScreen} 
        options={{ title: 'Agent Profile', headerRight: () => null }} // No profile button on the profile screen
      />
      <Stack.Screen 
        name="AgentLogin" 
        component={AgentLoginScreen} 
        options={{ title: 'Agent Login', headerRight: () => null }} // No profile button on the profile screen
      />
      <Stack.Screen 
       name="AgentSignup" 
        component={AgentSignupScreen} 
 options={{ title: 'Agent Registration', headerRight: () => null }} 
 />
    </Stack.Navigator>
  );
};

export default AgentStack;