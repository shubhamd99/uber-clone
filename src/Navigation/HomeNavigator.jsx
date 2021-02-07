import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationScreen';
import TripsScreen from '../screens/TripsScreen';

// const Stack = createStackNavigator();

// This navigator uses the native APIs UINavigationController on iOS and Fragment on Android so that navigation
// built with createNativeStackNavigator will behave exactly the same and have the same performance characteristics
// as apps built natively on top of those APIs.
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} />
            <Stack.Screen name={"TripsScreen"} component={TripsScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator
