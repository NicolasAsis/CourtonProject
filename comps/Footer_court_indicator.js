import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Footer_court_indicator(props) {
  return (
    <View>
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
            <Text style={styles.price}>${props.txtPrice}/Hour</Text>
            <TouchableOpacity style={styles.butOk}>
              <Text style={styles.txtOk}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 148,
    left: 0,
    bottom: 0,
    right: 0,
    top: 525,
    position: "absolute"
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
    height: 56,
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
    height: 56,
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

export default Footer_court_indicator;
