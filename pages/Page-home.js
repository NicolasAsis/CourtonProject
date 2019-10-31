import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Animated,
  TouchableOpacity
} from "react-native";

import Card_player from "../comps/Card_player";
import Footer_home from "../comps/Sticky_footer_home";

function Home() {
  BANNER_MAX_HEIGHT = 240;
  BANNER_MIN_HEIGHT = 78;
  const [scrollY] = useState(new Animated.Value(0));

  var animatedBannerHeight = scrollY.interpolate({
    inputRange: [0, (BANNER_MAX_HEIGHT-BANNER_MIN_HEIGHT)],
    outputRange: [BANNER_MAX_HEIGHT, BANNER_MIN_HEIGHT],
    extrapolate: 'clamp'
  });

  return (
    <View>
      <ScrollView>
          <Animated.View
            style={{
              position: "relative",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              height: animatedBannerHeight
            }}
          >
            <View style={{ height: 240 }}>
              <Image
                style={{ width: "100%", height: BANNER_MAX_HEIGHT }}
                source={require("../assets/img_homepage_banner.png")}
              />
              <Text style={styles.title}>Upcoming Available Groups</Text>
              <Image
                style={styles.searchIcon}
                source={require("../assets/icon_search.png")}
              />

              <TextInput
                style={styles.rearchBar}
                placeholder="  Search Group Number, Organizer"
              />
            </View>
          </Animated.View>
        
     
          <View style={{flex:1}}>
        <ScrollView>
         
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          
        </ScrollView>
        </View>
        </ScrollView>

      <TouchableOpacity>
        <Image
          style={styles.createBtn}
          source={require("../assets/but_create.png")}
        />
      </TouchableOpacity>

      <Footer_home />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 16,
    top: 58
  },
  rearchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 10,
    top: 186,
    left: 15,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 330,
    top: 192,
    zIndex: 10
  },
  createBtn: {
    width: 54,
    height: 54,
    position: "absolute",
    zIndex: 10,
    left: "43%",
    bottom: 120
  }
});

export default Home;
