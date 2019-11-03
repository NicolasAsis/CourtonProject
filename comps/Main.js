import React, {useState} from 'react';
import {Text,View} from 'react-native';

import Home from '../pages/Page-home';
import Login from '../pages/Page-login';
import SelectLocation from '../pages/Page-select-location';
import Page_Calendar from '../pages/Page-calendar';
import JoinedGroup from '../pages/Page-JoinedGroup';
import GroupInfo from '../pages/Page-groupInfo';
import OnBoarding from '../pages/Page-onBoarding';




function Main(){
    return(
        <View>
            <OnBoarding/>
        </View>
    );
}

export default Main;