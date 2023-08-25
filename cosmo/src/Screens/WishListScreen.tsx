import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import WishlistItem from "../Component/WishListItem"; // Import your WishlistItem component

const WishlistScreen = () => {
  const wishlistData = [
    {
      id: 1,
      title: "Product 1",
      price: "$19.99",
      image: require("../../assets/public/icons/images.jpg"),
    },
    {
      id: 2,
      title: "Product 2",
      price: "$29.99",
      image: require("../../assets/public/icons/images.jpg"),
    },
    // Add more wishlist items...
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
