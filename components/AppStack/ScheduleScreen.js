// import React from "react";
// import { 
//     Text, 
//     View, 
//     TouchableOpacity,
//     Image
// } from "react-native";
// import { 
//     Camera, 
//     Permissions 
// } from "expo";

// export default class CameraExample extends React.Component {
//     state = {
//         hasCameraPermission: null,
//         type: Camera.Constants.Type.back
//     };

//     async componentDidMount() {
//         const { status } = await Permissions.askAsync(Permissions.CAMERA);
//         this.setState({ hasCameraPermission: status === "granted" });
//     }

//     render() {
//         const { hasCameraPermission } = this.state;
//         if (hasCameraPermission === null) {
//             return <View />;
//         } else if (hasCameraPermission === false) {
//             return <Text>No access to camera</Text>;
//         } else {
//             return (
//                 <View style={{ flex: 1 }}>
//                     <Camera style={{ flex: 1 }} type={this.state.type}>
//                         <View
//                             style={{
//                                 flex: 1,
//                                 backgroundColor: "transparent",
//                                 flexDirection: "row"
//                             }}
//                         >
//                             <TouchableOpacity
//                                 style={{
//                                     flex: 0.1,
//                                     alignSelf: "flex-end",
//                                     alignItems: "center"
//                                 }}
//                                 onPress={() => {
//                                     this.setState({
//                                         type:
//                                             this.state.type === Camera.Constants.Type.back
//                                                 ? Camera.Constants.Type.front
//                                                 : Camera.Constants.Type.back
//                                     });
//                                 }}
//                             >
//                                 <Text
//                                     style={{ fontSize: 18, marginBottom: 10, color: "white" }}
//                                 >
//                                     {" "}
//                                     Flip{" "}
//                                 </Text>
//                             </TouchableOpacity>

//                             {/* Snap */}
//                             <TouchableOpacity
//                                 style={{
//                                     flex: 1,
//                                     alignSelf: "flex-end",
//                                     alignItems: "center",
//                                     justifyContent: 'center',
//                                 }}
//                                 onPress={() => {
//                                     if (this.camera) {
//                                         let photo = this.camera.takePictureAsync();
//                                         console.log(photo)
//                                     }
//                                 }}
//                             >
//                                 <Image
//                                     style={{
//                                        height: 60,
//                                        width: 60 
//                                     }}
//                                     source={{uri: 'http://icons.iconarchive.com/icons/martz90/circle/256/video-camera-icon.png'}}
//                                 />
//                             </TouchableOpacity>

//                             <TouchableOpacity
//                                 style={{
//                                     flex: 0.1,
//                                     alignSelf: "flex-end",
//                                     alignItems: "center"
//                                 }}
//                                 onPress={() => {
//                                     this.setState({
//                                         type:
//                                             this.state.type === Camera.Constants.Type.back
//                                                 ? Camera.Constants.Type.front
//                                                 : Camera.Constants.Type.back
//                                     });
//                                 }}
//                             >
//                                 <Text
//                                     style={{ fontSize: 18, marginBottom: 10, color: "white" }}
//                                 >
//                                     {" "}
//                                     Flip{" "}
//                                 </Text>
//                             </TouchableOpacity>

//                         </View>
//                     </Camera>
//                 </View>
//             );
//         }
//     }
// }

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

class ScheduleScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.newButtonContainer}>
                        <Ionicons name="ios-add-circle" size={60} color="#62D26F" />
                    </TouchableOpacity>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Your To Do List:</Text>
                    </View>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Quick Search"
                            placeholderTextColor='grey'
                            autoCorrect={false}

                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ScheduleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    newButtonContainer: {
        marginTop: 20,
        paddingLeft: 295
    },
    headerContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    headerText: {
        fontFamily: 'Avenir Next',
        fontSize: 24,
        fontWeight: '700'
    },
    searchContainer: {
        paddingVertical: 20,
        alignContent: 'center'
    },
    searchBar: {
        height: 40,
        backgroundColor: '#F2F2F2',
        color: 'black',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 5,
        fontFamily: 'Avenir Next'
    }
})