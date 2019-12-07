import React, { useState, useEffect } from "react";
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
import Join_group_popup from "../comps/Join_group_popup";
import * as Progress from "react-native-progress";
import { Actions } from "react-native-router-flux";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import { url } from "../vars";

function GroupInfo(props) {
  const LoadMemberCard = async () => {
    var obj = {
      key: "memberCard_read",
      data: {
        // organizerName:organizerName,
        // date:date
      }
    };
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);
    // if(data.organizerName == obj.organizerName ){
    //   alert('No result is found')
    // }
  };
  // const [groupNum,setGroupNum] = useState();
  const [groupInfo, setGroupsInfo] = useState([]);

  const [uid, setUId] = useState(null);

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
    setUId(groupData.organizer_id);
  };

  useEffect(() => {
    ReadGroupInfo();
  }, []);

  const data = [
    {
      memberName: "Lisa Black",
      organizer: "Organizer",
      url:
        "https://cdn.mos.cms.futurecdn.net/WrTQYE8ZnmfhKgduRX9ci5-320-80.jpeg"
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

  useEffect(() => {
    LoadMemberCard();
  }, []);

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
      left: "9%",
      top: 40
      // backgroundColor:'red'
    },
    giHamTouchableOp: {
      // backgroundColor:'red'
      // // width: 35,
      // height: 23,
      left: "80%",
      top: 45,
      position: "absolute"
    },
    giBackBut: {
      width: 20,
      height: 30
      //   left: 35,
      //   top: 40,
      //   position: "absolute"
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
      marginTop: 20
      // left: 23
    },
    //Group Description Text
    groupDescHeaderText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 15,
      marginBottom: 25,
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
      fontSize: 18,
      color: "#7C7B7B",
      lineHeight: 20,
      fontWeight:'bold',
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
    ProgressBar: {
      marginTop: "1%"
    },
    txtMembersIndicator: {
      marginTop: "3%",
      fontSize: 16,
      fontFamily: "Open sans",
      color: "#094E76"
    },
    rowStyle: {
      flexDirection: "row",
      alignItems: "center",
      paddingBottom: 30
    },
    gsTitleText: {
      fontFamily: "Open sans",
      fontWeight: "bold",
      fontSize: 18,
      color: "#3C3C3C",
      flex: 1,
      alignItems: "flex-end"
    },
    gsText: {
      fontFamily: "Open sans",
      fontSize: 18,
      color: "#4B4B4B",
      flex: 1
      // flex:4
    },
    gsPriceText: {
      fontFamily: "Open sans",
      fontSize: 24,
      fontWeight: "bold",
      color: "#EB5757",
      lineHeight: 33,
      marginBottom: 11.1
      // marginTop:
    }
  });

  const [modalVisible, setModalVisible] = useState(false);
  var joinedMember = 20;
  var totalMember = 23;

  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  // console.log("groupId",groupNum);
  const moreMembersNum = props.numJoined - 1;

  return (
    <View>
      <View style={styles.gipageStructure}>
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
          style={{ margin: 0 }}
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
          <Join_group_popup
            setShowPopup={setModalVisible}
            groupId={groupInfo.id}
            chosenDate={props.chosenDate2}
          />
        </Modal>

        {/* Main Header */}
        <View style={styles.giHeader}>
          <Image style={styles.giImg} source={{ uri: groupInfo.image }} />
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
          <Image
            style={styles.giOrganizerImg}
            source={{
              uri:
                "https://sstsappca.s3.ca-central-1.amazonaws.com/bcit/d3/user" +
                uid +
                "profilePic.jpg"
            }}
          />
          {/* <View style={styles.giOrganizerImg}></View> */}
          <Text style={styles.giOrganizedByText}>Organized by</Text>
          <Text style={styles.giOrganizerText}>
            {groupInfo.first_name} {groupInfo.last_name}
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
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
        </View>
        <View style={styles.giTextSec}>
          <View
            style={{
              flex: 1,
              position: "absolute",
              height: 375
            }}
          >
            {/* <TouchableOpacity
            onPress={()=>{
              setModalVisible(true)
            }}
          >
            <Text>Hi</Text>
          </TouchableOpacity> */}
            <ScrollView style={{ flex: 1 }}>
              <View
                style={{
                  paddingLeft: 20,
                  paddingRight: 10
                }}
              >
                {/* Group Description */}
                {/* this is what i changed */}
                <Text style={styles.gsTitleText}>
                  Group Description
                </Text>
                <Text style={styles.groupDescText}>
                  {groupInfo.description}
                </Text>

                {/* All group information text */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {/* <View style={{ flex: 1 }}> */}
                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Price Per Person</Text>
                    <Text style={styles.gsText}>
                      ${groupInfo.cost_per_person}
                    </Text>
                  </View>

                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Centre</Text>
                    <Text style={styles.gsText}>{groupInfo.name}</Text>
                  </View>

                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Location</Text>
                    <Text style={styles.gsText}>
                      {groupInfo.location}
                    </Text>
                  </View>

                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Time</Text>
                    <Text style={styles.gsText}>{props.chosenDate3}</Text>
                  </View>

                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Bird Type</Text>
                    <Text style={styles.gsText}>{groupInfo.birdie_type}</Text>
                  </View>

                  <View style={styles.rowStyle}>
                    <Text style={styles.gsTitleText}>Courts Selected</Text>
                    <Text style={styles.gsText}>
                      {groupInfo.courts_selected}
                    </Text>
                    </View>

                  {/* <Text style={styles.giTitleText}>Date</Text> */}
                  {/* </View> */}
                </View>
                <Text
                style={{
                  fontFamily:'Open sans',
                  fontSize:20,
                  fontWeight:'bold',
                  color: "#5DB9F0",
                  paddingBottom:20,
                  paddingTop:30
                }}
                >
                  Members
                </Text>
                {/* Member Cards */}
                <View style={{ alignItems: "flex-start" }}>
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
                    userId={uid}
                    organizer="Organizer"
                    // url={obj.url}
                    skillLevel={groupInfo.skill_level}
                  />
                </View>
                {/* this TO go to expanded member page */}
                <TouchableOpacity
                  style={{ flexDirection: "row", backgroundColor: "#ffffff" }}
                  onPress={() => {
                    Actions.MoreMembers({ groupId: props.groupId });
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {/* <View>
                      <Circle_extra_member />
                    </View> */}
                    {/* <View style={{ position: "absolute", left: 20 }}>
                      <Circle_extra_member />
                    </View> */}
                    <Text style={[styles.giText, { left: 26, top: 5 }]}>
                      +{moreMembersNum} more
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Join Button */}
      <Button_Join
        price={groupInfo.cost_per_person}
        setShowPopup={setModalVisible}
      />
    </View>
  );
}

export default GroupInfo;
