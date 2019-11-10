import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Card_badminton_centre from "../comps/Card_badminton_centre";

import {Actions} from 'react-native-router-flux';

function SelectLocation() {
  return (
    <View style={{backgroundColor:'#FFFFFF'}}>
      <View style={styles.header}>
        <TouchableOpacity 
          style = {styles.butBackTouchableOp}
          onPress={()=>{
            Actions.pop('Home')
        }}
        >
          <Image
            style={styles.butBack}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.txtTitle}>Choose a location</Text>

        <TouchableOpacity style={{width:0, height:0}}>
          <Image
            style={styles.butHam}
            source={require("../assets/but_ham.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1}}>
        

        
        <ScrollView style={{flex:1, paddingBottom:950, paddingTop:17}}>
        <View style={{height:1400}}>
          <Card_badminton_centre 
          badmintonCentreName={'Stage 18'}
          badmintonCentreLocation={'2351 No 6 Rd #170, Richmond, BC V6V 1P3'}
          badmintonCentreImg={require('../assets/img_stage18.png')}
          />
          <Card_badminton_centre 
          badmintonCentreName={'Clear One'}
          badmintonCentreLocation={'4351 No 3 Rd #100, Richmond, BC V6X 3A7'}
          badmintonCentreImg={require('../assets/img_c1.jpg')}
          />
          <Card_badminton_centre 
          badmintonCentreName={'Richmond Pro'}
          badmintonCentreLocation={'5800 Minoru Blvd #130, Richmond, BC V6X 2B1'}
          badmintonCentreImg={require('../assets/img_pro.jpg')}
          />
          <Card_badminton_centre 
          badmintonCentreName={'Badminton Van'}
          badmintonCentreLocation={'13100 Mitchell Road, Richmond BC, V6V 1M8'}
          badmintonCentreImg={require('../assets/img_bv.jpg')}
          />
          <Card_badminton_centre 
          badmintonCentreName={'Drive Badminton'}
          badmintonCentreLocation={'4551 No 3 Rd #138, Richmond, BC V6X 2C3'}
          badmintonCentreImg={require('../assets/img_drive.jpg')}
          />
          <Card_badminton_centre 
          badmintonCentreName={'VRC'}
          badmintonCentreLocation={'4867 Ontario St, Vancouver, BC V5V 3H4'}
          badmintonCentreImg={require('../assets/img_vrc.jpeg')}
          />
          <Card_badminton_centre />
          </View>
        </ScrollView>
        
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#094E76",
  },
  butBack: {
    width: 20,
    height: 30,
    // left: 23,
    // top: 55
  },
  butBackTouchableOp: {
    width: 20,
    height: 30,
    left: 23,
    top: 55
  },
  txtTitle: {
    color: "#FFFFFF",
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 20,
    left: 94,
    top: 27
  },
  butHam: {
    width: 35,
    height: 23,
    left:315,
    top: 2
  }
});
export default SelectLocation;
