import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, Alert } from "react-native";

import Header_blue from "../comps/Header_blue";
import Footer_regular from "../comps/Sticky_footer_regular";
import { ScrollView } from "react-native-gesture-handler";
import Card_for_organizer from "../comps/Card_for_organizer";
import { useEffect } from "react";
function MyCreatedGroup() {

  const LoadGroup = async()=>{
    var obj = {
        key:"groups_read",
        data:{
          organizerName:organizerName,
          date:date

        }
    }
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);


  }
const data = [
  {
    bmtCentre : 'Stage 18',
    groupNum : '1511',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 150,
    progressBarLoad : 0.2
  },
  {
    bmtCentre : 'Clear One',
    groupNum : '1141',
    date : 'Sat Dec 10',
    time : '1pm -2pm',
   joinedMember : 2,
    totalMember : 10,
    price : 150,
    progressBarLoad : 0.67
  },
  ]

  useEffect(()=>{
  LoadGroup();
  }, []);

  const [searchKey, setSearchKey] = useState(' ')

  const filteredCreatedGroup = data.filter((obj)=>{
    return obj.bmtCentre.indexOf(searchKey) >= 0 || obj.groupNum.indexOf(searchKey) >= 0;
  })

  if (filteredCreatedGroup.length == 0) {
    Alert.alert('Oops! No result','Try another name')
  }

  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <Header_blue headerTitle={"All My Created Groups"} />
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
        <View style={{ height: 652, backgroundColor:'#FFFFFF'}}>
          <ScrollView>
            <View style={{ flex: 1, paddingLeft:20, paddingRight:20, paddingBottom:20}}>
            {
                filteredCreatedGroup.map((obj,i)=>{
                    return <Card_for_organizer
                    key = {i}
                    id = {obj.id}
                    bmtCentre = {obj.bmtCentre}
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
    top: 60
  },
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
  },
  // footer: {
  //   bottom: 0,
  //   top: 152
  // }
});

export default MyCreatedGroup;
