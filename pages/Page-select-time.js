import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header_blue_red from "../comps/Header_blue_red";
import SwitchSelector from "react-native-switch-selector";
import DateTimePicker from "react-native-modal-datetime-picker";
import Button_Ok from "../comps/Button_Ok";
import moment from "moment";

import { Actions } from "react-native-router-flux";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";

// import Moment from 'react-moment';
// import {Moment} from 'react-moment';

function SelectTime({navigation}) {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  // const [showDateTimePicker, setShowDateTimePicker] = useState(true);
  // const [hideDateTimePicker, setHideDateTimePicker] = useState(true);
  // const [handleDatePicked, setHandleDatePicked] = useState(true);
  console.log("params",navigation.state.params);
  const [time, setTime] = useState();

  const [chosenDate, setChosenDate] = useState(" ");
  const [chosenDate2, setChosenDate2] = useState(" ");

  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  function showDateTimePicker() {
    setIsDateTimePickerVisible(true);
  }

  function showDateTimePicker2() {
    setIsDateTimePickerVisible(true);
  }

  function hideDateTimePicker() {
    setIsDateTimePickerVisible(false);
  }

  function handleDatePicked(date) {
    console.log("A date has been picked: ", date);
    // startDate = moment(date).format('lll');
    
    if (time == "START") {
      setChosenDate(date);
    } else if (time == "END") {
      setChosenDate2(date);
    }
    hideDateTimePicker();
  }

  // var hrsPlay = {chosenDate} - {chosenDate2};
  console.log((Date.parse(chosenDate2)-Date.parse(chosenDate))/1000/60/60);
  return (
    <View style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
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
        style={{ margin: 0 }}
      >
        <HamMenu showHamMenu={setHamMenuVisible} />
      </Modal>

      <Header_blue_red headerTitle={"Choose a time"} courtName={"Stage 18"} showHamMenu = {setHamMenuVisible} />
      {/* <TouchableOpacity
        onPress={()=>{
          showDateTimePicker()
        }}
      >
        <Text>Hi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          showDateTimePicker()
        }}
      >
        <Text>Bye</Text>
      </TouchableOpacity> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}></View>
        <View style={{ paddingTop: 50, width: 300 }}>
          <SwitchSelector
            style={styles.gsSwitch}
            initial={0}
            // onPress={value => this.setState({ gender: value })}
            textColor="#094E76" //'#7a44cf'
            selectedColor="white"
            buttonColor="#5DB9F0"
            // borderColor='#5DB9F0'
            hasPadding
            options={[
              {
                label: "START",
                value: "START"
              },
              {
                label: "END",
                value: "END"
              }
            ]}
            onPress={val => {
              if (val == "START") {
                showDateTimePicker();
                setTime("START");
                // alert(val);
              } else if (val == "END") {
                showDateTimePicker();
                setTime("END");
                // alert(val);
              }
            }}
          />
          <View>
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
              mode="datetime"
              titleIOS="Pick date and time"
            />
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={styles.divider}></View>
        </View>
        <View
          style={{
            paddingTop: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: 50
            }}
          >
            <Text style={styles.txtLeft}>FROM </Text>
            <Text style={styles.txtLeft}>TO</Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <Text style={styles.txtRight}>{moment(chosenDate).format("lll") || ""}</Text>
            <Text style={styles.txtRight}>{moment(chosenDate2).format("lll") || ""}</Text>
          </View>
        </View>

        {/* OK btn */}
        <Button_Ok 
          hrsPlay={Math.round((Date.parse(chosenDate2)-Date.parse(chosenDate))/1000/60/60)} 
          startTime={Math.round((Date.parse(chosenDate))/1000/60/60)} 
          endTime={Math.round((Date.parse(chosenDate2))/1000/60/60)}
          navigation={navigation.state.params}
        />
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtTime: {
    fontFamily: "Open sans",
    fontSize: 14,
    paddingTop: 30,
    color: "#3D3D3D"
  },
  divider: {
    width: 300,
    height: 1,
    backgroundColor: "#d3d3d3"
  },
  txtLeft: {
    fontFamily: "Open sans",
    fontSize: 18,
    color: "#094E76",
    fontWeight: "500"
  },
  txtRight: {
    fontFamily: "Open sans",
    fontSize: 18,
    color: "#909090"
  }
});

export default SelectTime;
