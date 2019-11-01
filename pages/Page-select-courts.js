import React from 'react';
import {View, Text} from 'react-native';
import Header_blue_red from '../comps/Header_blue_red';

function SelectCourts(){
    return(
        <View>
            <Header_blue_red
            headerTitle='Choose courts'
            courtName='Stage 18'
            />
            

        </View>
    )
}

export default SelectCourts;