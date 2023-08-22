import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import React from "react";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text>Cosmo</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  mainContainer: {},
  card: {
    height: 30,
    width: deviceWidth,
    padding: 40,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "orange",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
  },
  cardContent: {},
});

export default HomePage;
