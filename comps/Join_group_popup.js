import React,{useEffect} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import {Actions} from 'react-native-router-flux';

// Animation 
import * as Animatable from "react-native-animatable";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

function Join_group_popup(props) {
  console.log(props.groupId);
  const CreateGroupUsers = async () => {

    // console.log("user_type",
    // "booking_date","price",
    // "description","badminton_centre_id",
    // "image","birdie_type","start_time",
    // "end_time","cost_per_person","member_limit","courts_selected",
    // user_type,
    // chosenDate,totalPrice,
    // desc,centreId,
    // centreImage,birdieType,start_time,
    // end_time,pricePerPerson,grouplimit,selectedCourts);

    // console.log("price",pricePerPerson);


    // Getting user id
    const userId = await AsyncStorage.getItem('userId');
    
    var obj = {
      key: "groups_users_create",
      data: {
        user_id:userId,
        group_id:props.groupId
      }
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    console.log("create", r.data);
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate">
          <View style={styles.popup}>
            <Text style={styles.boldGroupText}>Join Group</Text>
            <Text style={styles.boldGroupNumText}>#{props.groupId} ?</Text>
            <Text style={styles.paymentText}>
              Your payment must be given to your organizer
            </Text>

            <TouchableOpacity
              onPress={()=>{
                // Actions.GroupInfo()
                props.setShowPopup(false)
              }}
              style={styles.noButTouchableOp}
            >
              <Image style={styles.noButton} source={require("../assets/but_no.png")}></Image> 
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{
                props.setShowPopup(false)
                CreateGroupUsers();
                Actions.JoinedGroup({groupId:props.groupId})
              }}
              style={styles.yesButTouchableOp}
            >
              <Image style={styles.yesButton} source={require("../assets/but_yes.png")}/>
            </TouchableOpacity>

          </View>
      </Animatable.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor:'rgba(0, 0, 0, 0.401636)'
  },

  popup: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 261,
    height: 211,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    fontFamily: "Open Sans"
  },

  boldGroupText: {
    marginTop: -46,
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.213333,
    lineHeight: 27,
    color: "#3C3C3C"
  },

  boldGroupNumText: {
    fontWeight: "bold",
    fontSize: 31,
    letterSpacing: 0.213333,
    color: "#3C3C3C"
  },

  paymentText: {
    fontStyle: "italic",
    fontSize: 10,
    lineHeight: 26,
    letterSpacing: 0.213333,
    color: "#7C7B7B"
  },

   noButton:{
      //  position: 'absolute',
       width: 100,
       height: 38,
      //  left: -112,
      //  top: 14,
    },
    noButTouchableOp:{
      position: 'absolute',
      width: 100,
      height: 38,
      left: 20,
      top: 143,
    },
    yesButton:{
        // position: 'absolute',
        width: 100,
        height: 38,
        // left: 12,
        // top: 14,
     },
     yesButTouchableOp:{
      position: 'absolute',
      width: 100,
      height: 38,
      left: 135,
      top: 143,
     }


});

   

export default Join_group_popup;
