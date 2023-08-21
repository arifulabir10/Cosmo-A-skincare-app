import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import BackgroundImage from "../assets/public/icons/back.png"; 







 const login=()=>{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [nameInput,setNameInput]= useState('')

    const handleNameInput = (nameInput:string) =>{
        console.log(nameInput)
       //setEmail(emailInput)
   }
    const handleEmailInput = (emailInput:string) =>{
         console.log(emailInput)
        //setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
         console.log(passInput)
        //setPassword(passInput)
    }
    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
          <SafeAreaView>
            <View style={styles.mainContainer}>
              <View style={styles.headline}>
                <Text> Welcome Back </Text>
              </View>
              <View style={styles.start}>
                <Text> Log into Your Account </Text>
              </View>
              <View style={styles.input}>
              <TextInput
                  value={nameInput}
                  placeholder="User Name"
                  onChangeText={handleNameInput}
                  style={styles.inputStyles}
                  
                />
                <TextInput
                  value={email}
                  placeholder="Enter your email"
                  onChangeText={handleEmailInput}
                  style={styles.inputStyles}
                  
                />
                <TextInput
                  value={password}
                  placeholder="Enter your password"
                  onChangeText={handlePassInput}
                  style={styles.inputStyles}
                  secureTextEntry={true} // Use secureTextEntry for password fields
                  
                />
              </View>
              <View style={styles.button}>
                <Button title="Sign Up" />
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      );
      

 }

const styles=StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // or "stretch" or "contain"
        justifyContent: "center",
        alignItems: "center",
      },
    headline:{
        alignItems:'center',
        fontSize: 2,
        top: 200
    },
    start:{
        alignItems:"flex-start",
        fontSize: 2,
        top: 250

    },
    input:{
        top: 275
    },
    button:{
        top: 300
    },
    mainContainer:{
        display: 'flex',
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles:{
        height: 100,
        width: 100,
        margin: 40
    },
    inputContainer:{
        display: 'flex',
        margin: 10
    },
    inputStyles:{
        width: 200,
        height: 60,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 25
    }
})
export default login;