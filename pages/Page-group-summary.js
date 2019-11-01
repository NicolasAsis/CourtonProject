import React from 'react';
import {View, Text, Button, TextInput,TouchableOpacity} from 'react';
import StyleSheet from 'react-native';


function GroupSummary() {
    return (
        <View>
            <View style={styles.header}>
            <TouchableOpacity>
                <Image
                style={styles.butBack}
                source={require("../assets/but_back.png")}
                />
            </TouchableOpacity>
    
            <Text style={styles.txtTitle}>Group Summary</Text>
    
            <TouchableOpacity style={{ width: 0, height: 0 }}>
                <Image
                style={styles.butHam}
                source={require("../assets/but_ham.png")}
                />
            </TouchableOpacity>
            </View>
        </View>
    );
  }
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 100,
      backgroundColor: "#094E76"
    }
});

export default GroupSummary;

