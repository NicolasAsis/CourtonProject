import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image, Alert } from "react-native";
// import { Rating, AirbnbRating } from "react-native-ratings";
import { Actions } from "react-native-router-flux";
import Birdie from '../comps/Birdie'



const birdies = [1,2,3];

function SkillLevel(props) {
  // const [slTxt, setSlTxt] = useState('');
  const [brd, setbrd] = useState([]);
  var cComp = birdies.map(o => {
    return <Birdie setbrd={setbrd} brd={brd} birdieNum={o} />;
  });
  var vComp = [];
  for (var i = 0; i < cComp.length; i ++) {
    vComp.push(
      <View>
        {cComp[i]}
      </View>
    );
  }
// console.log(vComp)
// if(brd.length == 1 ){
//   slTxt="beginer"
// };
console.log(brd.length)
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>What is your skill level?</Text>
      {/* <AirbnbRating
        count={3}
        reviews={[
          "Beginner",
          "Intermediate",
          "Professional",
        ]}
        defaultRating={3}
        size={50}
        showRating
      /> */}
      <View
        style={{
          flexDirection:'row'
        }}
      >
      {vComp}
      </View>
      <Text style={styles.sklNum}>{brd.length}</Text>
      <View>
      <Text style={[styles.sklText, {marginTop:70}]}>
        1: Beginner
      </Text>
      <Text style={styles.sklText}>
        2: Intermediate
      </Text>
      <Text style={styles.sklText}>
        3: Advanced
      </Text>
      </View>
      {/* <Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
      /> */}
    <TouchableOpacity
    style={{
        width:230,
        height:40,
        borderRadius:40,
        backgroundColor:'#FE647B',
        justifyContent:'center',
        alignItems:'center',
        top:'18%'

    }}
    onPress={()=>{
        if (brd.length==0) {
          Alert.alert('Skill Level','Please select your skill level')
        } else{
          Actions.Welcome()
        }
    }}
    >
        <Text
        style={{
            fontFamily:'Open sans',
            fontWeight:'bold',
            fontSize:20,
            color:'#ffffff'
        }}
        >Ok</Text>
    </TouchableOpacity>
    </View>
  );
}
// console.log(AirbnbRating.reviews)
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Open sans",
    fontSize: 26,
    color: "#094E76",
    fontWeight: "bold",
    top: "-10%",
  },
  sklNum:{
    fontSize:30,
    fontWeight:'bold',
    fontFamily:'Open sans',
    color:'#5DB9F0',
    bottom:30,
    top:16
  },
  sklText:{
    fontSize:18,
    fontFamily:'Open sans',
    color:'#094E76',
    marginBottom:20
  }
});
export default SkillLevel;
