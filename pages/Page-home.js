import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Animated,
  SafeAreaView
} from "react-native";
import Card_player from "../comps/Card_player";
import Footer_home from "../comps/Sticky_footer_home";

function Home() {
  BANNER_MAX_HEIGHT = 240;
  BANNER_MIN_HEIGHT = 78;
  const [scrollY, setScroll] = useState(new Animated.Value(0));

  setScroll.animatedBannerHeight = scrollY.interpolate({
    inputRange: [0, 78],
    outputRange: [BANNER_MAX_HEIGHT, BANNER_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <View>
          <View style={{ felx: 1 }}>
            <Animated.View
              style={{
                position: "relative",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                height: setScroll.animatedBannerHeight
              }}
            >
              <View style={{ minHeight: 78 }}>
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
          </View>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: setScroll.scrollY } } }
          ])}
        >
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
        </ScrollView>
      </ScrollView>

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
    left: 30,
    top: 58
  },
  rearchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 10,
    top: 186,
    left: 33,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 340,
    top: 192,
    zIndex: 10
  }
});

export default Home;
