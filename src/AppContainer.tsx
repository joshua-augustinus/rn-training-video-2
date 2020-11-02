import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
import { FakeText } from './components/FakeText';
import { FullVideoContainer } from './components/FullVideoContainer';
import { VideoContainer } from './components/VideoContainer';
import { getEmptyNavigationOptions, getNavigationOptions } from './HeaderHelper';
import { getFakeData } from './util/fakeDataUtil';

interface Props {
    navigation: NavigationStackProp<{}>;
}

const keyExtractor = (item: any) => {
    return item.id.toString();
}

const HomeScreen = (props: Props) => {

    const onEnterFullscreen = () => {
        props.navigation.navigate("FullVideo");
    }


    const renderItem = ({ item }: { item: any }) => {

        if (item.id === 20) {
            console.log("render video");
            return (
                <View style={{ height: 500, alignItems: 'center', justifyContent: 'center' }}>
                    <VideoContainer onEnterFullScreen={onEnterFullscreen} />
                </View>)
        } else {
            return <FakeText />
        }

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={getFakeData()} renderItem={renderItem} keyExtractor={keyExtractor} />
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

    return <SafeAreaView style={{ flex: 1 }}><FullVideoContainer navigation={props.navigation} /></SafeAreaView>

}


const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return getNavigationOptions(navigation);
        }
    },
    FullVideo: {
        screen: FullVideoScreen,
        navigationOptions: ({ navigation }) => {
            return getEmptyNavigationOptions();
        }
    }
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };