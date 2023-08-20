import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet, Text, SafeAreaView } from "react-native";
// import UIULogo from "../../assets/public/icons/uiu_logo.png";
// import Logo from "../../assets/public/icons/uiu_logo.png";





 const login=()=>{
    const [emsil,setEmail]= useState('')
    const [password,setPassword]= useState('')

    const handleEmailInput = (emailInput:string) =>{
         console.log(emailInput)
        //setEmail(emailInput)
    }

    const handlePassInput = (passInput: string) =>{
         console.log(passInput)
        //setPassword(passInput)
    }
    return(
        <SafeAreaView><View style={styles.mainContainer}>
            <View style={styles.headline}>
            <Text> Welcome Back </Text>
        </View>
        <View style={styles.start}>
                <Text> Log into Your Account </Text>
            </View>
            <View style={styles.input}>
                <TextInput value="Email" placeholder="Enter your email" onChangeText={handleEmailInput} style={styles.inputStyles}/>
                <TextInput value="Password" onChangeText={handlePassInput} style={styles.inputStyles}/>
            </View>
            <View style={styles.button}>
                <Button title="Submit" />
                
            </View>
            </View>
            </SafeAreaView>

    )
    
//     return(
        
//         // <View style={styles.mainContainer}>
//             {/* <Image source={Logo} style={styles.imageStyles}/> */}
//             {/* <View style={styles.inputContainer}>
//                 <TextInput value={email} onChangeText={handleEmailInput} style={styles.inputStyles}/>
//                 <TextInput value={password} onChangeText={handlePassInput}style={styles.inputStyles}/>
//                 <TextInput value={nameInput} onChangeText={handleNameInput} style={styles.inputStyles}/>
//             </View> */}
//             {/* <View>
//                 <Button title="Submit" onPress={()=>handleOnSubmit(auth as IAuthProvider)}/>
//                 <Button title="GET NATIONALITY" onPress={handleGetNationality}/>
//             </View> */}
//         {/* </View>} */}
        
//     )
 }

const styles=StyleSheet.create({
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