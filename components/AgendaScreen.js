import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import TaskCard from './TaskCard';
import { Entypo } from '@expo/vector-icons';


class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
        
    }

    render() {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                theme={{
                    agendaTodayColor: 'red',
                }}
                renderKnob={() => {
                    return (
                        <View>
                            <Entypo name="chevron-thin-down" size={15} color="grey" />
                        </View>
                    );
                }}
            />
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = 15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 5);
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item ' + i + j + ' for ' + strTime,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}>
                <TaskCard
                    taskName={item.name}
                    classColor="#E8384F"
                />
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>Nothing. What's your plan?</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

export default AgendaScreen;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
        fontFamily: 'Avenir Next'
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
        fontSize: 17,
        fontFamily: 'Avenir Next'
    },
    calendarText: {
        fontFamily: 'Avenir Next'
    }
});