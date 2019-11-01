import React, {useState} from 'react';
import {Text,View} from 'react-native';

import Home from '../pages/Page-home';
import Login from '../pages/Page-login';
import SelectLocation from '../pages/Page-select-location';
import Page_Calendar from '../pages/Page-calendar';
import JoinedGroup from '../pages/Page-JoinedGroup';
import GroupInfo from '../pages/Page-groupInfo';
import SelectCourts from '../pages/Page-select-courts';
import Footer_court_indicator from './Footer_court_indicator';
import Sticky_footer_home from './Sticky_footer_home'



function Main(){
    return(
        <View>
            <JoinedGroup/>
        </View>
    );
}

export default Main;