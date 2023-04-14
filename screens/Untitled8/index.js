import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ProgressBarAndroid } from 'react-native';

const UploadPhotoScreen = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handlePhotoSelection = photo => {
    setSelectedPhotos([...selectedPhotos, photo]);
  };

  const handlePhotoRemoval = photo => {
    const updatedPhotos = selectedPhotos.filter(p => p !== photo);
    setSelectedPhotos(updatedPhotos);
  };

  const handleUpload = () => {// Code to upload photos and update progress
  };

  return <View style={_styles.xmncWRSs}>
      <View style={_styles.UvAxEWwu}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icons/back.png')} style={_styles.TJxHyXbb} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpload}>
          <Text style={_styles.jGaJYarc}>Upload</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{
      padding: 20
    }}>
        <View style={_styles.LmcADMti}>
          {selectedPhotos.map(photo => <TouchableOpacity key={photo} onPress={() => handlePhotoRemoval(photo)}>
              <Image source={{
            uri: photo
          }} style={_styles.pEoghToa} />
            </TouchableOpacity>)}
          <TouchableOpacity onPress={() => handlePhotoSelection('https://dummyimage.com/300x300/000/fff')}>
            <View style={_styles.xtEgNENX}>
              <Image source={require('../assets/icons/add.png')} style={_styles.tsBGXCYs} />
            </View>
          </TouchableOpacity>
        </View>
        {uploadProgress > 0 && <ProgressBarAndroid styleAttr="Horizontal" progress={uploadProgress} indeterminate={false} />}
      </ScrollView>
    </View>;
};

export default UploadPhotoScreen;

const _styles = StyleSheet.create({
  xmncWRSs: {
    flex: 1,
    backgroundColor: "#fff"
  },
  UvAxEWwu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40
  },
  TJxHyXbb: {
    width: 24,
    height: 24
  },
  jGaJYarc: {
    color: "#007AFF",
    fontSize: 16
  },
  LmcADMti: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  pEoghToa: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  xtEgNENX: {
    width: 100,
    height: 100,
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  tsBGXCYs: {
    width: 24,
    height: 24
  }
});