import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput, 
  Modal
} from "react-native";

import Button_Join from "../comps/Button_Join";
import Card_members from "../comps/Card_members";
import Bar_group_countdown_price from "../comps/Bar_group_countdown_price";
import Circle_extra_member from "../comps/Circle_extra_member";
import Card_comment from "../comps/Card_comment";
import Leave_group_popup from'../comps/Leave_group_popup';

import {Actions} from 'react-native-router-flux';

function Member_groupInfo() {
  const styles = StyleSheet.create({
    // Page Structure
    gipageStructure: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:'#FFFFFF',
      width:'100%',
      justifyContent:'center'
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
      backgroundColor:'#FFFFFF'
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
      justifyContent:'center',
      alignItems:'center'
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
    btnReset:{
      backgroundColor:'#BDBDBD',
      alignItems:'center',
      justifyContent:'center',
      width:150,
      height:35,
      borderRadius:30,
      shadowColor:'#000000',
      shadowOpacity:0.10,
      shadowRadius:7,
      shadowOffset:{x: 2, y:3},
      marginRight:4
    },
    txtRest:{
      color:'#FFFFFF',
      fontFamily:'Open sans',
      fontWeight:'bold'
    },
    btnSubmit:{
      backgroundColor:'#56CCF2',
      alignItems:'center',
      justifyContent:'center',
      width:150,
      height:35,
      borderRadius:30,
      shadowColor:'#000000',
      shadowOpacity:0.10,
      shadowRadius:7,
      shadowOffset:{x: 2, y:3},
      marginLeft:15
    },
    txtSubmit:{
      color:'#FFFFFF',
      fontFamily:'Open sans',
      fontWeight:'bold'
    },
    txtLeave:{
      color:'#FFFFFF',
      fontFamily:'Open sans',
      fontWeight:'bold'
    },
    btnLeave:{
      backgroundColor:'#FE647B',
      alignItems:'center',
      justifyContent:'center',
      width:320,
      height:40,
      borderRadius:50,
      shadowColor:'#000000',
      shadowOpacity:0.10,
      shadowRadius:7,
      shadowOffset:{x: 2, y:3},
      marginTop:20,
      marginBottom:50
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
      top:2,
      width: 35,
      height: 23,
      // marginLeft:263,
      //   left: 35,
      //   top: 40,
        // position: "absolute"
    },
  });

  const [modalVisible,setModalVisible] = useState(false);

  return (
    <View style={{
              backgroundColor:'#FFFFFF'}}>
               

       {/* Popup */}
       <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <Leave_group_popup 
            setShowPopup = {setModalVisible}
          />
        </Modal>

      <View style={styles.gipageStructure}>
        {/* Main Header */}
        
        <View style={styles.giHeader}>
          <Image
            style={styles.giImg}
            source={require("../assets/img_stage18.png")}
          />
          <TouchableOpacity 
            style={{ position: "absolute" }}
            onPress={()=>{
              Actions.pop()
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
              // Actions.pop("Home");
            }}
          >
            <Image
              style={styles.giHamBtn}
              source={require("../assets/but_ham.png")}
            />
          </TouchableOpacity>
          {/* <View style={styles.giOrganizerImg}></View> */}
          <Text style={styles.giOrganizedByText}>Organized by</Text>
          <Text style={styles.giOrganizerText}>Toby Wong</Text>
        </View>

        <Bar_group_countdown_price titlePrice={7} countdown={100} />
        <View style={styles.giTextSec}>
          <View
            style={{
              flex: 1,
              position: "absolute",
              height: 500,
              backgroundColor:"#ffffff",
              width:'100%',
              justifyContent:'center',
              alignItems:'center',
            }}
          >
            <ScrollView style={{ flex: 1,width:'100%',
          
          backgroundColor:'#FFFFFF'
          }}>
              {/* Group Description */}
              <View style={{backgroundColor:"#ffffff", paddingLeft:"6%"}}>
              <Text style={styles.groupDescHeaderText}>Group Description</Text>
              <Text style={styles.groupDescText}>
                This is a group description for players who are looking at other
                created groups cards. So you can only view no editing.
              </Text>

              {/* All group information text */}
              <View style={{ display: "flex", flexDirection: "row", 
              backgroundColor:'#FFFFFF', justifyContent:'center', alignItems:'center' }}>
                <View style={{ flex: 1,
              backgroundColor:'#FFFFFF' }}>
                  <Text style={styles.giTitleText}>Group</Text>
                  <Text style={styles.giTitleText}>Date</Text>
                  <Text style={styles.giTitleText}>Centre</Text>
                  <Text style={styles.giTitleText}>Location</Text>
                  <Text style={styles.giTitleText}>Time</Text>
                  <Text style={styles.giTitleText}>Group Limit</Text>
                  <Text style={styles.giTitleText}>Players</Text>
                  <Text style={styles.giTitleText}>Bird Type</Text>
                </View>
                <View style={{ flex: 1,
              backgroundColor:'#FFFFFF' }}>
                  <Text style={styles.giText}>#C1314</Text>
                  <Text style={styles.giText}>30 December 2019</Text>
                  <Text style={styles.giText}>ClearOne</Text>
                  <Text style={styles.giLocationText}>
                    4351 No 3 Rd #100,{"\n"}Richmond, BC V6X 3A7
                  </Text>
                  <Text style={styles.giText}>1pm - 4pm</Text>
                  <Text style={styles.giText}>5</Text>
                  <Text style={styles.giPlayersText}>4</Text>
                  <Text style={styles.giText}>Feather</Text>
                </View>
              </View>
              {/* Member Cards */}
              <View style={{ alignItems: "flex-start", 
              backgroundColor:'#FFFFFF' }}>
                <Card_members
                  organizer={"Organizer"}
                  memberName={"Tony Wong"}
                />
                <Card_members memberName={"William Williams"} />
              </View>
              <TouchableOpacity 
              style={{ flexDirection: "row", backgroundColor:'#FFFFFF'}}
              onPress={()=>{
                Actions.MoreMembers()
              }}
              >
                <View>
                  <Circle_extra_member />
                </View>
                <View style={{ position: "absolute", left: '6%' }}>
                  <Circle_extra_member />
                </View>
                <Text style={[styles.giText, { left: 26, top: 5 }]}>
                  +2 more
                </Text>
              </TouchableOpacity>
              <Image
                  style={{ width: 24, height: 24, marginTop: 25, marginLeft:10}}
                  source={require("../assets/icon_comment.png")}
                />
              <View style={{ alignItems: "center", 
              backgroundColor:'#FFFFFF', marginLeft:'-5%' }}>
                
                
                <Card_comment />
                <View style={{ marginTop: 50}}>
                  <TextInput
                    style={styles.descInput}
                    placeholder="Type a group description..."
                    multiline
                  />
                  <View style={{ flexDirection: "column",
              backgroundColor:'#FFFFFF'}}>
                    <View style={{ flexDirection: "row", 
              backgroundColor:'#FFFFFF' }}>
                      <TouchableOpacity style={styles.btnReset}>
                        <Text style={styles.txtRest}>Reset</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.txtSubmit}>Submit</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                    style={styles.btnLeave}
                    onPress={()=>{
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