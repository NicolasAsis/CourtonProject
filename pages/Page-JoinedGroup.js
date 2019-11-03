import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function JoinedGroup() {
  return (
    <View style={styles.bg}>
      <View>
        <Text style={styles.title}>Joined Group</Text>
        <Text style={styles.smallTitle}>Keep your birdies flying!!</Text>
      </View>
      <View style={styles.summary}>
        <Image
          style={styles.groupIcon}
          source={require("../assets/icon_group_created.png")}
        />
        <View>
          <Text style={styles.player}>Jacky Lee</Text>
          <Text style={styles.price}>$7</Text>
        </View>
        <View style={styles.info1}>
          <Text style={styles.label}>Group</Text>
          <Text style={styles.data}>#C134</Text>
        </View>
        <View style={styles.info2}>
          <Text style={styles.label}>Organizer</Text>
          <Text style={styles.data}>Toby Wong</Text>
        </View>
        <View style={styles.info3}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.data}>30 December 2019</Text>
        </View>
        <View style={styles.info4}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.data}>1pm - 4pm</Text>
        </View>
        <View style={styles.info5}>
          <Text style={styles.label}>Center</Text>
          <Text style={styles.data}>ClearOne</Text>
        </View>
        <View style={styles.info6}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.data6}>
            4351 No 3 Rd #100, Richmond, BC V6X 3A7
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.btnText}> OK </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{
          position: "absolute",
          width: 375,
          height: 187,
          left: 0,
          bottom: -30,
          zIndex: -2
        }}
        source={require("../assets/img_tybg.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  // Background
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#094E76"
  },

  // Page title
  title: {
    position: "absolute",
    width: 250,
    height: 49,
    left: 25,
    top: 44,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 49,
    textAlign: "center",
    letterSpacing: 0.48,
    color: "#FFFFFF"
  },

  // Caption title
  smallTitle: {
    width: 170,
    height: 25,
    left: 31,
    top: 101,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0.186667,
    color: "#FFFFFF"
  },

  // Summary box
  summary: {
    width: 314,
    height: 445,
    left: 31,
    top: 138,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    alignItems: "center"
  },

  // User Name
  player: {
    width: 100,
    height: 27,
    top: 40,
    left: -5,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: 0.48,
    color: "#333333"
  },

  // Price tag
  price: {
    width: 35,
    height: 80,
    top: 5,
    left: 145,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 41,
    color: "#FE647B"
  },

  groupIcon: {
    width: 73,
    height: 68,
    top: 20,
    left: 2
  },

  // groups info
  info1: {
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  // label tag eg: Group, Organizer, Date..
  label: {
    textAlign: "left",
    position: "absolute",
    width: 109,
    height: 17,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.48,
    color: "#333333"
  },
  // Data for tag eg : Group : #CC023
  data: {
    textAlign: "right"
  },

  // organizer info
  info2: {
    top: 10,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  // Date info
  info3: {
    top: 20,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  time info
  info4: {
    top: 25,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  center info
  info5: {
    top: 25,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  location info
  info6: {
    width: 261,
    height: 50,
    top: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  // Adjustment for data on info6 - address text it too long
  data6: {
    width: 167,
    height: 42,
    left: 95,
    textAlign: "right"
  },

  // OK Button
  button: {
    width: 165,
    height: 56,
    top: 51,
    backgroundColor: "#4FF081",
    borderRadius: 100
  },
  btnText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 55,
    textAlign: "center",
    letterSpacing: 0.213333,
    color: "#FFFFFF"
  }
});

export default JoinedGroup;
