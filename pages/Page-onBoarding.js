import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";





function OnBoarding() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
        <Image
          style={styles.createBut}
          source={require("../assets/but_create.png")}
        />

      </View>

      <View style={styles.bottom}>
        <Text style={styles.step}>Become a group organizer</Text>
        <Text></Text>
        <View style={styles.indicator}>
          <View style={styles.c_red}></View>
          <View style={styles.c_grey}></View>
        </View>
        <TouchableOpacity>
          <Text style={styles.skipBtn}>SKIP</Text>
        </TouchableOpacity>
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  pg: {
    width: 375,
    height: 812,
    display: "flex"
  },

  top: {
    flex: 1.5,
    alignItems: "center",
    backgroundColor:"red"
  },

  bottom: {
    flex: 1,
    backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center"
  }


});

export default OnBoarding;
