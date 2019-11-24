import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { bindExpression } from "@babel/types";



function Birdie(props) {
  const [changeBirdie, setChangeBirdie] = useState(true);
 if(changeBirdie===false){
//   console.log("birdie" + props.birdieNum)
 } 
  return (
    
    <View>
      {//do the first one if true, or else do the second one
      changeBirdie == true ? (
        <TouchableOpacity onPress={() => {
          var temp = props.brd;
          temp.push(props.birdieNum);
          temp = temp.map((o)=>{
            return o;
          })
          props.setbrd(temp);
          setChangeBirdie(!changeBirdie);
          // console.log(temp)
        }}>
          <Image
            source={require("../assets/img_birdie_deselect.png")}
            style={{ width: 60, height: 60, margin: 30 }}
          />
          
          <Text style={{ left: 0, marginTop: -20 }}></Text>
          
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => {
          var temp = props.brd;
          temp.splice(temp.length-1);
          temp = temp.map((o)=>{
            return o;
          })
          props.setbrd(temp);
          setChangeBirdie(!changeBirdie)
          }}>
          <Image
            source={require("../assets/img_birdie_selected.png")}
            style={{ width: 60, height: 60, margin: 30 }}
          />
          <Text style={{ left: 88, marginTop: -20 }}></Text>
        </TouchableOpacity>
      )}
      
    </View>
  );
}

export default Birdie;
