import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Progress from 'react-native-progress';

function Bar_group_countdown_price(props) {
  return (
    <View style={{width:'100%'}}>
      {/* Pink Subheader */}
      <View style={styles.giSubHeader}>
      <Progress.Bar
            unfilledColor="#CDC5C5"
            borderColor="#FFFFFF"
            color="#81EC8D"
            progress = {props.progressBarLoad}
            width={350}
            height={100}
            style={styles.ProgressBar}
          />
        {/* <Image
          style={styles.groupcloseIcon}
          source={require("../assets/icon_group_close.png")}
        />
        <Text style={styles.giclosingtimeText}>
          Group closes in<Text style={styles.gispectimeText}> {props.countdown} </Text>hours
        </Text>
        <Text style={styles.gicostText}>${props.titlePrice}</Text> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //Page subheader

  giSubHeader: {
    height: 55,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent:'center',
  },
  giclosingtimeText: {
    fontFamily: "Open sans",
    fontSize: 15,
    color: "#FFFFFF",
    left: 70
  },
  gispectimeText: {
    color: "#81EC8D",
    fontWeight: "bold"
  },
  groupcloseIcon: {
    width: 30,
    height: 30,
    left: 26
  },
  gicostText: {
    fontFamily: "Open sans",
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    left: 100
  },
  ProgressBar: {
    position: "absolute",
    height: 8,
    right: 10,
    bottom: 10
  }
  
});
export default Bar_group_countdown_price;
