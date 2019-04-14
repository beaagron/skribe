import React, { Component } from 'react';
import {
     StyleSheet,
     Text,
     View, Image,
     ScrollView,
     TouchableOpacity,
     SegmentedControlIOS,
     SafeAreaView,
     Button,
     TextInput
} from 'react-native';

class ProfileSettings extends Component {

     constructor(props) {
          super(props);
          this.state = {
               name: 'Huy Pham'
          };
     }

     render() {

          const { navigate } = this.props.navigation;

          return (
               <View style={styles.container}>
                    <View style={styles.titleBar}>
                         <Image style={styles.avatar} source={require('../assets/huy.jpg')} />
                         <Text style={styles.name}>Name</Text>
                         <TextInput
                              placeholder="Huy Pham"
                              placeholderTextColor='#b8bece'
                              style={styles.title}
                         />
                         <Text style={styles.name}>Username</Text>
                         <TextInput
                              placeholder="@huypham50"
                              placeholderTextColor='#b8bece'
                              style={styles.title}
                         />
                         <Text style={styles.name}>Email</Text>
                         <TextInput
                              placeholder="testEmail@gmail.com"
                              placeholderTextColor='#b8bece'
                              style={styles.title}
                         />
                    </View>
                         <TouchableOpacity
                              style={styles.button}
                              onPress={() => navigate('Profile')}>
                              <Text style={styles.buttonText}>Save changes</Text>
                         </TouchableOpacity>

               </View>
          )
     }
}

export default ProfileSettings;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'rgb(255, 255, 255)'
     },
     text: {
          fontFamily: 'Avenir Next',
          fontSize: 20,
     },
     button: {
          marginTop: 30,
          backgroundColor: '#E8384F',
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 20,
          marginBottom: 10,
          paddingHorizontal: 20,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center'
     },
     buttonText: {
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          fontFamily: 'Avenir Next',
          fontWeight: '500'
     },
     avatar: {
          width: 80,
          height: 80,
          backgroundColor: 'black',
          borderRadius: 40,
     },
     titleBar: {
          width: '100%',
          marginTop: 15,
          justifyContent: 'center',
          alignItems: 'center',
     },
     title: {
          fontSize: 16,
          fontFamily: 'Avenir Next',
          color: '#b8bece',
          fontWeight: '500',
     },
     name: {
          marginTop: 15,
          fontSize: 20,
          fontFamily: 'Avenir Next',
          color: '#3c4560',
          fontWeight: '700',
          paddingTop: 5
     },
})