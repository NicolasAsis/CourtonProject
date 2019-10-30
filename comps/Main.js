import React, {useState} from 'react';
import {Text,View} from 'react-native';
import Home from '../pages/Page-home';
import Login from '../pages/Page-login';
import SelectLocation from '../pages/Page-select-location';


function Main(){
    return(
        <View>
            <SelectLocation/>
        </View>
    );
}

export default Main;