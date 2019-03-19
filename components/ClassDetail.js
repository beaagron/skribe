// import React, { Component } from 'react';
// import {
//      View,
//      Text,
//      StyleSheet
// } from 'react-native';

// class ClassDetail extends Component {
//      static navigationOptions = ({ navigation, screenProps }) => ({
//           title: navigation.state.params.title,
//           headerTitleStyle: {
//                fontFamily: 'Avenir Next',
//           },
//      });

//      render() {
//           const { navigation } = this.props;
//           const title = navigation.getParam('title', '');
//           const color = navigation.getParam('color', 'white');
//           const desc = navigation.getParam('desc', '')

//           return (
//                <View style={styles.container}>
//                     <Text style={styles.text}>
//                          {title}
//                     </Text>
//                     <Text style={[styles.text, {backgroundColor: color}]}>
//                          {desc}
//                     </Text>
//                </View>
//           )
//      }
// }

// export default ClassDetail;

// const styles = StyleSheet.create({
//      container: {
//           flex: 1,
//           alignItems: 'center',
//           justifyContent: 'center'
//      },
//      text: {
//           fontFamily: 'Avenir Next',
//           fontSize: 20
//      }
// })

import React, { Component } from 'react';
import {
     SectionList, 
     StyleSheet, 
     Text,
     TextInput,
     View,
     TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class ClassDetail extends Component {

     static navigationOptions = ({ navigation }) => {
          return {
               title: navigation.getParam('title', ''),
               headerRight: (
                    <TouchableOpacity
                         style={{paddingRight: 10}}
                    >
                         <Ionicons name="ios-add" color='#007AFF' size={36}/>
                    </TouchableOpacity>
               )
          }
     }

     render() {
          return (
          <View style={styles.container}>
               <TextInput
                    style={styles.searchBar}
                    // value={this.state.searchText}
                    // onChange={this.setSearchText.bind(this)}
                    placeholder='Search State'
               />
               <SectionList
                    sections={[
                         {title: 'Week 1', data: ['1.1 Calculus Review', '1.2 Matrix Operations', '2.1 Dot Product', '2.2 Plane Systems']},
                         {title: 'Week 2', data: ['2.3 Partial Derivatives', '2.4 Limits', '2.5 Determinants']},
                         // {title: 'Family', data: ['Emma', 'Emi', 'Emiliano', 'Ernesto']},
                         // {title: 'Friends', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => (
                         <TouchableOpacity>
                              <Text style={styles.item}>{item}</Text>
                         </TouchableOpacity>
                    )}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
               />
          </View>
          );
     }
}

export default ClassDetail;

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 18,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    paddingLeft: 15,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    fontSize: 18,
    height: 44,
  },
  searchBar: {
     borderWidth: 1,
     height: 40
   }
})