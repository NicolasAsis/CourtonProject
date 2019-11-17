import React, {useState,useEffect} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import axios from 'axios';

var email = "";
var password = "";

function Login(props) {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    const ReadUsers = async()=>{
        var obj = {
            key:"users_read",
            data:{}
        }
        var r = await axios.post("http://142.232.167.141:3001/post", obj);
        // console.log("read", r.data);
        var dbusers = JSON.parse(r.data.body);
        console.log("read", dbusers);
        setUsers(dbusers.data);
    }
    useEffect(()=>{
        ReadUsers();
    }, []);

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
            marginTop:130
        },
        emailContainer:{
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
            height: 39,
            width:230,
            borderRadius:20,
            paddingLeft:10,
            backgroundColor:'white',
            color:'#3C3C3C'
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
            textDecorationLine: 'underline'
        }
    })

    return(
        <View style={styles.loginpageStructure}>
            <Image
                style={styles.loginLogo}
                source={
                    require('../assets/logo-02.png')
                }
            />
            <View style={styles.emailContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor={'#686868'} 
                    onChangeText={(t)=>{
                        email=t;
                    }}
                />
            </View>

            <View style={styles.passwordContainer}>
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

            <Text style={styles.errorText}>{error}</Text>

            {/* <Button
                title="LOGIN"
                style={styles.loginBut}
            /> */}

            <TouchableOpacity 
                style={styles.loginBut}
                onPress={()=>{
                    if(email.length===0 || password.length===0){
                        setError("Please type something in.")
                    } 
                    // else if(obj.email == email && obj.password == password){
                    //     Actions.Home()
                    // }
                    // else if(obj.email != email || obj.password != password){
                    //     setError("Incorrect email or password.")
                    //     console.log(obj.email);
                    // }
                    else {
                    Actions.Home()
                    }
                }}
            >
                <Text style={styles.loginButText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={styles.loginText}>Don't have an account?</Text>
            <TouchableOpacity
                onPress={()=>{
                    Actions.Signup()
                }}
            >
                <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;