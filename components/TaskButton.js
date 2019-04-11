import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class TaskButton extends Component {
    constructor(props) {
        super(props);
        this.state = { isPressed: false };
    }

    onPress = () => {
        this.setState({
            isPressed: true
        })
    }

    undoOnPress = () => {
        this.setState({
            isPressed: false
        })
    }

    render() {
        const { classColor } = this.props
        if (this.state.isPressed) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.completedButton, { backgroundColor: classColor }]}
                        onPress={this.undoOnPress}
                    >
                        <Ionicons name="ios-checkmark" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.emptyButton, { borderColor: classColor }]}
                    onPress={this.onPress}
                />
            </View>
        )
    }
}

export default TaskButton;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    emptyButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    completedButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})