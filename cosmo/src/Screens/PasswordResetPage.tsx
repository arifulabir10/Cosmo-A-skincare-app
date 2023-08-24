import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from "react-native";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Feedback message for the user

  const handleEmailInput = (input:string) => {
    setEmail(input);
  };

  const handleResetPassword = () => {
    // Implement your password reset logic here
    //sendPasswordResetEmail(email).then(() => setMessage("Password reset email sent."));
    // Handle error cases as well
    setMessage("Message is sent Form submitted. Email:")
  };

  return (
    <ImageBackground
      source={require("../../assets/public/icons/images.jpg")} // Replace with the actual image path
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
    <Text style={styles.logo}>COSMO</Text>
      <Text style={styles.header}>Password Reset</Text>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        placeholder="Enter your email"
        onChangeText={handleEmailInput}
        style={styles.input}
        value={email}
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
   resizeMode: "cover", // or "stretch" or "contain"
   // justifyContent: "center",
    alignItems: "center",
 },
  container: {
    display: 'flex',
    //justifyContent: "center",
    alignItems: "center",
    padding: 16,
    top:200
  },
  logo:{
    fontSize: 40,
    left: -120,
    top: -216,
    fontWeight: 'bold',
    color: "#daa520"

  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  message: {
    marginBottom: 16,
    color: "green", // You can use different colors for success and error messages
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default PasswordResetPage;