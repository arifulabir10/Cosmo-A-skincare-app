import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import RegistrationForm from "./src/Screens/RegistrationForm";
// import LoginForm from "./src/Screens/LoginForm.tsx";
// import ForgetPasswordForm from "./src/Screens/ForgetPasswordForm.tsx";
import ProductDescription from "./src/Screens/ProductDescription";
import Searchbar from "./src/Screens/Searchbar";
import CreateProduct from "./src/CRUD/CreateProduct";
import DocumentFile from "./src/DocumentFile";

const App = () => {
  return (
    <View>
      <Searchbar />
      {/* <Text>Hello everyone</Text> */}
      {/* <ProductDescription /> */}
      {/* <RegistrationForm /> */}
      {/* <CreateProduct /> */}
      {/* <DocumentFile /> */}
    </View>
  );
};

export default App;
