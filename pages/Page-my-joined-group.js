import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import Header_blue from "../comps/Header_blue";
import Card_organizer from "../comps/Card_for_organizer";
import Footer_home from "../comps/Sticky_footer_home";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Card_for_player from "../comps/Card_for_player";
import { ScrollView } from "react-native-gesture-handler";
function MyJoinedGroup() {
  const LoadGroup = async()=>{
    var obj = {
        key:"groups_read",
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
    organizerName : 'Tony Wong',
    groupNum : '1511',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 7,
    progressBarLoad : 0.2
  },
  {
    organizerName : 'Dan Dhanika',
    groupNum : '1141',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 7,
    progressBarLoad : 0.67
  },
  {
    organizerName : 'Nico Asis',
    groupNum : '1311',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 7,
    progressBarLoad : 0.4
  },
  {
    organizerName : 'Heidi Tang',
    groupNum : '2111',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 7,
    progressBarLoad : 0.8
  },
  {
    organizerName : 'Siya Yang',
    groupNum : '0111',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 7,
    progressBarLoad : 0.5
  }
]

useEffect(()=>{
  LoadGroup();
}, []);

const [searchKey, setSearchKey] = useState(' ')

  const filteredJoinedGroup = data.filter((obj)=>{
    return obj.organizerName.indexOf(searchKey) >= 0 || obj.groupNum.indexOf(searchKey) >= 0;
  })

  if (filteredJoinedGroup.length == 0) {
    Alert.alert('Oops! No result','Try another name')
  }




  return (
    <View style={{backgroundColor:'#FFFFFF', width:'100%'}}>
      <Header_blue headerTitle={"All My Joined Groups"} />
      <Image
        style={styles.searchIcon}
        source={require("../assets/icon_search.png")}
      />

      <TextInput
        style={styles.searchBar}
        placeholder="  Search Group Number, Organizer"
        onChangeText={(value) => {
          setSearchKey(value)
        }}
      />
      <View style={styles.mainContent}>
        <View style={{height:655}}>
          <ScrollView>
            <View style={{ flex: 1, paddingBottom:30, paddingLeft:10, paddingRight:10}}>
            {
                filteredJoinedGroup.map((obj,i)=>{
                    return <Card_for_player
                    key = {i}
                    id = {obj.id}
                    organizerName = {obj.organizerName}
                    groupNum = {obj.groupNum}
                    date = {obj.date}
                    time = {obj.time}
                    joinedMember = {obj.joinedMember}
                    totalMember = {obj.totalMember}
                    price = {obj.price}
                    progressBarLoad = {obj.progressBarLoad}
                />
                })
                
            }
              
             
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
    backgroundColor:'#FFFFFF'
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
