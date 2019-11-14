import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

// const [animatedImg, setAnimatedImg] = useState()

function OnBoarding_2() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
      
        <Image
          style={styles.infograph1}
          source={require("../assets/img_infographic_onphone.png")}
        />
        <Image
          style={styles.infograph2}
          source={require("../assets/img_infographic_group.png")}
        />
        <Image
          style={styles.infograph3}
          source={require("../assets/img_infographic_create.png")}
        />
        
      </View>
      <View style={styles.bottom}>
        <Text style={styles.step}>Join groups</Text>
        <Text style={styles.descp}>
        The Home page shows the current available badminton groups 
        made from other users that you can join to play with.  
        </Text>
        <View style={styles.indicator}>
          <View style={styles.sCircle}></View>
          <View style={styles.bCircle}></View>
          <View style={styles.sCircle}></View>
          <View style={styles.sCircle}></View>
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
    height: 812,
    display: "flex",
    justifyContent: "center"
  },
  top: {
    flex: 1.7,
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  },
  // buy on phone - infograph
  infograph1: {
    width: 344,
    height: 275.64,
    left: 11,
    top: 173,
    top: 20,
  },
  //  group - infograph
  infograph2: {
    position: "absolute",
    width: 106,
    height: 95,
    left: 250,
    top: 140,
  },
  // check - infograph
  infograph3: {
    position: "absolute",
    width: 44,
    height: 39,
    left: 318,
    top: 205,
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    display: "flex"
  },
  step: {
    width: 286,
    height: 41,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    color: "#094E76"
  },
  descp: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    textAlign: "center",
    color: "#7C7B7B",
    width: 308,
    height: 72,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  indicator: {
    marginTop: 30,
    width: 192,
    height: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  // big circle
  bCircle: {
    width: 24,
    height: 24,
    backgroundColor: "#FE647B",
    borderRadius: 50,
    margin: 15
  },
  // small circle
  sCircle: {
    width: 16,
    height: 16,
    backgroundColor: "#ECECEC",
    borderRadius: 50,
    margin: 15
  },
  skipBtn: {
    width: 179,
    height: 32,
    marginTop:70,
    textAlign: "center",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "center",
    color: "#094E76"
  }
});

export default OnBoarding_2;
