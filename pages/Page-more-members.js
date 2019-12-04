import React, { useState,useEffect } from "react";
import { View, Text } from "react-native";
import Header_blue2 from "../comps/Header_blue2";
import Card_members from "../comps/Card_members";
import { ScrollView } from "react-native-gesture-handler";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import {url} from '../vars';

function MoreMembers(props) {
  const [members,setMembers] = useState([]);

  const ReadMembers = async () => {

    // Get user id
    // const userId = await AsyncStorage.getItem('userId')
    // console.log(userId);
    var obj = {
      key: "groups_users_read",
      data: {
        group_id:props.groupId
      }
    };
    var r = await axios.post(url, obj);
    // console.log("read", r.data);
    var dbJoined = JSON.parse(r.data.body);
    // console.log("read", dbJoined);
    var d = dbJoined.data;
    console.log("read",d);
    setMembers(d);
  };

  useEffect(() => {
    ReadMembers();
  }, []);

  const data = [
    {
      memberName: "Tony Lin"
    },
    {
      memberName: "Lisa Black"
    },
    {
      memberName: "Jhonny Wick"
    },
    {
      memberName: "Melody Haung"
    },
    {
      memberName: "Julie Rose"
    }
  ];

  const [hamMenuVisible, setHamMenuVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
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

      <Header_blue2 headerTitle={"Members"} showHamMenu={setHamMenuVisible}/>
      <View style={{ marginTop: 20 }}>
        <ScrollView style={{ width: "100%", height: 700 }}>
          <View style={{ alignItems: "flex-start", marginLeft: 23 }}>
            {members.map((d, i) => {
              return (
                <Card_members
                  key = {i}
                  id={d.id}
                  memberFN={d.first_name}
                  memberLN={d.last_name}
                  skillLevel={d.skill_level}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MoreMembers;
