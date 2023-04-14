import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UploadPhotoScreen = () => {
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {// code to choose photo from device's gallery
  };

  const handleUploadPhoto = () => {// code to upload photo to server
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Upload Photo</Text>
      <TouchableOpacity style={styles.photoContainer} onPress={handleChoosePhoto}>
        {photo ? <Image source={{
        uri: photo
      }} style={styles.photo} /> : <Text style={styles.photoPlaceholder}>Choose a photo</Text>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPhoto}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  photoPlaceholder: {
    fontSize: 18,
    color: '#999'
  },
  uploadButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default UploadPhotoScreen;