import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import Header_blue from "../comps/Header_blue";
import Card_organizer from "../comps/Card_for_organizer";
import Footer_home from "../comps/Sticky_footer_home";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Card_for_player from "../comps/Card_for_player";
import Card_for_member from "../comps/Card_for_member";
import { ScrollView } from "react-native-gesture-handler";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

var noResult = null;

function MyJoinedGroup() {

  const [groupsJoined, setGroupsJoined] = useState([]);

  const ReadJoined = async () => {

    // Get user id
    const userId = await AsyncStorage.getItem('userId')
    // console.log(userId);
    var obj = {
      key: "groups_users_read2",
      data: {
        user_id:userId
      }
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    // console.log("read", r.data);
    var dbJoined = JSON.parse(r.data.body);
    // console.log("read", dbJoined);
    var d = dbJoined.data;
    // console.log(dbCreated.data[0].organizer_id);
    setGroupsJoined(d.reverse());
  };

  useEffect(() => {
    ReadJoined();
  }, []);

  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  const data = [
    {
      organizerName: "Tony Wong",
      groupNum: "1511",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.2
    },
    {
      organizerName: "Dan Dhanika",
      groupNum: "1141",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.67
    },
    {
      organizerName: "Nico Asis",
      groupNum: "1311",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.4
    },
    {
      organizerName: "Heidi Tang",
      groupNum: "2111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.8
    },
    {
      organizerName: "Siya Yang",
      groupNum: "0111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.5
    }
  ];

  // useEffect(() => {
  //   LoadGroup();
  // }, []);

  const [searchKey, setSearchKey] = useState(" ");

  const filteredJoinedGroup = data.filter(obj => {
    return (
      obj.organizerName.indexOf(searchKey) >= 0 ||
      obj.groupNum.indexOf(searchKey) >= 0
    );
  });

  if (filteredJoinedGroup.length == 0) {
    noResult = <Image
      style={{
        // left:'25%',
        top:70,
        width: 200,
        height: 200
      }}
      source={require("../assets/img_no_results.png")}
    />
    // Alert.alert('Oops, No result', 'Try another name')
   }
   else{
     noResult = null;
   }
  return (
    <View style={{ backgroundColor: "#FFFFFF", width: "100%" }}>
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

      <Header_blue headerTitle={"All My Joined Groups"} showHamMenu={setHamMenuVisible}/>
      <Image
        style={styles.searchIcon}
        source={require("../assets/icon_search.png")}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="  Search Group Number, Organizer"
        onChangeText={value => {
          setSearchKey(value);
        }}
      />
      <View style={styles.mainContent}>
        <View style={{ height: 655 }}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                paddingBottom: 30,
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              {groupsJoined.map((d, i) => {
                return (
                  <Card_for_member
                    key={i}
                    // id={d.id}
                    organizerFN={d.first_name}
                    organizerLN={d.last_name}
                    groupNum={d.group_id}
                    date={d.booking_date}
                    time={d.start_time}
                    // joinedMember={obj.joinedMember}
                    totalMember={d.member_limit}
                    price={d.price}
                    // progressBarLoad={obj.progressBarLoad}
                    groupImg={d.image}
                  />
                );
              })}
              {noResult}
            </View>
          </ScrollView>
        </View>
      </View>
      {/* <View style={styles.footer}>
        <Footer_regular />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    alignItems: "center",
    justifyContent: "center",
    top: 60,
    backgroundColor: "#FFFFFF"
  },
  // footer: {
  //   bottom: 0,
  //   top:152,
  // },
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
  }
});

export default MyJoinedGroup;
