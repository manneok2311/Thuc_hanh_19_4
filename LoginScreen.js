import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data) {
        const user = JSON.parse(data);
        if (email === user.email && password === user.password) {
          Alert.alert("Thành công", "Đăng nhập thành công");
        } else {
          Alert.alert("Sai thông tin", "Email đăng nhập hoặc mật khẩu không đúng");
        }
      } else {
        Alert.alert("Không có dữ liệu", "Chưa có người dùng nào được đăng ký");
      }
    } catch (e) {
      Alert.alert("Lỗi", "Không thể đọc dữ liệu");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/iconcarot.png')}
        style={styles.icon}     
      />
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập email và mật khẩu của bạn</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.eyeIcon}>
          <Text>👁️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupLink}>Bạn chưa có tài khoản? <Text style={styles.signupText}>Đăng ký</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'linear-gradient(180deg, #f5e9e9, #f5f5f5)',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupLink: {
    fontSize: 14,
    color: '#666',
  },
  signupText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});