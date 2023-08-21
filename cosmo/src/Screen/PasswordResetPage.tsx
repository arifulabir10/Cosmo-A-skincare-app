import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Feedback message for the user

  const handleEmailInput = (input:string) => {
    setEmail(input);
  };

  const handleResetPassword = () => {
    // Implement your password reset logic here
    // Example: sendPasswordResetEmail(email).then(() => setMessage("Password reset email sent."));
    // Handle error cases as well
  };

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default PasswordResetPage;
