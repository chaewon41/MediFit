import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [photoUri, setPhotoUri] = useState(null);

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('카메라 권한이 필요합니다.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* 상단 프로필/알림 */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          {/* 프로필 이미지 */}
          <Image source={require('../../assets/images/profile.png')} style={styles.profileIcon} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.greeting}>안녕하세요, 홍길동님</Text>
            <Text style={styles.date}>2025년 7월 9일 수요일</Text>
          </View>
        </View>
        {/* 알림 아이콘 */}
        <Ionicons name="notifications-outline" size={28} color="#3477F6" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* 약 사진 촬영 */}
        <Text style={styles.sectionTitle}>약 사진 촬영</Text>
        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          {/* 카메라 아이콘 */}
          <Ionicons name="camera-outline" size={28} color="#fff" />
          <Text style={styles.photoButtonText}>약 사진 찍기</Text>
        </TouchableOpacity>

        {/* 오늘의 복약 */}
        <Text style={styles.sectionTitle}>오늘의 복약</Text>
        <View style={styles.todayCard}>
          <View style={styles.todayRow}>
            {/* 약 아이콘 */}
            <MaterialCommunityIcons name="pill" size={36} color="#3477F6" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.todayPillName}>혈압약</Text>
              <Text style={styles.todayPillTime}>아침 식후 30분</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}>복용 완료</Text>
          </TouchableOpacity>
        </View>

        {/* 복약 일정 */}
        <Text style={styles.sectionTitle}>복약 일정</Text>
        <View style={styles.scheduleBox}>
          <View style={styles.scheduleRow}>
            <Text style={styles.schedulePill}>혈압약, 당뇨약</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>8:00 AM</Text>
              <View style={styles.ampmBox}><Text style={styles.ampmText}>AM</Text></View>
              <View style={styles.ampmBoxInactive}><Text style={styles.ampmTextInactive}>PM</Text></View>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.schedulePill}>당뇨약</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>1:30 PM</Text>
              <View style={styles.ampmBoxInactive}><Text style={styles.ampmTextInactive}>AM</Text></View>
              <View style={styles.ampmBox}><Text style={styles.ampmText}>PM</Text></View>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.schedulePill}>혈압약</Text>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>7:00 PM</Text>
              <View style={styles.ampmBoxInactive}><Text style={styles.ampmTextInactive}>AM</Text></View>
              <View style={styles.ampmBox}><Text style={styles.ampmText}>PM</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#E3F0FF',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  date: {
    fontSize: 15,
    color: '#888',
  },
  bellIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F2F2F2',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 10,
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3477F6',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 18,
  },
  cameraIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  todayCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3477F6',
    borderRadius: 12,
    marginHorizontal: 24,
    padding: 18,
    marginBottom: 18,
  },
  todayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  pillIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E3F0FF',
  },
  todayPillName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  todayPillTime: {
    fontSize: 15,
    color: '#3477F6',
  },
  doneButton: {
    backgroundColor: '#3477F6',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3477F6',
    borderRadius: 10,
    marginHorizontal: 24,
    padding: 10,
    marginBottom: 24,
  },
  scheduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  schedulePill: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
    marginLeft: 10,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  ampmBox: {
    backgroundColor: '#3477F6',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
  },
  ampmText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  ampmBoxInactive: {
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginHorizontal: 2,
  },
  ampmTextInactive: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E3F0FF',
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    color: '#222',
  },
}); 