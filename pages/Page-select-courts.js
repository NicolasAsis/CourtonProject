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

function SelectCourts() {
  return (
    <View>
      <View>
        <Header_blue_red
          headerTitle="Choose courts"
          courtName="Your selected court                                            "
        />

        <View style={styles.courtView}>
          <ScrollView style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="10" />
              <Courts courtNum="1" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="11" />
              <Courts courtNum="2" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="12" />
              <Courts courtNum="3" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="13" />
              <Courts courtNum="4" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="14" />
              <Courts courtNum="5" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="15" />
              <Courts courtNum="6" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="16" />
              <Courts courtNum="7" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="17" />
              <Courts courtNum="8" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Courts courtNum="18" />
              <Courts courtNum="9" />
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer_court_indicator txtPrice="22" />
    </View>
  );
}
const styles = StyleSheet.create({
  courtView: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: 800,
    paddingTop: 140,
    paddingBottom: 148
  }
});

export default SelectCourts;
