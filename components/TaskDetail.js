import React, { Component } from 'react';
import {
     SectionList, 
     StyleSheet, 
     Text,
     TextInput,
     View,
     TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';

class TaskDetail extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
             title: navigation.getParam('taskName', ''),
             headerRight: (
                  <TouchableOpacity
                       style={{paddingRight: 10}}
                  >
                       <Feather name="edit-2" color='#007AFF' size={28}/>
                  </TouchableOpacity>
             )
        }
   }

    render () {
        return (
            <View style={styles.container}>
                <Text> test</Text>
            </View>
        )
    }
}

export default TaskDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})