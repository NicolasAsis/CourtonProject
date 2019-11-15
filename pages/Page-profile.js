import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Card_notification from "../comps/Card_notification";
import { Actions } from "react-native-router-flux";

function Profile(props) {

    const LoadComments = async()=>{
      var obj = {
          key:"users_read",
          data:{
            name:name,
            id:id
  
          }
      }
      // var r = await axios.post("http://142.232.162.71:3001/post", obj);
      // console.log("read", r.data);
      // var dbusers = JSON.parse(r.data.body);
      // console.log("read", dbusers);
      // setUsers(dbusers.data);
  }

  useEffect(()=>{
    LoadComments();
  }, []);
  
  const notificationData=[
    {
      name : 'Tony Wong',
      groupNum : '1511',
      comment:'From its medieval origins to the digital era,',
      bmtCentrePostTime : '15 sec ago',
      verIndicatorColor :'#FE647B'
    },
    {
      name : 'William Smith',
      groupNum : '0911',
      comment:'Lorem ipsum is placeholder text commonly ',
      bmtCentrePostTime : '3 weeks ago',
      verIndicatorColor :'#094E76'
    },
    {
      name : 'Carol English',
      groupNum : '0911',
      comment:'Lorem ipsum is placeholder text commonly ',
      bmtCentrePostTime : '4 weeks ago',
      verIndicatorColor :'#094E76'
    },
    {
      name : 'Nicolas Asis',
      groupNum : '0911',
      comment:'Lorem ipsum is placeholder text commonly ',
      bmtCentrePostTime : '5 weeks ago',
      verIndicatorColor :'#094E76'
    },
  
  ]


  return (
    <View>
      <TouchableOpacity
        style={{ position: "absolute", left: 320, top: 50, zIndex: 10 }}
      >
        <Image
          style={{ width: 26, height: 26 }}
          source={require("../assets/icon_setting.png")}
        />
      </TouchableOpacity>
      <View>
        <Image
          style={{ width: "100%", height: 262 }}
          source={require("../assets/img_profile_banner.png")}
        />
      </View>

      <View style={styles.pageStructure}>
        <View style={styles.profileHeader}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={styles.profilePic}
              source={require("../assets/img_profile_banner.png")}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "15%"
              }}
            >
              <Text style={styles.txtName}>Jacky Lee</Text>
              <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
                
                  <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15%"
                  }}
                  onPress={()=>{
                    Actions.reset('MyCreatedGroup')
                  }}
                  >
                  <Text style={styles.txtCreatedNum}>
                    {props.txtCreatedNum}2
                  </Text>
                  <Text style={styles.txtCreatedJoined}>
                    {props.txtCreatedGroup}Created{" "}
                  </Text>
                  </TouchableOpacity>

                <TouchableOpacity
                  style={{ alignItems: "center", justifyContent: "center" }}
                  onPress={()=>{
                    Actions.reset('MyJoinedGroup')
                  }}
                >
                  <Text style={styles.txtJoinedNum}>{props.txtJoinedNum}5</Text>
                  <Text style={styles.txtCreatedJoined}>
                    {props.txtJoinedGroup}Joined
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          zIndex: -10,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
          height: 550
        }}
      >
        <View style={{ width: "100%", height: 100, zIndex: 10 }}>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', top:70}}>
            </View>

          <Text style={styles.txtNotification}>Notifications</Text>

        </View>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              paddingTop: "10%",
              paddingBottom: 80,
              paddingLeft:20,
              paddingRight:20
            }}
          >

            {
              notificationData.map((obj,i)=>{
                return <Card_notification
                key = {i}
                id = {obj.id}
                name = {obj.name}
                groupNum = {obj.groupNum}
                comment = {obj.comment}
                bmtCentrePostTime = { obj.bmtCentrePostTime}
                verIndicatorColor = {obj.verIndicatorColor}
            />
            })
            }
          
            
          </View>
        </ScrollView>
      </View>
      <Sticky_footer_regular
        homeIcon={require("../assets/icon_home_grey.png")}
        myGroupIcon={require("../assets/icon_mygroup_grey.png")}
        profileIcon={require("../assets/icon_profile_blue.png")}
        style={styles.footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageStructure: {
    alignItems: "center",
    justifyContent: "center"
  },
  profileHeader: {
    width: 325,
    height: 153,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    position: "absolute",
    shadowOffset: { x: 0, y: 3 },
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOpacity: 0.07,
    justifyContent: "center"
  },
  profilePic: {
    width: 85,
    height: 85,
    borderRadius: 100,
    backgroundColor: "#fab"
  },
  txtName: {
    fontFamily: "Open sans",
    fontSize: 24,
    color: "#094E76",
    fontWeight: "bold",
    flex: 1
  },
  txtCreatedNum: {
    fontFamily: "Open sans",
    fontSize: 20,
    color: "#094E76",
    fontWeight: "bold"
  },
  txtJoinedNum: {
    fontFamily: "Open sans",
    fontSize: 20,
    color:"#FE647B",
    fontWeight: "bold"
  },
  txtCreatedJoined: {
    color: "#094E76",
    fontFamily: "Open sans",
    fontSize: 12
  },
  txtNotification: {
    fontFamily: "Open sans",
    fontSize: 18,
    color: "#C2C1C1",
    paddingLeft: "10%",
    backgroundColor: "#ffffff",
    width: "100%",
    top: 80
  },
  footer: {
    position: "absolute"
  },
  circleIndicatorJoined:{
      width:17,
      height:17,
      backgroundColor:'#FE647B',
      borderRadius:30,
      marginRight:5
      //094E76
  },
  circleIndicatorCreated:{
    width:17,
    height:17,
    backgroundColor:'#094E76',
    borderRadius:30,
    marginRight:5
    //
},
    txtIndicator:{
        fontSize:12,
        fontFamily:'Open sans',
        color:'#094E76'
    }
});

export default Profile;
