import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function Footer_home() {
  return (
    <View>
      <View style={styles.footer}>
        <Image
          style={styles.icons_home}
          source={require("../assets/icon_home.png")}
        />
        <Image
          style={styles.icons_group}
          source={require("../assets/icon_uns_myGroups.png")}
        />
        <Image
          style={styles.icons_profile}
          source={require("../assets/icon_uns_profile.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 90,
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    shadowOffset: { width: 0, height: -10 },
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowRadius: 30,
    flexDirection: "row"
  },
  icons_home: {
    width: 30,
    height: 50,
    left: 64,
    top: 7
  },
  icons_group: {
    width: 61,
    height: 46,
    left: 140,
    top: 10
  },
  icons_profile: {
    width: 40,
    height: 45,
    left: 215,
    top: 10
  }
});
export default Footer_home;
