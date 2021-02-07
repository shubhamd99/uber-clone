import React from "react";
import { Pressable, View } from "react-native";
import CovidMessage from "../../components/CovidMessage";
import HomeMap from "../../components/HomeMap";
import HomeSearch from "../../components/HomeSearch";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../../constants/Colors";

const HomeScreen = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <View>
            <Pressable style={styles.floatTopButton} onPress={openDrawer}>
                <EvilIcons name="navicon" size={40} color={Colors.blackGrey}/>
            </Pressable>
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
