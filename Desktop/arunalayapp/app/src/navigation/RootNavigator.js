// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { AuthContext } from '../context/AuthContext';
// import Loader from '../components/Loader';

// import UserTabs from './UserTabs';
// import AgentStack from './AgentStack';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import SignupScreen from '../screens/Auth/SignupScreen';
// import AgentSignupScreen from '../screens/Auth/AgentSignupScreen';
// import ServiceDetailsScreen from '../screens/User/ServiceDetailsScreen';
// import BookingScreen from '../screens/User/BookingScreen';
// import BookingDetailsScreen from '../screens/User/BookingDetailsScreen';
// import FeedbackScreen from '../screens/User/FeedbackScreen';
// import PasswordResetScreen from '../screens/Auth/PasswordResetScreen';
// import { createStackNavigator } from '@react-navigation/stack';
// import OffersScreen from '../screens/User/OffersScreen';
// import AgentLoginScreen from '../screens/Auth/AgentLoginScreen';

// const Stack = createStackNavigator();

// const RootNavigator = () => {
//   const { user, userType, isLoading } = useContext(AuthContext);

//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {user ? (
//           userType === 'agent' ? (
//             <Stack.Screen name="Agent" component={AgentStack} />
//           ) : ( 
//             <>
//               <Stack.Screen name="UserTabs" component={UserTabs} />
//               <Stack.Screen 
//                 name="ServiceDetails" 
//                 component={ServiceDetailsScreen} 
//                 options={{ headerShown: false }} 
//               />
//               <Stack.Screen 
//                 name="Booking" 
//                 component={BookingScreen} 
//                 options={{ headerShown: false }} 
//               />
//               <Stack.Screen 
//                 name="BookingDetails" 
//                 component={BookingDetailsScreen} 
//                 options={{ headerShown: false }} 
//               />
//               <Stack.Screen 
//                 name="Feedback" 
//                 component={FeedbackScreen} 
//                 options={{ headerShown: false }} 
//               />
//             </>
//           )
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name="AgentSignup" component={AgentSignupScreen} />
//             <Stack.Screen name="AgentLogin" component={AgentLoginScreen} />
//             {/* <Stack.Screen name="Offers" component={OffersScreen} /> */}
//             <Stack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ title: 'Reset Password' }} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootNavigator;
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader';
import UserTabs from './UserTabs';
import AgentStack from './AgentStack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import AgentSignupScreen from '../screens/Auth/AgentSignupScreen';
import AgentLoginScreen from '../screens/Auth/AgentLoginScreen';
import ServiceDetailsScreen from '../screens/User/ServiceDetailsScreen';
import BookingScreen from '../screens/User/BookingScreen';
import BookingDetailsScreen from '../screens/User/BookingDetailsScreen';
import FeedbackScreen from '../screens/User/FeedbackScreen';
import PasswordResetScreen from '../screens/Auth/PasswordResetScreen';
// import ProtectedRoute from './ProtectedRoute';
import { createStackNavigator } from '@react-navigation/stack';
import ProtectedRoute from './ProtectedRoute';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* 👇 App explore free */}
        <Stack.Screen name="UserTabs" component={UserTabs} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />

        {/* 👇 Login-required pages */}
        <Stack.Screen name="Booking">
          {props => (
            <ProtectedRoute navigation={props.navigation}>
              <BookingScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>

        <Stack.Screen name="BookingDetails">
          {props => (
            <ProtectedRoute navigation={props.navigation}>
              <BookingDetailsScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>

        <Stack.Screen name="Feedback">
          {props => (
            <ProtectedRoute navigation={props.navigation}>
              <FeedbackScreen {...props} />
            </ProtectedRoute>
          )}
        </Stack.Screen>

        {/* 👇 Auth Screens */}
        <Stack.Screen name="AgentStack" component={AgentStack} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AgentSignup" component={AgentSignupScreen} />
        <Stack.Screen name="AgentLogin" component={AgentLoginScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
