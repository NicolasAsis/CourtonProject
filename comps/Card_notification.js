import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Card_notification(props) {
  return (
    <View >
      <TouchableOpacity style={styles.CardParents}>
        <View
          style={[
            styles.verIndicator,
            (style = { backgroundColor: props.verIndicatorColor })
          ]}
        ></View>
        <View style={{flexDirection:'row', alignItems:'center', top:'4%', left:'20%'}}>
          <View style={{width:50, height:50, borderRadius:100, backgroundColor:'#fab'}}>
            {/* <Image
            style={{width: "10%", height: "10%"}} 
            source={{uri: props.url}}
            /> */}
          </View>
        <View style={{ flexDirection: "column", left:'30%'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.txtName}>
              {props.name}
            </Text>
            <Text style={styles.txtgroupNum}>
            #{props.groupNum}
            </Text>
          </View>
            <Text style={styles.txtComment} numberOfLines={1}>
              {props.comment}Hey guys, good to see you.fgsdgsdfshshgdfhgfhsf
            </Text>
            <View></View>
            <Text style={styles.txtBmtCentrePostTime}>
              {props.bmtCentrePostTime}
            </Text>
          
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  CardParents: {
    width: 320,
    height: 84,
    backgroundColor: "#FFFFFF",
    marginBottom: 17,
    borderRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 3 },
    shadowRadius: 5,
    shadowColor: "#000000"
  },
  verIndicator: {
    width: 3,
    height: 84,
    borderRadius: 5,
    position: "absolute"
  },
  txtName: {
    fontFamily: "Open sans",
    fontSize: 16,
    fontWeight: "bold",
    color: "#3C3C3C",
    alignItems:'flex-start'
  },
  txtgroupNum: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#3C3C3C",
    alignItems:'flex-end',
    marginLeft:'auto'
  },
  txtComment: {
    fontFamily: "Open sans",
    fontSize: 14,
    color: "#979797",
    alignItems:'flex-start',
    // left:'3%',
    width:200
  },
  txtBmtCentrePostTime: {
    fontFamily: "Open sans",
    fontSize: 12,
    color: "#ABABAB",
    alignItems:'flex-end',
    // left:'2%',
    top:'10%'
  }
});

export default Card_notification;
