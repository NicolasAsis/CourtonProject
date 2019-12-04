import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import Header_blue from "../comps/Header_blue";
import Footer_regular from "../comps/Sticky_footer_regular";
import { ScrollView } from "react-native-gesture-handler";
import Card_for_organizer from "../comps/Card_for_organizer";
import { useEffect } from "react";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

import {url} from '../vars';

var noResult = null;
function MyCreatedGroup() {
  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  // const LoadGroup = async () => {
  //   var obj = {
  //     key: "groups_read",
  //     data: {
  //       organizerName: organizerName,
  //       date: date
  //     }
  //   };
  //   var r = await axios.post("http://142.232.162.71:3001/post", obj);
  //   console.log("read", r.data);
  //   var dbusers = JSON.parse(r.data.body);
  //   console.log("read", dbusers);
  //   setUsers(dbusers.data);
  // };
  const [groupsCreated, setGroupsCreated] = useState([]);
  // const ReadCreated = async () => {

  //   // Get user id
  //   const userId = await AsyncStorage.getItem('userId')
  //   console.log(userId);
  //   var obj = {
  //     key: "groups_users_read",
  //     data: {}
  //   };
  //   var r = await axios.post(url, obj);
  //   // console.log("read", r.data);
  //   var dbCreated = JSON.parse(r.data.body);
  //   console.log("read", dbCreated);
  //   var d = dbCreated.data;
  //   console.log(d.organizer_id);
  //   setGroupsCreated(d);
  // };

  const ReadCreated = async () => {

    // Get user id
    const userId = await AsyncStorage.getItem('userId')
    console.log(userId);
    var obj = {
      key: "groups_read",
      data: {
        organizer_id:userId
      }
    };
    var r = await axios.post(url, obj);
    // console.log("read", r.data);
    var dbCreated = JSON.parse(r.data.body);
    console.log("read", dbCreated);
    var d = dbCreated.data;
    // console.log(dbCreated.data[0].organizer_id);
    setGroupsCreated(d.reverse());
  };

  useEffect(() => {
    ReadCreated();
  }, []);

  const data = [
    {
      bmtCentre: "Stage 18",
      groupNum: "1511",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 150,
      progressBarLoad: 0.2
    },
    {
      bmtCentre: "Clear One",
      groupNum: "1141",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 150,
      progressBarLoad: 0.67
    }
  ];

  // useEffect(() => {
  //   LoadGroup();
  // }, []);

  const [searchKey, setSearchKey] = useState("");

  const filteredCreatedGroup = groupsCreated.filter(d => {
    return (
      d.name.indexOf(searchKey) >= 0 
      // || d.booking_date.indexOf(searchKey) >= 0
    );
  });

  if (filteredCreatedGroup.length == 0) {
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
    <View style={{ backgroundColor: "#FFFFFF" }}>
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

      <Header_blue headerTitle={"All My Created Groups"} showHamMenu={setHamMenuVisible}/>
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
        <View style={{ height: 652, backgroundColor: "#FFFFFF" }}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 20
              }}
            >
              {
                filteredCreatedGroup.map((d, i) => {
                return (
                  <Card_for_organizer
                    key={i}
                    groupId={d.id}
                    bmtCentre={d.name}
                    // groupNum={obj.groupNum}
                    date={d.booking_date}
                    time={d.start_time}
                    // joinedMember={obj.joinedMember}
                    totalMember={d.member_limit}
                    price={d.price}
                    groupImg={d.image}
                    // progressBarLoad={obj.progressBarLoad}
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
    backgroundColor:'white'
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
  }
  // footer: {
  //   bottom: 0,
  //   top: 152
  // }
});

export default MyCreatedGroup;
