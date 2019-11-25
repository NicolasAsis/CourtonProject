import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";

import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import { Actions } from "react-native-router-flux";

// const [animatedImg, setAnimatedImg] = useState()

// Animation
import * as Animatable from "react-native-animatable";

function OnBoarding_1() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
        <Animatable.View
          style={styles.card}
          animation="fadeInUp"
          iterationCount={1}
          direction="alternate"
          delay={2000}
        >
          <Image
            style={styles.infograph1}
            source={require("../assets/img_infographic3Birdie.png")}
          />
        </Animatable.View>

        <Animatable.View
          style={styles.card}
          animation="fadeInUp"
          iterationCount={1}
          direction="alternate"
          delay={1000}
        >
          <Image
            style={styles.infograph2}
            source={require("../assets/img_infographic3.png")}
          />
        </Animatable.View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.step}>Intro</Text>
        <Text style={styles.descp}>
          CourtOn is a platform for badminton players to host a game with a self
          created group or to join other organizer’s groups at
          badminton centres in Vancouver, BC.
        </Text>
        <View style={styles.indicator}>
          <TouchableOpacity
            style={styles.bCircle}
            onPress={() => {
              Actions.reset('OnBoarding_1');
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.sCircle}
            onPress={() => {
              Actions.OnBoarding_2();
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={styles.sCircle}
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
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  // Birdie
  infograph1: {
    width: 27.25,
    height: 34.17,
    top: 20
  },
  // girl
  infograph2: {
    width: 140,
    height: 350.8,
    top: 30
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
    marginTop: 10,
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
    marginTop: 25,
    textAlign: "center",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    color: "#094E76"
  }
});

export default OnBoarding_1;
