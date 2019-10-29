import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Card_badminton_centre from "../comps/Card_badminton_centre";

function SelectLocation() {
  return (
    <View>
      <View style={styles.header}></View>
      <View >
      <ScrollView >
        <Card_badminton_centre  />
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
    position: 'absolute'
  }
});
export default SelectLocation;
