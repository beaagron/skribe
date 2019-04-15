import React from 'react';

import {
   createStackNavigator,
   createSwitchNavigator,
   createBottomTabNavigator,
   createAppContainer
} from 'react-navigation'

import ScheduleScreen from '.AppStack/ScheduleScreen';
import ClassScreen from './AppStack/ClassScreen';
import ProfileScreen from './AppStack/ProfileScreen';
import ListCard from './ListCard'

const AppStack = createBottomTabNavigator({
   Schedule: ScheduleScreen,
   Class: ClassScreen,
   Profile: ProfileScreen
})

const App = createAppContainer({
   AppStack
})

export default App;