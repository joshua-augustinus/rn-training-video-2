import { ScreenProps } from '@src/types';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { SafeAreaView } from 'react-navigation';
import VideoPlayer from 'react-native-video-controls';



const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";


const HomeScreen = (props: ScreenProps) => {
    const videoPlayerRef = useRef(null);
    const [nonVideoStyle, setNonVideoStyle]: any = useState(styles.normal);
    const [paused, setPaused] = useState(false);

    const onUnmount = (currentTime: number) => {
        console.log("Unmount", currentTime);
        //videoPlayerRef.current.seekTo(currentTime);
        setPaused(false);
    }

    const onEnterFullScreen = () => {
        setPaused(true);
        const startTime = videoPlayerRef.current.state.currentTime;
        props.navigation.navigate("FullVideo", { onUnmount: onUnmount, startTime: startTime });
    }

    const onExitFullScreen = () => {
        Orientation.lockToPortrait();
        setNonVideoStyle(styles.normal);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={nonVideoStyle}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <VideoPlayer ref={videoPlayerRef}
                    source={{ uri: VIDEO_URL }} paused={paused}
                    onExitFullscreen={onExitFullScreen} controls={false}
                    onEnterFullscreen={onEnterFullScreen}

                    style={styles.backgroundVideo} />
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
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black'
    },
});


export { HomeScreen };