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

// import Drawer from 'react-native-drawer';
import HamMenu from "../comps/HamMenu";

import Modal from "react-native-modal";

import Card_for_player from "../comps/Card_for_player";
import Footer_home from "../comps/Sticky_footer_home";

import { Actions } from "react-native-router-flux";
import LoadingAnimation from "../comps/LoadingAnimation";

import Reminder_bmt_popup from '../comps/Reminder_bmt_popup';

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import jssPluginPropsSort from "jss-plugin-props-sort";

var noResult = null;

function Home() {
  // const [moveY] =useState(new Animated. Value(0));
  // const [op] = useState(new Animated. Value(1));

  // var animatedOp = op.interpolate({
  //     inputRange:[0, 1],
  //     outputRange:[0, 1]
  // })

  // var animatedMoveY = moveY.interpolate({
  //     inputRange:[0, 10],
  //     outputRange:[0,10]
  // })

  // const [group, setGroup] = useState([]);
  const LoadGroup = async () => {
    var obj = {
      key: "groups_read",
      data: {
        // organizerName:organizerName,
        // date:date
      }
    };
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);
  };

  const data = [
    {
      organizerName: "Tony Wong",
      groupNum: "1511",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.2
    },
    {
      organizerName: "Dan Dhanika",
      groupNum: "1141",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.67
    },
    {
      organizerName: "Nico Asis",
      groupNum: "1311",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.4
    },
    {
      organizerName: "Heidi Tang",
      groupNum: "2111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.8
    },
    {
      organizerName: "Siya Yang",
      groupNum: "0111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.5
    },
    {
      organizerName: "Siya Yang",
      groupNum: "0111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.5
    },
    {
      organizerName: "Siya Yang",
      groupNum: "0111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: 0.5
    }
  ];

  // useEffect(() => {
  //   LoadGroup();
  // }, []);

  const [allGroups,setAllGroups] = useState([]);

  const ReadAllGroups = async () => {
    // Get user id
    // const userId = await AsyncStorage.getItem("userId");
    var obj = {
      key: "groups_read",
      data: {}
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    // console.log("read", r.data);
    var dbGroups = JSON.parse(r.data.body);
    //console.log("read", dbGroupInfo);

    var d = dbGroups.data;
    // console.log("read", d);
    // console.log(d.first_name)
    setAllGroups(d.reverse());
  };

  useEffect(() => {
    ReadAllGroups();
  }, []);

  const [orgInfo,setOrgInfo] = useState([]);

  // const ReadUsers = async (props) => {

  //   // Get user id
  //   const userId = await AsyncStorage.getItem('userId')
  //   console.log(userId);
  //   var obj = {
  //     key: "users_read",
  //     data: {
  //       id:props.organizerId
  //     }
  //   };
  //   var r = await axios.post("http://localhost:3001/post", obj);
  //   // console.log("read", r.data);
  //   var dbCreated = JSON.parse(r.data.body);
  //   console.log("read", dbCreated);
  //   var f = dbCreated.data[0];
  //   // console.log(dbCreated.data[0].organizer_id);

  //   setOrgInfo(f);
  // };

  const [popUp, setPopUp] = useState("sat");
  const [searchKey, setSearchKey] = useState("");

  const filteredGroups = allGroups.filter(d => {
    return (
      d.first_name.indexOf(searchKey) >= 0 ||
      d.last_name.indexOf(searchKey) >= 0 
      // d.cost_per_person.indexOf(searchKey) >= 0
    );
  });

  const [showNoresult, setShowNoresult] = useState();



  const [hamMenuVisible,setHamMenuVisible] = useState(false);
  const [modalVisible,setModalVisible] = useState(false);


  if (filteredGroups.length == 0) {
    noResult = <Image
      style={{
        left:'25%',
        top:70,
        width: 200,
        height: 200
      }}
      source={require("../assets/img_no_results.png")}
    />
    // Alert.alert('Oops, No result', 'Try another name')
   }
   else{
     noResult = null;
   }
  return (

    <View style={{backgroundColor:'#ffffff'}}>

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
      >
        <HamMenu />
      </Modal>


      {/* Popup */}
      <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={modalVisible}
          style={{ margin: 0 }}
        >
          <Reminder_bmt_popup setShowPopup={setModalVisible} />
        </Modal>

      <ScrollView
        style={{ backgroundColor: "#FFFFFF" }}
        onScroll={()=>{
          Animated.timing(
            moveY,
            {
                toValue:10,
                duration:300
                
            },
            op,
            {
                toValue:0,
                duration:300
            }
        ).start();

        // InteractionManager.runAfterInteractions(()=>{
        //   Animated.timing(
        //       dim,{
        //           toValue:50,
        //           duration:1000,
        //           delay:1000
        //       }
        //   ).start();
        // })
        }}
      >
        <View style={{ flex: 1, paddingBottom: 130, height:850 }}>
          <ScrollView 
          // onScroll={()=>{
          //   Animated.timing(
          //     moveY,
          //     {
          //         toValue:10,
          //         duration:300
                  
          //     },
          //     op,
          //     {
          //         toValue:0,
          //         duration:1000
          //     }
          // ).start();

          // InteractionManager.runAfterInteractions(()=>{
          //   Animated.timing(
          //       dim,{
          //           toValue:50,
          //           duration:1000,
          //           delay:1000
          //       }
          //   ).start();
          // })
          // }}
          >
            <View style={{ paddingBottom: 10, height:"100%"}}>
              <Image
                style={{ width: "100%", height: 240 }}
                source={require("../assets/img_homepage_banner.png")}
              />

              <TouchableOpacity
                onPress={() => {
                  Actions.LoadingAnimation();
                }}
              ></TouchableOpacity>

              {/* <TouchableOpacity
              onPress={()=>{
                // Actions.drawerMenu();
                setHamMenuVisible(true)
              }}
              >
                <Text>Test2</Text>
              </TouchableOpacity>
             */}

              <Text style={styles.title}>Upcoming Available Groups</Text>
              <Image />

              {filteredGroups.map((d,i) => {
                // ReadUsers({organizerId:d.organizer_id})
                return (
                  <Card_for_player
                    key={i}
                    // id={obj.id}
                    organizerFN={d.first_name}
                    organizerLN={d.last_name}
                    groupNum={d.id}
                    date={d.booking_date}
                    time={d.start_time}
                    // joinedMember={obj.joinedMember}
                    totalMember={d.member_limit}
                    price={d.cost_per_person}
                    // progressBarLoad={obj.progressBarLoad}
                    groupImg={d.image}
                  />
                );
              })}

              {/* //   (showNoresult)? 
              //   <Image
              //     style={{
              //       left:'25%',
              //       top:70,
              //       width: 200,
              //       height: 200,
              //       position: "absolute"
              //     }}
              //     source={require("../assets/img_no_results.png")}
              //   />
              //  : null */}
              
              {noResult}
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
          onChangeText={value => {
            setSearchKey(value);
          }}
          // value={searchKey.value}
        />
      </Animated.View>

      <View style={styles.footer}>
        <Footer_home />
      </View>
      <Animated.View
      // style={{marginTop:animatedMoveY, opacity:animatedOp}}
      >

      <TouchableOpacity
        style={styles.createButTouchableOp}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image
          style={styles.createBtn}
          source={require("../assets/but_create.png")}
        />
      </TouchableOpacity>
      </Animated.View>
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
