import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {Actions} from 'react-native-router-flux';

<<<<<<< HEAD
<<<<<<< HEAD

function Leave_group_popup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.boldGroupText}>Leave Group</Text>
        <Text style={styles.boldGroupNumText}>{props.groupNum}#C1314 ?</Text>

        <TouchableOpacity
          onPress={() => {
            // Actions.GroupInfo()
            props.setShowPopup(false);
          }}
          style={styles.noButTouchableOp}
        >
          <Image
            style={styles.noButton}
            source={require("../assets/but_no.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.setShowPopup(false);
            Actions.MyGroup();
          }}
          style={styles.yesButTouchableOp}
        >
          <Image
            style={styles.yesButton}
            source={require("../assets/but_yes.png")}
          />
        </TouchableOpacity>
      </View>
=======
// Animation 
import * as Animatable from "react-native-animatable";

function Leave_group_popup() {
  return (
    <View style={styles.container}>
      
      <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate">
          <View style={styles.popup}>
            <Text style={styles.boldGroupText}>Leave Group</Text>
            <Text style={styles.boldGroupNumText}>#C1314 ?</Text>
            

            <TouchableOpacity>
              <Image style={styles.noButton} source={require("../assets/but_no.png")}></Image> 
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.yesButton} source={require("../assets/but_yes.png")}/>
            </TouchableOpacity>

          </View>
      </Animatable.View>
      
>>>>>>> 115fd881faf710e32bd66751820c088b7b0f5e44
=======

// Animation 
import * as Animatable from "react-native-animatable";

function Leave_group_popup(props) {
  return (
    <View style={styles.container}>
      
      <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate">
          <View style={styles.popup}>
            <Text style={styles.boldGroupText}>Leave Group</Text>
            <Text style={styles.boldGroupNumText}>#C1314 ?</Text>
            

            <TouchableOpacity
              onPress={() => {
            // Actions.GroupInfo()
            props.setShowPopup(false);
          }}
          style={styles.noButTouchableOp}
              >
              <Image style={styles.noButton} source={require("../assets/but_no.png")}></Image> 
            </TouchableOpacity>

            <TouchableOpacity
               onPress={() => {
            props.setShowPopup(false);
            Actions.MyGroup();
          }}
          style={styles.yesButTouchableOp}                                      
             >
              <Image style={styles.yesButton} source={require("../assets/but_yes.png")}/>
            </TouchableOpacity>

          </View>
      </Animatable.View>
      

>>>>>>> 42d775081684b946aef7f4161ea2a7aa086d7329
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.401636)"
  },

  popup: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 261,
    height: 211,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    fontFamily: "Open Sans"
  },

  boldGroupText: {
    marginTop: -46,
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.213333,
    lineHeight: 27,
    color: "#3C3C3C"
  },

  boldGroupNumText: {
    fontWeight: "bold",
    fontSize: 31,
    letterSpacing: 0.213333,
    color: "#3C3C3C"
  },

  noButton: {
    //  position: 'absolute',
    width: 100,
    height: 38
    //  left: -112,
    //  top: 14,
  },
  noButTouchableOp: {
    position: "absolute",
    width: 100,
    height: 38,
    left: 20,
    top: 143
  },

  yesButton: {
    // position: 'absolute',
    width: 100,
    height: 38
    // left: 12,
    // top: 14,
  },
  yesButTouchableOp: {
    position: "absolute",
    width: 100,
    height: 38,
    left: 135,
    top: 143
  }
});

export default Leave_group_popup;
