import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import {Actions} from 'react-native-router-flux';

function Header_blue(props) {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=>{
            Actions.Profile()
          }}
          style={styles.butBackTouchableOp}
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
  butBackTouchableOp :{
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
});

export default Header_blue;
