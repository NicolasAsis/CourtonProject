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

import {Actions} from 'react-native-router-flux';

// Animation 
import * as Animatable from "react-native-animatable";

function OnBoarding_4() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
      <Animatable.View stlye={styles.card} animation="fadeIn" iterationCount={1} direction="alternate" delay={1000}>
        <Image
          style={styles.infograph1}
          source={require("../assets/img_infographic_blue.png")}
        />
      </Animatable.View>
      
      <Animatable.View stlye={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={1500}>
        <Image
          style={styles.infograph2}
          source={require("../assets/img_infograph_phone.png")}
        />
      </Animatable.View>
      <Animatable.View stlye={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={1800}>
        <Image
          style={styles.infograph4}
          source={require("../assets/img_infograph_tile_red.png")}
        />
      </Animatable.View>
      <Animatable.View stlye={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={2000}>
        <Image
          style={styles.infograph5}
          source={require("../assets/img_infograph_tile_blue.png")}
        />
      </Animatable.View>
      <Animatable.View stlye={styles.card} animation="fadeInUp" iterationCount={1} direction="alternate" delay={2200}>
        <Image
          style={styles.infograph6}
          source={require("../assets/img_infograph_tile_blue.png")}
        />
      </Animatable.View>
     
        
      </View>
      <View style={styles.bottom}>
        <Text style={styles.step}>Organized for You</Text>
        <Text style={styles.descp}>
        Once you join or create a group, 
        all your groups will be 
        conveniently organized for you. 
        </Text>
        <View style={styles.indicator}>
        <TouchableOpacity style={styles.sCircle} onPress={()=>{
                  Actions.jump('OnBoarding_1')
              }}></TouchableOpacity>
          <TouchableOpacity  style={styles.sCircle} onPress={()=>{
                  Actions.jump('OnBoarding_2')
              }}></TouchableOpacity>
          <TouchableOpacity  style={styles.sCircle} onPress={()=>{
                  Actions.jump('OnBoarding_3')
              }}></TouchableOpacity>
          <TouchableOpacity style={styles.bCircle} onPress={()=>{
                  Actions.reset('OnBoarding_4')
              }}></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{Actions.Home()}}>
        <Text style={styles.skipBtn} >START</Text>
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
  // blue blob - infograph
  infograph1: {
    width: 344,
    height: 275.64,
    top: 70
  },
  //  phone - infograph
  infograph2: {
    position: "absolute",
    width: 171,
    height: 290,
    top:-210,
    left:-85
  },
  // profile - infograph
  infograph3: {
    position: "absolute",
    width: 123,
    height: 63,
    top:-160,
    left:-58
  },
  // indicator - group tile red
  infograph4: {
    position: "absolute",
    width: 120,
    height: 40,
    left:-65,
    top:-110
  },

  // indicator - group tile red
  infograph5: {
    position: "absolute",
    width: 120,
    height: 40,
    left:-65,
    top:-65
  },

   infograph6: {
    position: "absolute",
    width: 120,
    height: 40,
    left:-65,
    top:-20
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
    marginTop: 55,
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
    marginTop:35,
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

export default OnBoarding_4;
