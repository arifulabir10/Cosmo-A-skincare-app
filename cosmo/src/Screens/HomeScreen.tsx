import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import Imageslider from "../Component/Imageslider";
import Products from "../Component/Products";
import FlashSale from "../Component/FlashSale";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SortProduct from "../Component/SortProduct";

const Searchbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <TextInput placeholder="Search in Cosmo" style={styles.searchInput} />
        <Ionicons name="md-search-sharp" size={30} color="purple " />
      </View>
      <Imageslider />
      <Products />
      <Text style={styles.heading}>FlashSale</Text>
      <SortProduct />
      <FlashSale />
    </SafeAreaView>
  );
};

export default Searchbar;

const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "grey",
  },
  searchInput: {
    fontSize: 18,
  },
  heading: {
    margin: 10,
    height: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
});
