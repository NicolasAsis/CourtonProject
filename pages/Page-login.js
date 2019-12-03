import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { Actions } from "react-native-router-flux";
import Birdie from '../comps/Birdie'

import axios from "axios";

import AsyncStorage from "@react-native-community/async-storage";

// Animation 
import * as Animatable from "react-native-animatable";
// custome animation for logo
Animatable.initializeRegistryWithDefinitions({
    logoAnimate: {
        from: {
                top:190,
                scale:1},
        to: {
            top:0,
            scale:0.8
        },
      },
    backGroundAnimate: {
        from: {
            backgroundColor:"#094E76"
        },
        to: {
            backgroundColor:"#ffffff"
        }
    }
  });


var email = "";
var password = "";

function Login(props) {

    // const [users, setUsers] = useState([]);


    const ReadUsers = async()=>{
        var obj = {
            key:"users_read",
            data:{
                email:email,
                password:password
            }
        }
        var r = await axios.post("http://localhost:3001/post", obj);
        var dbusers = JSON.parse(r.data.body);

        var userData = dbusers.data[0];

        console.log(dbusers.data[0]);
        //setUsers(dbusers);
        if(dbusers.data[0] == null){
            alert('Email or password is incorrect.')
        }else {
            //change ui
            // console.log("test",userData.id)
            Actions.Home()
            await AsyncStorage.setItem("userId", JSON.stringify(userData.id));
            await AsyncStorage.setItem("userFN", userData.first_name);
            await AsyncStorage.setItem("userLN", userData.last_name);
        }
    }
    

    const styles=StyleSheet.create({
        loginpageStructure:{
            display:'flex',
            flexDirection:'column',
            // justifyContent:'center',
            alignItems:'center',
            height:'100%',
            backgroundColor:'#FFFFFF'
        },
        loginLogo:{
            width:175,
            height:175,
            marginTop:130,
        },
        emailContainer:{
            borderRadius: 20,
            backgroundColor: "white",
            display:'flex',
            flexDirection:'row',
            height: 39,
            width:230,
            marginTop:50,
            borderRadius:20,
            shadowColor: "#D8D8D8",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation:8
        },
        emailInput:{
            height: 39,
            width:230,
            borderRadius:20,
            paddingLeft:10,
            backgroundColor:'white',
            color:'#3C3C3C'
        },
        passwordContainer: {
            borderRadius: 20,
            backgroundColor: "white",
            display:'flex',
            flexDirection:'row',
            height: 39,
            width:230,
            marginTop:20,
            borderRadius:20,
            shadowColor: "#D8D8D8",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation:8
        },
        passwordInput:{
            flex:3,
            height: 39,
            width:230,
            borderRadius:20,
            paddingLeft:10,
            backgroundColor:'white',
            color:'#3C3C3C'
        },
        icon: {
            width:24, 
            height:24,
            marginLeft:20,
            marginTop:6
        },
        loginBut:{
            marginTop:48,
            borderRadius:28,
            width:230,
            height:40,
            backgroundColor:'#FE647B',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        loginButText:{
            fontWeight:'bold',
            fontSize:18,
            lineHeight:25,
            textAlign:'center',
            color:'white'
        },
        loginText:{
            fontSize:12,
            lineHeight:16,
            color:'#094E76',
            marginTop:26
        },
        errorText:{
            fontSize:12,
            lineHeight:16,
            color:'#FE647B',
            marginTop:10
        },
        signupText:{
            fontSize:12,
            lineHeight:16,
            color:'#5DB9F0',
            marginTop:26,
            textDecorationLine: 'underline',
            fontWeight:"bold"
        }
    })

    

    return(
        // backGroundAnimate
          
        <View style={styles.loginpageStructure}>
            <Animatable.View
          style={styles.card}
          animation="logoAnimate"
          iterationCount={1}
          direction="alternate"
          delay={2500}
        >
        <Image style={styles.loginLogo} source={require('../assets/logo-02.png')}
            />
        </Animatable.View>


        <Animatable.View style={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={3000}>
           
            <View style={styles.emailContainer}>
            <Image style={styles.icon} source={require("../assets/icon_email.png")}/>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor={'#686868'} 
                    onChangeText={(t)=>{
                        email=t;
                    }}
                    autoCapitalize='none'
                />
            </View>
        </Animatable.View>

        <Animatable.View style={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={3500}>
            <View style={styles.passwordContainer}>
            <Image style={styles.icon} source={require("../assets/icon_password.png")}/>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={'#686868'} 
                    onChangeText={(t)=>{
                    password=t;
                    }}
                />
            </View>
        </Animatable.View>
        <Animatable.View style={styles.card} animation="fadeIn" iterationCount={1} direction="alternate" delay={4000}>
        <TouchableOpacity 
                style={styles.loginBut}
                onPress={()=>{
                    ReadUsers();
                }}
            >
            
                <Text style={styles.loginButText}>LOGIN</Text>
            </TouchableOpacity>
        </Animatable.View>
        <Animatable.View style={styles.card} animation="fadeIn" iterationCount={1} direction="alternate" delay={4500}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={styles.loginText}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              Actions.Signup();
            }}
          >
            <Text style={styles.signupText}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        </Animatable.View>
      </View>
 
  );
}

export default Login;
