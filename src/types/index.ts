import { NavigationStackProp } from "react-navigation-stack";

export interface NavigationOptions {
    headerStyle: any,
    headerLeft: () => React.ReactNode,
    headerRight: () => React.ReactNode,
    headerTitle: string
}

export interface ScreenProps {
    navigation: NavigationStackProp<{}>;
}