import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
// Animation
import * as Animatable from "react-native-animatable";

function Reminder_bmt_popup(props) {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="bounceIn"
        iterationCount={1}
        direction="alternate"
      >
        <View style={styles.popup}>
          <Text style={styles.boldGroupText}>Reminder</Text>
          <Text style={styles.boldGroupNumText}>
            Don't forget to call the centre for your booking!{" "}
          </Text>

          <TouchableOpacity
            onPress={() => {
              // Actions.GroupInfo()
              props.setShowPopup(false);
              Actions.SelectLocation();
            }}
            style={styles.noButTouchableOp}
          >
           
              <Text
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "Open sans",
                  fontWeight: "bold"
                }}
              >
                OK
              </Text>
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
    justifyContent: "center",
    alignItems: "center",
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
    // fontWeight: "bold",
    width:250,
    fontSize: 14,
    letterSpacing: 0.213333,
    color: "#3C3C3C",
    textAlign:'center'
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
    // left: 80,
    top: 143,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 40,
    backgroundColor: "#81EC8D"
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

export default Reminder_bmt_popup;
