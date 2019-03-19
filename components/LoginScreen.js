import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button
} from 'react-native';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoGreeting}>
                            Welcome to Skribe.
                        </Text>
                        <Text style={styles.logoText}>
                            Log in to get started!
                        </Text>
                    </View>
                    <Text style={styles.inputHeader}>
                        EMAIL
                    </Text>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor='grey'
                        fontFamily='Avenir Next'
                        keyboardType='email-address'
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                    />
                    <Text style={styles.inputHeader}>
                        PASSWORD
                    </Text>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='grey'
                        fontFamily='Avenir Next'
                        returnKeyType="go"
                        secureTextEntry
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                    />

                    {/* !Post Call */}

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate('Classes')}>
                            <Text style={styles.buttonText}>Lets go!</Text>
                        </TouchableOpacity>
                        <Text style={styles.signUpButton}>
                            Don't have an account yet?
                        </Text>
                        <Button
                            title="Sign up!"
                            style={styles.button}
                            onPress={() => navigate('Walkthrough')}
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logoGreeting: {
        textAlign: 'center',
        color: 'black',
        fontSize: 50,
        fontWeight: '700',
        fontFamily: 'Avenir Next'
    },
    logoText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir Next'
    },
    inputHeader: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Avenir Next'
    },
    input: {
        height: 40,
        backgroundColor: '#F2F2F2',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#62BB35',
        paddingVertical: 15,
        width: 200,
        borderRadius: 30,
        marginBottom: 40,
        paddingBottom: 10,
        marginRight: 73,
        marginLeft: 73
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Avenir Next'
    },
    signUpButton: {
        fontFamily: 'Avenir Next',
        fontSize: 15,
        textAlign: 'center'
    }
})