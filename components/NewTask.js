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
    ScrollView,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


class NewTask extends Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        this.state = {
            PickerSelectedVal: 'Which class?'
        }
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => navigate('Schedule')}
                        >
                            <EvilIcons name="close" size={40} color="grey" />
                        </TouchableOpacity>
                        <Text style={styles.text}>What's your plan?</Text>
                    </View>
                    <View style={{ marginHorizontal: 20}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Task Name"
                            placeholderTextColor="grey"
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                        {/* change to dropdown menu? */}
                        <TextInput
                            style={styles.input}
                            placeholder="Date"
                            placeholderTextColor="grey"
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Class"
                            placeholderTextColor="grey"
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Notes"
                            placeholderTextColor="grey"
                            blurOnSubmit={false}
                            autoFocus={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate('Schedule')}
                        >
                            <Text style={styles.buttonText}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default NewTask;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButton: {
        marginLeft: 290,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#62BB35',
        paddingVertical: 10,
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
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Avenir Next'
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
        marginVertical: 10
    },
})