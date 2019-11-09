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

// bannerScrollHeight = 150;
// bannerMaxHeight = 240;
// bannerMinHeight = 100;

function Home() {
  // const [scrollY] = useState(new Animated.Value(0));

  // var bannerAnimatedHeight = scrollY.interpolate({
  //   inputRange: [0, bannerScrollHeight],
  //   outputRange: [bannerMaxHeight, bannerMinHeight],
  //   extrapolate: "clamp"
  // });

  return (
    <View>
      <ScrollView
      // scrollEventThrottle={16}
      // onScroll={Animated.event([
      //   { nativeEvent: { contentOffset: { y: scrollY } } }
      // ])}
      style={{backgroundColor:'#FFFFFF'}}
      >
        

        <View style={{ flex: 1, paddingBottom: 135 }}>
          <ScrollView>
          <Image
              style={{ width: "100%", height: 240 }}
              source={require("../assets/img_homepage_banner.png")}
            />
            <Text style={styles.title}>Upcoming Available Groups</Text>
        
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

      <Animated.View
        style={{
          backgroundColor: "#094E76",
          width: "100%",
          height: 100,
          borderColor: "#FFFFFF",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden"
        }}
      >
        
        <Image
          style={styles.fixedSearchIcon}
          source={require("../assets/icon_search.png")}
        />
        <TextInput
          style={styles.fixedSearchBar}
          placeholder="  Search Group Number, Organizer"
        />
      </Animated.View>

      <View style={styles.footer}>
        <Footer_home />
      </View>
      <TouchableOpacity>
        <Image
          style={styles.createBtn}
          source={require("../assets/but_create.png")}
        />
      </TouchableOpacity>
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
    top: 100
  },
  
  createBtn: {
    width: 54,
    height: 54,
    position: "absolute",
    zIndex: 10,
    left: "43%",
    bottom: 120
  },
  footer: {
    bottom: 0
    // top: 92
  },
  fixedSearchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 10,
    top: 50,
    left: 15,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"
  },
  fixedSearchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 330,
    top: 55,
    zIndex: 10
  }
});

export default Home;
