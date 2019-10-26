import React, {useState} from 'react';
import {View,Text,Button,Image} from 'react-native';
import Card_player from '../comps/Card_player';

function Home() {
    return(
        <View>
           <Card_player/>
        </View>
    );
}

export default Home;