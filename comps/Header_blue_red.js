import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import {Actions} from 'react-native-router-flux';

function Header_blue_red(props) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.butBackTouchableOp}
          onPress={()=>{
            Actions.pop()
        }}
        >
          <Image
            style={styles.butBack}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.txtTitle}>{props.headerTitle}</Text>
        </View>
        <TouchableOpacity style={{ width: 0, height: 0 }}>
          <Image
            style={styles.butHam}
            source={require("../assets/but_ham.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.courtIndicatedBar}>
        <Text style={styles.txtBmtCentre}>{props.courtName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#094E76"
  },
  butBack: {
    width: 20,
    height: 30,
    // left: 23,
    // top: 55
  },
  butBackTouchableOp:{
    width: 20,
    height: 30,
    left: 23,
    top: 55
  },
  txtTitle: {
    color: "#FFFFFF",
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 20,
    top: 27
  },
  butHam: {
    width: 35,
    height: 23,
    left: 315,
    top: 2,
    position: "absolute"
  },
  courtIndicatedBar: {
    backgroundColor: "#FE647B",
    width: "100%",
    height: 39,
    alignItems: "center",
    justifyContent: "center"
  },
  txtBmtCentre: {
    color: "#FFFFFF",
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "400"
  }
});

export default Header_blue_red;
