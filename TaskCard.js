import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

class TaskCard extends Component {

    render() {
        const { taskName, classColor } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.headerContianer}>
                    <Text style={styles.headerText}>
                        {taskName}
                    </Text>
                </View>
                <View style={styles.radioButtonContainer}>
                    <TouchableOpacity style={{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: {classColor},
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}/>
                </View>
            </View>
        )
    }
}

export default TaskCard;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    headerContainer: {
        alignSelf: 'flex-end',
    },
    headerText: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
        fontWeight: '400'
    },
    radioButtonContainer: {
        alignSelf: 'flex-start',
    },
    radioButtonDefault: {

    },
    radioButtonSelected: {
        
    }
})