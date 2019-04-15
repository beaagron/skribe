import React from 'react'
import {
    Animated, Easing
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'

import ScheduleScreen from './components/AppStack/ScheduleScreen'
import ClassesScreen from './components/AppStack/ClassesScreen'
import ProfileScreen from './components/AppStack/ProfileScreen'

import PhotoScreen from './components/PhotoScreen'

import Camera from './components/Camera'

import NewClass from './components/NewClass'
import ClassDetail from './components/ClassDetail'
import FolderDetail from './components/FolderDetail'

import ProfileSettings from './components/ProfileSettings'

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: ScheduleScreen,
    },
    Camera: {
        //screen: CameraScreen,
        screen: Camera,
        navigationOptions: {
            header: null,
        },
    },
    Photo: {
        screen: PhotoScreen,
    },
})

ScheduleStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index == 1 || navigation.state.index == 2) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const ClassesStack = createStackNavigator({
    Classes: {
        screen: ClassesScreen,
    },
    Class: {
        screen: ClassDetail,
    },
    Folder: {
        screen: FolderDetail,
    },
    NewClass: {
        screen: NewClass,
        navigationOptions: {
            mode: 'modal'
        }
    }
})

const ProfileStack = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Settings: {
        screen: ProfileSettings,
    },
})

const AppStack = createBottomTabNavigator({
    Schedule: {
        screen: ScheduleStack,
        navigationOptions: {
            tabBarLabel: 'To Do',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-calendar" color={tintColor} size={24} />
            ),
        },
    },
    Classes: {
        screen: ClassesStack,
        navigationOptions: {
            tabBarLabel: 'Classes',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-albums" color={tintColor} size={24} />
            ),
        },
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-person" color={tintColor} size={24} />
            ),
        },
    },
})

const App = createAppContainer(AppStack)

export default App
