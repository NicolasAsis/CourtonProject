import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import Card_badminton_centre from "../comps/Card_badminton_centre";

function SelectLocation() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.butBack}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>Choose a location</Text>
        <TouchableOpacity>
          <Image
            style={styles.butHam}
            source={require("../assets/but_ham.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView style={{ paddingTop: 100 }}>
          <Card_badminton_centre />
          <Card_badminton_centre />
          <Card_badminton_centre />
          <Card_badminton_centre />
          <Card_badminton_centre />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FAB",
    width: "100%",
    height: 100,
    backgroundColor: "#094E76"
  },
  butBack: {
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
    left: 94,
    top: 27
  },
  butHam:{
    width: 35,
    height:23,
    left:25, 
    top:2
  }
});
export default SelectLocation;
