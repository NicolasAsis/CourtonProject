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

import Card_for_player from "../comps/Card_for_player";
import Footer_home from "../comps/Sticky_footer_home";

BANNER_MAX_HEIGHT = 240;
BANNER_MIN_HEIGHT = 78;

function Home() {
  const [scrollY] = useState(new Animated.Value(0));
  const [opChange] = useState(new Animated.Value(0));

  var animatedOpacity = opChange.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });

  return (
    <View>
      <ScrollView
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
      >
        <Animated.View
          style={{
            opacity: animatedOpacity
          }}
        >
          <Image
            style={styles.searchIcon}
            source={require("../assets/icon_search.png")}
          />

          <TextInput
            style={styles.searchBar}
            placeholder="  Search Group Number, Organizer"
          />
        </Animated.View>

        <Animated.View
          style={{
            position: "relative",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            height: 240
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
              style={styles.searchBar}
              placeholder="  Search Group Number, Organizer"
            />
          </View>
        </Animated.View>

        <View style={{ flex: 1, paddingBottom: 135 }}>
          <ScrollView>
            <Card_for_player
              organizerName={"Toby Wong"}
              groupNum={"C1314"}
              date={"Sat Dec 30"}
              time={"1pm-2pm"}
              price={"7"}
              joinedMember={"10"}
              totalMember={"20"}
              progressBarLoad={"0.5"}
            />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity>
        <Image
          style={styles.createBtn}
          source={require("../assets/but_create.png")}
        />
      </TouchableOpacity>
      <View style={styles.footer}>
        <Footer_home />
      </View>
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
  searchBar: {
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
    bottom: 20
  },
  footer: {
    bottom: 0,
    // top: 92
  }
});

export default Home;
