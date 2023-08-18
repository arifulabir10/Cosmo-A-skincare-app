import React from "react";
import { View, Text, SafeAreaView } from "react-native";
// import RegistrationForm from "./src/Screens/RegistrationForm";
// import LoginForm from "./src/Screens/LoginForm.tsx";
// import ForgetPasswordForm from "./src/Screens/ForgetPasswordForm.tsx";
import ProductDescription from "./src/Screens/ProductDescription";

const App: React.FC = () => {
  return (
    <View>
      {/* <Text>Hello everyone</Text> */}
      <ProductDescription />
    </View>
  );
};

export default App;
