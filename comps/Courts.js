import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Courts(props) {
  const [changeCourt, setChangeCourt] = useState(true);
 if(changeCourt===false){
  console.log(props.courtNum)
 } else{
   console.log('')
 }
  return (
    <View>
      {//do the first one if true, or else do the second one
      changeCourt == true ? (
        <TouchableOpacity onPress={() => {
          var temp = props.crts;
          temp.push(props.courtNum);
          temp = temp.map((o)=>{
            return o;
          })
          props.setCrts(temp);
          setChangeCourt(!changeCourt)
        }}>
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
