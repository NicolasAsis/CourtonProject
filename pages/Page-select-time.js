import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header_blue_red from "../comps/Header_blue_red";
import SwitchSelector from "react-native-switch-selector";
import DateTimePicker from "react-native-modal-datetime-picker";
import Button_Ok from "../comps/Button_Ok";

function SelectTime() {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(true);
  const [hideDateTimePicker, setHideDateTimePicker] = useState(true);
  const [handleDatePicked, setHandleDatePicked] = useState(true);

  //   showDateTimePicker = () => {
  //     this.setState({ isDateTimePickerVisible: true });
  //   };

  //   hideDateTimePicker = () => {
  //     this.setState({ isDateTimePickerVisible: false });
  //   };

  //   handleDatePicked = date => {
  //     console.log("A date has been picked: ", date);
  //     this.hideDateTimePicker();
  //   };

  return (
    <View>
      <Header_blue_red headerTitle={"Choose a time"} courtName={"Stage 18"} />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={styles.txtTime}>
            <Text>Sat 23rd Dec 2019</Text>
          </TouchableOpacity>
        </View>
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
          />
          <View>
            <DateTimePicker
              isVisible={setIsDateTimePickerVisible}
            //   onConfirm={setHandleDatePicked}
              onCancel={setHideDateTimePicker}
              mode='time'
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
            <Text style={styles.txtRight}>7:00</Text>
            <Text style={styles.txtRight}>10:00</Text>
          </View>
        </View>

        {/* OK btn */}
        <Button_Ok />
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
