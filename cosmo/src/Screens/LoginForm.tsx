import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Add your login logic here (e.g., validating the data and logging in the user).
    console.log("Form submitted:", formData);
  };

  return (
    <View>
      <Text>Login Form</Text>
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleChange("password", value)}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export default LoginForm;
