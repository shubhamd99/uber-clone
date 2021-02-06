import React from 'react'
import { View, Text } from 'react-native';
import HomeMap from "../../components/HomeMap";
import UberTypes from '../../components/UberTypes';

const TripsScreen = () => {
    return (
        <View>
            <HomeMap height={300} />
            <UberTypes />
        </View>
    )
}

export default TripsScreen;
