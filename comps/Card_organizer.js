import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Card_organizer() {
    const styles = StyleSheet.create({
        //Card container
        cardContainer: {
            width:302,
            height:68,
            borderRadius:10,
            // backgroundColor:'blue',
            display:'flex',
            flexDirection:'row'
        },
        //Card container shadow
        cardContainerShadow: {
            width:302,
            height:68,
            borderRadius:10,
            position:'relative',
            backgroundColor: "#FFFFFF",
            display:'flex',
            flexDirection:'row',
            shadowOffset: {
                width: 0,
                height: 3
              },
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 5
        },
        //Organizer image section
        organizerImgSec: {
            flex:1,
            borderRadius:10,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            // backgroundColor:'yellow'
        },
        //Organizer image
        organizerImg: {
            width:52,
            height:52,
            borderRadius:50,
            backgroundColor:'skyblue'
        },
        //Organizer name section
        organizerNameSec: {
            flex:3,
            borderRadius:10,
            // backgroundColor:'green',
            display:'flex',
            justifyContent:'center'
        },
        //"Organizer" text
        organizerText: {
            fontFamily:'Open sans',
            fontSize:12,
            lineHeight:16,
            color:'#FE647B'
        },
        //Name of organizer text
        organizerNameText: {
            fontFamily:'Open sans',
            fontSize:18,
            lineHeight:25,
            color:'#333333'
        }
    });
    return(
        //Overall container
        <View style={{display:'flex',alignItems:'center',marginBottom:20}}>
            {/* Card Container */}
            <View style={styles.cardContainer}>
                <View style={styles.cardContainerShadow}>
                    {/* Organizer Image Section */}
                    <View style={styles.organizerImgSec}>
                        <View style={styles.organizerImg}></View>
                    </View>
                    {/* Organizer Name Section */}
                    <View style={styles.organizerNameSec}>
                        <Text style={styles.organizerText}>Organizer</Text>
                        <Text style={styles.organizerNameText}>Toby Wong</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Card_organizer;