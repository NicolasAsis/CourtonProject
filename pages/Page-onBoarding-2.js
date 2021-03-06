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

// Animation
import * as Animatable from "react-native-animatable";

import { Actions } from "react-native-router-flux";

function OnBoarding_2() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
        <Animatable.View
          style={styles.card}
          animation="fadeIn"
          iterationCount={1}
          direction="alternate"
          delay={1000}
        >
          <Image
            style={styles.infograph1}
            source={require("../assets/img_infographic_onphone.png")}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.card}
          animation="fadeInUp"
          iterationCount={1}
          direction="alternate"
          delay={2000}
        >
          <Image
            style={styles.infograph2}
            source={require("../assets/img_infographic_group.png")}
          />
        </Animatable.View>
        <Animatable.View
          style={styles.card}
          animation="fadeIn"
          iterationCount={1}
          direction="alternate"
          delay={2200}
        >
          <Image
            style={styles.infograph3}
            source={require("../assets/img_infographic_create.png")}
          />
        </Animatable.View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.step}>Join groups</Text>
        <Text style={styles.descp}>
          Become a member of a group. Home page shows current available
          badminton groups made from other organizers that you can join to play
          with.
        </Text>
        <View style={styles.indicator}>
          <TouchableOpacity
            style={styles.sCircle}
            onPress={() => {
              Actions.jump("OnBoarding_1");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.bCircle}
            onPress={() => {
              Actions.reset("OnBoarding_2");
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.sCircle}
            onPress={() => {
              Actions.OnBoarding_3();
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.sCircle}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            Actions.Home();
          }}
        >
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
    alignItems: "center"
  },
  // buy on phone - infograph
  infograph1: {
    width: 344,
    height: 275.64,
    top: 70
  },
  //  group - infograph
  infograph2: {
    position: "absolute",
    width: 106,
    height: 95,
    left: 50,
    top: -220
  },
  // check - infograph
  infograph3: {
    position: "absolute",
    width: 44,
    height: 39,
    left: 120,
    top: -155
  },
  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    display: "flex"
  },
 
  step: {
    width: 266,
    height: 41,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 33,
    textAlign: "center",
    color: "#094E76",
    top:-20
  },
  descp: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    color: "#7C7B7B",
    width: "100%",
    padding:20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top:-10
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
    backgroundColor: "#9ea2a7",
    borderRadius: 50,
    margin: 15
  },
  skipBtn: {
    width: 179,
    height: 32,
    marginTop: 35,
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
