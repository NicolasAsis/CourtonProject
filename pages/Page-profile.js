import React, {useState} from 'react';
import {Text,View, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

function Profile(){
    return(
        <View>
            {/* this is the header part */}
            <View styes={{fontFamily:'Open Sans'}}>
                <View style={styles.header}>
                    <Text style={styles.name}>Jacky Lee</Text>
                    <View style={{position: 'absolute'}}>
                    <TouchableOpacity>
                        <Image style={styles.iconEdit}
                        source={require("../assets/icon_edit.png")}/>
                    </TouchableOpacity>
                </View>
                
                    <TouchableOpacity>
                    <View style={styles.profileImg}>
                        <Image style={styles.iconCamera}
                        source={require("../assets/icon_camera.png")}/>
                    </View>
                    </TouchableOpacity>
            </View>
        </View>
            {/* this is the group numbers and text */}
            <View style={styles.groupsText}>
                <View style={{flex:1}}>
                    <TouchableOpacity>
                    <Text style={styles.numberGroups}>2</Text>
                    <Text style={styles.createdGroups}>Created{"\n"}Groups</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity>
                    <Text style={styles.numberGroups2}>5</Text>
                    <Text style={styles.joinedGroups}>Joined{"\n"}Groups</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* the other links on the profile page */}
            {/* <View>
                <View style={styles.profileIcons}>
                <TouchableOpacity>
                    <Image style={{width:25, height: 35}} source={require ('../assets/icon_notification.png')}/>
                    <Text style={styles.optionsText}>Notfications</Text>
                 </TouchableOpacity>
                </View>
                <View style={styles.profileIcons}>
                <TouchableOpacity>
                    <Image style={{width:25, height: 25, marginBottom: 30}} source={require ('../assets/icon_help.png')}/>
                    <Text style={styles.optionsText}>Help</Text>               
                </TouchableOpacity >
                </View>
                <View style={styles.profileIcons}>
                <TouchableOpacity >
                    <Image style={{width:25, height: 25, marginBottom: 30}} source={require ('../assets/icon_faq.png')}/>
                    <Text style={styles.optionsText}>FAQ</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.profileIcons}>
                <TouchableOpacity> 
                    <Image style={{width:25, height: 25, marginBottom: 30}} source={require ('../assets/icon_comment.png')}/>
                    <Text style={styles.optionsText}>About CourtOn</Text>
                </TouchableOpacity>
                </View> 
            </View> */}

            <View style={{width:'100%',height:240, top:390,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <View style={{width:180,height:217, left: 20}}>
                    <TouchableOpacity>
                        <Image 
                        style={{width:25, height: 30,marginBottom:15}} 
                        source={require ('../assets/icon_notification.png')}
                        />
                        <Text style={styles.optionsText}>Notfications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={{width:25, height: 25, marginBottom: 15}} source={require ('../assets/icon_help.png')}/>
                    <Text style={styles.optionsText}>Help</Text>               
                    </TouchableOpacity >
                    <TouchableOpacity >
                    <Image style={{width:25, height: 25, marginBottom: 15}} source={require ('../assets/icon_faq.png')}/>
                    <Text style={styles.optionsText}>FAQ</Text>
                </TouchableOpacity>
                <TouchableOpacity> 
                    <Image style={{width:25, height: 25, marginBottom: 15}} source={require ('../assets/icon_comment.png')}/>
                    <Text style={styles.optionsText}>About CourtOn</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View> 

    );

};

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100%',
        height: 241,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#094E76',
    },

    name:{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 46,
        color: 'white',

    },

    iconEdit:{
        width: 20,
        height: 21,
        top: -45,
        left: 145,
    },

    profileImg:{
        width: 95,
        height: 95,
        backgroundColor: "lightblue",
        borderRadius: 50,
        top: 20,
    },
    iconCamera:{
        width: 28,
        height: 28,
        left: 73,
        top: 65,
        position: 'absolute',
    },

    groupsText:{
        position: 'absolute',
        width: '100%',
        top: 266,
        display:'flex',
        flexDirection: 'row'
    },

    numberGroups:{
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        color: '#4A4A4A',
        flexDirection: 'row',
        left: 132,
    },
    numberGroups2:{
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        color: '#4A4A4A',
        left: 60,
    
    },
    createdGroups:{
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 25,
        color: '#4A4A4A',
        flexDirection: 'row',
        textAlign: 'center',
        left: 40,
        letterSpacing: 2.5,
        // top: 40,
    },

    joinedGroups:{
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 25,
        color: '#4A4A4A',
        flexDirection: 'row',
        textAlign: 'center',
        left: -32,
        letterSpacing: 2.5,

    },
    profileIcons:{
        width: '100%',
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        // top: 380,
        // left:140,
        // backgroundColor:'black'

    },

    optionsText:{
        fontFamily:'Open sans',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'left',
        color: '#3C3C3C',
        marginLeft: 65,
        top: -34,
    }
    

});

export default Profile;