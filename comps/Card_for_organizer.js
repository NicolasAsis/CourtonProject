import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';

import {Actions} from 'react-native-router-flux';

function Card_for_organizer(props) {
  // console.log(props)
  console.log("test",props.groupId);

  var date = props.date.replace(/"/g, '');
  var chosenDate = new Date(date);
  //console.log("date", date, chosenDate);
  chosenDate = chosenDate.toLocaleDateString("en-US", {timeZone:"UTC", year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", second:"2-digit"})
  console.log("date2", chosenDate);
  // console.log(time)
  return (
    <View style={{ alignItems: "center", marginTop: 18 }}>
      <TouchableOpacity
        onPress={()=>{
          Actions.Organizer_groupInfo({groupId:props.groupId})
        }}
      >
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={{uri:props.groupImg}} />

          <Text style={styles.txtorganizer}>{props.bmtCentre}</Text>

          {/* <Text style={styles.txtGroupNum}>Group #{props.groupNum}</Text> */}
          <Text style={styles.txtGroupDate}>{chosenDate}</Text>
          {/* <Text style={styles.txtGroupJoinDate}>Join Before: Dec 20 11:30pm</Text> */}
          <Text style={styles.txtGroupPlayerCount}>Players {props.joinedMember}/{props.totalMember}</Text>
          <Text style={styles.txtGroupPrice}>${props.price}</Text>
          <Progress.Bar
            unfilledColor="#CDC5C5"
            borderColor="#FFFFFF"
            color="#81EC8D"
            progress= {0.5}
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
    shadowColor: "#D8D8D8",
    shadowOpacity: 1,
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
    fontSize: 9,
    bottom: 25,
    left: "46%",
    fontFamily: "Open sans"
  },
  txtGroupPrice: {
    position: "absolute",
    fontSize: 16,
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

export default Card_for_organizer;
