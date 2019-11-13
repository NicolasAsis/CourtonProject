import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

import {Actions} from 'react-native-router-flux';

function Sticky_footer_regular(props) {
  return (
    <View>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.icons}
          onPress={()=>{
            Actions.reset('Home')
          }}
        >
          <Image
            style={styles.icons_home}
            source={props.homeIcon}
          />
          <Text style={styles.txtIcon}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.icons}
          onPress={()=>{
            Actions.reset('MyGroup')
          }}
        >
          <Image
            style={styles.icons_group}
            source={props.myGroupIcon}
          />
          <Text style={styles.txtIcon}>MY GROUPS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.icons}
          onPress={()=>{
            Actions.reset('Profile')
          }}
        >
          <Image
            style={styles.icons_profile}
            source={props.profileIcon}
          />
          <Text style={styles.txtIcon}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 83,
    left: 0,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#FFFFFF",
    flexDirection: "row"
  },
  icons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: -15
  },
  txtIcon: {
    fontFamily: "Open sans",
    fontSize: 11,
    color:'#686868'
  },
  icons_home: {
    width: 28,
    height: 28
  },
  icons_group: {
    width: 30,
    height: 30
  },
  icons_profile: {
    width: 30,
    height: 30
  }
});
export default Sticky_footer_regular;
