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
import { Actions } from "react-native-router-flux";
import Select_court_popup from "../comps/Select_court_popup";

import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";
// import console = require("console");

const courts = [10, 1, 11, 2, 12, 3, 13, 4, 14, 5, 15, 6, 16, 7, 17, 8, 18, 9];

function SelectCourts(props) {
  console.log("params2",props.navigation.state.params);
  // console.log("params3",props.navigation.state.params.group_info.hrsplay);
  const [crts, setCrts] = useState([]);

  var cComp = courts.map(o => {
    return <Courts setCrts={setCrts} crts={crts} courtNum={o} />;
  });
  var vComp = [];
  for (var i = 0; i < cComp.length; i += 2) {
    vComp.push(
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {cComp[i]}
        {cComp[i + 1]}
      </View>
    );
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [hamMenuVisible, setHamMenuVisible] = useState(false);


  //Gets the amount of hours they have chosen to play
  const giObjCost = props.navigation.state.params.group_info.centreCost;

  return (
    <View>
      {/* Ham Menu */}
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
      
      {/* Popup */}
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={modalVisible}
        style={{ margin: 0 }}
      >
        <Select_court_popup setShowPopup={setModalVisible} />
      </Modal>
      <View>
        <Header_blue_red
          headerTitle="Choose courts"
          subTitle="Your selected court(s) "
          courtNum={crts.length}
          // -------------------------
          showHamMenu={setHamMenuVisible}
        />
        <View style={styles.courtView}>
          <ScrollView style={{ flex: 1 }}>{vComp}</ScrollView>
        </View>
      </View>
      {/* <Courts_layout_red_bar/> */}
      <Footer_court_indicator
        setShowPopup={setModalVisible}
        centrePrice={giObjCost}
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
    backgroundColor: "#FFFFFF"
  }
});

export default SelectCourts;
