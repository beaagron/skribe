import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FrontCard from '../FrontCard'

class ClassesScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/huy.jpg')}
                    />
                    <Text style={styles.title}>Welcome back,</Text>
                    <Text style={styles.name}>Huy Pham</Text>
                </View>

                <View style={styles.contentBar}>
                    <FrontCard
                        title="New Note"
                        color="#62D26F"
                        desc="Open Camera"
                        destination="Camera"
                    />
                    <FrontCard
                        title="To Do List"
                        color="#A4CF30"
                        desc="Finish it!"
                        destination="Detail"
                    />
                </View>
            </View>
        )
    }
}

export default ClassesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    avatar: {
        width: 44,
        height: 44,
        backgroundColor: 'black',
        borderRadius: 22,
        marginLeft: 30,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    titleBar: {
        width: '100%',
        marginTop: 50,
        paddingLeft: 90,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Avenir Next',
        color: '#b8bece',
        fontWeight: '500',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        color: '#3c4560',
        fontWeight: '700',
        marginTop: -3,
    },
    contentBar: {
        alignItems: 'center'
    }
})
