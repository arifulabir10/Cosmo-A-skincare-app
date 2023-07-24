import React from "react";
import { View } from "react-native";
import RegistrationForm from "cosmosrcScreensRegistrationForm.tsx";
import LoginForm from "cosmosrcScreensLoginForm.tsx";
import ForgetPasswordForm from "cosmosrcScreensForgetPasswordForm.tsx";

const App: React.FC = () => {
  return (
    <View>
      <RegistrationForm />
      <LoginForm />
      <ForgetPasswordForm />
    </View>
  );
};

export default App;
