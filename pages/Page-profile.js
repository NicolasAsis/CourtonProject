import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Card_recent from "../comps/Card_recent";

function Profile(props) {

    const LoadGroup = async()=>{
      var obj = {
          key:"groups_read",
          data:{
            bmtCentre:bmtCentre,
            id:id
  
          }
      }
      // var r = await axios.post("http://142.232.162.71:3001/post", obj);
      // console.log("read", r.data);
      // var dbusers = JSON.parse(r.data.body);
      // console.log("read", dbusers);
      // setUsers(dbusers.data);
  }
  const recentGroupData=[
    {
      bmtCentre : 'Tony Wong',
      groupNum : '1511',
      bmtCentreTime : 'Fri, Dec 30 1pm - 8pm',
      bmtCentrePostTime : '15 sec ago',
      verIndicatorColor :'#FE647B'
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
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15%"
                  }}
                >
                  <Text style={styles.txtCreatedNum}>
                    {props.txtCreatedNum}2
                  </Text>
                  <Text style={styles.txtCreatedJoined}>
                    {props.txtCreatedGroup}Created{" "}
                  </Text>
                </View>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Text style={styles.txtJoinedNum}>{props.txtJoinedNum}5</Text>
                  <Text style={styles.txtCreatedJoined}>
                    {props.txtJoinedGroup}Joined
                  </Text>
                </View>
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

           
            <View style={{flexDirection:'row', paddingRight:30}} > 
                <View style={styles.circleIndicatorJoined}></View>
                <Text style={styles.txtIndicator}>Joined</Text>
            </View>
            <View style={{flexDirection:'row', paddingLeft:30}} > 
                <View style={styles.circleIndicatorCreated}></View>
                <Text style={styles.txtIndicator}>Created</Text>
            </View>
            </View>
          <Text style={styles.txtRecent}>Notifications</Text>
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
              recentGroupData.map((obj,i)=>{
                return <Card_recent
                // key = {i}
                id = {obj.id}
                bmtCentre = {obj.bmtCentre}
                groupNum = {obj.groupNum}
                bmtCentreTime = {obj.bmtCentreTime}
                bmtCentrePostTime = { obj.bmtCentrePostTime}
                verIndicatorColor = {obj.verIndicatorColor}
                
            />
            })
            }
            <Card_recent 
            verIndicatorColor={'#094E76'}
            />
            
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
  txtRecent: {
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
