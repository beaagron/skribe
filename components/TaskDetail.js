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

    static navigationOptions = ({ navigation }) => {
        return {
             title: navigation.getParam('taskName', ''),
             headerRight: (
                  <TouchableOpacity
                       style={{paddingRight: 15, alignItems: 'center'}}
                  >
                       <Entypo name="dots-three-horizontal" color='#007AFF' size={20}/>
                  </TouchableOpacity>
             )
        }
   }

    render () {
        const { taskName, classColor } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Class:</Text>
                <Text style={styles.headerText}>Notes:</Text>
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