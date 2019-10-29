import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card_badminton_centre() {
  return (
    <View style={StyleSheet.container}>
      <View
      style={styles.card}
      >
        <Image 
        style={styles.img}
        source={require('../assets/img_stage18.png')}
        />
        <Text>Test</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 360,
    height: 168
  },
  img:{
      width: 360,
      height:168,
      position:'relative'
  }
});
export default Card_badminton_centre;
