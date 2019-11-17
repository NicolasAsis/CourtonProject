import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function Card_members(props) {
  const styles = StyleSheet.create({
    //Card container
    cardContainer: {
      width: 330,
      height: 68,
      borderRadius: 10,
      backgroundColor: "#FFFFFF",
      flexDirection: "row",
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 3 },
      shadowRadius: 5,
      shadowColor: "#000000"
    },
    //Card container shadow
    // cardContainerShadow: {
    //   width: 330,
    //   height: 68,
    //   borderRadius: 10,
    //   // position: "relative",
    //   // backgroundColor: "#FFFFFF",
    //   // display: "flex",
    //   // flexDirection: "row",
    //   // shadowOpacity: 0.1,
    //   // shadowOffset: { x: 0, y: 3 },
    //   // shadowRadius: 5,
    //   // shadowColor: "#000000"
    // },
    //Organizer image section
    organizerImgSec: {
      flex: 1,
      borderRadius: 10,
      alignItems: "center",
     
      // backgroundColor:'yellow'
    },
    //Organizer image
    organizerImg: {
      width: 45,
      height: 45,
      borderRadius: 50,
      backgroundColor: "skyblue",
      paddingLeft:'25%'
      // flex: 5
    },
    //Organizer name section
    organizerNameSec: {
      // flex: 3,
      borderRadius: 10,
      justifyContent: "center",
      left:'15%'
      // flex:6
    },
    //"Organizer" text
    organizerText: {
      fontFamily: "Open sans",
      fontSize: 12,
      lineHeight: 16,
      color: "#FE647B"
    },
    //Name of organizer text
    organizerNameText: {
      fontFamily: "Open sans",
      fontSize: 18,
      lineHeight: 25,
      color: "#333333"
    }
  });
  return (
    //Overall container
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      {/* Card Container */}
      <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.organizerImg}>
            {/* Organizer Image */}
            <Image source={{ uri: props.url }} />
            {/* Section */}
          </View>

          {/* Organizer Name Section */}
          <View style={styles.organizerNameSec}>
            <Text style={styles.organizerNameText}>{props.memberName}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default Card_members;
