// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { AuthContext } from '../../context/AuthContext';
// import { authAPI } from '../../api/auth';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';
// import { storeData } from '../../utils/storage';
// import { Ionicons } from '@expo/vector-icons';
// import { Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';


// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
//   const { login } = useContext(AuthContext);
 
//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type: '', isVisible: false });
//   };

//   // const handleLogin = async () => {
//   //   if (!email || !password) {
//   //     showToast('Please fill in all fields', 'error');
//   //     return;
//   //   }

//   //   setLoading(true);
//   //   try {
//   //     const response = await authAPI.userLogin({ email, password });
//   //     await login(response.user, 'user', response.token);
//   //     showToast('Login successful', 'success');
//   //   } catch (error) {
//   //     showToast(error.message || 'Login failed', 'error');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

// //   const handleLogin = async () => {
// //   if (!email || !password) {
// //     showToast('Please fill in all fields', 'error');
// //     return;
// //   }

// //   setLoading(true);
// //   try {
// //     const response = await authAPI.userLogin({ email, password });

// //     console.log("LOGIN RESPONSE:", response);

// //     // Save token and user to storage
// //     if (response?.token) {
// //       await storeData("token", response.token);
// //     } else {
// //       console.warn("⚠️ Token missing from login response");
// //     }

// //     if (response?.user) {
// //       await storeData("user", response.user);
// //     } else {
// //       console.warn("⚠️ User missing from login response");
// //     }

// //     await login(response.user, 'user', response.token);
// //     showToast('Login successful', 'success');

// //   } catch (error) {
// //     showToast(error.message || 'Login failed', 'error');
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// // const handleLogin = async () => {
// //   if (!email || !password) {
// //     showToast('Please fill in all fields', 'error');
// //     return;
// //   }

// //   setLoading(true);
// //   try {
// //     const response = await authAPI.userLogin({ email, password });

// //     console.log("LOGIN RESPONSE:", response);

// //     // Save token and user correctly
// //     if (response?.data?.token) {
// //       await storeData("token", response.data.token);
// //     } else {
// //       console.warn("⚠️ Token missing from login response");
// //     }

// //     if (response?.data) {
// //       await storeData("user", response.data);
// //     } else {
// //       console.warn("⚠️ User missing from login response");
// //     }

// //     await login(response.data, "user", response.data.token);

// //     showToast("Login successful", "success");

// //   } catch (error) {
// //     showToast(error.message || "Login failed", "error");
// //   } finally {
// //     setLoading(false);
// //   }
// // };

// const handleLogin = async () => {
//   if (!email || !password) {
//     showToast('Please fill in all fields', 'error');
//     return;
//   }

//   setLoading(true);
//   try {
//     const response = await authAPI.userLogin({ email, password });

//     console.log("LOGIN RESPONSE:", response);

//     const user = response?.data;
//     const token = response?.data?.token;

//     if (!user || !token) {
//       console.warn("⚠️ Backend did not return user/token properly");
//       showToast("Invalid login response", "error");
//       return;
//     }

//     // Save in AsyncStorage
//     await storeData("user", user);
//     await storeData("token", token);

//     // Context login
//     await login(user, "user", token);

//     showToast("Login successful", "success");

//   } catch (error) {
//     showToast(error.message || "Login failed", "error");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Back</Text>
//       <Text style={styles.subtitle}>Sign in to continue</Text>
      
//       <Input
//         label="Email"
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
      
//       <Input
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         placeholder="Enter your password"
//         secureTextEntry
//       />
//       <View style={styles.forgotPassword}>
//   <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
//     <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//   </TouchableOpacity>
// </View>
//       <Button
//         title="Login"
//         onPress={handleLogin}
//         loading={loading}
//       />
      
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.link}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
      
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Are you an agent? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('AgentSignup')}>
//           <Text style={styles.link}>Agent Sign Up</Text>
//         </TouchableOpacity>
//       </View>
      
//       <Toast
//         message={toast.message}
//         type={toast.type}
//         isVisible={toast.isVisible}
//         onHide={hideToast}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
//     color: colors.text,
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     color: colors.gray,
//     fontSize: 16,
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   forgotPassword: {
//   alignSelf: 'flex-end',
//   marginTop: 5,
// },
// forgotPasswordText: {
//   color: colors.primary,
//   fontSize: 14,
// },
//   footerText: {
//     color: colors.gray,
//     fontSize: 16,
//   },
//   link: {
//     color: colors.primary,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../context/AuthContext';
import { authAPI } from '../../api/auth';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';
import { storeData } from '../../utils/storage';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const { login } = useContext(AuthContext);

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };
  const hideToast = () => {
    setToast({ message: '', type, isVisible: false });
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    try {
      setLoading(true);
      const response = await authAPI.userLogin({ email, password });

      const user = response?.data;
      const token = response?.data?.token;

      if (!user || !token) {
        showToast("Invalid login response", "error");
        return;
      }

      await storeData("user", user);
      await storeData("token", token);
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

      {/* --- APP ICON --- */}
      <Image 
        source={require('../../../assets/appicon.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      {/* EMAIL INPUT */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color={colors.gray} style={styles.inputIcon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.gray}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      {/* PASSWORD INPUT */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color={colors.gray} style={styles.inputIcon} />

        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.gray}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
        />

        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Ionicons 
            name={showPass ? "eye-outline" : "eye-off-outline"} 
            size={20} 
            color={colors.gray} 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('PasswordReset')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* GRADIENT LOGIN BUTTON */}
      <TouchableOpacity onPress={handleLogin} disabled={loading}>
        <LinearGradient 
          colors={[colors.primary, '#F88310']} 
          style={styles.loginBtn}
        >
          <Text style={styles.loginText}>{loading ? "Loading..." : "Login"}</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* SIGNUP */}
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
    justifyContent: "center",
  },

  logo: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 20,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: colors.gray,
    fontSize: 16,
    marginBottom: 25,
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },

  forgot: {
    color: colors.primary,
    textAlign: "right",
    marginBottom: 20,
    fontSize: 14,
  },

  loginBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: colors.gray,
    fontSize: 15,
  },
  link: {
    color: colors.primary,
    fontWeight: "700",
  },
});

export default LoginScreen;
