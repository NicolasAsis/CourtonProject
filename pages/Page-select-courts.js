import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Header_blue_red from '../comps/Header_blue_red';
import Footer_court_indicator from '../comps/Footer_court_indicator';

function SelectCourts(){
    return(
        <View>
            <Header_blue_red
            headerTitle='Choose courts'
            courtName='Your selected court                                            '
            />
            
            <View>
            <ScrollView >
                <TouchableOpacity>
                <Image
                style={{width:122, height:79}}
                source={require('../assets/icon_court_grey.png')}
                />
                </TouchableOpacity>
            </ScrollView>
            </View>


            <Footer_court_indicator
            txtPrice='22'
            />

        </View>
    )
}

export default SelectCourts;