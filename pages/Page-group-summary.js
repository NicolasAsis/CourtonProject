import React,{useState} from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import Header_blue_red from "../comps/Header_blue_red";

function GroupSummary() {
  const [grouplimit,setGroupLimit] = useState(0);

  if(grouplimit < 0){
      setGroupLimit(0);
  }
  return (
    <View style={styles.gsStructure}>
      {/* Group Summary Header */}
      <Header_blue_red
        headerTitle={"Group Summary"}
        courtName={"Your Booking Details"}
      />
      <View style={styles.gsTextSec}>
        <ScrollView>
          {/* All group information text */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            
            {/* Left side text */}
            <View style={{ flex: 2 }}>
              <Text style={styles.gsTitleText}>Date</Text>
              <Text style={styles.gsTitleText}>Centre</Text>
              <Text style={styles.gsTitleText}>Location</Text>
              <Text style={styles.gsTitleText}>Time</Text>
              <Text style={styles.gsTitleText}>Group Limit</Text>
              <Text style={styles.gsTitleText}>Courts</Text>
              <Text style={styles.gsTitleText}>Type of Bird</Text>
              <Text style={styles.gsTitleText}>Group Frequency</Text>
              <Text style={styles.gsTitleText}>Price in Total</Text>
              <Text style={styles.gsTitleText}>Description</Text>
            </View>

            {/* Right side text */}
            <View style={{ flex: 3 }}>
              <Text style={styles.gsText}>Sat 30 December</Text>
              <Text style={styles.gsText}>Stage 18</Text>
              <Text style={styles.gsText}>4351 No 3 Rd #100, Richmond</Text>
              <Text style={styles.gsText}>9am - 1pm </Text>

              {/* Add or subtract number of group members */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity 
                onPress={() => { 
                    setGroupLimit(grouplimit-1);
                }} 
                >
                  <Image
                    style={styles.minusImg}
                    source={require("../assets/but_minus.png")}
                  />
                </TouchableOpacity>
                {/* Group limit text */}
                <Text style={styles.gsText}>{grouplimit}</Text>
                <TouchableOpacity
                onPress={() => { 
                    setGroupLimit(grouplimit+1);
                }} 
                >
                  <Image
                    style={styles.addImg}
                    source={require("../assets/but_add.png")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.gsText}>7, 8</Text>
              <Text style={styles.gsText}>Switch</Text>
              <Text style={styles.gsText}>Switch</Text>
              <Text style={styles.gsPriceText}>$176</Text>
            </View>
          </View>

          {/* Description text input */}
          <TextInput
            style={styles.descInput}
            placeholder="Type a group description..."
            multiline
            
          />

          {/* Post Button */}
          <TouchableOpacity style={styles.postBut}>
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
    height: "100%"
  },
  //Line Separator
  lineSep: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.3,
    marginBottom: 16
  },
  //Second Line Separator
  lineSep2: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 0.3,
    marginBottom: 16,
    width: 205
  },
  //Information Section
  gsTextSec: {
    width: "100%",
    height: 600,
    // backgroundColor: "#DAD",
    marginTop: 10,
    left: 25
  },
  //Left side title text
  gsTitleText: {
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 15,
    color: "#3C3C3C",
    lineHeight: 20,
    marginBottom: 32
  },
  //Inputted Text
  gsText: {
    fontFamily: "Open sans",
    fontSize: 13,
    color: "#4B4B4B",
    lineHeight: 20,
    marginBottom: 32
  },
  //Price total text
  gsPriceText: {
    fontFamily: "Open sans",
    fontSize: 24,
    fontWeight: "bold",
    color: "#EB5757",
    lineHeight: 33,
    marginBottom: 11.1,
    marginTop: -8
  },
  //Add button image
  minusImg:{
    width:19,
    height:19,
    marginRight:21
  },
  //Minus button image
  addImg:{
    width:19,
    height:19,
    marginLeft:21
  },
  //Description text input
  descInput: {
    width: 312,
    height: 126,
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
    marginTop: -5,
    marginBottom: 39,
    textAlignVertical:'top'
    //   display:'flex'
  },
  //Post button
  postBut: {
    width: 312,
    height: 56,
    backgroundColor: "#4FF081",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 7,
    marginBottom: 39
  },
  //Post button text
  postButText: {
    fontFamily: "Open sans",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});

export default GroupSummary;
