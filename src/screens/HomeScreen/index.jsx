import React from "react";
import { Text, View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";

const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <CovidMessage />
            {/* <Text>Home Screen</Text> */}
        </View>
    )
}

export default HomeScreen;
