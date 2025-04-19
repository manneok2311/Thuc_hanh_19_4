import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    try {
      await AsyncStorage.setItem('userData', JSON.stringify({ username, email, password }));
      Alert.alert("Thành công", "Đăng ký thành công", [
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]);
    } catch (e) {
      Alert.alert("Lỗi", "Không thể lưu dữ liệu");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/iconcarot.png')}
        style={styles.icon}
      />
      <Text style={styles.title}>Đăng ký</Text>
      <Text style={styles.subtitle}>Nhập thông tin để tiếp tục</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên người dùng"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#999"
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />
        {email.includes('@') && email.includes('.') && (
          <Text style={styles.checkmark}>✔</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
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
      <Text style={styles.terms}>
        Bằng việc tiếp tục, bạn đồng ý với{' '}
        <Text style={styles.link}>Điều khoản Dịch vụ</Text>
        {' '}và{' '}
        <Text style={styles.link}>Chính sách Bảo mật</Text>
        <Text>.</Text>
      </Text>
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signupButtonText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>
          Đã có tài khoản? <Text style={styles.loginText}>Đăng nhập</Text>
        </Text>
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
  inputContainer: {
    width: '100%',
    position: 'relative',
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
  checkmark: {
    position: 'absolute',
    right: 0,
    top: 15,
    color: '#4CAF50',
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
  terms: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginLink: {
    fontSize: 14,
    color: '#666',
  },
  loginText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
});