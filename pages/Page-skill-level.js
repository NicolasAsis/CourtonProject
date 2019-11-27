import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
// import { Rating, AirbnbRating } from "react-native-ratings";
import { Actions } from "react-native-router-flux";
import Birdie from "../comps/Birdie";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const birdies = [1, 2, 3];

function SkillLevel({ navigation }) {
  const [brd, setbrd] = useState([]);
  var cComp = birdies.map(o => {
    return <Birdie setbrd={setbrd} brd={brd} birdieNum={o} />;
  });
  var vComp = [];
  for (var i = 0; i < cComp.length; i++) {
    vComp.push(<View>{cComp[i]}</View>);
  }

  //storage skill_level to the async storage as skill_level
  navigation.state.params.user_info.skill_level = brd.length;
  console.log("param user info", navigation.state.params.user_info);
  console.log("params skilllevel", navigation.state.params.user_info.skill_level);


  //assign var to whatever need to package in an object
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const skill_level = brd.length;
  // const [skill_level,setSkillLevel] = useState("")

  //retrive all the userInfo from async storage, and link it with database(column name)
  const getUserInfo = async () => {
    const first_name = await AsyncStorage.getItem("first_name");
    const last_name = await AsyncStorage.getItem("last_name");
    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    setFirstName(first_name);
    setLastName(last_name);
    setEmail(email);
    setPassword(password);
  };

  getUserInfo();


  //insert all the  data from signup page + skill level to database
  const CreateUser = async () => {
    //fetch db to create users
    console.log(
      "first name, last name, email, password, skill level",
      first_name,
      last_name,
      email,
      password,
      skill_level
    );

    var obj = {
      key: "users_create",
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        skill_level: skill_level
      }
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    console.log("create", r.data);
  };

  //store all the data from this page for future use
  const storeUserInfo = async () => {
    await AsyncStorage.setItem("firstName", first_name);
    await AsyncStorage.setItem("lastName", last_name);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("skillLevel", JSON.stringify(skill_level));
  };

  // const obj = navigation.state.params.user_info.skillLevel;
  return (
    <View style={styles.bg}>
      <Text style={styles.title}>What is your skill level?</Text>
      <TouchableOpacity
        onPress={() => {
          Actions.Signup();
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row"
        }}
      >
        {vComp}
      </View>
      <Text style={styles.sklNum}>{brd.Length}</Text>
      <View>
        <Text style={[styles.sklText, { marginTop: 70 }]}>1: Beginner</Text>
        <Text style={styles.sklText}>2: Intermediate</Text>
        <Text style={styles.sklText}>3: Advanced</Text>
      </View>
      {/* <Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
      /> */}
      <TouchableOpacity
        style={{
          width: 230,
          height: 40,
          borderRadius: 40,
          backgroundColor: "#FE647B",
          justifyContent: "center",
          alignItems: "center",
          top: "18%"
        }}
        onPress={() => {
          if (brd.length == 0) {
            Alert.alert("Skill Level", "Please select your skill level");
          } else {
            CreateUser();
            Actions.Welcome({
              user_info: {
                skl: navigation.state.params.user_info.skillLevel
              }
            });
            storeUserInfo();
          }
          // navigation={obj}
        }}
      // navigation={obj}
      >
        <Text
          style={{
            fontFamily: "Open sans",
            fontWeight: "bold",
            fontSize: 20,
            color: "#ffffff"
          }}
        >
          Ok
        </Text>
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
  },
  sklNum: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Open sans",
    color: "#5DB9F0",
    bottom: 30,
    top: 16
  },
  sklText: {
    fontSize: 18,
    fontFamily: "Open sans",
    color: "#094E76",
    marginBottom: 20
  }
});
export default SkillLevel;
