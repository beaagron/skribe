import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
    KeyboardAvoidingView,
    TextInput,
    ScrollView
} from 'react-native';


class NewTask extends Component {


    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.text}>What's your plan?</Text>
                </View>
                <View style={{paddingVertical: 20}}>
                    <Text style={styles.inputHeader}></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default NewTask;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20
    },
    headerContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 34,
        fontWeight: '700',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 50
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#62BB35',
        paddingVertical: 15,
        width: 200,
        borderRadius: 30,
        marginBottom: 40,
        marginLeft: 70,
        marginRight: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Avenir Next',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputHeader: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Avenir Next',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderWidth: 0,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 10,
        paddingVertical: 20,
        color: 'black'
    },
})