
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput,StyleSheet, Button, ImageBackground } from "react-native";

const LoginForm: React.FC = (props: any) => {
  const navigation = useNavigation();

  const handlePasswordResetLink = () => {
    props.navigation.navigate("PasswordReset");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
     props.navigation.navigate("WishList");
    //  props.navigation.navigate("HomeScreen");
  };

  

  return (
    <ImageBackground
      source={require("../../assets/public/icons/images.jpg")} 
      style={styles.backgroundImage}
    >
    <View style={styles.mainContainer}>
      <Text style={styles.logo}>COSMO</Text>
      <View style={styles.headline}>
                <Text style={styles.title}> Welcome Back </Text>
      </View>
      <View style={styles.start}>
                <Text style={styles.title1}> Log into Your Account </Text>
      </View>
      <View style={styles.input}>
       <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
        style={styles.inputStyles}
       />
       <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleChange("password", value)}
        style={styles.inputStyles}
       />
       <Text style={styles.link} onPress={handlePasswordResetLink}>
          Forgot Password?
        </Text>
      </View>
      <View style={styles.button}>
      <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles=StyleSheet.create({
  backgroundImage: {
       flex: 1,
      resizeMode: "cover", 
      // justifyContent: "center",
       alignItems: "center",
    },
    mainContainer:{
      display: 'flex',
      
      //justifyContent: 'center',
      alignItems: 'center'
  },
  logo:{
    fontSize: 40,
    left: -120,
    fontWeight: 'bold',
    color: "#daa520"

  },
  headline:{
      fontSize: 20,
      
      fontWeight: 'bold',
      top: 120
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
  },
  title1:{
    fontSize: 20,
    fontWeight: "bold",
    
  },
  start:{
      alignItems:"flex-start",
      
      top: 155,
      left: -40

  },
  input:{
      top: 180
  },
  button:{
      top: 250,
      width: 100,
      Radius: 20
      
  },
  
  imageStyles:{
      height: 100,
      width: 100,
      margin: 40
  },
  inputContainer:{
      display: 'flex',
      margin: 10
  },
  inputStyles:{
      width: 250,
      height: 30,
      marginTop: 20,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 18
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    top: 10
  }
})

export default LoginForm;
