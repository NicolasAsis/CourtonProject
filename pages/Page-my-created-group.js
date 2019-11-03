import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

import Header_blue from "../comps/Header_blue";
import Footer_regular from "../comps/Sticky_footer_regular";
import { ScrollView } from "react-native-gesture-handler";
import Card_for_organizer from "../comps/Card_for_organizer";
function MyCreatedGroup() {
  return (
    <View>
      <Header_blue headerTitle={"All My Joined Groups"} />
      <Image
        style={styles.searchIcon}
        source={require("../assets/icon_search.png")}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="  Search Group Number, Organizer"
      />
      <View style={styles.mainContent}>
        <View style={{ height: 565 }}>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <Card_for_organizer
                bmtCentre={"Stage 18"}
                groupNum={"C1314"}
                date={"Sat Dec 30"}
                time={"1pm-2pm"}
                totalPrice={"146"}
                joinedMember={"10"}
                totalMember={"20"}
                progressBarLoad={"0.5"}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Card_for_organizer
                bmtCentre={"Stage 18"}
                groupNum={"C1314"}
                date={"Sat Dec 30"}
                time={"1pm-2pm"}
                totalPrice={"146"}
                joinedMember={"10"}
                totalMember={"20"}
                progressBarLoad={"0.5"}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Card_for_organizer
                bmtCentre={"Stage 18"}
                groupNum={"C1314"}
                date={"Sat Dec 30"}
                time={"1pm-2pm"}
                totalPrice={"146"}
                joinedMember={"10"}
                totalMember={"20"}
                progressBarLoad={"0.5"}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Card_for_organizer
                bmtCentre={"Stage 18"}
                groupNum={"C1314"}
                date={"Sat Dec 30"}
                time={"1pm-2pm"}
                totalPrice={"146"}
                joinedMember={"10"}
                totalMember={"20"}
                progressBarLoad={"0.5"}
              />
            </View>
          </ScrollView>
        </View>
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
  footer: {
    bottom: 0,
    top: 152
  }
});

export default MyCreatedGroup;
