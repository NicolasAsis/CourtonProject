import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Card_badminton_centre from "../comps/Card_badminton_centre";
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";
import HamMenu from "../comps/HamMenu";
import axios from "axios";



function SelectLocation() {
  const [badmintonCentres, setCentres] = useState([]);
  const ReadCentres = async () => {
    var obj = {
      key: "badminton_centres_read",
      data: {}
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    // console.log("read", r.data);
    var dbCentres = JSON.parse(r.data.body);
    console.log("read", dbCentres);
    setCentres(dbCentres.data);
  };

  useEffect(() => {
    ReadCentres();
  }, []);

  const [hamMenuVisible, setHamMenuVisible] = useState(false);

  return (
    <View >
      <Modal
        isVisible={hamMenuVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={() => {
          setHamMenuVisible(false);
        }}
        swipeDirection="right"
        onSwipeComplete={() => {
          setHamMenuVisible(false);
        }}
        hideModalContentWhileAnimating={true}
        style={{ margin: 0 }}
      >
        <HamMenu showHamMenu={setHamMenuVisible} />
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.butBackTouchableOp}
          onPress={() => {
            Actions.pop("Home");
          }}
        >
          <Image
            style={styles.butBack}
            source={require("../assets/but_back.png")}
          />
        </TouchableOpacity>

        <Text style={styles.txtTitle}>Choose a location</Text>

        <TouchableOpacity
          style={styles.butHamTouchableOpacity}
          onPress={() => {
            setHamMenuVisible(true);
          }}
        >
          <Image
            style={styles.butHam}
            source={require("../assets/but_ham.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ paddingBottom: "185%", paddingTop: 17 }}>
          <View style={{ paddingBottom: 20, height: "100%" }}>

          {
              badmintonCentres.map(obj => {
              return (
                <Card_badminton_centre
                  // key = {i}
                  id={obj.id}
                  badmintonCentreImg={obj.image}
                  badmintonCentreName={obj.name}
                  badmintonCentreLocation={obj.location}
                  costPerHour={obj.cost_per_hour}
                />
              );
            })
          }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#094E76"
  },
  butBack: {
    width: 20,
    height: 30
    // left: 23,
    // top: 55
  },
  butBackTouchableOp: {
    width: 20,
    height: 30,
    left: 23,
    top: 55
  },
  txtTitle: {
    color: "#FFFFFF",
    fontFamily: "Open sans",
    fontWeight: "bold",
    fontSize: 20,
    left: 94,
    top: 27
  },
  butHam: {
    width: 35,
    height: 23
    // left:315,
    // top: 2
  },
  butHamTouchableOpacity: {
    width: 35,
    height: 23,
    left: 315,
    top: 2
  }
});
export default SelectLocation;
