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
import TextInput_popup from "../comps/TextInput_popup";
// import { number } from "../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

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
      <View style={[styles.gsTextSec, {height:660, width:'100%', marginTop:30 }]}>
        <ScrollView>
          {/* All group information text */}
          <View style={{ display: "flex", flexDirection: "column"}}>
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
              >
                {props.pricePerPerson}
              </TextInput>
            </View>
            <View style={styles.rowStyle}>
              
              <Text style={styles.gsTitleText}>Description</Text>
              <TouchableOpacity 
               onPress={() => {
                setTextInputVisible(!textInputVisible);
              }}
              style={{flex:1}}
              > 
              <Text style={styles.gsText}>Click here</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Date Time</Text>
              <Text style={styles.gsText}>{props.dateTime}Sat 30 December</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Centre</Text>
              <Text style={styles.gsText}>Stage 18</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Location</Text>
              <Text style={styles.gsText}>
                {props.location} 2351 No 6 Rd #170, Richmond, BC V6V 1P3
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
                <TextInput 
                keyboardType={'number-pad'}
                style={styles.gsText}>{grouplimit}</TextInput>
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
              <Text style={styles.gsText}>{props.courtNum}7, 8</Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Type of Bird</Text>
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
            <View style={styles.rowStyle}>
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
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.gsTitleText}>Price in Total</Text>
              <Text style={styles.gsPriceText}>{props.totalPrice}$176</Text>
            </View>
          </View>

          {/* Post Button */}
          <TouchableOpacity 
          onPress={() => {
            // if(priceInputValue == " "){
            //   alert('tY')
            // }
            setModalVisible(!modalVisible);
          }}
          style={styles.postBut}>
            <Text style={styles.postButText}>POST</Text>
          </TouchableOpacity>
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
    marginBottom: 11.1,
    flex: 1
    // marginTop:
  },
  //Add button image
  minusImg: {
    width: 20,
    height: 20,
    marginRight: 45
  },
  //Minus button image
  addImg: {
    width: 20,
    height: 20
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
    height: 50,
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
