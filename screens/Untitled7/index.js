import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ProgressBarAndroid } from 'react-native';

const UploadPhotoScreen = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSelectPhoto = photo => {
    setSelectedPhotos([...selectedPhotos, photo]);
  };

  const handleRemovePhoto = photo => {
    const updatedPhotos = selectedPhotos.filter(p => p !== photo);
    setSelectedPhotos(updatedPhotos);
  };

  const handleUploadPhotos = () => {// Code to upload photos
    // Use setUploadProgress to update progress bar
  };

  return <View style={_styles.PfqFyagE}>
      <ScrollView contentContainerStyle={{
      padding: 20
    }}>
        <Text style={_styles.FVSvjCYk}>Upload Photos</Text>
        <View style={_styles.BPFOGBQG}>
          {selectedPhotos.map(photo => <TouchableOpacity key={photo} onPress={() => handleRemovePhoto(photo)}>
              <Image source={{
            uri: photo
          }} style={_styles.vBwzFmMk} />
            </TouchableOpacity>)}
          <TouchableOpacity onPress={() => handleSelectPhoto('https://dummyimage.com/200x200/000/fff')}>
            <View style={_styles.VzJTVCoA}>
              <Text style={_styles.UZbKslHj}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        {selectedPhotos.length > 0 && <TouchableOpacity onPress={handleUploadPhotos} style={_styles.NAstAaYQ}>
            <Text style={_styles.aPVdmiSR}>Upload</Text>
          </TouchableOpacity>}
        {uploadProgress > 0 && <ProgressBarAndroid styleAttr="Horizontal" progress={uploadProgress} indeterminate={false} />}
      </ScrollView>
    </View>;
};

export default UploadPhotoScreen;

const _styles = StyleSheet.create({
  PfqFyagE: {
    flex: 1
  },
  FVSvjCYk: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  BPFOGBQG: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  vBwzFmMk: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10
  },
  VzJTVCoA: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  UZbKslHj: {
    fontSize: 24
  },
  NAstAaYQ: {
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  aPVdmiSR: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center"
  }
});