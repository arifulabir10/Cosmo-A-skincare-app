import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import ProductImage from "../../Images/Products/something.jpg"; // Update the import path based on your project structure

const ProductDescription = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.image} source={ProductImage} />
        <Text style={styles.heading}>Product Name</Text>
        {expanded && (
          <View style={styles.expandedInfo}>
            <Text>Product Description</Text>
            <Text>How to Use</Text>
            <Text>Ingredients</Text>
          </View>
        )}
        <TouchableOpacity style={styles.arrowButton} onPress={toggleExpansion}>
          <Text>{expanded ? "▲" : "▼"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "70%",
    width: "100%",
    resizeMode: "contain",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  expandedInfo: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  arrowButton: {
    marginTop: 10,
  },
});

export default ProductDescription;
