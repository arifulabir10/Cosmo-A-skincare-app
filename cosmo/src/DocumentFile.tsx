import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useState } from "react";
import ImagePicker from "react-native-image-picker";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    const options = {
      title: "Select Image",
      mediaType: "photo",
      quality: 1,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Image Uploader</Text>
      <View style={{ marginHorizontal: 30 }}>
        <Button title="SELECT IMAGE" onPress={selectImage} />
        {selectedImage && (
          <Image source={selectedImage} style={styles.selectedImage} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 30,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
