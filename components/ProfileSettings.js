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
     render() {

          const { navigate } = this.props.navigation;

          return (
               <View style={styles.container}>
                    {/* <View style={styles.titleBar}>
                         <Image style={styles.avatar} source={require('../assets/huy.jpg')} />
                         <Text style={styles.name}>Huy Pham</Text>
                         <Text style={styles.title}>@huypham50</Text>
                    </View>

                    <TextInput
                         placeholder="Edit name"
                         placeholderTextColor='black'
                         fontFamily='15'
                         style={styles.text}
                    /> */}

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
          justifyContent: 'center',
          alignItems: 'center'
     },
     text: {
          fontFamily: 'Avenir Next',
          fontSize: 20,
     },
     button: {
          backgroundColor: '#FD612C',
          paddingVertical: 15,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
     },
     buttonText: {
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
          fontFamily: 'Avenir Next'
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
		fontSize: 20,
		fontFamily: 'Avenir Next',
		color: '#3c4560',
		fontWeight: '700',
		paddingTop: 5
	},
})