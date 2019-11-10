import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calender";
import Header_blue_red from '../comps/Header_blue_red';

import {Actions} from 'react-native-router-flux';

function Page_Calendar() {
  return (
    <View>
      <Header_blue_red
      headerTitle='Choose a day'
      courtName='Stage 18'
      />
      
      <TouchableOpacity
        onPress={()=>{
          Actions.SelectCourts()
        }}
        style={styles.butNext}
      >
        <View>
          <Text style={styles.txtNext}>Next</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Calendar></Calendar>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  butNext: {
    width: 311,
    height: 56,
    backgroundColor: "#4FF081",
    borderRadius: 100,
    left: 32,
    top: 580,
    shadowOffset: { x: 2, y: 3 },
    shadowOpacity: 0.09,
    shadowColor: "#000000",
    shadowRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  txtNext: {
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff"
  }
});

export default Page_Calendar;
