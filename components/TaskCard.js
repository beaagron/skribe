import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TaskButton from './TaskButton'

class TaskCard extends Component {

    render() {
        const { taskName, classColor } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.radioButtonContainer}>
                    <TaskButton
                        classColor={classColor}
                    />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            {taskName}
                        </Text>
                    </View>
                </View>
                <View style={styles.editContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('TaskDetail', {
                                taskName,
                                classColor
                            })
                        }}
                    >
                        <MaterialCommunityIcons name="dots-horizontal" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(TaskCard);

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 6,
        flexDirection: 'row',
        //backgroundColor: 'yellow',
    },
    editContainer: {
        width: 30,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-end',
        //backgroundColor: 'orange'
    },
    headerText: {
        fontFamily: 'Avenir Next',
        fontSize: 17,
        fontWeight: '600',
        marginLeft: 7.5
    },
    radioButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        //backgroundColor: 'green'
    }
})