import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Courts(props) {
  const [changeCourt, setChangeCourt] = useState(true);

  return (
    <View>
      {//do the first one if true, or else do the second one
      changeCourt == true ? (
        <TouchableOpacity onPress={() => setChangeCourt(!changeCourt)}>
          <Image
            source={require("../assets/icon_court_blue.png")}
            style={{ width: 122, height: 79, margin: 30 }}
          />
          <Text style={{ left: 88, marginTop: -20 }}>{props.courtNum}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setChangeCourt(!changeCourt)}>
          <Image
            source={require("../assets/icon_court_green.png")}
            style={{ width: 122, height: 79, margin: 30 }}
          />
          <Text style={{ left: 88, marginTop: -20 }}>{props.courtNum}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Courts;
