import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Animated,
  TouchableOpacity,
  Alert
} from "react-native";

import Card_for_player from "../comps/Card_for_player";
import Footer_home from "../comps/Sticky_footer_home";

import { Actions } from "react-native-router-flux";
import LoadingAnimation from '../comps/LoadingAnimation';

function Home() {
  // const [group, setGroup] = useState([]);
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
  },
  
]

useEffect(()=>{
  LoadGroup();
}, []);

  const [popUp, setPopUp] = useState('sat') 
  const [searchKey, setSearchKey] = useState(' ')

  const filteredGroup = data.filter((obj)=>{
    return obj.organizerName.indexOf(searchKey) >= 0 || obj.groupNum.indexOf(searchKey) >= 0;
  })

  if (filteredGroup.length == 0) {
   Alert.alert('Oops! No result','Try another name')
  }

  return (
    <View>
      <ScrollView
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <View style={{ flex: 1, paddingBottom: 130, height:850 }}>
          <ScrollView >
            <View style={{ paddingBottom: 10, height:"100%"}}>
              <Image
                style={{ width: "100%", height: 240 }}
                source={require("../assets/img_homepage_banner.png")}
              />

              <TouchableOpacity
              onPress={()=>{
                Actions.LoadingAnimation();
              }}
              >
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{
                Actions.HamMenu();
              }}
              >
                
                <Text>Test2</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>{
                Actions.LoadingAnimation();
              }}
              >
                <Text>Test</Text>
              </TouchableOpacity>


              <Text style={styles.title}>Upcoming Available Groups</Text>

              {/* <Card_for_player
                organizerName={"Toby Wong"}
                groupNum={"C1314"}
                date={"Sat Dec 30"}
                time={"1pm-2pm"}
                price={"7"}
                joinedMember={10}
                totalMember={20}
                progressBarLoad={0.5}
              /> */}
              {/* <Card_for_player />
              <Card_for_player />
              <Card_for_player />
              <Card_for_player /> */}
                 {
                filteredGroup.map((obj,i)=>{
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
      </ScrollView>

      <Animated.View
        style={{
          backgroundColor: "#094E76",
          width: "100%",
          height: 100,
          borderColor: "#FFFFFF",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden"
        }}
      >
        <Image
          style={styles.fixedSearchIcon}
          source={require("../assets/icon_search.png")}
        />
        <TextInput
          style={styles.fixedSearchBar}
          placeholder="  Search Group Number, Organizer"
          placeholderTextColor="#7D7D7D"
          onChangeText={(value) => {
            setSearchKey(value)
          }}
          // value={searchKey.value}
        />
      </Animated.View>

      <View style={styles.footer}>
        <Footer_home />
      </View>
      <TouchableOpacity
        style={styles.createButTouchableOp}
        onPress={() => {
          Actions.SelectLocation();
        }}
      >
        <Image
          style={styles.createBtn}
          source={require("../assets/but_create.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 16,
    top: 100
  },
  createBtn: {
    width: 54,
    height: 54
    // position: "absolute",
    // zIndex: 10,
    // left: "43%",
    // bottom: 120
  },

  //Styling for the touchable opacity surrounding the create But
  createButTouchableOp: {
    width: 54,
    height: 54,
    position: "absolute",
    zIndex: 10,
    left: "43%",
    bottom: 120
  },
  footer: {
    bottom: 0
    // top: 92
  },
  fixedSearchBar: {
    height: 36,
    width: 350,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    borderRadius: 10,
    top: 50,
    left: 15,
    fontSize: 16,
    fontFamily: "Open sans",
    color: "#8BC0DF"

  },
  fixedSearchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 330,
    top: 55,
    zIndex: 10
  }
});

export default Home;
