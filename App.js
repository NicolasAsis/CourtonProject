import {View, Text} from 'react-native'
import React from 'react';
import Main from './comps/Main';

//Import navigation tools
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

//Route is the navigation
import Route from './route';

//Import all of our pages
import Login from './pages/Page-login';
import Home from './pages/Page-home';
import GroupInfo from './pages/Page-groupInfo';

// const MainNavigator = createStackNavigator(
// {
//   Login: {screen: Login},
//   Home: {screen: Home},
//   GroupInfo: {screen: GroupInfo}, 
// },
// {
//     headerMode: 'none',
//     initialRouteName: 'Login',
// });

// const AppContainer = createAppContainer(MainNavigator);

function App(){
  return(
    // <View>
    //   <Main/>
    // </View>

    // <AppContainer />
    <View style={{flex:1}}>
      <Route />
    </View>
  );
}


// export default App;
export default from './storybook';