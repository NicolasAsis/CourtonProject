import React from 'react';
import {View,Text} from 'react-native';

import { Router, Scene, Stack} from 'react-native-router-flux';

//Import all pages
import Login from './pages/Page-login';
import Home from './pages/Page-home';
import GroupInfo from './pages/Page-groupInfo';

function Route() {
    return (
        <Router>
            <Stack hideNavBar={true}>

                <Scene key="Login" component={Login} initial={true}/>
                <Scene key="Home" component={Home} />

                <Scene key="GroupInfo" component={GroupInfo} />
            </Stack>
        </Router>
    );
}

export default Route;