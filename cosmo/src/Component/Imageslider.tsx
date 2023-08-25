import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const HomePage = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?facewash",
    "https://source.unsplash.com/1024x768/?lipstick",
    "https://source.unsplash.com/1024x768/?shampoo",
    "https://source.unsplash.com/1024x768/?cosmetics",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
