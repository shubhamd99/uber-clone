import React from 'react'
import { View, Text } from 'react-native';
import HomeMap from "../../components/HomeMap";
import UberTypes from '../../components/UberTypes';
import styles from './styles';

const TripsScreen = () => {
    return (
        <View>
            <View style={styles.mapContainer}>
                <HomeMap />
            </View>
            <View style={styles.bottomContainer}>
                <UberTypes />
            </View>
        </View>
    )
}

export default TripsScreen;
