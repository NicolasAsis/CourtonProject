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

function OnBoarding_4() {
  return (
    <View style={styles.pg}>
      <View style={styles.top}>
      
        <Image
          style={styles.infograph1}
          source={require("../assets/img_infographic_blue.png")}
        />
        <Image
          style={styles.infograph2}
          source={require("../assets/img_infographic4.png")}
        />
        <Image
          style={styles.infograph3}
          source={require("../assets/img_infograph_profile.png")}
        />

        <Image
          style={styles.infograph4}
          source={require("../assets/img_infograph_buttons.png")}
        />  

        <Image
          style={styles.infograph5}
          source={require("../assets/img_infograph_data.png")}
        /> 
        <Image
          style={styles.infograph6}
          source={require("../assets/img_infograph_data1.png")}
        />  
        <Image
          style={styles.infograph7}
          source={require("../assets/img_infograph_data1.png")}
        /> 
        
      </View>
      <View style={styles.bottom}>
        <Text style={styles.step}>Organized for You</Text>
        <Text style={styles.descp}>
        Once you join or create a group, all your groups will be 
        conveniently organized in your own profile for you.  
        </Text>
        <View style={styles.indicator}>
          <View style={styles.sCircle}></View>
          <View style={styles.sCircle}></View>
          <View style={styles.sCircle}></View>
          <View style={styles.bCircle}></View>
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
    top: 174
  },
  // profile - infograph
  infograph3: {
    position: "absolute",
    width: 123,
    height: 63,
    top: 229
  },
  // indicator - infograph
  infograph4: {
    position: "absolute",
    width: 93,
    height: 33,
    left: 155,
    top: 290
  },
  // red upcoming - infograph
  infograph5: {
    position: "absolute",
    width: 132,
    height: 37,
    top: 327
  },
   // blue upcoming - infograph
   infograph6: {
    position: "absolute",
    width: 132,
    height: 37,
    top:355
  },
  infograph7: {
    position: "absolute",
    width: 132,
    height: 37,
    top:384
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

export default OnBoarding_4;
