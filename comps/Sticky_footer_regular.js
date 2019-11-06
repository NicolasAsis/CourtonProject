import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function Sticky_footer_regular() {
  return (
    <View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icons}>
          <Image
            style={styles.icons_home}
            source={require("../assets/icon_home_blue.png")}
          />
          <Text style={styles.txtIcon}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Image
            style={styles.icons_group}
            source={require("../assets/icon_mygroup_grey.png")}
          />
          <Text style={styles.txtIcon}>MY GROUPS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Image
            style={styles.icons_profile}
            source={require("../assets/icon_profile_grey.png")}
          />
          <Text style={styles.txtIcon}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 83,
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    flexDirection: "row"
  },
  icons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: -15
  },
  txtIcon: {
    fontFamily: "Open sans",
    fontSize: 11
  },
  icons_home: {
    width: 28,
    height: 28
  },
  icons_group: {
    width: 30,
    height: 30
  },
  icons_profile: {
    width: 30,
    height: 30
  }
});
export default Sticky_footer_regular;
