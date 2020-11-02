import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import { FullVideoContainer } from './components/FullVideoContainer';
import { VideoContainer } from './components/VideoContainer';
import { getEmptyNavigationOptions, getNavigationOptions } from './HeaderHelper';

interface Props {
    navigation: NavigationStackProp<{}>;
}

const HomeScreen = (props:Props) => {

    const [nonVideoStyle, setNonVideoStyle]: any = useState(styles.normal);

    const onEnterFullscreen = () => {
        console.log("FULL SCREEN");
        
      
        props.navigation.navigate("FullVideo");
    }

    const onExitFullscreen = () => {
        Orientation.lockToPortrait();
        setNonVideoStyle(styles.normal);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={nonVideoStyle}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <VideoContainer onEnterFullScreen={onEnterFullscreen} onExitFullScreen={onExitFullscreen} />
            </View>
            <View style={nonVideoStyle}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </SafeAreaView>

    );

}

// Later on in your styles..
var styles = StyleSheet.create({
    collapsed: {
        height: 0
    },
    normal: {
        flex: 1
    }
});


const FullVideoScreen = (props: Props) => {

    return <SafeAreaView style={{ flex: 1 }}><FullVideoContainer navigation={props.navigation}/></SafeAreaView>

}


const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return getNavigationOptions(navigation);
        }
    },
    FullVideo:{
        screen:FullVideoScreen,
        navigationOptions:({navigation})=>{
            return getEmptyNavigationOptions();
        }
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };