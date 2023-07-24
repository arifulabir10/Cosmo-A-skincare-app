import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const ForgetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = () => {
    console.log("Form submitted. Email:", email);
  };

  return (
    <View>
      <Text>Forget Password Form</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ForgetPasswordForm;
