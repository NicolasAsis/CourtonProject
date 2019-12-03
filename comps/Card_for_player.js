import React, { useState,useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';

import {Actions} from 'react-native-router-flux';

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

function Card_for_player(props) {

  const [numJoined, setNumJoined] = useState();
  const [progJoined,setProgJoined]= useState();
  
  const ReadMemberAmt = async () => {

  // Get user id
  // const userId = await AsyncStorage.getItem('userId')
  // console.log(userId);
  var obj = {
    key: "groups_users_read",
    data: {
      group_id:props.groupNum
    }
  };
  var r = await axios.post("http://localhost:3001/post", obj);
  // console.log("read", r.data);
  var dbJoined = JSON.parse(r.data.body);
  // console.log("read", dbJoined);
  var d = dbJoined.data;
  var numJoined = d.length;

  var prog = props.totalMember ? (numJoined/ props.totalMember).toFixed(2) :0;
  setProgJoined(prog);

  setNumJoined(numJoined);
};

  useEffect(() => {
    ReadMemberAmt();
  }, []);
 
  // var prog = props.totalMember ? (0 / props.totalMember).toFixed(2) :0;

  var date = props.date.replace(/"/g, '');
  var chosenDate = new Date(date);
  //console.log("date", date, chosenDate);
  chosenDate = chosenDate.toLocaleDateString("en-US", {timeZone:"UTC", year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit"})
  return (
    <View style={{ alignItems: "center", marginTop: 18, width:'100%' }}>
      <TouchableOpacity
       style={styles.card}
        onPress={()=>{
          Actions.GroupInfo({groupId:props.groupNum,progJoined:progJoined,numJoined:numJoined})
      }}
      >
      <View>
        <View>
          <Image style={styles.img} source={{uri:props.groupImg}} />

          <Text style={styles.txtorganizer}>{props.organizerFN} {props.organizerLN}</Text>

          <Text style={styles.txtGroupNum}>Group #{props.groupNum}</Text>
          <Text style={styles.txtGroupDate}>{chosenDate}</Text>
          {/* <Text style={styles.txtGroupJoinDate}>Join Before: Dec 20 11:30pm</Text> */}
          <Text style={styles.txtGroupPlayerCount}>Players {numJoined}/{props.totalMember}</Text>
          <Text style={styles.txtGroupPrice}>${props.price}</Text>
          
          <Progress.Bar
            unfilledColor="#CDC5C5"
            borderColor="#FFFFFF"
            color="#81EC8D"
            progress= {progJoined}
            width={180}
            style={styles.ProgressBar}
          />
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 157,
    position: "relative",
    backgroundColor: "#FFFFFF",
    // alignItems: 'center',
    // justifyContent:'center',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    borderRadius: 8
  },
  img: {
    position: "relative",
    width: 144.33,
    height: 156.79,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  txtorganizer: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 27,
    color: "#3C3C3C",
    position: "absolute",
    left: "46%",
    top: 10,
    fontFamily: "Open sans"
  },
  txtGroupNum: {
    fontSize: 11,
    lineHeight: 15,
    color: "#9FA5B4",
    position: "absolute",
    width: 75,
    height: 15,
    left: "46%",
    top: 44,
    fontFamily: "Open sans"
  },
  txtGroupDate: {
    position: "absolute",
    fontSize: 11,
    color: "#4A4A4A",
    lineHeight: 15,
    left: "46%",
    top: 62,
    color: "#FE647B",
    fontFamily: "Open sans"
  },
  txtGroupJoinDate: {
    fontSize: 11,
    color: "#FE647B",
    position: "absolute",
    left: "46%",
    top: 95,
    fontFamily: "Open sans"
  },
  txtGroupPlayerCount: {
    position: "absolute",
    color: "#9FA5B4",
    fontSize: 12,
    bottom: 25,
    left: "46%",
    fontFamily: "Open sans"
  },
  txtGroupPrice: {
    position: "absolute",
    fontSize: 24,
    color: "#094E76",
    fontWeight: "bold",
    bottom: 25,
    right: 14,
    fontFamily: "Open sans"
  },
  ProgressBar: {
    position: "absolute",
    height: 8,
    right: 10,
    bottom: 10
  }
});

export default Card_for_player;
