import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    ActivityIndicator,
    AsyncStorage
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import uuid from 'uuid/v1';
import moment from 'moment';

import TaskCard from '../TaskCard';
import FrontCard from '../FrontCard';
import TaskInput from '../TaskInput';

export default class ScheduleScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            markedDate: moment(new Date()).format("YYYY-MM-DD"),
        };
    }

    state = {
        inputValue: '',
        loadingItems: false,
        allItems: {},
        isCompleted: false
    };

    componentDidMount = () => {
        this.loadingItems();
    };

    newInputValue = value => {
        this.setState({
            inputValue: value
        });
    };

    loadingItems = async () => {
        try {
            const allItems = await AsyncStorage.getItem('Todos');
            this.setState({
                loadingItems: true,
                allItems: JSON.parse(allItems) || {}
            });
        } catch (err) {
            console.log(err);
        }
    };

    onDoneAddItem = () => {
        const { inputValue } = this.state;
        if (inputValue !== '') {
            this.setState(prevState => {
                const id = uuid();
                const newItemObject = {
                    [id]: {
                        id,
                        isCompleted: false,
                        text: inputValue,
                        createdAt: Date.now()
                    }
                };
                const newState = {
                    ...prevState,
                    inputValue: '',
                    allItems: {
                        ...prevState.allItems,
                        ...newItemObject
                    }
                };
                this.saveItems(newState.allItems);
                return { ...newState };
            });
        }
    };

    deleteItem = id => {
        this.setState(prevState => {
            const allItems = prevState.allItems;
            delete allItems[id];
            const newState = {
                ...prevState,
                ...allItems
            };
            this.saveItems(newState.allItems);
            return { ...newState };
        });
    };

    completeItem = id => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                allItems: {
                    ...prevState.allItems,
                    [id]: {
                        ...prevState.allItems[id],
                        isCompleted: true
                    }
                }
            };
            this.saveItems(newState.allItems);
            return { ...newState };
        });
    };

    incompleteItem = id => {
        this.setState(prevState => {
            const newState = {
                ...prevState,
                allItems: {
                    ...prevState.allItems,
                    [id]: {
                        ...prevState.allItems[id],
                        isCompleted: false
                    }
                }
            };
            this.saveItems(newState.allItems);
            return { ...newState };
        });
    };

    saveItems = newItem => {
        const saveItem = AsyncStorage.setItem('Todos', JSON.stringify(newItem));
    };

    render() {

        const { navigate } = this.props.navigation;
        const today = this.state.currentDate;
        const day = moment(today).format("dddd");
        const date = moment(today).format("MMMM D");
        const { inputValue, loadingItems, allItems } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={styles.container2}>
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
                </View> */}
                <View
                    style={styles.container}
                >
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Your To Do List:</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.searchContainer}>
                            <TaskInput
                                inputValue={inputValue}
                                onChangeText={this.newInputValue}
                                onDoneAddItem={this.onDoneAddItem}
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.list}>
                            <View style={styles.column}>
                                <Text style={styles.name}>RECENT TASKS</Text>
                            </View>
                            {loadingItems ? (
                                <ScrollView
                                    contentContainerStyle={styles.scrollableList}
                                >
                                    {Object.values(allItems)
                                        .reverse()
                                        .map(item => (
                                            <TaskCard
                                                key={item.id}
                                                {...item}
                                                deleteItem={this.deleteItem}
                                                completeItem={this.completeItem}
                                                incompleteItem={this.incompleteItem}
                                            />
                                        ))}
                                </ScrollView>
                            ) : (
                                    <ActivityIndicator size="large" color="white" />
                                )}
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
    },
    searchContainer: {
        flex: 4,
        paddingVertical: 20,
        alignContent: 'center'
    },
    headerContainer: {
        paddingLeft: 13,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40
    },
    headerText: {
        fontFamily: 'Avenir Next',
        fontSize: 26,
        fontWeight: '700'
    },
    searchBar: {
        height: 40,
        color: 'black',
        paddingHorizontal: 10,
    },
    calendar: {
        paddingTop: 5,
        borderBottomWidth: 0.25,
        borderColor: 'black',
        height: 75
    },
    date: {
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
        fontSize: 15,
        fontFamily: 'Avenir Next',
        color: '#b8bece',
        fontWeight: '600',
    },
    contentBar: {
        alignItems: 'center'
    },
    centered: {
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 40,
        paddingLeft: 15
    },
    list: {
        flex: 1,
        paddingLeft: 15,
        marginBottom: 10
    },
    scrollableList: {
        marginTop: 15
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    deleteAllButton: {
        marginRight: 40
    }
})
