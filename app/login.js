import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (id && password) {
      router.replace('/');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.logo}><Text style={{ color: '#3477F6' }}>Medi</Text>Fit</Text>
        <Text style={styles.title}>로그인</Text>
        <View style={styles.box}>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            style={styles.input}
            placeholder="abc1"
            value={id}
            onChangeText={setId}
          />
          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            style={styles.input}
            placeholder="abc123!"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.linkRow}>
            <Text style={styles.link}>아이디 찾기</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.link}>비밀번호 찾기</Text>
            <Text style={styles.divider}>|</Text>
            <Text style={styles.link} onPress={() => router.push('/signup')}>회원가입</Text>
          </View>
        </View>
        <Text style={styles.snsTitle}>SNS 로그인</Text>
        <View style={styles.snsRow}>
          <View style={styles.snsItem}>
            <Image source={require('../assets/images/kakao.png')} style={styles.snsIcon} />
            <Text style={styles.snsText}>카카오</Text>
          </View>
          <View style={styles.snsItem}>
            <Image source={require('../assets/images/naver.png')} style={styles.snsIcon} />
            <Text style={styles.snsText}>네이버</Text>
          </View>
          <View style={styles.snsItem}>
            <Image source={require('../assets/images/google.png')} style={styles.snsIcon} />
            <Text style={styles.snsText}>구글</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 24,
  },
  box: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  loginButton: {
    backgroundColor: '#3477F6',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  link: {
    color: '#888',
    fontSize: 13,
    marginHorizontal: 4,
  },
  divider: {
    color: '#ccc',
    fontSize: 13,
  },
  snsTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  snsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  snsItem: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  snsIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
    borderRadius: 20,
  },
  snsText: {
    fontSize: 13,
  },
}); 