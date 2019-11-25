import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";

import { Actions } from 'react-native-router-flux';

import AsyncStorage from '@react-native-community/async-storage';

function Welcome(props) {
  //changing Ui value
  const [firstName, setFirstName] = useState("");
  //retrive first name from sign uo
  const getUserName = async () => {
    const firstName = await AsyncStorage.getItem('firstName')
    console.log(firstName);
    setFirstName(firstName);
  }

  getUserName();
  return (
    <View style={styles.pg}>
      <Image
        style={styles.infograph}
        source={require("../assets/img_abstract_up.png")}
      />
      <View style={styles.welcomText}>
        <Text style={styles.welcome}>Welcome {firstName}</Text>
        <Text style={styles.sucessfully}>Your account was created sucessfully!</Text>
        <TouchableOpacity
          style={styles.loginBut}
          onPress={() => {
            Actions.OnBoarding_1()
          }}
        >
          <Text style={styles.loginButText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  pg: {
    width: 375,
    height: 812,
    display: "flex",
    backgroundColor: "#094E76"
  },

  infograph: {
    width: 375,
    height: 337,
    top: 0,
  },
  welcomText: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    height: 66,
    fontFamily: "Open Sans",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: 61,
    textAlign: "center",
    color: "white"
  },
  sucessfully: {
    width: 237,
    height: 66,
    fontFamily: "Open Sans",
    fontSize: 20,
    lineHeight: 33,
    textAlign: "center",
    color: "#9FE8FF"
  },
  loginBut: {
    marginTop: 48,
    borderRadius: 28,
    width: 230,
    height: 40,
    backgroundColor: '#4FF081',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: 'white'
  },
  loginText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#094E76',
    marginTop: 26
  },

});

export default Welcome;
