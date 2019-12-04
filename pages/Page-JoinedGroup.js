import React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import {Actions} from 'react-native-router-flux';

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import {url} from '../vars';

function JoinedGroup(props) {

  const [groupInfo, setGroupsInfo] = useState([]);
  const ReadGroupInfo = async () => {
    // Get user id
    // const userId = await AsyncStorage.getItem("userId");
    console.log(props.groupId);
    // setGroupNum(props.groupId);
    var obj = {
      key: "groups_read",
      data: {
        id: props.groupId
      }
    };
    var r = await axios.post(url, obj);
    // console.log("read", r.data);
    var dbGroupInfo = JSON.parse(r.data.body);
    //console.log("read", dbGroupInfo);

    var groupData = dbGroupInfo.data[0];
    //console.log("read", groupData);
    ReadUserInfo();
    setGroupsInfo(groupData);
  };

  useEffect(() => {
    ReadGroupInfo();
  }, []);

  // const userId = await AsyncStorage.getItem("userId");
  const ReadUserInfo = async () => {
    const userFN = await AsyncStorage.getItem("userFN");
    const userLN = await AsyncStorage.getItem("userLN");
    setUserFN(userFN)
    setUserLN(userLN)
  };

  const [userFName,setUserFN] = useState();
  const [userLName,setUserLN] = useState();

  // var date = groupInfo.booking_date.replace(/"/g, '');
  // var chosenDate = new Date(date);
  //console.log("date", date, chosenDate);
  // chosenDate = chosenDate.toLocaleDateString("en-US", {timeZone:"UTC", year:"numeric", month:"2-digit", day:"2-digit"})

  return (
    <View style={styles.bg}>
      <View>
        <Text style={styles.title}>Joined Group</Text>
        <Text style={styles.smallTitle}>Keep your birdies flying!!</Text>
      </View>
      <View style={styles.summary}>
        <Image
          style={styles.groupIcon}
          source={require("../assets/icon_group_created.png")}
        />
        <View>
          <Text style={styles.player}>{userFName} {userLName}</Text>
          <Text style={styles.price}>${groupInfo.cost_per_person}</Text>
        </View>
        <View style={styles.info1}>
          <Text style={styles.label}>Group</Text>
          <Text style={styles.data}>#{groupInfo.id}</Text>
        </View>
        <View style={styles.info2}>
          <Text style={styles.label}>Organizer</Text>
          <Text style={styles.data}>{groupInfo.first_name} {groupInfo.last_name}</Text>
        </View>
        <View style={styles.info3}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.data}>{props.chosenDate}</Text>
        </View>
        <View style={styles.info4}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.data}>8pm - 10pm</Text>
        </View>
        <View style={styles.info5}>
          <Text style={styles.label}>Centre</Text>
          <Text style={styles.data}>{groupInfo.name}</Text>
        </View>
        <View style={styles.info6}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.data6}>
            {groupInfo.location}
          </Text>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.button} 
            onPress={()=>{
              Actions.MyJoinedGroup()
            }}
          >
            <Text style={styles.btnText}> OK </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={{
          position: "absolute",
          width: 375,
          height: 187,
          left: 0,
          bottom: -30,
          zIndex: -2
        }}
        source={require("../assets/img_tybg.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  // Background
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#094E76"
  },

  // Page title
  title: {
    position: "absolute",
    width: 250,
    height: 49,
    left: 25,
    top: 44,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 49,
    textAlign: "center",
    letterSpacing: 0.48,
    color: "#FFFFFF"
  },

  // Caption title
  smallTitle: {
    width: 170,
    height: 25,
    left: 31,
    top: 101,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0.186667,
    color: "#FFFFFF"
  },

  // Summary box
  summary: {
    width: 314,
    height: 445,
    left: 31,
    top: 138,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    alignItems: "center"
  },

  // User Name
  player: {
    width: 100,
    height: 27,
    top: 40,
    left: -5,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    textAlign: "center",
    letterSpacing: 0.48,
    color: "#333333"
  },

  // Price tag
  price: {
    width: 35,
    height: 80,
    top: 5,
    left: 145,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 41,
    color: "#FE647B"
  },

  groupIcon: {
    width: 73,
    height: 68,
    top: 20,
    left: 2
  },

  // groups info
  info1: {
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  // label tag eg: Group, Organizer, Date..
  label: {
    textAlign: "left",
    position: "absolute",
    width: 109,
    height: 17,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.48,
    color: "#333333"
  },
  // Data for tag eg : Group : #CC023
  data: {
    textAlign: "right"
  },

  // organizer info
  info2: {
    top: 10,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  // Date info
  info3: {
    top: 20,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  time info
  info4: {
    top: 25,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  center info
  info5: {
    top: 25,
    width: 261,
    height: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },

  //  location info
  info6: {
    width: 261,
    height: 50,
    top: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E0E0E0"
  },
  // Adjustment for data on info6 - address text it too long
  data6: {
    width: 167,
    height: 42,
    left: 95,
    textAlign: "right"
  },

  // OK Button
  button: {
    width: 165,
    height: 56,
    top: 51,
    backgroundColor: "#4FF081",
    borderRadius: 100
  },
  btnText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 55,
    textAlign: "center",
    letterSpacing: 0.213333,
    color: "#FFFFFF"
  }
});

export default JoinedGroup;
