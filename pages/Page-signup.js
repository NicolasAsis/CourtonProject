import React, {useState} from 'react';
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

function Signup(){
    return(
    <View>
        {/* <View style={{backgroundColor: "#ffffff"}}> */}
        {/* </View> */}
        <ScrollView>
        <View style={styles.loginpageStructure}>
            <Image
            style={styles.birdieRed} 
            source={require('../assets/img_infographic7.png')}/>
            <Text style={styles.createaccText}>CREATE ACCOUNT</Text>

            <Text style={styles.nameText}>NAME</Text>
            <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder="First and Last Name"
                    />
            </View>

            <Text style={styles.emailText}>EMAIL</Text>
            <View style={styles.emailContainer}>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="Email"
                        />
            </View>


            <Text style={styles.passwordText}>PASSWORD</Text>
            <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
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

            <TouchableOpacity style={styles.loginBut}>
                    <Text style={styles.loginButText}>CREATE</Text>
            </TouchableOpacity>


            <Image
             style={styles.birdieBlue} 
             source={require('../assets/img_infographic6.png')}/>
        </View>
        </ScrollView>
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
        width:250,
        height: 280,
        top: -30,
        left: -80,
        transform: [{ rotate: '-135.13deg' }],
        backgroundColor:'#FFFFFF'
        
    },
    birdieBlue:{
        width:180,
        height: 230,
        marginTop:-80,
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
        marginTop:48,
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