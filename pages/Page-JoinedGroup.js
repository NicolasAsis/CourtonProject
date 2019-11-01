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
          style={{
            position:'absolute',
            width: 73,
            height: 68,
            top:40
          }}
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
            <Text style={styles.data6}>4351 No 3 Rd #100, Richmond, BC V6X 3A7</Text>
        </View>
        <View>
                 <TouchableOpacity
                    style={styles.button}
                        onPress={this.onPress}
                >
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
            bottom:0,
            zIndex:-2
          }}
          source={require("../assets/img_tybg.png")}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#094E76"
  },
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
  smallTitle: {
    position: "absolute",
    width: 170,
    height: 19,
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
  summary: {
    position: "absolute",
    width: 314,
    height: 480,
    left: 31,
    top: 138,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    alignItems:"center"
  },
  player: {
    position: "absolute",
    width: 97,
    height: 27,
    top:120,
    left:-50,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: 0.48,
    color: "#333333"
  }, 
  price: {
    position:"absolute",
    width: 35,
    height: 41,
    top:115,
    left:98,
    fontFamily: "Open Sans",
    fontStyle:"normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 41,
    color: "#FE647B"
  },
  info1: {
    position: 'absolute',
    width:261,
    height:28,
    top:180,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  label: {
    textAlign:"left",
    position: "absolute",
    width: 109,
    height: 17,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize:12,
    lineHeight:16,
    letterSpacing: 0.48,
    color: "#333333"
  },
  data: {
    textAlign:"right"
  },
  info2: {
    position: 'absolute',
    width:261,
    height:28,
    top:215,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  info3: {
    position: 'absolute',
    width:261,
    height:28,
    top:250,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  info4: {
    position: 'absolute',
    width:261,
    height:28,
    top:285,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  info5: {
    position: 'absolute',
    width:261,
    height:28,
    top:320,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  info6: {
    position: 'absolute',
    width:261,
    height:50,
    top:360,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  data6: {
    width: 167,
    height: 42,
    left:95,
    textAlign:'right'
  },
  button: {
    alignItems: 'center',
    width: 165,
    height: 56,
    top: 450,
    backgroundColor:"#4FF081",
    borderRadius: 100,
  },
  btnText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 50,
    textAlign:"center",
    letterSpacing: 0.213333,
    color:"#FFFFFF"
    
  }




});

export default JoinedGroup;
