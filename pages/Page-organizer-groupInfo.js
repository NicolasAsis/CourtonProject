import React,{useState,useEffect} from "react";
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
import {Actions} from 'react-native-router-flux';
import Delete_group_popup from '../comps/Delete_group_popup';
import * as Progress from 'react-native-progress';

function Organizer_groupInfo(props) {
  const styles = StyleSheet.create({
    // Page Structure
    gipageStructure: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:"#ffffff",
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
      // left: 23,
      backgroundColor:"#ffffff"
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
    txtDelete:{
      color:'#FFFFFF',
      fontFamily:'Open sans',
      fontWeight:'bold'
    },
    btnDelete:{
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
    ProgressBar: {
      marginTop:'1%'
    },
    txtMembersIndicator:{
      marginTop:'3%',
      fontSize:16,
      fontFamily:'Open sans',
      color:'#094E76'
    }
  });

  const LoadMemberCard = async()=>{
    var obj = {
        key:"memberCard_read",
        data:{
          // organizerName:organizerName,
          // date:date

        }
    }
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);

  // if(data.organizerName == obj.organizerName ){
  //   alert('No result is found')
  // }
}

const data=[
  {
    memberName:'Lisa Black',
    organizer:'Organizer',
    url:'../assets/image.jpeg'
  },
  {
    memberName:'Jonny Wick',
    url:'../assets/image.jpeg'
  },
  {
    memberName:'Melody Huang',
    url:'../assets/image.jpeg'
  }
]


useEffect(()=>{
  LoadMemberCard();
}, []);

  const [modalVisible,setModalVisible] = useState(false);
  var joinedMember = 50;
  var totalMember = 80;
  return (
    <View style={{backgroundColor:"#ffffff"}}>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <Delete_group_popup 
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
          <Text style={styles.giOrganizedByText}>#s11111</Text>
          <Text style={styles.giOrganizerText}>Stage 18</Text>
        </View>
        <Text
        style={styles.txtMembersIndicator}
        >{props.joinedMember}30/40{props.totalMember}</Text>
         <Progress.Bar
            unfilledColor="#CDC5C5"
            borderColor="#FFFFFF"
            color="#81EC8D"
            progress = {joinedMember/totalMember}
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
              backgroundColor:"#ffffff",
              width:'100%',
              justifyContent:'center',
              alignItems:'center',
            }}
          >
            <ScrollView style={{ flex: 1,width:'100%',backgroundColor:"#ffffff"}}>
              {/* Group Description */}
              <View style={{backgroundColor:"#ffffff", paddingLeft:"6%"}}>
              <Text style={styles.groupDescHeaderText}>Group Description</Text>
              <Text style={styles.groupDescText}>
                This is a group description for players who are looking at other
                created groups cards. So you can only view no editing.
              </Text>

              {/* All group information text */}
              <View style={{ display: "flex", flexDirection: "row", backgroundColor:"#ffffff", justifyContent:'center', alignItems:'center'}}>
                <View style={{ flex: 1, backgroundColor:"#ffffff"}}>
                  <Text style={styles.giTitleText}>Group</Text>
                  <Text style={styles.giTitleText}>Date</Text>
                  <Text style={styles.giTitleText}>Centre</Text>
                  <Text style={styles.giTitleText}>Location</Text>
                  <Text style={styles.giTitleText}>Time</Text>
                  <Text style={styles.giTitleText}>Bird Type</Text>
                </View>
                <View style={{ flex: 1, backgroundColor:"#ffffff" }}>
                  <Text style={styles.giText}>#C1314</Text>
                  <Text style={styles.giText}>30 December 2019</Text>
                  <Text style={styles.giText}>ClearOne</Text>
                  <Text style={styles.giLocationText}>
                    4351 No 3 Rd #100,{"\n"}Richmond, BC V6X 3A7
                  </Text>
                  <Text style={styles.giText}>1pm - 4pm</Text>
                  <Text style={styles.giText}>Feather</Text>
                </View>
              </View>
              {/* Member Cards */}
              <View style={{ alignItems: "flex-start",backgroundColor:"#ffffff"}}>
              {
                data.map((obj,i)=>{
                    return <Card_members
                    // key = {i}
                    id={obj.id}
                    memberName={obj.memberName}
                    organizer={obj.organizer}
                    url={obj.url}
                />
                })
                
            }
              </View>
              <View >
                <TouchableOpacity 
                style={{ flexDirection: "row",backgroundColor:"#ffffff"}}
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
              </View>
              <Image
                  style={{ width: 24, height: 24, marginTop: 25, marginLeft:10}}
                  source={require("../assets/icon_comment.png")}
                />
              <View style={{ alignItems: "center",backgroundColor:"#ffffff", marginLeft:'-5%' }}>
                
                <Card_comment />
                <Card_comment />
                <View style={{ marginTop: 50 }}>
                  <TextInput
                    style={styles.descInput}
                    placeholder="Type a group description..."
                    multiline
                  />
                  <View style={{ flexDirection: "column", backgroundColor:"#ffffff"}}>
                    <View style={{ flexDirection: "row", backgroundColor:"#ffffff" }}>
                      <TouchableOpacity style={styles.btnReset}>
                        <Text style={styles.txtRest}>Reset</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.txtSubmit}>Submit</Text>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                    onPress={()=>{
                      // console.log('hello')
                      setModalVisible(!modalVisible);
                    }}
                    style={styles.btnDelete}>
                      <Text style={styles.txtDelete}>Delete Group</Text>
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

export default Organizer_groupInfo;
