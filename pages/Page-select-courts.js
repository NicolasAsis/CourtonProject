import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import Header_blue_red from "../comps/Header_blue_red";
import Footer_court_indicator from "../comps/Footer_court_indicator";
import Courts from "../comps/Courts";
import {Actions} from 'react-native-router-flux';

const courts = [10,1,11,2,12,3,13,4,14,5,15,6,16,7,17,8,18,9];
function SelectCourts() {

  const [crts, setCrts] = useState([]);
  
  var cComp = courts.map((o,i)=>{
    return <Courts setCrts={setCrts} crts={crts} courtNum={o} />;
  });

  var vComp = [];
  for(var i = 0; i<cComp.length; i+=2){
    vComp.push(
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {cComp[i]}
        {cComp[i+1]}
      </View>
    )
  }

  return (
    <View>
      <View>
        <Header_blue_red
          headerTitle="Choose courts"
          courtName="Your selected court(s) "
          courtNum={crts.length}
        />

        <View style={styles.courtView}>
          <ScrollView style={{ flex: 1 }}>
            {vComp}
          </ScrollView>
        </View>
      </View>
      {/* <Courts_layout_red_bar/> */}
      <Footer_court_indicator txtPrice="22" />
    </View>

  );
}
const styles = StyleSheet.create({
  courtView: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: 524,
    marginTop: 140,
    backgroundColor:'#FFFFFF'
  }
});

export default SelectCourts;
