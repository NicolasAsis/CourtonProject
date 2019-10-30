import React, {useState} from 'react';
import {Text,View} from 'react-native';
import Home from '../pages/Page-home';
import Login from '../pages/Page-login';
import SelectLocation from '../pages/Page-select-location';
import Page_Calendar from '../pages/Page-calendar';



function Main(){
    return(
        <View>
            <Page_Calendar/>
        </View>
    );
}

export default Main;