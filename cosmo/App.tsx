import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/Screens/home";
import LoginForm from "./src/Screens/LoginForm";
import HomeScreen from "./src/Screens/HomeScreen";
import Registration from "./src/Screens/RegistrationForm";
import PasswordResetPage from "./src/Screens/PasswordResetPage";
import WishList from "./src/Screens/WishListScreen";
import ChangePassword from "./src/Screens/ChangePassword"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="LoginForm" component={LoginForm} />
        {/* <stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <stack.Screen name="Registration" component={Registration} />
        <stack.Screen name="PasswordReset" component={PasswordResetPage} />
        {/* <stack.Screen name="ChangePassword" component={ChangePassword} /> */}
        <stack.Screen name="WishList" component={WishList} />
      </stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <ChangePassword/>
    // </View>
    
  )
}





