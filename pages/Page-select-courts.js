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

      <View style={styles.footer}>
        <View style={{ flexDirection: "row", marginTop: 24 }}>
          <View style={styles.indicators}>
            <View style={styles.availableIndicator}></View>
            <Text style={styles.txtIndicator}>Available</Text>
          </View>
          <View style={styles.indicators}>
            <View style={styles.bookedIndicator}></View>
            <Text style={styles.txtIndicator}>Booked</Text>
          </View>
          <View style={styles.indicators}>
            <View style={styles.selectedIndicator}></View>
            <Text style={styles.txtIndicator}>Selected</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 23
          }}
        >
          <View style={styles.butBg}>
            <Text style={styles.price}>${giObjCost}/Hour</Text>
            <TouchableOpacity
              style={styles.butOk}
              onPress={() => {
                if (crts.length == 0) {
                  {
                    setModalVisible(true);
                    // alert('Select a court')
                  }
                } else {
                  Actions.GroupSummary();
                }
                // alert('select a court')
              }}
            >
              <Text style={styles.txtOk}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  },
  footer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 148,
    left: 0,
    bottom: 0,
    right: 0,
    top: 525
    // position: "absolute"
  },
  indicators: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  availableIndicator: {
    width: 20,
    height: 20,
    backgroundColor: "#5DB9F0",
    borderRadius: 20
  },
  bookedIndicator: {
    width: 20,
    height: 20,
    backgroundColor: "#BFBFBF",
    borderRadius: 20
  },
  selectedIndicator: {
    width: 20,
    height: 20,
    backgroundColor: "#4FF081",
    borderRadius: 20
  },
  txtIndicator: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#4A4A4A",
    marginTop: 2,
    left: 3
  },
  butBg: {
    width: 311,
    height: 38,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: { x: 2, y: 3 },
    shadowRadius: 7,
    shadowOpacity: 0.07,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  price: {
    color: "#FE647B",
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 16,
    left: 32,
    flex: 1
  },
  butOk: {
    width: 165,
    height: 38,
    backgroundColor: "#4FF081",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  txtOk: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Open sans",
    fontSize: 20
  }
});

export default SelectCourts;
