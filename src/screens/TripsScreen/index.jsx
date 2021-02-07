import React from 'react'
import { View, Pressable } from 'react-native';
import RouteMap from '../../components/RouteMap';
import { useNavigation } from "@react-navigation/native";
import UberTypes from '../../components/UberTypes';
import styles from './styles';
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from '../../constants/Colors';

const TripsScreen = () => {
    const route = useRoute();
    const { originPlace, destinationPlace } = route.params;

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View>
            <Pressable style={styles.floatTopButton} onPress={goBack}>
                <Ionicons name="arrow-back" size={30} color={Colors.blackGrey}/>
            </Pressable>
            <View style={styles.mapContainer}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            <View style={styles.bottomContainer}>
                <UberTypes />
            </View>
        </View>
    )
}

export default TripsScreen;
