import React, {useState} from 'react';
import {Text,View ,StyleSheet} from 'react-native';

function Card_player(){
    return(
        <View style={{alignItems: 'center', justifyContent:'center', marginTop: 333}}>
            <View style={styles.card, boxShadow}>
                <Text>Test</Text>
            </View>
        </View>
    );
}

var boxShadow={
    boxShadow: "0px 3px 10px #D8D8D8"
    }

const styles=StyleSheet.create({
    card:{
        width:338.98,
        height: 157,
        position: "absolute",
        backgroundColor: '#FAB'

    }
})

export default Card_player;