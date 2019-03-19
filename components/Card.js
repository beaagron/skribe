import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const _margin = 16;
const _borderRadius = 5;
const _width = Dimensions.get("window").width / 2 - _margin * 2

class Card extends Component {
     render() {
          const { title, color, desc } = this.props
          return(
               <View 
                    style={[styles.container, {backgroundColor: color}]}
               >
                    <View style={styles.cover}>
                         <Text style={styles.title}>
                              {title}
                         </Text>
                         <Text style={styles.desc}>
                              {desc}
                         </Text>
                    </View>
               </View>
          )
     }
}

export default Card;

const styles = StyleSheet.create({
     container: {
          // backgroundColor: 'rgb(255, 45, 18)',
          width: _width,
          height: _width,
          borderRadius: _borderRadius,
          marginTop: 20,

          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,

          elevation: 5,
     },
     cover: {

     },
     title: {
          fontSize: 16,
          color: 'white',
          fontWeight: '600',
          margin: 10,
          marginBottom: 5
     },
     desc: {
          fontSize: 14,
          color: 'white',
          marginLeft: 10,
          marginRight: 10,
          fontWeight: '500'
     }
});