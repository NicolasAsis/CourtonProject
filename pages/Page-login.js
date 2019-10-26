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

function Login() {

    const styles=StyleSheet.create({
        loginpageStructure:{
            display:'flex',
            flexDirection:'column',
            // justifyContent:'center',
            alignItems:'center',
            height:'100%'
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
            shadowOpacity: 1,
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
            marginTop:50,
            borderRadius:20,
            shadowColor: "#D8D8D8",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 1,
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
            height:56,
            backgroundColor:'#FE647B'
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
                    defaultValue="email@gmail.com"
                />
            </View>

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    defaultValue="Password"
                />
            </View>

            {/* <Button
                title="LOGIN"
                style={styles.loginBut}
            /> */}

            <TouchableOpacity style={styles.loginBut}>

            </TouchableOpacity>
        </View>
    );
}

export default Login;