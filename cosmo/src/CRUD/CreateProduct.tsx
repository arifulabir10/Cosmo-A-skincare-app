import React from "react";
import { TextInput } from "react-native";
import { View, StyleSheet} from "react-native";
import { createProduct } from "react-native";

import ProductImage from "../../Images/Admin/createProduct.jpg";
import { ImageBackground } from "react-native";

const CreateProduct = () => {
  return (
    <View>
    <ImageBackground source={createProduct} style={styles.imageView} />
    
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Price in tk"
          placeholderTextColor="white"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="white"
          multiline
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    color: "white", // Text color
  },
  imageView: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});

export default CreateProduct;
