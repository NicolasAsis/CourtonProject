import React from "react";
import { View, Text } from "react-native";
import Header_blue from "../comps/Header_blue";
import Card_members from "../comps/Card_members";
import { ScrollView } from "react-native-gesture-handler";

function MoreMembers() {
  const LoadMembers = async()=>{
    var obj = {
        key:"_read",
        data:{
          organizerName:organizerName,
          date:date

        }
    }
    // var r = await axios.post("http://142.232.162.71:3001/post", obj);
    // console.log("read", r.data);
    // var dbusers = JSON.parse(r.data.body);
    // console.log("read", dbusers);
    // setUsers(dbusers.data);
}
  const data=[
    {
      organizerName : 'Tony Wong',
      groupNum : '1511',
      date : 'Sat Dec 10',
      time : '1pm -2pm',
     joinedMember : 2,
      totalMember : 10,
      price : 7,
      progressBarLoad : 0.2
    },
  ]
  useEffect(()=>{
    LoadMembers();
  }, []);
  return (
    <View style={{backgroundColor:'#ffffff' }}>
      <Header_blue headerTitle={"Members"} />
      <View style={{ marginTop: 20}}>
        <ScrollView style={{ width: "100%", height: 700 }}>
          <View style={{ alignItems: "flex-start", marginLeft: 23 }}>
            
           
            {
                member.map((obj,i)=>{
                    return <Card_members
                    // key = {i}
                    id = {obj.id}
                    organizerName = {obj.organizerName}
                    groupNum = {obj.groupNum}
                    date = {obj.date}
                    time = {obj.time}
                    joinedMember = {obj.joinedMember}
                    totalMember = {obj.totalMember}
                    price = {obj.price}
                    progressBarLoad = {obj.progressBarLoad}

                />
                })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MoreMembers;
