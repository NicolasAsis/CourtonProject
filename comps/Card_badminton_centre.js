import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Card_badminton_centre() {
  return (
    <View >
      <View style={{marginBottom:180}}>
        <TouchableOpacity style={styles.container}>
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={require("../assets/img_c1.jpg")}
            />
          </View>

          
            <Text style={styles.txtLocationName}>CLEAR ONE</Text>
            <Image
              style={styles.imgLocation}
              source={require("../assets/icon_location_white.png")}
            />
            <Text style={styles.txtLocation}>
              4351 No 3 Rd #100, Richmond, BC V6X 3A7
            </Text>
         
        </TouchableOpacity>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    
  },
  card: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#808080",
    shadowOpacity: 0.7,
    borderRadius: 10,
    position: "absolute"
  },
  img: {
    borderRadius: 6,
    width: 350,
    height: 160
  },
  txtLocationName: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    left: 23,
    top: 10,
    color: "#FFFFFF",
    position: "absolute"
  },
  imgLocation: {
    width: 10,
    height: 14,
    top: 55,
    left:29,
    position: "absolute"
  },
  txtLocation: {
    color: "#FFFFFF",
    left: 45,
    top: 55,
    fontSize: 10,
    fontFamily: "Open sans",
    position: "absolute"
  }
});
export default Card_badminton_centre;
