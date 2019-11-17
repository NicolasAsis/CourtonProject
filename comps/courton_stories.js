import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Bar_group_countdown_price from './Bar_group_countdown_price';
import Button_Join from './Button_Join';
import Card_badminton_centre from './Card_badminton_centre';
import Card_for_organizer from './Card_for_organizer';
import Card_for_player from './Card_for_player';
import Card_members from './Card_members';
import Circle_extra_member from './Circle_extra_member';
import Courts from './Courts';
import Delete_group_popup from './Delete_group_popup';
import Footer_court_indicator from './Footer_court_indicator';
import HamMenu from './HamMenu';
import Header_blue_red from './Header_blue_red';
import Header_blue from './Header_blue';
import Join_group_popup from './Join_group_popup';
import Leave_group_popup from './Leave_group_popup';
import Footer_home from './Sticky_footer_home';
import Footer_regular from './Sticky_footer_regular';
import LoadingAnimation from './LoadingAnimation';
import Page_Calendar from '../pages/Page-calendar';
import GroupSummary from '../pages/Page-group-summary';
import GroupInfo from '../pages/Page-groupInfo';
import Home from '../pages/Page-home';
import JoinedGroup from '../pages/Page-JoinedGroup';
import Login from '../pages/Page-login';
import MyCreatedGroup from '../pages/Page-my-created-group';
import MyJoinedGroup from '../pages/Page-my-joined-group';
import OnBoarding_1 from '../pages/Page-onBoarding-1';
import OnBoarding_2 from '../pages/Page-onBoarding-2';
import OnBoarding_3 from '../pages/Page-onBoarding-3';
import OnBoarding_4 from '../pages/Page-onBoarding-4';
import Organizer_groupInfo from '../pages/Page-organizer-groupInfo';
import Profile from '../pages/Page-profile';
import SelectCourts from '../pages/Page-select-courts';
import SelectLocation from '../pages/Page-select-location';
import MoreMembers from '../pages/Page-more-members';
import MyGroup from '../pages/Page-my-group';
import Card_recent from '../comps/Card_recent';
import SelectTime from '../pages/Page-select-time';
import Welcome from '../pages/Page-Welcome';

storiesOf('courton_comps', module)
  .add('Bar_group_countdown_price', ()=>{
    return<Bar_group_countdown_price/>
  })
  .add('Button_Join', ()=>{
    return<Button_Join/>
  })
  .add('Card_badminton_centre', ()=>{
    return<Card_badminton_centre/>
  })
  .add('Card_for_organizer', ()=>{
    return<Card_for_organizer/>
  })
  .add('Card_for_player', ()=>{
    return<Card_for_player/>
  })
  .add('Card_members', ()=>{
    return<Card_members/>
  })
  .add('Circle_extra_member', ()=>{
    return<Circle_extra_member/>
  })
  .add('Courts', ()=>{
    return<Courts/>
  })
  .add('Delete_group_popup', ()=>{
    return<Delete_group_popup/>
  })
  .add('HamMenu', ()=>{
    return<HamMenu/>
  })
  .add('Header_blue_red', ()=>{
    return<Header_blue_red/>
  })
  .add('Header_blue', ()=>{
    return<Header_blue/>
  })
  .add('Join_group_popup', ()=>{
    return<Join_group_popup/>
  })
  .add('Leave_group_popup', ()=>{
    return<Leave_group_popup/>
  })
  .add('Sticky_footer_home', ()=>{
    return<Footer_home />
  })
  .add('Sticky_footer_regular', ()=>{
    return<Footer_regular/>
  })
  .add('LoadingAnimation', ()=>{
    return<LoadingAnimation/>
  })
  .add('Footer_court_indicator', ()=>{
    return<Footer_court_indicator />
  })
  .add('Card_recent', ()=>{
    return<Card_recent/>
  })


storiesOf('courton_pages', module)

.add('Page-Calendar', ()=>{
    return<Page_Calendar />
  })
  .add('Page-group-summary', ()=>{
    return<GroupSummary />
  })
  .add('Page-groupInfo', ()=>{
    return<GroupInfo />
  })
  .add('Page-home', ()=>{
    return<Home />
  })
  .add('Page-JoinedGroup', ()=>{
    return<JoinedGroup />
  })
  .add('Page-login', ()=>{
    return<Login />
  })
  .add('Page-my-created-group', ()=>{
    return<MyCreatedGroup />
  })
  .add('Page-my-joined-group', ()=>{
    return<MyJoinedGroup />
  })
  .add('Page-onBoarding-1', ()=>{
    return<OnBoarding_1 />
  })

  .add('Page-onBoarding-2', ()=>{
    return<OnBoarding_2 />
  })

  .add('Page-onBoarding-3', ()=>{
    return<OnBoarding_3 />
  })

  .add('Page-onBoarding-4', ()=>{
    return<OnBoarding_4 />
  })

  .add('Page-Welcome', ()=>{
    return<Welcome />
  })

  .add('Page-organizer-groupInfo', ()=>{
    return<Organizer_groupInfo />
  })
  .add('Page-profile', ()=>{
    return<Profile />
  })
  .add('Page-select-courts', ()=>{
    return<SelectCourts />
  })
  .add('Page-select-location', ()=>{
    return<SelectLocation />
  })
  .add('Page-more-members', ()=>{
    return<MoreMembers/>
  })
  .add('Page-my-group', ()=>{
    return <MyGroup/>
  })
  .add ('Page-Profile', ()=>{
    return<Profile/>
  })
  .add ('Page-select-time', ()=>{
    return<SelectTime/>
  })

  .add ('Page-select-time', ()=>{
    return<SelectTime/>
  })