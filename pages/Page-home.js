import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Card_player from "../comps/Card_player";

function Home() {
  return (
    <View>
      <Image
        style={{ width: "100%", height: 240 }}
        source={require("../assets/img_homepage_banner.png")}
      />
      <Text style={styles.title}>Upcoming Available Groups</Text>
      <Image
        style={styles.searchIcon}
        source={require("../assets/icon_search.png")}
      />
      <TextInput
        style={styles.rearchBar}
        placeholder="  Search Group Number, Organizer"
      />
        
      <ScrollView>
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
          <Card_player />
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 16,
    top: 58
  },
  rearchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 10,
    top: 186,
    left: 30,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 340,
    top: 192,
    zIndex: 10
  }
});

export default Home;
