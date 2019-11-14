import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Switch_groupType from "../comps/Switch_groupType";
import Card_for_member from "../comps/Card_for_member";
import Card_for_organizer from "../comps/Card_for_organizer";

function MyGroup() {
  const [group, setGroup] = useState([]);

  const [groupType, setGroupType] = useState();

  // const [linePostionXRight, setPositionXRight] = useState(
  //   new Animated.Value(setPositionXRight ? 200 : 0)
  // );
  // const [linePostionXLeft] = useState(new Animated.Value(0));

  // var animatedLineRight = linePostionXRight.interpolate({
  //   inputRange: [0, 200],
  //   outputRange: [0, 200]
  // });
  // var animatedLineLeft = linePostionXLeft.interpolate({
  //   inputRange: [0, 200],
  //   outputRange: [0, 200]
  // });

  const LoadJoinedGroup = async () => {
    var obj = {
      key: "groups_read",
      data: {
        id: id,
        bmtCentre: bmtCentre,
        date: date
      }
    };
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);
  };

  const LoadCreatedGroup = async () => {
    var obj = {
      key: "groups_read",
      data: {
        id: id,
        organizerName: organizerName,
        date: date
      }
    };
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);
  };

  const joinedData = [
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
    }
  ];

  const createdData = [
    {
      bmtCentre: "Stage 18",
      groupNum: "1511",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: "0.2"
    },
    {
      bmtCentre: "Stage 18",
      groupNum: "1141",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: "0.67"
    },
    {
      bmtCentre: "Clear One",
      groupNum: "1311",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: "0.4"
    },
    {
      bmtCentre: "Clear One",
      groupNum: "2111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: "0.8"
    },
    {
      bmtCentre: "Clear One",
      groupNum: "0111",
      date: "Sat Dec 10",
      time: "1pm -2pm",
      joinedMember: 2,
      totalMember: 10,
      price: 7,
      progressBarLoad: "0.5"
    }
  ];

  useEffect(() => {
    LoadJoinedGroup();
    LoadCreatedGroup();
  }, []);

  return (
    <View>
      <View>
        <Image
          style={{ width: "100%", height: 160 }}
          source={require("../assets/img_banner_racquest.png")}
        />
        <Text style={styles.txtTitle}>My Groups</Text>
      </View>
      <Switch_groupType
        initial={0}
        // onPress={value => this.setState({ gender: value })}
        textColor="#094E76"
        selectedColor="white"
        buttonColor="#FE647B"
        // borderColor='#5DB9F0'
        borderRadius={0}
        backgroundColor="#FE647B"
        textStyle={styles.txtBar}
        selectedTextStyle={styles.selectedTxtBar}
        // hasPadding
        options={[
          {
            label: "Joined",
            value: "Joined"
          },
          {
            label: "Created",
            value: "Created"
          }
        ]}
        onPress={(val) => {
          if (val == "Joined") {
            setGroupType(
              <View>
                {joinedData.map(obj => {
                  return (
                    <Card_for_member
                      // key = {i}
                      id={obj.id}
                      organizerName={obj.organizerName}
                      groupNum={obj.groupNum}
                      date={obj.date}
                      time={obj.time}
                      joinedMember={obj.joinedMember}
                      totalMember={obj.totalMember}
                      price={obj.price}
                      progressBarLoad={obj.progressBarLoad}
                    />
                  );
                })}
              </View>
            );
          } else if (val == "Created") {
            setGroupType(
              <View>
                {createdData.map(obj => {
                  return (
                    <Card_for_organizer
                      // key = {i}
                      id={obj.id}
                      bmtCentre={obj.bmtCentre}
                      groupNum={obj.groupNum}
                      date={obj.date}
                      time={obj.time}
                      joinedMember={obj.joinedMember}
                      totalMember={obj.totalMember}
                      price={obj.price}
                      progressBarLoad={obj.progressBarLoad}
                    />
                  );
                })}
              </View>
            );
          }
        }}
      />

      {/* <View style={styles.subTitleBar}>
        <TouchableOpacity
          style={styles.btnBar}
          onPress={() => {
            Animated.timing(linePostionXLeft, {
              toValue: 0,
              duration: 300
            }).start();
          }}
        >
          <Text style={styles.txtBar}>Joined</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnBar}
          onPress={() => {
            Animated.timing(linePostionXRight, {
              toValue: 200,
              duration: 300
            }).start();
          }}
        >
          <Text style={styles.txtBar}>Created</Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={{
          left: setPositionXRight ? animatedLineRight : animatedLineLeft
        }}
      >
        <View style={styles.selectedLine}></View>
      </Animated.View> */}
      <View style={{ backgroundColor: "#FFFFFF" }}>
        <ScrollView style={{ height: 612 }}>
          <View style={{ marginBottom: 100 }}>
            {/* {joinedData.map((obj,i)=>{
                    return <Card_for_member
                    // key = {i}
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

            {createdData.map((obj,i)=>{
                    return <Card_for_organizer
                    // key = {i}
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
            } */}

            {groupType}
          </View>
        </ScrollView>
      </View>
      <Sticky_footer_regular
        homeIcon={require("../assets/icon_home_grey.png")}
        myGroupIcon={require("../assets/icon_group_blue.png")}
        profileIcon={require("../assets/icon_profile_grey.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    position: "absolute",
    left: 16,
    top: 100
  },
  subTitleBar: {
    width: "100%",
    height: 45,
    backgroundColor: "#FE647B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  selectedTxtBar: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Open sans",
    color: "#FFFFFF",
    textAlign: "center",
    bottom: 2
  },
  txtBar: {
    flex: 1,
    fontSize: 20,
    fontFamily: "Open sans",
    color: "#FFFFFF",
    textAlign: "center",
    bottom: 2
  },
  btnBar: {
    width: "50%",
    height: "100%"
  }
});

export default MyGroup;
