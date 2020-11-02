// Load the module

import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import { NavigationStackProp } from 'react-navigation-stack';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.


const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

interface Props {
    navigation: NavigationStackProp<{ onUnmount: (currentTime: number) => void }>;
}

const FullVideoContainer = (props: Props) => {
    const [paused, setPaused] = useState(false);
    const videoPlayerRef = useRef(null);
    const onUnmount = props.navigation.getParam('onUnmount', () => { });
    const startTime = props.navigation.getParam('startTime', 0);
    const onBuffer = () => { }
    const videoError = () => { }

    useEffect(() => {

        Orientation.lockToLandscapeLeft();

        return () => {
            Orientation.lockToPortrait();
            const currentTime = videoPlayerRef.current.state.currentTime;
            console.log("currentTime", currentTime);
            onUnmount(currentTime);
        }
    }, [])

    const onExitFullScreen = () => {
        setPaused(true);//needed
        props.navigation.goBack();
    }

    const onLoad = () => {
        //Seeks to seconds
        videoPlayerRef.current.seekTo(startTime);
    }

    return (

        <VideoPlayer ref={videoPlayerRef} onLoad={onLoad} source={{ uri: VIDEO_URL }} disableBack={true}
            onExitFullscreen={onExitFullScreen}
            isFullScreen={true}
            onBuffer={onBuffer}
            onError={videoError}
            style={styles.backgroundVideo} />
    )
}

export { FullVideoContainer }

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black'
    },
});