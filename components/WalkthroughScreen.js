import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Button,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
const _width = Dimensions.get("window").width 

class WalkthroughScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const { navigate } = this.props.navigation;

        return (

            <SafeAreaView style={styles.container}>
                <View style={{ height: 375, marginTop: 150}}>

                {/* frame view */}

                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    >

                    {/* frame one */}

                        <View style={styles.frame}>
                            <View style={styles.textContainer}>
                                <Text style={styles.greetingText}>
                                Welcome to the future of note taking.
                                </Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.iconImage} source={require('../assets/frame1.png')} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
                                <Text style={styles.frameText}>
                                    Scan your handwritten notes with easy access at any moment.
                                </Text>
                            </View>
                        </View>

                    {/* frame two */}

                        <View style={styles.frame}>
                            <View style={styles.textContainer}>
                                <Text style={styles.greetingText}>
                                Getting started is easy!
                                </Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.iconImage} source={require('../assets/frame2.png')} />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                <Text style={styles.frameText}>
                                Simply take a picture of your notes and we'll process them for future use.
                                </Text>
                            </View>
                        </View>

                    {/* frame three */}

                        <View style={styles.frame}>
                            <View style={styles.textContainer}>
                                <Text style={styles.greetingText}>
                                Browse your notes where ever you go.
                                </Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image style={styles.iconImage} source={require('../assets/frame3.png')} />
                            </View>
                            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                                <Text style={styles.frameText}>
                                We'll use suggested tags and titles to help organize your notes!
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('SignUp')}>
                        <Text style={styles.buttonText}>Got it!</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 3, paddingLeft: 35, paddingTop: 7}}>
                        <Text style={styles.signUpButton}>
                            Already have an account? - 
                        </Text>
                    </View>
                    <View style={{flex: 1, paddingRight: 45, paddingBottom: 3}}>
                        <Button
                            style={styles.signUpbutton}
                            title="Sign In"
                            onPress={() => navigate('Login')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default WalkthroughScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    greetingContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    greetingText: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4178BC',
        paddingVertical: 15,
        width: 200,
        borderRadius: 30,
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Avenir Next',
    },
    signUpButton: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
        textAlign: 'right',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1, 
        paddingTop: 25
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    iconImage: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    frame: {
        height: 350, 
        width: _width
    },
    frameText:
    {
        fontSize: 18,
        fontWeight: '400',
        paddingHorizontal: 10,
        textAlign: 'center',
        justifyContent: 'center'
    }
})