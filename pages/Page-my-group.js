import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card_for_player from "../comps/Card_for_player";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";

function MyGroup() {
  const [linePostionXRight, setPositionXRight] = useState(
    new Animated.Value(setPositionXRight ? 200 : 0)
  );
  const [linePostionXLeft] = useState(new Animated.Value(0));

  var animatedLineRight = linePostionXRight.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 200]
  });
  var animatedLineLeft = linePostionXLeft.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 200]
  });

  return (
    <View>
      <View>
        <Image
          style={{ width: "100%", height: 160 }}
          source={require("../assets/img_banner_racquest.png")}
        />
        <Text style={styles.txtTitle}>My Groups</Text>
      </View>
      <View style={styles.subTitleBar}>
        <TouchableOpacity
          style={styles.btnBar}
          onPress={() => {
            Animated.timing(linePostionXLeft, {
              toValue: 0,
              duration: 300
            }).start();
          }}
        >
          <Text style={styles.txtBar}>Joined</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnBar}
          onPress={() => {
            Animated.timing(linePostionXRight, {
              toValue: 200,
              duration: 300
            }).start();
          }}
        >
          <Text style={styles.txtBar}>Created</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          left: setPositionXRight ? animatedLineRight : animatedLineLeft
        }}
      >
        <View style={styles.selectedLine}></View>
      </Animated.View>
      <View style={{backgroundColor:'#FFFFFF' }}>
        <ScrollView style={{ height: 610 }}>
          <View style={{ marginBottom: 100}}>
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
            <Card_for_player />
          </View>
        </ScrollView>
      </View>
      <Sticky_footer_regular
        homeIcon={require("../assets/icon_home_grey.png")}
        myGroupIcon={require("../assets/icon_group_blue.png")}
        profileIcon={require("../assets/icon_profile_grey.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 16,
    top: 100
  },
  subTitleBar: {
    width: "100%",
    height: 45,
    backgroundColor: "#FE647B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  txtBar: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Open sans",
    color: "#FFFFFF",
    top: 8,
    textAlign: "center"
  },
  selectedLine: {
    width: "50%",
    height: 3,
    backgroundColor: "#C73C50"
  },
  btnBar: {
    width: "50%",
    height: "100%"
  }
});

export default MyGroup;
