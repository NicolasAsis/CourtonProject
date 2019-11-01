import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Button_Join from '../comps/Button_Join';

function GroupInfo() {
  const styles = StyleSheet.create({
    // Page Structure
    gipageStructure: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%"
    },
    //Page Header
    giHeader: {
      width: "100%",
      height: 240,
      backgroundColor: "#Fab"
    },
    giImg: {
      width: "100%",
      height: "100%"
    },
    giBackBut: {
      width: 20,
      height: 30,
      left: 35,
      top: 40,
      position: "absolute"
    },
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
    //Page subheader
    giSubHeader: {
      width: "100%",
      height: 55,
      backgroundColor: "#FE647B",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      flexDirection: "row"
    },
    giclosingtimeText: {
      fontFamily: "Open sans",
      fontSize: 15,
      color: "#FFFFFF",
      left: 85
    },
    gispectimeText: {
      color: "#81EC8D",
      fontWeight: "bold"
    },
    groupcloseIcon: {
      width: 30,
      height: 30,
      left: 26
    },
    gicostText: {
      fontFamily: "Open sans",
      fontSize: 30,
      fontWeight: "bold",
      color: "#FFFFFF",
      left: 144
    },
    //Group Information Section
    giTextSec: {
      width: 337,
      height: 250,
      // backgroundColor:'#DAD',
      marginTop: 20
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
      marginBottom: 43
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
        color:'#094E76',
        marginBottom: 32,
        marginTop:-16
    }
  });

  return (
    <View style={styles.gipageStructure}>
      {/* Main Header */}
      <View style={styles.giHeader}>
        <Image
          style={styles.giImg}
          source={require("../assets/img_stage18.png")}
        />
        <TouchableOpacity style={{ position: "absolute" }}>
          <Image
            style={styles.giBackBut}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>
        <View style={styles.giOrganizerImg}></View>
        <Text style={styles.giOrganizedByText}>Organized by</Text>
        <Text style={styles.giOrganizerText}>Toby Wong</Text>
      </View>

      {/* Pink Subheader */}
      <View style={styles.giSubHeader}>
        <Image
          style={styles.groupcloseIcon}
          source={require("../assets/icon_group_close.png")}
        />
        <Text style={styles.giclosingtimeText}>
          Group closes in<Text style={styles.gispectimeText}> 100 </Text>hours
        </Text>
        <Text style={styles.gicostText}>$7</Text>
      </View>

      <View style={styles.giTextSec}>
        <ScrollView>
          {/* Group Description */}
          <Text style={styles.groupDescHeaderText}>Group Description</Text>
          <Text style={styles.groupDescText}>
            This is a group description for players who are looking at other
            created groups cards. So you can only view no editing.
          </Text>

          {/* Group Information */}
          {/* <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Group</Text>
            <Text style={styles.giText}>#C1314</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Date</Text>
            <Text style={styles.giText}>30 December 2019</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Centre</Text>
            <Text style={styles.giText}>ClearOne</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Location</Text>
            <Text style={styles.giText}>
              4351 No 3 Rd #100,{"\n"}Richmond, BC V6X 3A7
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Time</Text>
            <Text style={styles.giText}>1pm - 4pm</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Group Limit</Text>
            <Text style={styles.giText}>5</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Players</Text>
            <Text style={styles.giText}>4</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.giTitleText}>Bird Type</Text>
            <Text style={styles.giText}>Feather</Text>
          </View> */}
          {/* All group info text */}
          <View style={{display:'flex',flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Text style={styles.giTitleText}>Group</Text>
                <Text style={styles.giTitleText}>Date</Text>
                <Text style={styles.giTitleText}>Centre</Text>
                <Text style={styles.giTitleText}>Location</Text>
                <Text style={styles.giTitleText}>Time</Text>
                <Text style={styles.giTitleText}>Group Limit</Text>
                <Text style={styles.giTitleText}>Players</Text>
                <Text style={styles.giTitleText}>Bird Type</Text>
            </View>
            <View style={{flex:1}}>
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
        </ScrollView>
      </View>
      <Button_Join />
    </View>
  );
}

export default GroupInfo;
