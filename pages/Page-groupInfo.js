import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

import Button_Join from "../comps/Button_Join";
import Card_members from "../comps/Card_members";
import Bar_group_countdown_price from "../comps/Bar_group_countdown_price";
import Circle_extra_member from "../comps/Circle_extra_member";

import { Actions } from "react-native-router-flux";

function GroupInfo() {
  const styles = StyleSheet.create({
    // Page Structure
    gipageStructure: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      backgroundColor: "#FFFFFF"
    },

    //Page Header
    giHeader: {
      width: "100%",
      height: 240,
      backgroundColor: "#FAB"
    },
    giImg: {
      width: "100%",
      height: "100%"
    },
    giBackTouchableOp: {
      position: "absolute",
      width: 20,
      height: 30,
      left: 35,
      top: 40
      // backgroundColor:'red'
    },
    giBackBut: {
      width: 20,
      height: 30
      //   left: 35,
      //   top: 40,
      //   position: "absolute"
    },
    //Ham Button
    giHamTouchableOp: {
      position: "absolute",
      width: 25,
      height: 16,
      left: 331,
      top: 40
      // backgroundColor:'red'
    },
    giHamBut: {
      width:25,
      height:25
    },
    //Organizer Image
    giOrganizerImg: {
      width: 52,
      height: 52,
      backgroundColor: "lightblue",
      position: "absolute",
      left: 19,
      top: 170,
      borderRadius: 50
    },
    giOrganizedByText: {
      fontFamily: "Open sans",
      fontSize: 20,
      color: "#FFFFFF",
      position: "absolute",
      left: 95,
      top: 163
    },
    giOrganizerText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 24,
      color: "#FFFFFF",
      position: "absolute",
      left: 95,
      top: 190
    },

    //Group Information Section
    giTextSec: {
      width: "100%",
      height: 250,
      // backgroundColor:'#DAD',
      marginTop: 20,
      // left: 23
    },
    //Group Description Text
    groupDescHeaderText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 15,
      color: "#3C3C3C"
    },
    groupDescText: {
      fontFamily: "Open sans",
      fontSize: 15,
      color: "#7C7B7B",
      lineHeight: 20,
      marginBottom: 43,
      width: 330
    },

    //Group Information Text
    giTitleText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 15,
      color: "#3C3C3C",
      marginBottom: 32
    },
    giText: {
      fontFamily: "Open sans",
      fontSize: 15,
      color: "#7C7B7B",
      lineHeight: 20,

      marginBottom: 32
    },
    //Style location text, since mostly two lines
    giLocationText: {
      fontFamily: "Open sans",
      fontSize: 15,
      color: "#7C7B7B",
      lineHeight: 20,
      marginBottom: 16
    },
    //Style for player amount text
    giPlayersText: {
      fontFamily: "Open sans",
      fontSize: 29,
      color: "#094E76",
      marginBottom: 32,
      marginTop: -16
    }
  });

  return (
    <View>
      <View style={styles.gipageStructure}>
        {/* Main Header */}
        <View style={styles.giHeader}>
          <Image
            style={styles.giImg}
            source={require("../assets/img_stage18.png")}
          />
          <TouchableOpacity
            style={styles.giBackTouchableOp}
            onPress={() => {
              Actions.pop("Home");
            }}
          >
            <Image
              style={styles.giBackBut}
              source={require("../assets/but_back.png")}
            />
          </TouchableOpacity>
          {/* Ham Button */}
          <TouchableOpacity
            style={styles.giHamTouchableOp}
            onPress={() => {
              Actions.drawer('HamMenu')
            }}
          >
            <Image
              style={styles.giHamBut}
              source={require("../assets/but_ham.png")}
            />
          </TouchableOpacity>
          <View style={styles.giOrganizerImg}></View>
          <Text style={styles.giOrganizedByText}>Organized by</Text>
          <Text style={styles.giOrganizerText}>Toby Wong</Text>
        </View>

        <Bar_group_countdown_price titlePrice={7} countdown={100} />

        <View style={styles.giTextSec}>
          <View
            style={{
              flex: 1,
              position: "absolute",
              height: 375
            }}
          >
            <ScrollView style={{ flex: 1 }}>
              <View
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                {/* Group Description */}
                <Text style={styles.groupDescHeaderText}>
                  Group Description
                </Text>
                <Text style={styles.groupDescText}>
                  This is a group description for players who are looking at
                  other created groups cards. So you can only view no editing.
                </Text>

                {/* All group information text */}
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.giTitleText}>Group</Text>
                    <Text style={styles.giTitleText}>Date</Text>
                    <Text style={styles.giTitleText}>Centre</Text>
                    <Text style={styles.giTitleText}>Location</Text>
                    <Text style={styles.giTitleText}>Time</Text>
                    <Text style={styles.giTitleText}>Group Limit</Text>
                    <Text style={styles.giTitleText}>Players</Text>
                    <Text style={styles.giTitleText}>Bird Type</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.giText}>#C1314</Text>
                    <Text style={styles.giText}>30 December 2019</Text>
                    <Text style={styles.giText}>ClearOne</Text>
                    <Text style={styles.giLocationText}>
                      4351 No 3 Rd #100,{"\n"}Richmond, BC V6X 3A7
                    </Text>
                    <Text style={styles.giText}>1pm - 4pm</Text>
                    <Text style={styles.giText}>5</Text>
                    <Text style={styles.giPlayersText}>4</Text>
                    <Text style={styles.giText}>Feather</Text>
                  </View>
                </View>
                {/* Member Cards */}
                <View style={{ alignItems: "flex-start" }}>
                  <Card_members
                    organizer={"Organizer"}
                    memberName={"Tony Wong"}
                  />
                  <Card_members memberName={"William Williams"} />
                  <Card_members memberName={"William Williams"} />
                  <Card_members memberName={"William Williams"} />
                  <Card_members memberName={"William Williams"} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Circle_extra_member />
                  </View>
                  <View style={{ position: "absolute", left: 20 }}>
                    <Circle_extra_member />
                  </View>
                  <Text style={[styles.giText, { left: 26, top: 5 }]}>
                    +2 more
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Join Button */}
      <Button_Join price={7} />
    </View>
  );
}

export default GroupInfo;
