import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class ProfileSettings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>ProfileSettings.js</Text>
            </View>
        )
    }
}

export default ProfileSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
    },
})
