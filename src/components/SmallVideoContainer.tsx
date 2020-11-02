import { ScreenProps } from '@src/types';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";



const SmallVideoContainer = React.memo((props: ScreenProps) => {
    const stateRef = useRef({ currentTime: 0 });
    const videoPlayerRef = useRef(null);
    const [paused, setPaused] = useState(true);

    /**
     * Tihs gets called when full screen video unmounts
     */
    const onUnmount = (currentTime: number) => {
        console.log("Unmount", currentTime);

        stateRef.current.currentTime = currentTime;
        videoPlayerRef.current.seekTo(stateRef.current.currentTime, true);
    }

    const onEnterFullScreen = () => {
        pauseVideo();
        const startTime = videoPlayerRef.current.state.currentTime;
        props.navigation.navigate("FullVideo", { onUnmount: onUnmount, startTime: startTime });
    }

    const pauseVideo = () => {
        if (!videoPlayerRef.current.state.paused) {
            videoPlayerRef.current._togglePlayPause();
        }
    }

    const onLoad = () => {
        console.log("Loaded");
        if (stateRef.current.currentTime > 1) {
            videoPlayerRef.current.seekTo(stateRef.current.currentTime, true);
        }
    }

    useEffect(() => {
        console.log("SmallVideo mounted");
        return () => {
            console.log("SmallVideo unmounted");
        }
    }, [])


    return (
        <View style={styles.videoContainer}>
            <VideoPlayer ref={videoPlayerRef} onLoad={onLoad}
                source={{ uri: VIDEO_URL }} paused={paused}
                controls={false}
                onEnterFullscreen={onEnterFullScreen}

                style={styles.backgroundVideo} />
        </View>

    );

});

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
    videoContainer: { height: 500, alignItems: 'center', justifyContent: 'center' }
});


export { SmallVideoContainer };