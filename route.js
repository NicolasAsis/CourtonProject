import React from 'react';
import {View,Text} from 'react-native';

import { Router, Scene, Stack, Drawer} from 'react-native-router-flux';

//Import all pages
import Login from './pages/Page-login';
import Home from './pages/Page-home';
import GroupInfo from './pages/Page-groupInfo';
import Join_group_popup from './comps/Join_group_popup';
import JoinedGroup from './pages/Page-JoinedGroup';
import MyGroup from './pages/Page-my-group';
import Profile from './pages/Page-profile';
import SelectLocation from './pages/Page-select-location';
import Page_Calendar from './pages/Page-calendar';
import SelectCourts from './pages/Page-select-courts';
import GroupSummary from './pages/Page-group-summary';
import MyCreatedGroup from './pages/Page-my-created-group';
import MyJoinedGroup from './pages/Page-my-joined-group';
import SelectTime from './pages/Page-select-time';
import Member_groupInfo from './pages/Page-member-groupInfo';
import Organizer_groupInfo from './pages/Page-organizer-groupInfo';
import Signup from './pages/Page-signup';

import MoreMembers from './pages/Page-more-members';

import HamMenu from './comps/HamMenu';
import LoadingAnimation from './comps/LoadingAnimation';

function Route() {
    return (
        <Router>
            <Stack hideNavBar={true}>

                <Scene key="Login" component={Login} initial={true} />
                <Scene key="Signup" component={Signup} />

                <Scene key="Home" component={Home} />
                <Scene key="GroupInfo" component={GroupInfo} />
                <Scene key="MoreMembers" component={MoreMembers} />
                <Scene key="Join_group_popup" component={Join_group_popup} />
                <Scene key="JoinedGroup" component={JoinedGroup} />
                <Scene key="MyJoinedGroup" component={MyJoinedGroup} />

                <Scene key="MyGroup" component={MyGroup} />
                <Scene key="Profile" component={Profile} />

                <Scene key="SelectLocation" component={SelectLocation} />
                <Scene key="Page_Calendar" component={Page_Calendar} />
                <Scene key="SelectTime" component={SelectTime} />
                <Scene key="SelectCourts" component={SelectCourts} />
                <Scene key="GroupSummary" component={GroupSummary} />
                <Scene key="MyCreatedGroup" component={MyCreatedGroup} />
                <Scene key="LoadingAnimation" component={LoadingAnimation}/>
                <Scene key="Member_groupInfo" component={Member_groupInfo}/>
                <Scene key="Organizer_groupInfo" component={Organizer_groupInfo}/>

                <Scene key="HamMenu" component={HamMenu} drawer={true} drawerPosition='right' />

                <Drawer
                    hideNavBar
                    key='drawerMenu'
                    component={HamMenu}
                    drawerPosition="right"
                    transparent={true}
                >
                    <Scene key="Home" component={Home} />
                </Drawer>
                
            </Stack>
        </Router>
    );
}

export default Route;