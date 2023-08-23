import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import RegistrationForm from "./src/Screens/RegistrationForm";
// import LoginForm from "./src/Screens/LoginForm.tsx";
// import ForgetPasswordForm from "./src/Screens/ForgetPasswordForm.tsx";
import ProductDescription from "./src/Screens/ProductDescription";
import HomePage from "./src/Screens/HomePage";
import CreateProduct from "./src/CRUD/CreateProduct";
const App = () => {
  return (
    <View>
      {/* <HomePage /> */}
      {/* <Text>Hello everyone</Text> */}
      {/* <ProductDescription /> */}
      {/* <RegistrationForm /> */}
      <CreateProduct />
    </View>
  );
};

export default App;
