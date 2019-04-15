import React, { Component } from 'react';
import {
     SectionList, 
     StyleSheet, 
     Text,
     TextInput,
     View,
     TouchableOpacity
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

class EditTaskDetail extends Component {

    render () {
        return (
            <View style={styles.container}>
                <TextInput 
                placeholder="Class"
                style={styles.headerText}
                />
                <TextInput 
                placeholder="Date"
                style={styles.headerText}
                />
                <TextInput 
                placeholder="Notes"
                style={styles.headerText}
                />
            </View>
        )
    }
}

export default EditTaskDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    headerText: {
        marginTop: 25,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 26
    }
})