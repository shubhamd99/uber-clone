import React from "react";
import { View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = () => {
    return (
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen;
