import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import ListCard from '../ListCard'
import SquareCard from '../SquareCard'

class ClassesScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >

        {/* !Post Call */}

          <View style={styles.titleBar}>
            <Image style={styles.avatar} source={require('../../assets/huy.jpg')} />
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.name}>Huy Pham</Text>   
          </View>

          <Text style={styles.subTitle}>
            Your classes
          </Text>

          <SafeAreaView
            style={styles.classes}
          >
            <ListCard 
              title="CS2336" 
              color="#E8384F" 
              desc="Introduction to Computer Science 2"
            />
            <ListCard 
              title="CS2305" 
              color="#FD612C" 
              desc="Discrete Mathematics"
            />
            <ListCard 
              title="MATH2418" 
              color="#A4CF30"
              desc="Linear Algebra" 
            />
            <ListCard 
              title="MATH2419" 
              color="#62D26F" 
              desc="Calculus 2"
            />
            <ListCard 
              title="PHIL1301" 
              color="#4186E0" 
              desc="Intro to Philosophy"
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default ClassesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  cover: {

  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 22,
    marginLeft: 30,
    position: 'absolute',
    top: 0,
    left: 0
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
  subTitle: {
    fontSize: 15,
    fontFamily: 'Avenir Next',
    color: '#b8bece',
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 25,
    textTransform: 'uppercase'
  },
  name: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    color: '#3c4560',
    fontWeight: '700',
    marginTop: -3
  },
  classes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});