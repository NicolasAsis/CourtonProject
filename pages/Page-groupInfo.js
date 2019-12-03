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
    var r = await axios.post("http://localhost:3001/post", obj);
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
      marginBottom:25,
      color: "#3C3C3C"
    },
    groupDescText: {
      fontFamily: "Open sans",
      fontSize: 15,
      color: "#7C7B7B",
      lineHeight: 20,
      marginBottom: 43,
      width: 330,

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
  var joinedMember = 20;
  var totalMember = 23;

  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  // console.log("groupId",groupNum);
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
          <Join_group_popup setShowPopup={setModalVisible} groupId={groupInfo.id}/>
        </Modal>

        {/* Main Header */}
        <View style={styles.giHeader}>
          <Image
            style={styles.giImg}
            source={{uri: groupInfo.image}}
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
          <View style={styles.giOrganizerImg}></View>
          <Text style={styles.giOrganizedByText}>Organized by</Text>
          <Text style={styles.giOrganizerText}>{groupInfo.first_name} {groupInfo.last_name}</Text>
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
                  paddingRight: 20
                }}
              >
                {/* Group Description */}
                <Text style={styles.groupDescHeaderText}>
                  Group Description
                </Text>
                <Text style={styles.groupDescText}>
                  {groupInfo.description}
                </Text>

                {/* All group information text */}
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.giTitleText}>Price Per Person</Text>
                    <Text style={styles.giTitleText}>Date</Text>
                    <Text style={styles.giTitleText}>Centre</Text>
                    <Text style={styles.giTitleText}>Location</Text>
                    <Text style={styles.giTitleText}>Time</Text>
                    <Text style={styles.giTitleText}>Bird Type</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.giText}>${groupInfo.cost_per_person}</Text>
                    <Text style={styles.giText}>30 December 2019</Text>
                    <Text style={styles.giText}>{groupInfo.name}</Text>
                    <Text style={styles.giLocationText}>
                        {groupInfo.location}
                    </Text>
                    <Text style={styles.giText}>{groupInfo.start_time}-{groupInfo.end_time}</Text>
                    <Text style={styles.giText}>{groupInfo.birdie_type}</Text>
                  </View>
                </View>
                {/* Member Cards */}
                <View style={{ alignItems: "flex-start" }}>
                  {data.map((obj, i) => {
                    return (
                      <Card_members
                        // key = {i}
                        id={obj.id}
                        memberName={obj.memberName}
                        organizer={obj.organizer}
                        url={obj.url}
                      />
                    );
                  })}
                </View>
                {/* this TO go to expanded member page */}
                <TouchableOpacity
                  style={{ flexDirection: "row", backgroundColor: "#ffffff" }}
                  onPress={() => {
                    Actions.MoreMembers();
                  }}
                >
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
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Join Button */}
      <Button_Join price={groupInfo.cost_per_person} setShowPopup={setModalVisible}/>
    </View>
  );
}

export default GroupInfo;
