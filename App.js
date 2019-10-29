/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {View, Text} from 'react-native'
import React from 'react';
import Home from './pages/Page-home';
import Login from './pages/Page-login';
import SelectLocation from './pages/Page-select-location'

function App(){
  return(
    <View>
     {/* <Home/> */}
     <SelectLocation/>
    </View>
  
  );
}


export default App;
