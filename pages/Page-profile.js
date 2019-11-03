import React, {useState} from 'react';
import {Text,View, Image, TouchableOpacity, StyleSheet} from 'react-native';

function Profile(){
    return(
        <View styes={{fontFamily:'Open Sans'}}>
            <View style={styles.header}>
                <Text style={styles.name}>Jacky Lee</Text>
                <View style={{position: 'absolute'}}>
                <TouchableOpacity>
                    <Image style={styles.iconEdit}
                       source={require("../assets/icon_edit.png")}/>
                </TouchableOpacity>
                </View>
                <View style={styles.profileImg}></View>
                <TouchableOpacity>
                    <Image style={styles.iconCamera}
                       source={require("../assets/icon_camera.png")}/>
                </TouchableOpacity>
            </View>


            
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100%',
        height: 241,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#094E76',
    },

    name:{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 46,
        color: 'white',

    },

    iconEdit:{
        width: 20,
        height: 21,
        top: -45,
        left: 145,
    },

    profileImg:{
        width: 95,
        height: 95,
        backgroundColor: "lightblue",
        borderRadius: 50,
        top: 20,
    },
    iconCamera:{
        width: 25,
        height: 25,
        left: 25,
        top: -5.8,
        position: 'absolute',
    },

});

export default Profile;