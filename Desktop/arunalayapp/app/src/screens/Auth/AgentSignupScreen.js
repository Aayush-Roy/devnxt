import React, { useState, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView // ✅ ScrollView imported
} from 'react-native';
// Note: Changed from 'react-native-safe-area-context' to 'react-native'
// based on standard usage, but if you must use the context version, ensure it's wrapped higher up.
import { SafeAreaView } from 'react-native'; 

import { AuthContext } from '../../context/AuthContext';
import { authAPI } from '../../api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const AgentSignupScreen = ({ navigation }) => {
    // ... (All state definitions remain the same)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [experience, setExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
    const { login } = useContext(AuthContext);

    const showToast = (message, type) => {
        setToast({ message, type, isVisible: true });
    };

    const hideToast = () => {
        setToast({ message: '', type: '', isVisible: false });
    };

    const handleSignup = async () => {
        if (!name || !email || !phone || !password || !confirmPassword || !specialization || !experience) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        setLoading(true);
        try {
            const response = await authAPI.agentSignup({
                name,
                email,
                phone,
                password,
                specialization,
                experience,
            });
            // 🚨 Note: As discussed earlier, commenting out login to ensure navigation works
            // await login(response.agent, 'agent', response.token); 
            
            showToast('Agent signup successful! Please log in.', 'success');
            
            // ✅ Fix: Redirect to AgentLogin
            navigation.navigate("AgentLogin"); 
            
        } catch (error) {
            showToast(error.message || 'Agent signup failed', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        // ✅ Outer wrapper for safe areas
        <SafeAreaView style={styles.safeArea}>
            {/* ✅ ScrollView added to handle long form content */}
            <ScrollView contentContainerStyle={styles.scrollContent}> 
                <View style={styles.container}>
                    <Text style={styles.title}>Agent Registration</Text>
                    <Text style={styles.subtitle}>Join our team of professionals</Text>
                    
                    {/* Input Fields (Shortened for brevity) */}
                    <Input label="Full Name" value={name} onChangeText={setName} placeholder="Enter your full name" />
                    <Input label="Email" value={email} onChangeText={setEmail} placeholder="Enter your email" keyboardType="email-address" autoCapitalize="none" />
                    <Input label="Phone Number" value={phone} onChangeText={setPhone} placeholder="Enter your phone number" keyboardType="phone-pad" />
                    <Input label="Specialization" value={specialization} onChangeText={setSpecialization} placeholder="e.g., Sports Physiotherapy" />
                    <Input label="Years of Experience" value={experience} onChangeText={setExperience} placeholder="Enter years of experience" keyboardType="numeric" />
                    <Input label="Password" value={password} onChangeText={setPassword} placeholder="Enter your password" secureTextEntry />
                    <Input label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirm your password" secureTextEntry />
                    
                    <Button
                        title="Register as Agent"
                        onPress={handleSignup}
                        loading={loading}
                    />
                    
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account? </Text>
                        {/* ✅ Fix: Changed 'Login' to 'AgentLogin' */}
                        <TouchableOpacity onPress={() => navigation.navigate('AgentLogin')}> 
                            <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        isVisible={toast.isVisible}
                        onHide={hideToast}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    // ✅ New style for ScrollView content
    scrollContent: {
        flexGrow: 1, // Allows content to grow and be scrollable
        justifyContent: 'center', // Keep content centered vertically if shorter than screen
        paddingVertical: 20, // Add padding above and below scroll content
    },
    container: {
        // flex: 1 removed here, as flex: 1 is on scrollContent's parent (ScrollView)
        backgroundColor: colors.background, // Keep background color if needed
        paddingHorizontal: 20, // Use horizontal padding here
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
        marginBottom: 30, // Added bottom margin for better spacing
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

export default AgentSignupScreen;


// import React, { useState, useContext } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../context/AuthContext';
// import { authAPI } from '../../api/auth';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import Toast from '../../components/Toast';
// import colors from '../../utils/colors';

// const AgentLoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
//   const { login } = useContext(AuthContext);
//   //  const navigation = useNavigation();
//   const showToast = (message, type) => {
//     setToast({ message, type, isVisible: true });
//   };

//   const hideToast = () => {
//     setToast({ message: '', type, isVisible: false });
//   };

//   const handleLogin = async () => {
//     if (!email || !password) {
//       showToast('Please fill in all fields', 'error');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await authAPI.agentLogin({ email, password });
       
//       // FIX: Backend sends { success, data }
//       await login(response.data, 'agent', response.data.token);

//       showToast('Login Successful', 'success');
//       navigation.navigate("AgentProfileScreen")
//     } catch (error) {
//       showToast(error.message || 'Login failed', 'error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.scroll}>
//         <View style={styles.container}>
//           <Text style={styles.title}>Agent Login</Text>
//           <Text style={styles.subtitle}>Welcome back! Login to continue</Text>

//           <Input
//             label="Email"
//             value={email}
//             onChangeText={setEmail}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />

//           <Input
//             label="Password"
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Enter your password"
//             secureTextEntry
//           />

//           <Button title="Login" onPress={handleLogin} loading={loading} />

//           <View style={styles.footer}>
//             <Text style={styles.footerText}>Don't have an account? </Text>
//             <TouchableOpacity onPress={() => navigation.navigate('AgentSignup')}>
//               <Text style={styles.link}>Register</Text>
//             </TouchableOpacity>
//           </View>

//           <Toast
//             message={toast.message}
//             type={toast.type}
//             isVisible={toast.isVisible}
//             onHide={hideToast}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   scroll: {
//     paddingBottom: 30,
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
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
//     marginBottom: 40,
//   },
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

// export default AgentLoginScreen;
