import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/Screens/home"
import LoginForm from "./src/Screens/LoginForm"
import Registration from "./src/Screens/RegistrationForm"
import PasswordResetPage from "./src/Screens/PasswordResetPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="LoginForm" component={LoginForm} />
        <stack.Screen name="Registration" component={Registration} />
        <stack.Screen name="PasswordReset" component={PasswordResetPage} />
      </stack.Navigator>
    </NavigationContainer>
    
  )
}




// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform authentication logic here
//     // For simplicity, let's just log the credentials
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login</Text>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
// });

// export default LoginScreen;
