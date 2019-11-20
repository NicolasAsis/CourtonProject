import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> fbb7094e7c6b2ed03d55a4bd437a2e8627b0a0b4
import {Actions} from 'react-native-router-flux'
import * as Animatable from "react-native-animatable";

function Delete_group_popup(props) {

<<<<<<< HEAD
=======
import {Actions} from 'react-native-router-flux';
import * as Animatable from "react-native-animatable";



function Delete_group_popup(props) {
>>>>>>> 8f517e780bc1a85f6aa7190bc25a1e4169ff46a5
=======

>>>>>>> fbb7094e7c6b2ed03d55a4bd437a2e8627b0a0b4
  return (
    <View style={styles.container}>

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

      <Animatable.View animation="bounce" iterationCount={1} direction="alternate">
            <View style={styles.popup}>
              <Text style={styles.boldGroupText}>Delete Group</Text>
              <Text style={styles.boldGroupNumText}>#S2314 ?</Text>
          
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> fbb7094e7c6b2ed03d55a4bd437a2e8627b0a0b4
      
          >
                <Image style={styles.yesButton} source={require("../assets/but_yes.png")}/>
              </TouchableOpacity>
<<<<<<< HEAD
=======
>>>>>>> 8f517e780bc1a85f6aa7190bc25a1e4169ff46a5
=======
>>>>>>> fbb7094e7c6b2ed03d55a4bd437a2e8627b0a0b4

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
      </Animatable.View>
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
    position: "absolute",
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

export default Delete_group_popup;
