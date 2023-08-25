import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = (props: any) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    props.navigation.navigate("LoginForm");
  };

  const handleRegistration = () => {
    props.navigation.navigate("Registration");
  };

  return (
    <ImageBackground
      source={require("../../assets/public/icons/images.jpg")} 
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
        <Text style={styles.logo}>COSMO</Text>
        <View style={styles.button}>
            <Button title="Login" onPress={handleLogin} color="#3498db" />
        </View>
        <View style={styles.button1}>
            <Button title="Registration" onPress={handleRegistration} color="#000000" />
        </View>
        
      
      
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", 
        justifyContent: "center",
        alignItems: "center",
      },
    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        fontSize: 40,
        left: -120,
        fontWeight: 'bold',
        color: "#daa520"

    },
  button:{
    top: 220,
    width: 200,
    Radius: 20,
    
    
},
button1:{
    top: 250,
    width: 200,
    Radius: 20,
    
    
},
title: {
    fontSize: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Home;
