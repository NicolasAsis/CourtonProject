import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

function Circle_extra_member(props) {
  return (
    <View >
      <View style={styles.circle}>
        <Image
        
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "#DAD",
    borderRadius: 30,
    paddingLeft:-20,
    borderWidth:2,
    borderColor:'#ffffff'
  }
});

export default Circle_extra_member;
