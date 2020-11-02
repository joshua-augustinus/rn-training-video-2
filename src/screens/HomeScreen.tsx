import { ScreenProps } from '@src/types';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { SafeAreaView } from 'react-navigation';
import VideoPlayer from 'react-native-video-controls';
import { FakeText } from '@src/components/FakeText';
import { FlatList } from 'react-native-gesture-handler';
import { getFakeData } from '@src/util/fakeDataUtil';
import { SmallVideoContainer } from '@src/components/SmallVideoContainer';



const VIDEO_URL = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";

const keyExtractor = (item: any) => {
    return item.id.toString();
}

const HomeScreen = (props: ScreenProps) => {

    const renderItem = ({ item }: { item: any }) => {
        if (item.id === 20) {
            return (
                <SmallVideoContainer navigation={props.navigation} />
            )
        } else {
            return <FakeText />
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList renderItem={renderItem} keyExtractor={keyExtractor} data={getFakeData()} />
        </SafeAreaView>

    );

}


export { HomeScreen };