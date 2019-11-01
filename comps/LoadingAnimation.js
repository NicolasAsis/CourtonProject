import React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress/Circle';
import ProgressBar from 'react-native-progress/Bar';
function LoadingAnimation(){
    return(
        <View style={{top:100}}>
            <Progress.Bar size={30} indeterminate={true} />
            <Progress.Pie progress={0.7} size={50} />
            <ProgressCircle/>
            <ProgressBar
            progress={0.5}
            />
            <Progress.CircleSnail color={['red', 'green', 'blue']} />
        </View>
    )
}

export default LoadingAnimation;