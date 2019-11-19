import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import {Actions} from 'react-native-router-flux';

function Card_badminton_centre(props) {
  return (
    <View >
      {/* <View style={{marginBottom:180}}> */}
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>{
              Actions.SelectTime()
            }}
        >
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={props.badmintonCentreImg}
            />
          </View>
          
            <Text style={styles.txtLocationName}>{props.badmintonCentreName}</Text>
            <Image
              style={styles.imgLocation}
              source={require("../assets/icon_location_white.png")}
            />
            <Text style={styles.txtLocation}>
              
              {props.badmintonCentreLocation}
            </Text>
            
        </TouchableOpacity>
      {/* </View> */}
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",  
    marginBottom:17
  },
  card: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#808080",
    shadowOpacity: 0.7,
    borderRadius: 10,
    // position: "absolute"
  },
  img: {
    borderRadius: 6,
    width: 359,
    height: 168
  },
  txtLocationName: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    left: 23,
    top: 93,
    color: "#FFFFFF",
    position: "absolute"
  },
  imgLocation: {
    width: 10,
    height: 14,
    top: 139,
    left:23,
    position: "absolute"
  },
  txtLocation: {
    color: "#FFFFFF",
    left: 40,
    top: 139,
    fontSize: 10,
    fontFamily: "Open sans",
    position: "absolute"
  }
});
export default Card_badminton_centre;
