import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from "react-native";

import Button_Join from "../comps/Button_Join";
import Card_members from "../comps/Card_members";
import Bar_group_countdown_price from "../comps/Bar_group_countdown_price";
import Circle_extra_member from "../comps/Circle_extra_member";
import Card_comment from "../comps/Card_comment";
import Leave_group_popup from "../comps/Leave_group_popup";
import * as Progress from "react-native-progress";
import { Actions } from "react-native-router-flux";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import {url} from '../vars';

function Member_groupInfo(props) {

  const [groupInfo, setGroupsInfo] = useState([]);
  const ReadGroupInfo = async () => {
    // Get user id
    // const userId = await AsyncStorage.getItem("userId");
    // console.log(props.groupId);
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
    setGroupsInfo(groupData);
  };

  useEffect(() => {
    ReadGroupInfo();
  }, []);
  
  // const LoadMemberCard = async () => {
  //   var obj = {
  //     key: "memberCard_read",
  //     data: {
  //       // organizerName:organizerName,
  //       // date:date
  //     }
  //   };
  //   var r = await axios.post("http://142.232.162.71:3001/post", obj);
  //   console.log("read", r.data);
  //   var dbusers = JSON.parse(r.data.body);
  //   console.log("read", dbusers);
  //   setUsers(dbusers.data);

  //   if(data.organizerName == obj.organizerName ){
  //     alert('No result is found')
  //   }
  // };

  const data = [
    {
      memberName: "Lisa Black",
      organizer: "Organizer",
      url: "../assets/image.jpeg"
    },
    {
      memberName: "Jonny Wick",
      url: "../assets/image.jpeg"
    },
    {
      memberName: "Melody Huang",
      url: "../assets/image.jpeg"
    }
  ];

  // useEffect(() => {
  //   LoadMemberCard();
  // }, []);

  const styles = StyleSheet.create({
    // Page Structure
    gipageStructure: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      width: "100%",
      justifyContent: "center"
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
      left: 45,
      top: 163
    },
    giOrganizerText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 24,
      color: "#FFFFFF",
      position: "absolute",
      left: 45,
      top: 190
    },

    //Group Information Section
    giTextSec: {
      width: "100%",
      height: 250,
      // backgroundColor:'#DAD',
      marginTop: 20,
      // left:23,
      backgroundColor: "#FFFFFF"
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
      width: 330,
      justifyContent: "center",
      alignItems: "center"
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
    },
    descInput: {
      width: 312,
      height: 126,
      borderRadius: 6,
      backgroundColor: "#F2F2F2",
      marginBottom: 39,
      textAlignVertical: "top"
      //   display:'flex'
    },
    btnReset: {
      backgroundColor: "#BDBDBD",
      alignItems: "center",
      justifyContent: "center",
      width: 150,
      height: 35,
      borderRadius: 30,
      shadowColor: "#000000",
      shadowOpacity: 0.1,
      shadowRadius: 7,
      shadowOffset: { x: 2, y: 3 },
      marginRight: 4
    },
    txtRest: {
      color: "#FFFFFF",
      fontFamily: "Open sans",
      fontWeight: "bold"
    },
    btnSubmit: {
      backgroundColor: "#56CCF2",
      alignItems: "center",
      justifyContent: "center",
      width: 150,
      height: 35,
      borderRadius: 30,
      shadowColor: "#000000",
      shadowOpacity: 0.1,
      shadowRadius: 7,
      shadowOffset: { x: 2, y: 3 },
      marginLeft: 15
    },
    txtSubmit: {
      color: "#FFFFFF",
      fontFamily: "Open sans",
      fontWeight: "bold"
    },
    txtLeave: {
      color: "#FFFFFF",
      fontFamily: "Open sans",
      fontWeight: "bold"
    },
    btnLeave: {
      backgroundColor: "#FE647B",
      alignItems: "center",
      justifyContent: "center",
      width: 320,
      height: 40,
      borderRadius: 50,
      shadowColor: "#000000",
      shadowOpacity: 0.1,
      shadowRadius: 7,
      shadowOffset: { x: 2, y: 3 },
      marginTop: 20,
      marginBottom: 50
    },
    giHamTouchableOp: {
      // backgroundColor:'red'
      // // width: 35,
      // height: 23,
      left: "80%",
      top: 45,
      position: "absolute"
    },
    giHamBtn: {
      top: 2,
      width: 35,
      height: 23
      // marginLeft:263,
      //   left: 35,
      //   top: 40,
      // position: "absolute"
    },
    ProgressBar: {
      marginTop: "1%"
    },
    txtMembersIndicator: {
      marginTop: "3%",
      fontSize: 16,
      fontFamily: "Open sans",
      color: "#094E76"
    }
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [hamMenuVisible, setHamMenuVisible] = useState(false);
  // var joinedMember = 30;
  // var totalMember = 40;
  const moreMembersNum = props.numJoined - 1;

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF"
      }}
    >
      {/* Ham Menu */}
      <Modal
        isVisible={hamMenuVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={() => {
          setHamMenuVisible(false);
        }}
        swipeDirection="right"
        onSwipeComplete={() => {
          setHamMenuVisible(false);
        }}
        hideModalContentWhileAnimating={true}
        style={{margin:0}}
      >
        <HamMenu showHamMenu={setHamMenuVisible} />
      </Modal>

      {/* Popup */}
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={modalVisible}
        style={{ margin: 0 }}
      >
        <Leave_group_popup setShowPopup={setModalVisible} />
      </Modal>

      <View style={styles.gipageStructure}>
        {/* Main Header */}

        <View style={styles.giHeader}>
          <Image
            style={styles.giImg}
            source={{uri: groupInfo.image}}
          />
          <TouchableOpacity
            style={{ position: "absolute" }}
            onPress={() => {
              Actions.pop();
            }}
          >
            <Image
              style={styles.giBackBut}
              source={require("../assets/but_back.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.giHamTouchableOp}
            onPress={() => {
              setHamMenuVisible(true);
            }}
          >
            <Image
              style={styles.giHamBtn}
              source={require("../assets/but_ham.png")}
            />
          </TouchableOpacity>
          {/* <View style={styles.giOrganizerImg}></View> */}
          <Text style={styles.giOrganizedByText}>Organized by</Text>
          <Text style={styles.giOrganizerText}>{groupInfo.first_name} {groupInfo.last_name}</Text>
        </View>
        <Text style={styles.txtMembersIndicator}>
          Players {props.numJoined}/{groupInfo.member_limit}
        </Text>
        <Progress.Bar
          unfilledColor="#CDC5C5"
          borderColor="#FFFFFF"
          color="#81EC8D"
          progress={props.progJoined}
          width={350}
          height={13}
          borderRadius={13}
          style={styles.ProgressBar}
        />

        <View style={styles.giTextSec}>
          <View
            style={{
              flex: 1,
              position: "absolute",
              height: 500,
              backgroundColor: "#ffffff",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ScrollView
              style={{
                flex: 1,
                width: "100%",

                backgroundColor: "#FFFFFF"
              }}
            >
              {/* Group Description */}
              <View style={{ backgroundColor: "#ffffff", paddingLeft: "6%" }}>
                <Text style={styles.groupDescHeaderText}>
                  Group Description
                </Text>
                <Text style={styles.groupDescText}>
                  {groupInfo.description}
                </Text>

                {/* All group information text */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#FFFFFF",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                    <Text style={styles.giTitleText}>Price Per Person</Text>
                    <Text style={styles.giTitleText}>Date</Text>
                    <Text style={styles.giTitleText}>Centre</Text>
                    <Text style={styles.giTitleText}>Location</Text>
                    <Text style={styles.giTitleText}>Time</Text>
                    <Text style={styles.giTitleText}>Bird Type</Text>
                  </View>
                  <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                    <Text style={styles.giText}>${groupInfo.cost_per_person}</Text>
                    <Text style={styles.giText}>{props.chosenDate2}</Text>
                    <Text style={styles.giText}>{groupInfo.name}</Text>
                    <Text style={styles.giLocationText}>
                      {groupInfo.location}
                    </Text>
                    <Text style={styles.giText}>{groupInfo.start_time}-{groupInfo.end_time}</Text>
                    <Text style={styles.giText}>{groupInfo.birdie_type}</Text>
                  </View>
                </View>
                {/* Member Cards */}
                <View
                  style={{
                    alignItems: "flex-start",
                    backgroundColor: "#FFFFFF"
                  }}
                >
                  {/* {data.map((obj, i) => {
                    return (
                      <Card_members
                        // key = {i}
                        id={obj.id}
                        memberName={obj.memberName}
                        organizer={obj.organizer}
                        url={obj.url}
                      />
                    );
                  })} */}

                      <Card_members
                        // key = {i}
                        // id={obj.id}
                        memberFN={groupInfo.first_name}
                        memberLN={groupInfo.last_name}
                        organizer="Organizer"
                        // url={obj.url}
                        skillLevel={groupInfo.skill_level}
                      />
            
                </View>
                <TouchableOpacity
                  style={{ flexDirection: "row", backgroundColor: "#FFFFFF" }}
                  onPress={() => {
                    Actions.MoreMembers({groupId:props.groupId});
                  }}
                >
                  <View>
                    <Circle_extra_member />
                  </View>
                  <View style={{ position: "absolute", left: "6%" }}>
                    <Circle_extra_member />
                  </View>
                  <Text style={[styles.giText, { left: 26, top: 5 }]}>
                    +{moreMembersNum} more
                  </Text>
                </TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginTop: 25,
                    marginLeft: 10
                  }}
                  source={require("../assets/icon_comment.png")}
                />
                <View
                  style={{
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    marginLeft: "-5%"
                  }}
                >
                  <Card_comment />
                  <View style={{ marginTop: 50 }}>
                    <TextInput
                      style={styles.descInput}
                      placeholder="Type a group description..."
                      multiline
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        backgroundColor: "#FFFFFF"
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          backgroundColor: "#FFFFFF"
                        }}
                      >
                        <TouchableOpacity style={styles.btnReset}>
                          <Text style={styles.txtRest}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSubmit}>
                          <Text style={styles.txtSubmit}>Submit</Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        style={styles.btnLeave}
                        onPress={() => {
                          // console.log('hello')
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.txtLeave}>Leave Group</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Member_groupInfo;
