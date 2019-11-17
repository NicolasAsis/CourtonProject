import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import {Actions} from 'react-native-router-flux';
// import Profile from ''

import axios from 'axios';

var email = "";
var password = "";
var first_name = "";
var last_name = "";


function Signup(){
    const [users, setUsers] = useState([]);

    const CreateUser = async()=>{
        //fetch db to create users
        console.log('email & password', first_name,last_name,email, password);
        var obj ={
            key:"users_create",
            data:{
                first_name:first_name,
                last_name:last_name,
                email: email,
                password: password
            }
        }
        var r = await axios.post("http://142.232.167.141:3001/post", obj);
        console.log("create", r.data);
        ReadUsers();
    }

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
    

    return(
    <View>
        {/* <View style={{backgroundColor: "#ffffff"}}> */}
        {/* </View> */}
        
        <View style={styles.loginpageStructure}>
            <Image
            style={styles.birdieRed} 
            source={require('../assets/img_infographic7.png')}/>
            <Text style={styles.createaccText}>CREATE ACCOUNT</Text>

            <Text style={styles.nameText}>FIRST NAME</Text>
            <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder="First Name"
                        onChangeText={(t)=>{
                            first_name=t;  
                        }}
                    />
            </View>

            <Text style={styles.nameText}>LAST NAME</Text>
            <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder="Last Name"
                        onChangeText={(t)=>{
                            last_name=t;  
                        }}
                    />
            </View>

            <Text style={styles.emailText}>EMAIL</Text>
            <View style={styles.emailContainer}>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="Email"
                            onChangeText={(t)=>{
                                email=t;  
                            }}
                            autoCapitalize='none'
                        />
            </View>


            <Text style={styles.passwordText}>PASSWORD</Text>
            <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        onChangeText={(t)=>{
                            password=t;  
                        }}
                        secureTextEntry={true}
                    />
            </View>

            

                <View>

                    <Text style={styles.orText}> ──────── OR ────────</Text>
                </View >


            {/* <GoogleSigninButton
             style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} /> */}

            <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity
                onPress={()=>{
                    Actions.pop()
                }}
            >
                <Text style={styles.signupText}> Sign In</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={styles.loginBut}
                onPress={()=>{
                    CreateUser();
                    Actions.Welcome()
                    // if()
                }}
            >
                    <Text style={styles.loginButText}>CREATE</Text>
            </TouchableOpacity>


            <Image
             style={styles.birdieBlue} 
             source={require('../assets/img_infographic6.png')}/>
        </View>
        
</View>
    )
};



const styles=StyleSheet.create({
    loginpageStructure:{
        display:'flex',
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',
        height:'100%',
        backgroundColor:'#FFFFFF',

    },
    birdieRed:{
        width:180,
        height: 210,
        top: -30,
        left: -50,
        transform: [{ rotate: '-135.13deg' }],
        backgroundColor:'#FFFFFF'
        
    },
    birdieBlue:{
        width:180,
        height: 230,
        marginTop:-50,
        left:120,
        transform: [{ rotate: '140.12deg' }],
    },
    createaccText:{
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 33,
        color: '#094E76',
        top: -40,
    },
    nameContainer: {
        height: 39,
        width:230,
        marginTop:25,
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
    nameInput:{
        height: 39,
        width:230,
        borderRadius:20,
        paddingLeft:10,
        backgroundColor:'white',
        fontStyle: "italic",

    },
    emailContainer:{
        height: 39,
        width:230,
        marginTop:25,
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
        fontStyle: "italic",

    },
    passwordContainer: {
        height: 39,
        width:230,
        marginTop:25,
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
        fontStyle: "italic",

    },
    loginBut:{
        marginTop:15,
        borderRadius:28,
        width:230,
        height:36,
        backgroundColor:'#FE647B',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 1,
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
    },
    nameText:{
        fontSize:12,
        lineHeight:16,
        color:'#4a4a4a',
        left: -95,
        top: 15,
    },
    emailText:{
        fontSize:12,
        lineHeight:20,
        color:'#4a4a4a',
        left: -95,
        top: 15,
    },
    passwordText:{
        fontSize:12,
        lineHeight:20,
        color:'#4a4a4a',
        left: -80,
        top: 15,
    },
    orText:{
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 25,
        marginTop: 50,
        color: "#979797"
    },
});

export default Signup;