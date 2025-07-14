import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function SignupScreen() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.logo}><Text style={{ color: '#3477F6' }}>Medi</Text>Fit</Text>
        <Text style={styles.title}>회원가입</Text>
        <View style={styles.box}>
          <Text style={styles.label}>아이디</Text>
          <TextInput style={styles.input} placeholder="abc1" value={id} onChangeText={setId} />
          <Text style={styles.label}>비밀번호</Text>
          <TextInput style={styles.input} placeholder="abc123!" value={password} onChangeText={setPassword} secureTextEntry />
          <Text style={styles.label}>비밀번호 확인</Text>
          <TextInput style={styles.input} placeholder="abc123!" value={passwordCheck} onChangeText={setPasswordCheck} secureTextEntry />
          <View style={styles.agreeRow}>
            <Switch value={agree} onValueChange={setAgree} />
            <Text style={styles.agreeText}>약관 동의</Text>
          </View>
          <Text style={styles.detailText}>자세히 보기</Text>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 100, backgroundColor: '#fff' },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  title: { fontSize: 22, fontWeight: '500', marginBottom: 24 },
  box: { width: '85%', backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#e0e0e0', padding: 20, marginBottom: 30 },
  label: { fontSize: 15, marginBottom: 4, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 6, padding: 10, marginBottom: 8, fontSize: 15, backgroundColor: '#fafafa' },
  agreeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  agreeText: { fontSize: 15, marginLeft: 6 },
  detailText: { color: '#888', fontSize: 13, marginLeft: 58, marginBottom: 10 },
  signupButton: { backgroundColor: '#3477F6', borderRadius: 6, paddingVertical: 12, alignItems: 'center', marginTop: 12 },
  signupButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
});
