import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

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
    <View>
      <Text>Registration Form</Text>
      <TextInput
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleChange("firstName", value)}
      />
      <TextInput
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleChange("lastName", value)}
      />
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
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(value) => handleChange("confirmPassword", value)}
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

export default RegistrationForm;
