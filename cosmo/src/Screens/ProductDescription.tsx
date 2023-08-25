import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ProductImage from "../../Images/Products/banana.jpg";
import { Dimensions } from "react-native";
import { ImageBackground } from "react-native";

const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.imagePortion}>
            <ImageBackground source={ProductImage} style={styles.imageView} />
          </View>
          <View style={styles.textPortion}>
            <View style={styles.cartIconContainer}>
              <TouchableOpacity
                onPress={() => console.log("Cart icon pressed")}
              >
                <Icon name="shopping-cart" size={35} color="purple" />
              </TouchableOpacity>
            </View>
            <Text style={styles.categoryName}>Serum & Essence</Text>
            <View style={styles.ratingContainer}>
              {/* Custom star rating */}
              <View style={styles.starContainer}>
                <Icon name="star" size={20} color="gold" />
                <Icon name="star" size={20} color="gold" />
                <Icon name="star" size={20} color="gold" />
                <Icon name="star" size={20} color="black" />
                <Icon name="star" size={20} color="black" />
              </View>
            </View>
            <Text style={styles.productName}>
              Cos De BAHA Azelaic Acid 10% Serum - 30ml
            </Text>
            <Text style={styles.price}>৳ 350.00</Text>
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={toggleExpansion}
            >
              <Icon
                name={isExpanded ? "arrow-up" : "arrow-down"}
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isExpanded && (
            <View style={styles.expandedView}>
              <ScrollView style={styles.expandedTextScroll}>
                <Text style={styles.expandedText}>
                  Introducing the Cos De BAHA Azelaic Acid 10% Serum, a potent
                  skincare solution meticulously formulated with 10% Azelaic
                  Acid as its active ingredient. Derived from natural sources
                  such as barley, wheat, and rye, Azelaic Acid takes center
                  stage in addressing an array of skin concerns, from acne to
                  hyperpigmentation. Unveil a revitalized and brightened
                  complexion with this serum's targeted approach.
                </Text>
                <Text>Additional information can go here.</Text>
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  mainContainer: {
    width: deviceWidth,
    height: deviceHeight,
  },
  imagePortion: {
    width: "100%",
    height: "70%",
    overflow: "hidden",
    backgroundColor: "white",
  },
  imageView: {
    marginTop: 30,
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  textPortion: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    position: "relative",
  },
  categoryName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    fontFamily: "sans-serif",
  },
  productName: {
    fontSize: 30,
    color: "black",
    fontFamily: "sans-serif",
  },
  price: {
    fontSize: 24,
    color: "#F8631D",
    fontFamily: "sans-serif",
  },
  cartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  arrowButton: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  expandedView: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  expandedTextScroll: {
    maxHeight: deviceHeight * 0.6,
  },
  expandedText: {
    fontSize: 24,
  },
  ratingContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductDescription;
