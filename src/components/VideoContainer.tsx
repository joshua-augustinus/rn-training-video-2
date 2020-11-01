// Load the module

import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.


const VIDEO_URL = "https://filesamples.com/samples/video/mp4/sample_1280x720.mp4";

const VideoContainer = () => {
    const onBuffer = () => { }
    const videoError = () => { }

    return (

        <Video source={{ uri: VIDEO_URL }}
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
        backgroundColor: 'blue'
    },
});