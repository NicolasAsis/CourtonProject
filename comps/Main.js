import React, {useState} from 'react';
import {Text,View} from 'react-native';

import Home from '../pages/Page-home';
import Login from '../pages/Page-login';
import SelectLocation from '../pages/Page-select-location';
import Page_Calendar from '../pages/Page-calendar';
import GroupInfo from '../pages/Page-groupInfo';
import Button_Join from './Button_Join';



function Main(){
    return(
        <View>
            <GroupInfo />
        </View>
    );
}

export default Main;