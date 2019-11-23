import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { StyleSheet } from "react-native";
import Header_blue_red from "../comps/Header_blue_red";

import SwitchSelector from "react-native-switch-selector";

import { Actions } from "react-native-router-flux";
import LoadingAnimation from "../comps/LoadingAnimation";
import TextInput_popup from '../comps/TextInput_popup'

function GroupSummary(props) {
  const [grouplimit, setGroupLimit] = useState(0);

  if (grouplimit < 0) {
    setGroupLimit(0);
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [textInputVisible, setTextInputVisible] = useState(false);
  return (
    <View style={styles.gsStructure}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <LoadingAnimation setShowPopup={setModalVisible} />
      </Modal>

      <Modal animationType="fade" transparent={true} visible={textInputVisible}>
        <TextInput_popup 
        setShowPopup={setTextInputVisible} 
        // desc={desc}
        />
      </Modal>
      {/* Group Summary Header */}
      <Header_blue_red
        headerTitle={"Group Summary"}
        courtName={"Your Group Details"}
      />
      <View style={[styles.gsTextSec, { height: "100%" }]}>
        <ScrollView>
          {/* All group information text */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10%",
              paddingBottom: 100,
              height: "100%"
            }}
          >
            {/* <Text style={styles.gsTitleText}>Price for members</Text> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems:'center',
                alignItems: ""
              }}
            >
              <Text
                style={{
                  color: "#FE647B",
                  fontWeight: "bold",
                  fontFamily: "Open sans",
                  fontSize: 30,
                  // flex:1,
                  // marginLeft:'50%',
                  top:'1%'
                }}
              >
                $
              </Text>
              <TextInput
                style={[styles.priceInput, {borderRadius:50,marginRight:'5%',}]}
                maxLength={4}
                fontSize={24}
                placeholder=" 0.00"
                // multiline
                onChange={() => {
                  props.priceInputValue;
                }}
              />
              <Text style={{
                fontFamily:'Open sans',
                fontSize:26,
                top:'2%',
                color:'#3d3d3d'

              }}
              >/ Person</Text>
            </View>
            <View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Open sans",
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#3C3C3C",
                    marginBottom: "5%"
                  }}
                >
                  Description
                </Text>
                <TextInput
                  style={{
                    width: 330,
                    height: 126,
                    borderRadius: 6,
                    backgroundColor: "#F7F7F7",
                    // marginTop: -25,
                    marginBottom: 35,
                    textAlignVertical: "5%"
                  }}
                  placeholder="Type a group description..."
                  onChangeText={() => {
                    props.descInputValue;
                  }}
                  multiline
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "94%",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%"
              }}
            >
              <Text style={[styles.gsTitleText, { height: 20, flex: 1 }]}>
                Group Limit
              </Text>
              <View style={{ left:'15%',display: "flex", flexDirection: "row", flex: 1 }}>
                <TouchableOpacity

                style={{flex:1}}
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
                <TextInput style={[styles.gsText, {flex:1}]}>{grouplimit}</TextInput>
                <TouchableOpacity
                style={{
                  flex:1
                }}
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
            <TouchableOpacity
              style={styles.timeCard}
              onPress={() => {
                Actions.reset("SelectTime");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  left: "33%"
                }}
              >
                <Text style={styles.gsTitleText}>Time</Text>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 5
                  }}
                >
                  <Text style={styles.gsText}>
                    {props.startTime}Sat 30 December 9am
                  </Text>
                  <Text style={styles.gsText}></Text>
                  <Text style={styles.gsText}>
                    {props.startTime}Sat 30 December 1pm
                  </Text>
                </View>
                <View style={{ marginRight: 45 }}>
                  <Image
                    style={{ width: 13, height: 13 }}
                    source={require("../assets/icon_more.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                Actions.reset("SelectCourts");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  left: "35%"
                }}
              >
                <Text style={styles.gsTitleText}>Courts Number</Text>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 7
                  }}
                >
                  <Text style={styles.gsText}>{props.courtNum}5</Text>
                </View>
                <View style={{ marginRight: 40 }}>
                  <Image
                    style={{ width: 13, height: 13 }}
                    source={require("../assets/icon_more.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card,{marginTop:'4%'}]}
              onPress={() => {
                // Actions.reset("SelectCourts");
                // alert("fd")
                setTextInputVisible(!textInputVisible);
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:'2%',
                  left: "35%"
                }}
              >
                <Text style={styles.gsTitleText}>Description</Text>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 2
                  }}
                >
                  <Text style={styles.gsText} numberOfLines={1}>{props.desc}
                  
                  </Text>
                </View>
                <View style={{ marginRight: 40 }}>
                  <Image
                    style={{ width: 13, height: 13 }}
                    source={require("../assets/icon_more.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* location  */}
            <View
              style={{
                flexDirection: "column",
                // alignItems: "flex-start",
                left: "-15%",
                top: "4%",
                paddingBottom: "6%"
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Open sans",
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#3C3C3C",
                    alignItems: "flex-start",
                    marginBottom: "1%"
                  }}
                >
                  Location
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    alignItems: "flex-start",
                    fontFamily: "Open sans",
                    fontSize: 16,
                    color: "#4B4B4B"
                  }}
                >
                  {props.location}
                  4351 No 3 Rd #100, Richmond
                </Text>
              </View>
            </View>

            {/* Birdie Type */}

            <View
              style={{
                left: "2%",
                // right:'2%',
                top: "7%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "Open sans",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#3C3C3C",
                  // alignItems: "flex-start",
                  // paddingBottom: "2%",
                  flex: 1
                  // bottom:'5%'
                }}
              >
                Birdie Type
              </Text>
              <SwitchSelector
                style={[styles.gsSwitch, { flex: 1, right: "9%" }]}
                initial={0}
                // onPress={value => this.setState({ gender: value })}
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

            {/* Group Frequency */}
            <View
              style={{
                top: "10%",
                left: "2%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "Open sans",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#3C3C3C",
                  alignItems: "flex-start",
                  // paddingBottom: "2%"
                  // bottom:'5%'
                  flex: 1
                }}
              >
                Group Frequency
              </Text>
              <SwitchSelector
                style={[styles.gsSwitch, { flex: 1, right: "9%" }]}
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
            </View>

            {/* Total Price */}
            <View
              style={{
                flexDirection: "row",
                top: "5%",
                left: "2%",
                // alignItems: "flex-start",
                justifyContent: "center",
                alignItems: "center",
                // left: "-30%",
                // top: "1%",
                // paddingBottom: 30
                marginTop: 30,
                marginBottom: 50
              }}
            >
              <View style={{flexDirection:'column', flex:1}}>
              <Text
                style={{
                  fontFamily: "Open sans",
                  fontWeight: "bold",
                  fontSize: 16,
                  height:20,
                  left: "%",
                  color: "#3C3C3C",
                  // alignItems: "flex-start",
                  flex: 1
                }}
              >
                Price In Total
              </Text>
              <Text
                style={{
                  fontFamily: "Open sans",
                  // fontWeight: "bold",
                  fontSize: 11,
                  left: "%",
                  color: "#3d3d3d",
                  // alignItems: "flex-start",
                  flex: 1
                }}
              >
                The price for badminton centre
              </Text>
              </View>

              <Text
                style={{
                  color: "#FE647B",
                  fontWeight: "bold",
                  fontFamily: "Open sans",
                  fontSize: 30,
                  alignItems: "flex-end",
                  flex: 1,
                  left:'200%'
                }}
              >
                ${props.totalPrice}175
              </Text>
            </View>

            {/* Post Button */}
            <TouchableOpacity
              style={styles.postBut}
              onPress={() => {
                // if(priceInputValue == " "){
                //   alert('tY')
                // }
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
    marginTop: 10
  },
  //Left side title text
  gsTitleText: {
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 16,
    color: "#3C3C3C",
    flex: 2,
    alignItems: "flex-end"
  },
  //Inputted Text
  gsText: {
    fontFamily: "Open sans",
    fontSize: 16,
    color: "#4B4B4B"
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
    marginBottom: 39,
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
  }
});

export default GroupSummary;
