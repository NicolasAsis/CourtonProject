import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
// Animation
import * as Animatable from "react-native-animatable";
import { TextInput } from "react-native-gesture-handler";

function TextInput_popup(props) {
    const [desc, setDesc] = useState('');
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="bounceIn"
        iterationCount={1}
        direction="alternate"
      >
        <View style={styles.popup}>
          <Text style={styles.boldGroupText}>Description</Text>
          <TextInput
                  style={{
                    width: 330,
                    height: 170,
                    borderRadius: 6,
                    backgroundColor: "#F7F7F7",
                    marginTop: 10,
                    value:{desc}
                    // marginBottom: 35,
                    // textAlignVertical: "5%"
                  }}
                  placeholder="Type a group description..."
                  onChangeText={(t) => {
                    setDesc(t);
                  }}
                  multiline
                />
          

          <TouchableOpacity
            onPress={() => {
              // Actions.GroupInfo()
              props.setShowPopup(false);
            //   Actions.SelectTime()
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
    width: 350,
    height: 300,
    bottom:100,
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

  noButTouchableOp: {
    position: "absolute",
    width: 100,
    height: 38,
    // left: 80,
    top: 250,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 40,
    backgroundColor: "#81EC8D"
  },


 
});

export default TextInput_popup;
