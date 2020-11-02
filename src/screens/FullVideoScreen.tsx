import { FullVideoContainer } from "@src/components/FullVideoContainer"
import React from "react"
import { SafeAreaView } from "react-navigation"
import { NavigationStackProp } from "react-navigation-stack"

interface Props {
    navigation: NavigationStackProp<{ onUnmount: (currentTime: number) => void }>;
}

const FullVideoScreen = (props: Props) => {

    return <SafeAreaView style={{ flex: 1 }}><FullVideoContainer navigation={props.navigation} /></SafeAreaView>

}

export { FullVideoScreen }
