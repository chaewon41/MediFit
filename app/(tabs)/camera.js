import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraTried, setCameraTried] = useState(false);

  useEffect(() => {
    // 페이지가 열리면 자동으로 카메라 실행 (한 번만)
    if (!cameraTried) {
      setCameraTried(true);
      openCamera();
    }
  }, [cameraTried]);

  const openCamera = async () => {
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
      <Text style={styles.title}>약 사진 촬영</Text>
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      ) : (
        <View style={styles.placeholder}>
          <Ionicons name="camera-outline" size={60} color="#ccc" />
          <Text style={{ color: '#aaa', marginTop: 10 }}>사진이 없습니다</Text>
        </View>
      )}
      <TouchableOpacity style={styles.retakeButton} onPress={openCamera}>
        <Ionicons name="camera-outline" size={24} color="#fff" />
        <Text style={styles.retakeText}>다시 찍기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  preview: {
    width: 240,
    height: 240,
    borderRadius: 16,
    marginBottom: 24,
    resizeMode: 'cover',
  },
  placeholder: {
    width: 240,
    height: 240,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  retakeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3477F6',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  retakeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

