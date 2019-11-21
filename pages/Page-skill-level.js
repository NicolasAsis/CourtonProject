import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Actions } from "react-native-router-flux";

function SkillLevel() {
    // ratingCompleted(rating);{
    //     console.log("Rating is: " + rating);
    // }
// const[ratingCompleted, setRatingCompleted] = useState(
//     function ratingCompleted(rating) {
//         console.log("Rating is: " + rating)
//       }
// )
//   const birdieIcon = require("../assets/img_birdie_white.png");



  return (
    <View style={styles.bg}>
      <Text style={styles.title}>What is your skill level?</Text>
      <AirbnbRating
        count={3}
        reviews={[
          "Beginner",
          "Intermediate",
          "Professional",
        ]}
        defaultRating={3}
        size={50}
      />
      
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
        top:'30%'

    }}
    onPress={()=>{
        Actions.Welcome()
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
    top: "-10%"
  }
});
export default SkillLevel;
