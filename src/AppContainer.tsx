import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { getEmptyNavigationOptions, getNavigationOptions } from './HeaderHelper';
import { FullVideoScreen } from './screens/FullVideoScreen';
import { HomeScreen } from './screens/HomeScreen';

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