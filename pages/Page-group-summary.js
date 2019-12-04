import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { StyleSheet } from "react-native";
import Header_blue_red from "../comps/Header_blue_red";

import SwitchSelector from "react-native-switch-selector";

import LoadingAnimation from "../comps/LoadingAnimation";
import TextInput_popup from "../comps/TextInput_popup";
import AsyncStorage from "@react-native-community/async-storage";

import axios from 'axios';
import {url} from '../vars';

function GroupSummary(props) {

  // Popups
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputVisible, setTextInputVisible] = useState(false);

  // Group Info Variables
  const gsObj = props.navigation.state.params.group_info;

  const [selectedCourts, setSelectedCourts] = useState("");
  const [chosenDate, setChosenDate] = useState("");
  const totalPrice = gsObj.giObj.hrsPlay * gsObj.giObj.centreCost * selectedCourts.length;
  const hrsPlay = gsObj.giObj.hrsPlay;

  const centreLocation = gsObj.giObj.centreLocation;
  const centreId = gsObj.giObj.centreId;
  const centreImage = gsObj.giObj.centreImage;
  const centreName = gsObj.giObj.centreName;
  const start_time = gsObj.giObj.start_time;
  const end_time = gsObj.giObj.end_time;

  const [desc,setDesc] = useState("Add Description");

  const [grouplimit, setGroupLimit] = useState(0);
  // const [costPerPerson,setCostPerPerson] = useState(0);
  var pricePerPerson;
  const [costPerPerson,setCostPerPerson] = useState();
  var birdieType="Feather";

  var user_type = 2;

  if (grouplimit < 0) {
    setGroupLimit(0);
  }

  const getCourtInfo = async () => {
    const selectedCourts = await AsyncStorage.getItem("selectedCourts");
    setSelectedCourts(selectedCourts);
  };
  

  // console.log("final params",gsObj);
  //retrive the startTime data from Page-select-time
  const getChosenDate = async () => {
    const chosenDate = await AsyncStorage.getItem("chosenDate");
    setChosenDate(chosenDate);
  };
  

  useEffect(()=>{
    getCourtInfo();
    getChosenDate();
  }, [])
  // retrive the hrsplay from async
  // const getHrsPlay = async () => {
  //   const hrsPlay = await AsyncStorage.getItem("hrsPlay");
  //   setHrsPlay(hrsPlay);
  // };
  // getHrsPlay();

  // console.log(chosenDate)
  // console.log("start_time",props.navigation.state.params.group_info.start_time);

  // Creating a group
  const CreateGroup = async () => {

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
    console.log("price",costPerPerson);
    const userId = await AsyncStorage.getItem('userId');
    
    var obj = {
      key: "groups_create",
      data: {
        organizer_id: userId,
        booking_date: chosenDate,
        price: totalPrice,
        description: desc,
        badminton_centre_id: centreId,
        image: centreImage,
        birdie_type: birdieType,
        start_time: start_time,
        end_time: end_time,
        cost_per_person: costPerPerson,
        member_limit: grouplimit,
        courts_selected: selectedCourts
      }
    };
    var r = await axios.post(url, obj);
    console.log("create", r.data);

    var dbgroup = JSON.parse(r.data.body);
    var groupData = dbgroup.data[0];

    console.log(groupData);
    console.log(groupData.id);

    CreateGroupUsers(groupData.id);
  };

  const CreateGroupUsers = async (props) => {

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
        group_id:props
      }
    };
    var r = await axios.post(url, obj);
    console.log("create", r.data);
  };


  return (
    <View style={styles.gsStructure}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <LoadingAnimation setShowPopup={setModalVisible} />
      </Modal>

      <Modal animationType="fade" transparent={true} visible={textInputVisible}>
        <TextInput_popup
          setShowPopup={setTextInputVisible}
          setText={setDesc}
          // desc={desc}
        />
      </Modal>
      {/* Group Summary Header */}
      <Header_blue_red
        headerTitle={"Group Summary"}
        courtName={"Your Group Details"}
      />
      <View
        style={[
          styles.gsTextSec,
          { width: "100%", height: 660, marginTop: 30 }
        ]}
      >
        <ScrollView>
          {/* All group information text */}
          <View
            style={{
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Price/Person</Text>
              <Text
                style={{
                  fontFamily: "Open sans",
                  fontSize: 20,
                  color: "#4B4B4B",
                  paddingRight: 10
                }}
              >
                $
              </Text>
              <TextInput
                style={styles.gsText}
                keyboardType={"number-pad"}
                placeholder={"8.00"}
                maxLength={4}
                onChangeText={(t) => {
                  setCostPerPerson(t);
                  // setCostPerPerson(t);
                }}
              >
                {/* {prop.pricePerPerson} */}
              </TextInput>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Description</Text>
              <TouchableOpacity
                onPress={() => {
                  setTextInputVisible(!textInputVisible);
                }}
                style={{ flex: 1 }}
              >
                <Text style={styles.gsText} numberOfLines={1}>{desc}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Date Time</Text>
              <Text style={styles.gsText}>{chosenDate}</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Duration</Text>
              <Text style={styles.gsText}>{hrsPlay} hour(s)</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Centre</Text>
              <Text style={styles.gsText}>{centreName}</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Location</Text>
              <Text style={styles.gsText}>
                {centreLocation}
              </Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Group Limit</Text>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setGroupLimit(grouplimit - 1);
                  }}
                >
                  <Image
                    style={styles.minusImg}
                    source={require("../assets/but_minus.png")}
                  />
                </TouchableOpacity>
                {/* Group limit text */}
                <View>
                  <Text>{grouplimit}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setGroupLimit(grouplimit + 1);
                  }}
                >
                  <Image
                    style={styles.addImg}
                    source={require("../assets/but_add.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Courts</Text>
              <Text style={styles.gsText}>{selectedCourts}</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Type of Birdie</Text>
              <SwitchSelector
                borderColor="#ffffff"
                style={[styles.gsSwitch, { flex: 1 }]}
                initial={0}
                // onPress={value => this.setState({ gender: value })}
                onPress={(value)=>{
                  // setBirdieType(value);
                  // console.log(birdieType);
                  birdieType = value;
                  console.log(birdieType);
                }}
                textColor="#094E76" //'#7a44cf'
                selectedColor="white"
                buttonColor="#5DB9F0"
                // borderColor='#5DB9F0'
                hasPadding
                options={[
                  {
                    label: "Feather",
                    value: "Feather"
                  },
                  {
                    label: "Birdie",
                    value: "Birdie"
                  }
                ]}
              />
            </View>
            {/* <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Group Frequency</Text>
              <SwitchSelector
                borderColor="#ffffff"
                style={[styles.gsSwitch, { flex: 1 }]}
                initial={0}
                // onPress={value => this.setState({ gender: value })}
                textColor="#094E76" //'#7a44cf'
                selectedColor="white"
                buttonColor="#5DB9F0"
                // borderColor='#5DB9F0'
                hasPadding
                options={[
                  {
                    label: "Weekly",
                    value: "Weekly"
                  },
                  {
                    label: "Once",
                    value: "Once"
                  }
                ]}
              />
            </View> */}
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Price in Total</Text>
              <Text style={styles.gsPriceText}>${totalPrice}</Text>
            </View>

            {/* Post Button */}
            <TouchableOpacity
              style={styles.postBut}
              onPress={() => {
                // if(priceInputValue == " "){
                //   alert('tY')
                // }
                CreateGroup();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.postButText}>POST</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  //*gs means 'group summary'

  //Structure for the group summary page
  gsStructure: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#ffffff"
  },

  //Information Section
  gsTextSec: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#DAD",
    marginTop: 10,
    alignItems: "center"
  },
  //Left side title text
  gsTitleText: {
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 18,
    color: "#3C3C3C",
    flex: 1,
    alignItems: "flex-end"
  },
  //Inputted Text
  gsText: {
    fontFamily: "Open sans",
    fontSize: 18,
    color: "#4B4B4B",
    flex: 1
    // flex:4
  },
  //Price total text
  gsPriceText: {
    fontFamily: "Open sans",
    fontSize: 24,
    fontWeight: "bold",
    color: "#EB5757",
    lineHeight: 33,
    marginBottom: 11.1
    // marginTop:
  },
  //Add button image
  minusImg: {
    width: 30,
    height: 30,
    marginRight: 21
  },
  //Minus button image
  addImg: {
    width: 30,
    height: 30,
    marginLeft: 21
  },
  //Switches
  gsSwitch: {
    width: 172,
    height: 30,
    fontFamily: "Open sans",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    marginBottom: 21,
    shadowOffset: { x: 0, y: 4 },
    shadowColor: "#000000",
    shadowOpacity: 0.07,
    shadowRadius: 4
  },
  //Description text input
  descInput: {
    width: "86%",
    height: 126,
    borderRadius: 6,
    backgroundColor: "#F7F7F7",
    marginTop: -25,
    marginBottom: 39,
    textAlignVertical: "top"
    //   display:'flex'
  },

  priceInput: {
    width: 80,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    marginTop: 7,
    marginLeft: 8,
    marginBottom: 39
  },
  //Post button
  postBut: {
    width: 312,
    height: 56,
    backgroundColor: "#4FF081",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 39
  },
  //Post button text
  postButText: {
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  timeCard: {
    width: "95%",
    height: 90,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowOffset: { x: 0, y: 3 },
    shadowColor: "#000000",
    shadowRadius: 5,
    shadowOpacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
    bottom: "2%"
  },
  card: {
    width: "95%",
    height: 70,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowOffset: { x: 0, y: 3 },
    shadowColor: "#000000",
    shadowRadius: 5,
    shadowOpacity: 0.1,
    justifyContent: "center",
    alignItems: "center"
    // marginBottom: "3%"
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 30
  }
});

export default GroupSummary;
