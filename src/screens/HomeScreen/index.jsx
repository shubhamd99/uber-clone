import React from "react";
import { View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import styles from "./styles";

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.map}>
                <HomeMap />
            </View>
            <View style={styles.bottomContainer}>
                <CovidMessage />
                <HomeSearch />
            </View>
        </View>
    )
}

export default HomeScreen;
