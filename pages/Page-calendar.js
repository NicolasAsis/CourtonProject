import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Calendar} from "react-native-calender";

function Page_Calendar() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.butBack}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.txtTitle}>Choose a day</Text>

        <TouchableOpacity style={{ width: 0, height: 0 }}>
          <Image
            style={styles.butHam}
            source={require("../assets/but_ham.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.courtIndicatedBar}>
        <Text style={styles.txtBmtCentre}>Clear One</Text>
      </View>
      <View>
          
      </View>
      <TouchableOpacity>
        <View style={styles.butNext}>
          <Text style={styles.txtNext}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#094E76"
  },
  butBack: {
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
    left: 119,
    top: 27
  },
  butHam: {
    width: 35,
    height: 23,
    left: 315,
    top: 2
  },
  courtIndicatedBar: {
    backgroundColor: "#FE647B",
    width: "100%",
    height: 39,
    alignItems: "center",
    justifyContent: "center"
  },
  txtBmtCentre: {
    color: "#FFFFFF",
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "400"
  },
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
    color: "#094E76"
  }
});

export default Page_Calendar;
