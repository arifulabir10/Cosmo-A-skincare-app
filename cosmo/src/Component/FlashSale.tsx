import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export interface CosmoProducts {
  product_id: number;
  product_name: string;
  product_category: string;
  product_description: string;
  price: number;
}

const FlashSale = () => {
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
    <ScrollView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scrollViewContent}
        data={cosmetics}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.images} />
            <View style={styles.textContainer}>
              <Text style={styles.imageName}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollViewContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "45%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  images: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  textContainer: {
    padding: 10,
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default FlashSale;
