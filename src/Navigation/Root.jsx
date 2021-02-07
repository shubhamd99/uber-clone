import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationScreen';
import TripsScreen from '../screens/TripsScreen';

const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(255, 255, 255)",
    },
};

const RootNavigator = () => {
    return (
        <NavigationContainer theme={MyTheme}>
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
        </NavigationContainer>
    )
}

export default RootNavigator;
