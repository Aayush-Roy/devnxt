import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { authAPI } from '../../api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();
  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast({ message: '', type: '', isVisible: false });
  };

  const handleSignup = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await authAPI.userSignup({
        name,
        email,
        phone,
        password,
      });
      await login(response.user, 'user', response.token);
      showToast('Signup successful', 'success');
      navigation.navigate('Login');
    } catch (error) {
      showToast(error.message || 'Signup failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>
      
      <Input
        label="Full Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your full name"
      />
      
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <Input
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      
      <Input
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry
      />
      
      <Button
        title="Sign Up"
        onPress={handleSignup}
        loading={loading}
      />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

export default SignupScreen;