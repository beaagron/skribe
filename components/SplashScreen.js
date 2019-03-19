import React, { Component } from 'react';
import {
     View,
     Text,
     Image,
     StyleSheet
} from 'react-native';

class SplashScreen extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>
                    Scrivenote
                </Text>
            </View>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#FFFFFF',
          padding: 20,
     },
     logoText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir Next'
     }
})