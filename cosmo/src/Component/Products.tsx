import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const Products = () => {
  const cosmetics = [
    {
      id: 1,
      name: "Serum & Essence",
      image: "https://source.unsplash.com/1024x768/?facewash",
    },
    {
      id: 2,
      name: "Lip Balm and Treatment",
      image: "https://source.unsplash.com/1024x768/?lipstick",
    },
    {
      id: 3,
      name: "Facial Cleansers",
      image: "https://source.unsplash.com/1024x768/?shampoo",
    },
    {
      id: 4,
      name: "Lotion",
      image: "https://source.unsplash.com/1024x768/?cosmetics",
    },
    {
      id: 5,
      name: "Lipstick",
      image: "https://source.unsplash.com/1024x768/?lipstick",
    },
    {
      id: 6,
      name: "Oil",
      image: "https://source.unsplash.com/1024x768/?cosmetics",
    },
    {
      id: 7,
      name: "Cream",
      image: "https://source.unsplash.com/1024x768/?lipstick",
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cosmetics.map((item, index) => (
          <View key={index}>
            <Image source={{ uri: item.image }} style={styles.images} />
            <Text style={styles.imageName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imageName: {
    width: 80,
    height: 60,
    marginTop: 6,
    textAlign: "center",
    justifyContent: "center",
  },
});
