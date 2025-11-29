import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { authAPI } from '../../api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';
import { storeData } from '../../utils/storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const { login } = useContext(AuthContext);
 
  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     showToast('Please fill in all fields', 'error');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await authAPI.userLogin({ email, password });
  //     await login(response.user, 'user', response.token);
  //     showToast('Login successful', 'success');
  //   } catch (error) {
  //     showToast(error.message || 'Login failed', 'error');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   const handleLogin = async () => {
//   if (!email || !password) {
//     showToast('Please fill in all fields', 'error');
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await authAPI.userLogin({ email, password });

//     console.log("LOGIN RESPONSE:", response);

//     // Save token and user to storage
//     if (response?.token) {
//       await storeData("token", response.token);
//     } else {
//       console.warn("⚠️ Token missing from login response");
//     }

//     if (response?.user) {
//       await storeData("user", response.user);
//     } else {
//       console.warn("⚠️ User missing from login response");
//     }

//     await login(response.user, 'user', response.token);
//     showToast('Login successful', 'success');

//   } catch (error) {
//     showToast(error.message || 'Login failed', 'error');
//   } finally {
//     setLoading(false);
//   }
// };

// const handleLogin = async () => {
//   if (!email || !password) {
//     showToast('Please fill in all fields', 'error');
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await authAPI.userLogin({ email, password });

//     console.log("LOGIN RESPONSE:", response);

//     // Save token and user correctly
//     if (response?.data?.token) {
//       await storeData("token", response.data.token);
//     } else {
//       console.warn("⚠️ Token missing from login response");
//     }

//     if (response?.data) {
//       await storeData("user", response.data);
//     } else {
//       console.warn("⚠️ User missing from login response");
//     }

//     await login(response.data, "user", response.data.token);

//     showToast("Login successful", "success");

//   } catch (error) {
//     showToast(error.message || "Login failed", "error");
//   } finally {
//     setLoading(false);
//   }
// };

const handleLogin = async () => {
  if (!email || !password) {
    showToast('Please fill in all fields', 'error');
    return;
  }

  setLoading(true);
  try {
    const response = await authAPI.userLogin({ email, password });

    console.log("LOGIN RESPONSE:", response);

    const user = response?.data;
    const token = response?.data?.token;

    if (!user || !token) {
      console.warn("⚠️ Backend did not return user/token properly");
      showToast("Invalid login response", "error");
      return;
    }

    // Save in AsyncStorage
    await storeData("user", user);
    await storeData("token", token);

    // Context login
    await login(user, "user", token);

    showToast("Login successful", "success");

  } catch (error) {
    showToast(error.message || "Login failed", "error");
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
  <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
  </TouchableOpacity>
</View>
      <Button
        title="Login"
        onPress={handleLogin}
        loading={loading}
      />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Are you an agent? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AgentSignup')}>
          <Text style={styles.link}>Agent Sign Up</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.gray,
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgotPassword: {
  alignSelf: 'flex-end',
  marginTop: 5,
},
forgotPasswordText: {
  color: colors.primary,
  fontSize: 14,
},
  footerText: {
    color: colors.gray,
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;