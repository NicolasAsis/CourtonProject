import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import Sticky_footer_regular from "../comps/Sticky_footer_regular";
import Card_notification from "../comps/Card_notification";
import { Actions } from "react-native-router-flux";
import ImagePicker from 'react-native-image-picker';

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";


function Profile(props) {

  const [userFN,setUserFN] = useState("");
  const [userLN,setUserLN] = useState("");
  const [userEmail,setUserEmail] = useState("");

  const ReadUsers = async()=>{
    const userId = await AsyncStorage.getItem('userId')
    // userId = JSON.parse(userId);
    var obj = {
        key:"users_read",
        data:{
            id:userId
        }
    }
    var r = await axios.post("http://localhost:3001/post", obj);
    var dbusers = JSON.parse(r.data.body);
    var userData = dbusers.data[0];

    // console.log(dbusers.data[0]);
    // console.log("test",userData.id)
    setUserFN(userData.first_name);
    setUserLN(userData.last_name);
    setUserEmail(userData.email);

}

const [numOfCreated, setNumCreated] = useState();
const ReadCreatedGroups = async () => {

  // Get user id
  const userId = await AsyncStorage.getItem('userId')
  // console.log(userId);
  var obj = {
    key: "groups_read",
    data: {
      organizer_id:userId
    }
  };
  var r = await axios.post("http://localhost:3001/post", obj);
  // console.log("read", r.data);
  var dbCreated = JSON.parse(r.data.body);
  // console.log("read", dbCreated);
  var d = dbCreated.data;
  var numCreated = d.length;

  setNumCreated(numCreated);
};

const [numOfJoined, setNumJoined] = useState();

  const ReadJoined = async () => {

    // Get user id
    const userId = await AsyncStorage.getItem('userId')
    // console.log(userId);
    var obj = {
      key: "groups_users_read",
      data: {
        user_id:userId
      }
    };
    var r = await axios.post("http://localhost:3001/post", obj);
    // console.log("read", r.data);
    var dbJoined = JSON.parse(r.data.body);
    // console.log("read", dbJoined);
    var d = dbJoined.data;
    var numJoined = d.length;

    setNumJoined(numJoined);
  };


useEffect(() => {
  ReadUsers();
  ReadCreatedGroups();
  ReadJoined();
}, []);

  const [avatarSource, setAvatarSource] = useState({uri: 'https://initia.org/wp-content/uploads/2017/07/default-profile.png'});
  // const [SelectImg, setSelectImg] = useState('');
  //select image

  const SelectImg = async () =>{


    ImagePicker.showImagePicker({noData:true, mediaType:'photo'} ,(response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
      console.log("response", response)
      const source = { uri: response.uri };
      setAvatarSource({source})
      console.log(avatarSource);
      // setChannelImageHandler(source.uri)
      }
    });
}
  // const LoadComments = async () => {
  //   var obj = {
  //     key: "users_read",
  //     data: {
  //       name: name,
  //       id: id
  //     }
  //   };
  //   var r = await axios.post("http://142.232.162.71:3001/post", obj);
  //   console.log("read", r.data);
  //   var dbusers = JSON.parse(r.data.body);
  //   console.log("read", dbusers);
  //   setUsers(dbusers.data);
  // };

  const LogOut = async () => {
      await AsyncStorage.clear();
  }

  // useEffect(() => {
  //   LoadComments();
  // }, []);


  return (
    <View>
      {/* <TouchableOpacity
        style={{ position: "absolute", left: 320, top: 50, zIndex: 10 }}
      >
        <Image
          style={{ width: 26, height: 26 }}
          source={require("../assets/icon_setting.png")}
        />
      </TouchableOpacity> */}
      <View>
        <Image
          style={{ width: "100%", height: 262 }}
          source={require("../assets/img_profile_banner.png")}
        />
      </View>

      <View style={styles.pageStructure}>
        <View style={styles.profileHeader}>
          

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
           <Image style={styles.profilePic} source={avatarSource}/>
            
            <TouchableOpacity
             onPress={()=>{
              SelectImg();
            }}
            >
            <Image
              style={styles.profilePicEdit}
              source={require("../assets/icon_camera.png")}
            />
          </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "15%",
              }}
            >
              <Text style={styles.txtName}>{userFN} {userLN}</Text>
              <View style={{ flexDirection: "row", flex: 1, marginTop: 10 }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "15%"
                  }}
                  onPress={() => {
                    Actions.reset("MyCreatedGroup");
                  }}
                >
                  <Text style={styles.txtCreatedNum}>
                    {numOfCreated}
                  </Text>
                  <Text style={styles.txtCreatedJoined}>
                      Created{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ alignItems: "center", justifyContent: "center" }}
                  onPress={() => {
                    Actions.reset("MyJoinedGroup");
                  }}
                >
                  <Text style={styles.txtJoinedNum}>{numOfJoined}</Text>
                  <Text style={styles.txtCreatedJoined}>
                    Joined
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          zIndex: -10,
          justifyContent: "center",
          alignItems: "center",
          height: 550,
          backgroundColor:"#F3F1F1"
        }}
      >
        <View style={{ width: "100%", height: 100, zIndex: 10 }}>
        </View>

        {/* === info title  === */}
        <View style={styles.infoTile}>
            <Text style={styles.infoTitle}>Email</Text>
            <Text style={styles.info}>{userEmail}</Text>
        </View>
        <View style={styles.infoTile}>
            <TouchableOpacity style={styles.profileIcons} 
              onPress={() => {
                LogOut();
                Actions.Login();
            }}>
                  <Image style={{ width: 23, height: 20, marginRight:20}} source={require("../assets/img_icon_logout.png")}/>
                  <Text style={{color:"#C2C1C1"}}>Sign Out</Text>
            </TouchableOpacity>
        </View>
      </View>
      
      <Sticky_footer_regular
        homeIcon={require("../assets/icon_home_grey.png")}
        myGroupIcon={require("../assets/icon_mygroup_grey.png")}
        profileIcon={require("../assets/icon_profile_blue.png")}
        style={styles.footer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageStructure: {
    alignItems: "center",
    justifyContent: "center"
  },
  profileHeader: {
    width: 325,
    height: 153,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    position: "absolute",
    shadowOffset: { x: 0, y: 3 },
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOpacity: 0.07,
    justifyContent: "center"
  },
  profilePic: {
    width: 85,
    height: 85,
    borderRadius: 100,
    resizeMode:'contain',
    // backgroundColor: "#fab"
  },
  txtName: {
    fontFamily: "Open sans",
    fontSize: 24,
    color: "#094E76",
    fontWeight: "bold",
    flex: 1
  },
  txtCreatedNum: {
    fontFamily: "Open sans",
    fontSize: 20,
    color: "#094E76",
    fontWeight: "bold"
  },
  txtJoinedNum: {
    fontFamily: "Open sans",
    fontSize: 20,
    color: "#FE647B",
    fontWeight: "bold"
  },
  txtCreatedJoined: {
    color: "#094E76",
    fontFamily: "Open sans",
    fontSize: 12
  },
  txtNotification: {
    fontFamily: "Open sans",
    fontSize: 18,
    color: "#C2C1C1",
    paddingLeft: "10%",
    backgroundColor: "#ffffff",
    width: "100%",
    top: 80
  },
  footer: {
    position: "absolute"
  },
  circleIndicatorJoined: {
    width: 17,
    height: 17,
    backgroundColor: "#FE647B",
    borderRadius: 30,
    marginRight: 5
    //094E76
  },
  circleIndicatorCreated: {
    width: 17,
    height: 17,
    backgroundColor: "#094E76",
    borderRadius: 30,
    marginRight: 5
    //
  },
  txtIndicator: {
    fontSize: 12,
    fontFamily: "Open sans",
    color: "#094E76"
  },
  profilePicEdit:{
    width:30,
    height:30,
    position:'absolute',
    left:-30,
    top:10
  },
  // info tile for email, skill type etc..
  infoTile:{
    width:"100%",
    padding:20,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    color:"#3c3c3c",
    shadowOffset: { x: 0, y: 3 },
    shadowColor: "#000000"
    // marginTop:-380,
  },
  infoTitle: {
    fontFamily: 'Open Sans',
    fontWeight:'bold',
    fontSize: 15,
    lineHeight: 20,
    padding:10,
},
  info:{
    fontFamily: 'Open Sans',
    fontSize: 15,
    lineHeight: 20 ,
    color: '#C2C1C1',
  },
  profileIcons:{
    width:'100%',
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"row"
}

});

export default Profile;
