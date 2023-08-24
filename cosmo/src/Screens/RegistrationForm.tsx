import React, { useState } from "react";
import { View, Text, TextInput,StyleSheet, Button, ImageBackground } from "react-native";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <ImageBackground
      source={require("../../assets/public/icons/images.jpg")} // Replace with the actual image path
      style={styles.backgroundImage}
    >
    <View style={styles.mainContainer}>
    <Text style={styles.logo}>COSMO</Text>
      <View style={styles.headline}>
                <Text> Welcome To Cosmo </Text>
      </View>
      <View style={styles.start}>
                <Text> Create Your Account </Text>
      </View>
      <View style={styles.input}>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleChange("firstName", value)} style={styles.inputStyles}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleChange("lastName", value)} style={styles.inputStyles}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)} style={styles.inputStyles}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleChange("password", value)} style={styles.inputStyles}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(value) => handleChange("confirmPassword", value)} style={styles.inputStyles}
      />
      </View>
      <View style={styles.button}>
      <Button title="Register" onPress={handleSubmit} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles=StyleSheet.create({
  backgroundImage: {
      flex: 1,
      resizeMode: "cover", 
      //justifyContent: "center",
      alignItems: "center",
    },
  headline:{
      alignItems:'center',
      
      top: 100,
      fontSize: 20
  },
  start:{
      alignItems:"flex-start",
      
      top: 150,
      left: -65,
      fontSize: 15

  },
  input:{
      top: 160
  },
  button:{
      top: 200
  },
  mainContainer:{
      display: 'flex',
      
      justifyContent: 'center',
      alignItems: 'center'
  },
  logo:{
    fontSize: 40,
    left: -120,
    fontWeight: 'bold',
    color: "#daa520"

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
      fontSize: 15
  }
})

export default RegistrationForm;
