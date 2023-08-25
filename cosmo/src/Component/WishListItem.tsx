import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface WishlistItemProps {
    title: string;
    price: string;
    image: any; // You can use a more specific type for images, such as ImageSourcePropType
  }
  
  const WishlistItem: React.FC<WishlistItemProps> = ({ title, price, image }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>Price: {price}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,

  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    left: 150,
    top: -70
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    left: 150,
    top: -70
  },
});

export default WishlistItem;
