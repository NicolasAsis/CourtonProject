import React, {useState} from 'react';
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

function Login(props) {

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
            backgroundColor:'white'
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
            backgroundColor:'white'
        },
        loginBut:{
            marginTop:48,
            borderRadius:28,
            width:230,
            height:36,
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
                />
            </View>

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>

            {/* <Button
                title="LOGIN"
                style={styles.loginBut}
            /> */}

            <TouchableOpacity 
                style={styles.loginBut}
                onPress={()=>{
                    Actions.Home()
                }}
            >
                <Text style={styles.loginButText}>LOGIN</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>Don't have an account?<Text style={styles.signupText}> Sign Up</Text></Text>
        </View>
    );
}

export default Login;