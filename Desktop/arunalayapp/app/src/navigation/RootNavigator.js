import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader';

import UserTabs from './UserTabs';
import AgentStack from './AgentStack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import AgentSignupScreen from '../screens/Auth/AgentSignupScreen';
import ServiceDetailsScreen from '../screens/User/ServiceDetailsScreen';
import BookingScreen from '../screens/User/BookingScreen';
import BookingDetailsScreen from '../screens/User/BookingDetailsScreen';
import FeedbackScreen from '../screens/User/FeedbackScreen';
import PasswordResetScreen from '../screens/Auth/PasswordResetScreen';
import { createStackNavigator } from '@react-navigation/stack';
import OffersScreen from '../screens/User/OffersScreen';
import AgentLoginScreen from '../screens/Auth/AgentLoginScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const { user, userType, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          userType === 'agent' ? (
            <Stack.Screen name="Agent" component={AgentStack} />
          ) : (
            <>
              <Stack.Screen name="UserTabs" component={UserTabs} />
              <Stack.Screen 
                name="ServiceDetails" 
                component={ServiceDetailsScreen} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="Booking" 
                component={BookingScreen} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="BookingDetails" 
                component={BookingDetailsScreen} 
                options={{ headerShown: false }} 
              />
              <Stack.Screen 
                name="Feedback" 
                component={FeedbackScreen} 
                options={{ headerShown: false }} 
              />
            </>
          )
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="AgentSignup" component={AgentSignupScreen} />
            <Stack.Screen name="AgentLogin" component={AgentLoginScreen} />
            {/* <Stack.Screen name="Offers" component={OffersScreen} /> */}
            <Stack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ title: 'Reset Password' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;