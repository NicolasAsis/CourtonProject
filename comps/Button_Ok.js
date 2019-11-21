import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import {Actions} from 'react-native-router-flux';
// import console = require("console");

function Button_Ok(props,{navigation}) {
  const styles = StyleSheet.create({
    //Overall Box
    JoinButBox: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      height: 148,
      left: 0,
      bottom: 0,
      right: 0,
      top:560,
      position: "absolute",
     
    },
    //Overall Box Shadow
    JoinButBoxShadow: {
      width: "100%",
      height: 110,
      position: "relative",
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: {
        width: 2,
        height: 3
      },
      shadowColor: "#000000",
      shadowOpacity: 0.07,
      shadowRadius: 10
    },
    JoinButContainer: {
      width: 311,
      height: 56,
      // backgroundColor:'yellow',
      display: "flex",
      flexDirection: "row"
    },
    //Left Side of Button
    JoinButLeft: {
      width: 175,
      height: 38,
      borderRadius: 100,
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    //Left Button Shadow
    JoinButLeftShadow: {
      width: 175,
      height: 38,
      position: "relative",
      backgroundColor: "#FFFFFF",
      // alignItems: 'center',
      // justifyContent:'center',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      borderRadius: 100,
      elevation: 5
    },
    //Right Side of Join Button
    JoinButRight: {
      width: 165,
      height: 38,
      borderRadius: 100,
      backgroundColor: "#4FF081",
      position: "absolute",
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    //Right Side Button Shadow
    JoingButRightShadow: {
      width: 165,
      height: 38,
      right: 0,
      position: "absolute",
      backgroundColor: "#FFFFFF",
      // alignItems: 'center',
      // justifyContent:'center',
    },
    //Price per person text
    priceText: {
      fontFamily: "Open sans",
      fontSize: 16,
      fontWeight: "bold",
      color: "#FE647B",
      left: -10
    },
    //Join Button Text
    joinText: {
      fontFamily: "Open sans",
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFFFFF"
    }
  });
  return (
    // Overall box around button
    <View style={styles.JoinButBox}>
      <View style={styles.JoinButBoxShadow}>
        {/* Join Button Container */}
        <View style={styles.JoinButContainer}>
          <View style={styles.JoinButLeftShadow}>
            {/* Left side of button */}
            <View style={styles.JoinButLeft}>
              <Text style={styles.priceText}>{props.hrsPlay} hrs Play</Text>
            </View>
          </View>
          <View style={styles.JoingButRightShadow}>
            {/* Right side of button */}
            <TouchableOpacity 
              style={styles.JoinButRight}
              onPress={()=>{
                console.log(props);
                var g = props.navigation.group_info;
                Actions.SelectCourts({group_info:{
                  ...g,
                  start_time:props.startTime,
                  end_time:props.endTime,
                  centreImage:props.badmintonCentreImg
                }})
              }}
            >
              <Text style={styles.joinText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Button_Ok;
