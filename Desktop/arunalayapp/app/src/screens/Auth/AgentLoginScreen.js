import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import { authAPI } from '../../api/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Toast from '../../components/Toast';
import colors from '../../utils/colors';

const AgentLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', isVisible: false });
  const { login } = useContext(AuthContext);
  //  const navigation = useNavigation();
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

    setLoading(true);

    try {
      const response = await authAPI.agentLogin({ email, password });
       
      // FIX: Backend sends { success, data }
      await login(response.data, 'agent', response.data.token);

      showToast('Login Successful', 'success');
      navigation.navigate("AgentProfileScreen")
    } catch (error) {
      showToast(error.message || 'Login failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Agent Login</Text>
          <Text style={styles.subtitle}>Welcome back! Login to continue</Text>

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

          <Button title="Login" onPress={handleLogin} loading={loading} />

          <View style={styles.footer}>
            
            <TouchableOpacity onPress={() => navigation.navigate('AgentSignup')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>  |  </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.link}>User</Text>
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
  scroll: {
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
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
    marginBottom: 40,
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

export default AgentLoginScreen;
