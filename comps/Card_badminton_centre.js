import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";
import Reminder_bmt_popup from "../comps/Reminder_bmt_popup";

import { Actions } from "react-native-router-flux";

function Card_badminton_centre(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      {/* <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Reminder_bmt_popup setShowPopup={setModalVisible} />
      </Modal> */}

      {/* <View style={{marginBottom:180}}> */}
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          Actions.SelectTime({
            group_info: {
              centreName: props.badmintonCentreName,
              centreLocation: props.badmintonCentreLocation,
              centreImage: props.badmintonCentreImg
            }
          });
          // console.log(props.badmintonCentreImg)
          //  setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{ uri: props.badmintonCentreImg }}
          />
        </View>

        <Text style={styles.txtLocationName}>{props.badmintonCentreName}</Text>
        <Image
          style={styles.imgLocation}
          source={require("../assets/icon_location_white.png")}
        />
        <Text style={styles.txtLocation}>{props.badmintonCentreLocation}</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17
  },
  card: {
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#808080",
    shadowOpacity: 0.7,
    borderRadius: 10
    // position: "absolute"
  },
  img: {
    borderRadius: 6,
    width: 359,
    height: 168
  },
  txtLocationName: {
    fontFamily: "Open sans",
    fontSize: 34,
    fontWeight: "bold",
    left: 23,
    top: 93,
    color: "#FFFFFF",
    position: "absolute"
  },
  imgLocation: {
    width: 10,
    height: 14,
    top: 139,
    left: 23,
    position: "absolute"
  },
  txtLocation: {
    color: "#FFFFFF",
    left: 40,
    top: 139,
    fontSize: 10,
    fontFamily: "Open sans",
    position: "absolute"
  }
});
export default Card_badminton_centre;
