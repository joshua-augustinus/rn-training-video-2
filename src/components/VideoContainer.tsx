// Load the module

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.


const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

interface Props {
    onEnterFullScreen: () => void,

}

const VideoContainer = (props: Props) => {
    const [paused, setPaused] = useState(true);

    const onBuffer = () => { }
    const videoError = () => { }

    const onEnterFullScreen = () => {
        setPaused(true);
        props.onEnterFullScreen();
    }


    return (

        <VideoPlayer source={{ uri: VIDEO_URL }} paused={paused}
            controls={false}
            onEnterFullscreen={onEnterFullScreen}
            onBuffer={onBuffer}
            onError={videoError}
            style={styles.backgroundVideo} />
    )
}

export { VideoContainer }

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