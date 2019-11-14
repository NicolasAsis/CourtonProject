import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Button,
  InteractionManager
} from "react-native";
import PercentageCircle from "react-native-percentage-circle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

// import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';

function LoadingAnimation() {
  const [num, setNum] = useState(0);
  const [numB, setNumB] = useState(30);
  
  useEffect(()=>{
    setInterval(()=>{
      console.log(num);
      for(var i=0;i<101;i++){
        var newnum = num+i;
      }
      
      setNum(newnum);
    },800);
  }, [])
  return (

    <View style={{ top: 100 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.popupBg}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.txt}>Creating Group</Text>
            <View>
              <Animated.View
                // useEffect={() => {
                  // Animated.timing(
                  //   num,
                  //   {
                  //     toValue: 100,
                  //     duration: 1000
                  //   },
                  // ).start();

                //   InteractionManager.runAfterInteractions(() => {
                //     Animated.timing(num, {
                //       toValue: 100,
                //       duration: 1000,
                //     }).start();
                //   });
                // }}
              >
                
                <PercentageCircle
                
                  bgcolor={"#ffffff"}
                  textStyle={{ fontSize: 20, fontFamily: "Open sans" }}
                  radius={47}
                  percent={
                      num
                      
                    }
                  borderWidth={5}
                  color={"#3498db"}
                ></PercentageCircle>
              </Animated.View>
            </View>
            <TouchableOpacity style={styles.cancelBtn} onPress={()=>{Actions.Home()}}>
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: "Open sans",
    fontSize: 20,
    color: "#094E76",
    flex: 1,
    marginTop: 25,
    fontWeight: "bold"
  },
  popupBg: {
    backgroundColor: "#ffffff",
    width: 260,
    height: 250,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      x: 2,
      y: 3
    },
    shadowOpacity: 0.07,
    shadowRadius: 10
  },
  cancelBtn: {
    width: 153,
    height: "41%",
    borderRadius: 70,
    backgroundColor: "#FE647B",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: -30
  },
  txtCancel: {
    fontFamily: "Open sans",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default LoadingAnimation;
