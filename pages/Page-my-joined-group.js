import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import Header_blue from "../comps/Header_blue";
import Card_organizer from "../comps/Card_organizer";
import Footer_home from "../comps/Sticky_footer_home";
import Footer_regular from "../comps/Sticky_footer_regular";
import Card_player from "../comps/Card_player";
function MyJoinedGroup() {
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

          
        <Card_player 
        organizerName={'Toby Wong'}
        groupNum={'C1314'}
        date={'Sat Dec 30'}
        time={'1pm-2pm'}
        price={'7'}
        joinedMember={'10'}
        totalMember={'20'}
        progressBarLoad ={'0.5'}
        />
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
  footer:{
      bottom:0,
      top:537,
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
});

export default MyJoinedGroup;
