import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// const [animatedImg, setAnimatedImg] = useState()





function OnBoarding_1() {
  return (
    <View style={styles.pg}>
      {/*this will be animated*/}
      <View style={styles.top}>
        <Image
          style={styles.createBut}
          source={require("../assets/but_create.png")}
        />

      </View>

      <View style={styles.bottom}>
        {/* this is a comps */}
        <Text style={styles.step}>Become a group organizer</Text>
        <Text></Text>
        {/* this will be Animated */}
        <View style={styles.indicator}>
          <View style={styles.c_red}></View>
          <View style={styles.c_grey}></View>
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
    alignItems: "center"
  },

  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  createBut: {
    width: 48,
    height: 48,
    top: 400
  },
  step: {
    width: 242,
    height: 71,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#094E76"
  },
  indicator: {
    display: "flex",
    width: 80,
    height: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },

  // circle red
  c_red: {
    margin: 15,
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: "#FE647B"
  },

  // circle grey
  c_grey: {
    margin: 15,
    width: 16,
    height: 16,
    borderRadius: 100 / 2,
    backgroundColor: "#ECECEC"
  },

  skipBtn: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "center",
    letterSpacing: 0.213333,
    color: "#094E76"
  }
});

export default OnBoarding_1;
