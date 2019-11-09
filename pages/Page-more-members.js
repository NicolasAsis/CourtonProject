import React from "react";
import { View, Text } from "react-native";
import Header_blue from "../comps/Header_blue";
import Card_members from "../comps/Card_members";
import { ScrollView } from "react-native-gesture-handler";

function MoreMembers() {
  return (
    <View>
      <Header_blue headerTitle={"Members"} />
      <View style={{ top: 20 }}>
        <ScrollView style={{ width: "100%", height: 700 }}>
          <View style={{ alignItems: "flex-start", marginLeft: 23 }}>
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
            <Card_members />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MoreMembers;
