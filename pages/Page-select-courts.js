import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet
} from "react-native";
import Header_blue_red from "../comps/Header_blue_red";
import Footer_court_indicator from "../comps/Footer_court_indicator";
import Courts from "../comps/Courts";
import {Actions} from 'react-native-router-flux';
import Select_court_popup from "../comps/Select_court_popup";

const courts = [10,1,11,2,12,3,13,4,14,5,15,6,16,7,17,8,18,9];


function SelectCourts(props) {
const [crts, setCrts] = useState([]);


  
  var cComp = courts.map((o)=>{
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
 
  const [modalVisible,setModalVisible] = useState(false);
  return (
    <View>
      <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <Select_court_popup
            setShowPopup = {setModalVisible}
          />
        </Modal>
      <View>
        <Header_blue_red
          headerTitle="Choose courts"
          subTitle="Your selected court(s) "
          courtNum={crts.length} 
          // -------------------------
        />
        <View style={styles.courtView}>
          <ScrollView style={{ flex: 1 }}>
            {vComp}
          </ScrollView>
        </View>
      </View>
      {/* <Courts_layout_red_bar/> */}
      <Footer_court_indicator 
      setShowPopup={setModalVisible}
      txtPrice="22" 
      checkCourtValue={crts.length}
      />
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
