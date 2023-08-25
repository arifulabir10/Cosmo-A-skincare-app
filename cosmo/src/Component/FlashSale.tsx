import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

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
    <View>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cosmetics.map((item, index) => (
          <View key={index}>
            <Image source={{ uri: item.image }} style={styles.images} />
            <Text style={styles.imageName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      
     </View> */}

      <View style={styles.container}>
        <Text style={styles.heading}>All the products will be here!!!</Text>
        <View style={styles.card}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {cosmetics.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.images} />
                <Text style={styles.imageName}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "grey",
  },
  card: {
    backgroundColor: "F5F5F5",
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: "48%",
    marginBottom: 20,
  },
  images: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});
