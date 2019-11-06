import {View, Text} from 'react-native'
import React from 'react';
import Main from './comps/Main';

//Import navigation tools
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Import all of our pages
import Login from './pages/Page-login';
import Home from './pages/Page-home';

const MainNavigator = createStackNavigator(
{
  Login: {screen: Login},
  Home: {screen: Home},
},
{
    headerMode: 'none',
    initialRouteName: 'Login',
});

const AppContainer = createAppContainer(MainNavigator);

function App(){
  return(
    // <View>
    //   <Main/>
    // </View>
    <AppContainer />
  );
}


export default App;
