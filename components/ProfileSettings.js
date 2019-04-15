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
               nameValue: 'Huy Pham',
               usernameValue: '@huypham50',
               emailValue: 'testEmail@gmail.com'
          };
     }

     render() {

          const { navigate } = this.props.navigation;

          return (
               <View style={styles.container}>
                    <View style={styles.titleBar}>
                         <Image style={styles.avatar} source={require('../assets/huy.jpg')} />
                         <View style={styles.editLineContainer}>
                              <Text style={styles.name}>Name</Text>
                              <TextInput
                                   placeholderTextColor='#b8bece'
                                   style={styles.title}
                                   onChangeText={(nameValue) => this.setState({ nameValue })}
                                   value={this.state.nameValue}
                              />
                         </View>
                         <View style={styles.editLineContainer}>
                              <Text style={styles.name}>Username</Text>
                              <TextInput
                                   placeholderTextColor='#b8bece'
                                   style={styles.title}
                                   onChangeText={(usernameValue) => this.setState({ usernameValue })}
                                   value={this.state.usernameValue}
                              />
                         </View>
                         <View style={styles.editLineContainer}>
                              <Text style={styles.name}>Email</Text>
                              <TextInput
                                   placeholderTextColor='#b8bece'
                                   style={styles.title}
                                   onChangeText={(emailValue) => this.setState({ emailValue})}
                                   value={this.state.emailValue}
                              />
                         </View>
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
     editLineContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly'
     },
     text: {
          fontFamily: 'Avenir Next',
          fontSize: 20,
     },
     button: {
          marginTop: 30,
          backgroundColor: '#62D26F',
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
          flex: 2.75,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
          fontSize: 16,
          fontFamily: 'Avenir Next',
          color: '#b8bece',
          fontWeight: '500',
          paddingHorizontal: 15,

     },
     name: {
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          fontSize: 20,
          fontFamily: 'Avenir Next',
          color: '#3c4560',
          fontWeight: '700',
          paddingTop: 5,
          marginLeft: 20
     },
})
