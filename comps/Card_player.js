import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";

function Card_player() {
  return (
    <View style={{ alignItems: "center", marginTop: 18 }}>
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={require("../assets/stage18.jpg")} />

          <Text style={styles.txtorganizer}>Jackson Williams</Text>

          <Text style={styles.txtGroupNum}>Group#C2344</Text>
          <Text style={styles.txtGroupDate}>Fri, Dec 23 1pm-2pm</Text>
          {/* <Text style={styles.txtGroupJoinDate}>Join Before: Dec 20 11:30pm</Text> */}
          <Text style={styles.txtGroupPlayerCount}>Players 20/22</Text>
          <Text style={styles.txtGroupPrice}>$7</Text>
          <ProgressBar
            unfilledColor="#CDC5C5"
            borderColor="#FFFFFF"
            color="#81EC8D"
            progress={0.3}
            style={styles.ProgressBar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 157,
    position: "relative",
    backgroundColor: "#FFFFFF",
    // alignItems: 'center',
    // justifyContent:'center',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#D8D8D8",
    shadowOpacity: 1,
    borderRadius: 8
  },
  img: {
    position: "relative",
    width: 144.33,
    height: 156.79,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  txtorganizer: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 27,
    color: "#3C3C3C",
    position: "absolute",
    left: "46%",
    top: 10,
    fontFamily: "Open sans"
  },
  txtGroupNum: {
    fontSize: 11,
    lineHeight: 15,
    color: "#9FA5B4",
    position: "absolute",
    width: 75,
    height: 15,
    left: "46%",
    top: 44,
    fontFamily: "Open sans"
  },
  txtGroupDate: {
    position: "absolute",
    fontSize: 11,
    color: "#4A4A4A",
    lineHeight: 15,
    left: "46%",
    top: 62,
    color: "#FE647B",
    fontFamily: "Open sans"
  },
  txtGroupJoinDate: {
    fontSize: 11,
    color: "#FE647B",
    position: "absolute",
    left: "46%",
    top: 95,
    fontFamily: "Open sans"
  },
  txtGroupPlayerCount: {
    position: "absolute",
    color: "#9FA5B4",
    fontSize: 9,
    bottom: 25,
    left: "46%",
    fontFamily: "Open sans"
  },
  txtGroupPrice: {
    position: "absolute",
    fontSize: 16,
    color: "#094E76",
    fontWeight: "bold",
    bottom: 25,
    right: 14,
    fontFamily: "Open sans"
  },
  ProgressBar: {
    width: 180,
    position: "absolute",
    height: 8,
    right: 10,
    bottom: 10
  }
});

export default Card_player;