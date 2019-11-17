import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Card_recent(props) {
  return (
    <View>
      <TouchableOpacity style={styles.CardParents}>
        <View
          style={[
            styles.verIndicator,
            (style = { backgroundColor: props.verIndicatorColor })
          ]}
        ></View>
        <View style={{ flexDirection: "column", left:'7%', top:'15%'}}>
          <View>
            <Text style={styles.txtbmtCentre}>
              {props.bmtCentre}
            </Text>
            <Text style={styles.txtgroupNum}>
            Group#{props.groupNum}
            </Text>
          </View>
          <View style={{ flexDirection: "row", left:'5%' }}>
            <Text style={styles.txtBmtCentreTime}>
              {props.bmtCentreTime}{" "}
            </Text>
            <Text style={styles.txtBmtCentrePostTime}>
              {props.bmtCentrePostTime}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CardParents: {
    width: 320,
    height: 84,
    backgroundColor: "#FFFFFF",
    marginBottom: 17,
    borderRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 3 },
    shadowRadius: 5,
    shadowColor: "#000000"
  },
  verIndicator: {
    width: 3,
    height: 84,
    borderRadius: 5,
    position: "absolute"
  },
  txtbmtCentre: {
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C3C3C"
  },
  txtgroupNum: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#3C3C3C"
  },
  txtBmtCentreTime: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#3C3C3C"
  },
  txtBmtCentrePostTime: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#ABABAB",
    left:'500%'
  }
});

export default Card_recent;
