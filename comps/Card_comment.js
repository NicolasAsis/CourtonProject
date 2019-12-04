import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Card_comments({ name, comment, time }) {
  return (

    <View style={{marginTop:20}}>
    
    <View style={styles.commentSection}>
      
      <View style={styles.imgComment}></View>

      <View style={{ marginLeft: 50 }}>
        <Text style={styles.txtName}>Name{name}</Text>
        <Text style={styles.txtComment}>Amazing Group{comment}</Text>
        <Text style={styles.txtTime}>30mins ago {time}</Text>
      </View>
      
    </View>
    <View style={styles.horLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentSection: {
    flexDirection: "row",
  },
  imgComment: {
    width: 36,
    height: 36,
    backgroundColor: "#fab",
    borderRadius: 30
  },
  txtName: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Open sans",
    marginBottom:10
  },
  txtComment: {
    color: "#333333",
    fontSize: 13,
    fontFamily: "Open sans",
    width:230
  },
  txtTime:{
      marginTop:5,
      color:"#BDBDBD",
      fontFamily:'Open sans',
      fontSize:11
  },
  horLine:{
      borderColor:'#E3E3E3',
      borderWidth:0.3,
      marginTop:25
  }
});

export default Card_comments;
