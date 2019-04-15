import React, { Component } from 'react';
import {
     SectionList, 
     StyleSheet, 
     Text,
     TextInput,
     View,
     TouchableOpacity
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

class TaskDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
             class: "",
             notes: "",
             date: ""
        };
   }

    static navigationOptions = ({ navigation }) => {
        return {
             title: navigation.getParam('taskName', ''),
             headerRight: (
                  <TouchableOpacity
                       style={{paddingRight: 15, alignItems: 'center'}}
                       onPress={() => {
						navigation.navigate('EditTaskDetail')
					}}
                  >
                       <Entypo name="dots-three-horizontal" color='#007AFF' size={20}/>
                  </TouchableOpacity>
             )
        }
   }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Class: {this.props.class}</Text>
                <Text style={styles.headerText}>Date: {this.props.date}</Text>
                <Text style={styles.headerText}>Notes: {this.props.notes}</Text>
            </View>
        )
    }
}

export default TaskDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    headerText: {
        marginTop: 25,
        fontFamily: 'Avenir Next',
        fontWeight: '600',
        fontSize: 26
    }
})