import React, {useState} from 'react';
import {View,Text,Button,Image,TextInput} from 'react-native';

function Login() {
    return(
        <View style={{
            display:'flex',
            flexDirection:'column',
            // justifyContent:'center',
            alignItems:'center',
            height:'100%'
        }}>
            <Image
                style={{
                    width:175,
                    height:175,
                    marginTop:130
                }}
                source={
                    require('../assets/image.jpeg')
                }
            />
            <View style={{
                height: 39,
                width:200,
                marginTop:60,
                borderRadius:20,
                shadowColor: "#D8D8D8",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation:5
            }}>
                <TextInput
                    style={{ 
                        height: 39,
                        width:200,
                        borderRadius:20,
                        paddingLeft:10,
                        backgroundColor:'white'
                    }}
                    defaultValue="email@gmail.com"
                />
            </View>
            <TextInput
                style={{ 
                    height: 39,
                    width:200,
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    marginTop:50,
                    borderRadius:20,
                    paddingLeft:10
                }}
                defaultValue="Password"
            />
        </View>
    );
}

export default Login;