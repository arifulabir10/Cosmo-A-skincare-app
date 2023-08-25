import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import WishlistItem from "../Component/WishListItem"; // Import your WishlistItem component

const WishlistScreen = () => {
  const wishlistData = [
    {
      id: 1,
      title: "Face Wash",
      price: "$19.99",
      image: require("../../assets/public/icons/1.jpg"),
    },
    {
      id: 2,
      title: "LipStick",
      price: "$29.99",
      image: require("../../assets/public/icons/2.jpg"),
    },
    {
      id: 3,
      title: "NightCream",
      price: "$29.99",
      image: require("../../assets/public/icons/3.jpg"),
    },
    {
      id: 4,
      title: "SunCream",
      price: "$29.99",
      image: require("../../assets/public/icons/4.jpg"),
    },
    {
      id: 5,
      title: "Eyeliner",
      price: "$29.99",
      image: require("../../assets/public/icons/5.jpg"),
    },
    {
      id: 6,
      title: "Hair Color",
      price: "$29.99",
      image: require("../../assets/public/icons/6.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {wishlistData.map((item) => (
        <WishlistItem
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    top:50
  },
});

export default WishlistScreen;
