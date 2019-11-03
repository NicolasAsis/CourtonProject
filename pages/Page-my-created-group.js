import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import Header_blue from "../comps/Header_blue";
import Card_organizer from "../comps/Card_organizer";
import Footer_home from "../comps/Sticky_footer_home";
import Footer_regular from "../comps/Sticky_footer_regular";
function MyCreatedGroup() {
  return (
    <View>
      <Header_blue headerTitle={"All My Created Groups"} />
      <Image
        style={styles.searchIcon}
        source={require("../assets/icon_search.png")}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="  Search Group Number, Organizer"
      />

      <View style={styles.mainContent}>
        <Card_organizer txtBmtCentre={"Stage 11"} totalPrice={"146"} />
      </View>
      <View style={styles.footer}>
        <Footer_regular />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    alignItems: "center",
    justifyContent: "center",
    top: 60
  },
  searchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#ECECEC",
    position: "absolute",
    borderRadius: 10,
    top: 115,
    left: 15,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 330,
    top: 120,
    zIndex: 10
  },
  footer:{
      bottom:0,
      top:537,

  }
});

export default MyCreatedGroup;
