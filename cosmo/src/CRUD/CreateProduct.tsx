import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import ProductImage from "../../Images/Admin/create_product.jpg";
import { ImageBackground } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

const CreateProduct = () => {
  const handleImagePicker = () => {
    const options = {
      title: "Select Product Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    // ImagePicker.launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     console.log("User cancelled image picker");
    //   } else if (response.error) {
    //     console.log("ImagePicker Error: ", response.error);
    //   } else {
    //     console.log("ImagePicker response: ", response);
    //     // Here you can use the response data for uploading or displaying the selected image
    //   }
    // });
  };

  return (
    <ImageBackground source={ProductImage} style={styles.imageView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add New Product</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Category"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="white"
          multiline
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Description"
          placeholderTextColor="white"
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="white"
          keyboardType="numeric"
        />
        <TouchableHighlight
          style={styles.uploadButton}
          underlayColor="darkgreen"
          onPress={handleImagePicker} // Call the function when the button is pressed
        >
          <Text style={styles.uploadButtonText}>Upload photo</Text>
        </TouchableHighlight>
        <Button title="Add Product" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  descriptionInput: {
    height: 2 * 30,
    textAlignVertical: "top",
  },
  header: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
  },
  uploadButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 35,
  },
  uploadButtonText: {
    color: "white",
  },
  container: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 45,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 5, height: 2 },
    shadowRadius: 4,
  },
  imageView: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default CreateProduct;
