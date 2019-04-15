import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Image,
    StatusBar,
    SectionList
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import TaskCard from '../TaskCard';
import FrontCard from '../FrontCard';

export default class ScheduleScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            markedDate: moment(new Date()).format("YYYY-MM-DD"),
            // advDays: 0
        };
    }

    // NextDay(numDays){
    //     this.setState({
    //         advDays: moment(this.state.currentDate).add(numDays, 'days').format("MMMM D")
    //     })
    // }

    render() {

        const { navigate } = this.props.navigation;
        const today = this.state.currentDate;
        const day = moment(today).format("dddd");
        const date = moment(today).format("MMMM D");

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container2}>
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
                <View
                    style={styles.container}
                >
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Quick Search"
                                placeholderTextColor='grey'
                                autoCorrect={false}

                            />
                        </View>
                        <TouchableOpacity
                            style={styles.newButtonContainer}
                            onPress={() => navigate('NewTask')}
                        >
                            <Ionicons name="ios-add" size={40} color="grey" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Your To Do List:</Text>
                    </View>
                    <View style={styles.container}>
                        <CalendarStrip
                            style={styles.calendar}
                            showMonth={false}
                            calendarAnimation={{ type: 'sequence', duration: 30 }}
                            daySelectionAnimation={{ type: 'border', duration: 300, borderWidth: 1, borderHighlighterColor: 'tomato' }}
                            dateNameStyle={{ color: '#979797', fontFamily: 'Avenir Next' }}
                            dateNumberStyle={{ color: '#979797', fontFamily: 'Avenir Next', fontWeight: '400' }}
                        />

                        <View style={styles.tasks}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                            >
                                <Text style={styles.date}>Today · {date}</Text>
                                <TaskCard
                                    taskName="Process 2336 Notes"
                                    classColor="#E8384F"
                                />
                                <TaskCard
                                    taskName="Read Chapter 13"
                                    classColor="#4186E0"
                                />
                                <Text style={styles.date}>Tomorrow · {moment(today).add(1, 'days').format("MMMM D")}</Text>
                                <TaskCard
                                    taskName="Finish HW 25"
                                    classColor="#FD612C"
                                />
                                <TaskCard
                                    taskName="Finish Math OHW"
                                    classColor="#62D26F"
                                />
                                <Text style={styles.date}>{moment(today).add(2, 'days').format("dddd")}, {moment(today).add(2, 'days').format("MMMM D")}</Text>
                                <TaskCard
                                    taskName="Finish HW 17"
                                    classColor="#A4CF30"
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    searchContainer: {
        flex: 4,
        paddingVertical: 20,
        alignContent: 'center'
    },
    newButtonContainer: {
        paddingLeft: 23,
        flex: .5,
        marginTop: 20
    },
    headerContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    headerText: {
        fontFamily: 'Avenir Next',
        fontSize: 26,
        fontWeight: '700'
    },
    searchBar: {
        height: 40,
        backgroundColor: '#F2F2F2',
        color: 'black',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 5,
        fontFamily: 'Avenir Next'
    },
    calendar: {
        paddingTop: 5,
        borderBottomWidth: 0.25,
        borderColor: 'black',
        height: 75
    },
    date: {
        marginTop: 20,
        marginLeft: 10,
        fontFamily: 'Avenir Next',
        fontSize: 20,
        fontWeight: '600'
    },
    tasks: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    container2: {
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
