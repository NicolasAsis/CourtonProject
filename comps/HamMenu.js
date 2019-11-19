import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity} from "react-native";

import {Actions} from 'react-native-router-flux';


function HamMenu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        onPress={()=>{
          Actions.Home()
        }}
      >
        <View style={styles.hamItem}>
          <Image
            style={styles.icon}
            source={require("../assets/icon_ham_home.png")}
          />
          <Text style={styles.label}>HOME</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          Actions.MyGroup()
        }}
      >
        <View style={styles.hamItem}>
          <Image
            style={styles.icon}
            source={require("../assets/icon_ham_group.png")}
          />
          <Text style={styles.label}>MY GROUPS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
          Actions.Profile()
        }}
      >
        <View style={styles.hamItem}>
          <Image
            style={styles.icon}
            source={require("../assets/icon_ham_profile.png")}
          />
          <Text style={styles.label}>PROFILE</Text>
        </View>
      </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    width: 213,
    height: 812,
    left: 162,
    top: 0,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  hamItem: {
    width: 120,
    height: 56,
    display: "flex",
    flexDirection: "row",
    margin: 20
  },

  icon: {
    flex: 1,
    width: 30,
    height: 30
  },

  label: {
    flex: 3,
    left: 30,
    width: 39,
    height: 27,
    fontFamily: "Open Sans",
    fontSize: 12,
    top: 0,
    lineHeight: 30,
    textAlign: "left",
    color: "#094E76"
  }
});

export default HamMenu;
