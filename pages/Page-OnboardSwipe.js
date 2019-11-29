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

import Swiper from 'react-native-swiper';

//Import onboarding pages
import Onboarding_1 from './Page-onBoarding-1';
import Onboarding_2 from './Page-onBoarding-2';
import Onboarding_3 from './Page-onBoarding-3';
import Onboarding_4 from './Page-onBoarding-4';

// const [animatedImg, setAnimatedImg] = useState()

// Animation
import * as Animatable from "react-native-animatable";

function OnBoardSwipe() {
  return (
    <Swiper loop={false} dot={<View></View>} activeDot={<View></View>}>
    <View style={styles.pages}>
        <Onboarding_1 />
    </View>
    <View style={styles.pages}>
        <Onboarding_2 />
    </View>
    <View style={styles.pages}>
        <Onboarding_3 />
    </View>
    <View style={styles.pages}>
        <Onboarding_4 />
    </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex:1
  },
//   Big Circle
  bCircle: {
    width: 24,
    height: 24,
    backgroundColor: "#FE647B",
    borderRadius: 50,
    margin: 15
  },
//   Small Circle 
  sCircle: {
    width: 16,
    height: 16,
    backgroundColor: "#9ea2a7",
    borderRadius: 50,
    margin: 15
  }
});

export default OnBoardSwipe;