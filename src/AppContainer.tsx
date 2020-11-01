import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { VideoContainer } from './components/VideoContainer';
import { getNavigationOptions } from './HeaderHelper';



class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <VideoContainer/>
                </View>
            </SafeAreaView>

        );
    }
}

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
            return getNavigationOptions(navigation);
        }
    },
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };