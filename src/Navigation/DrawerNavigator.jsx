import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{props.name}</Text>
    </View>
)

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" options={{ title: "Your Trips" }} component={HomeNavigator} />

            <Drawer.Screen name="Help">
                {() => <DummyScreen name="Help" />}
            </Drawer.Screen>
            <Drawer.Screen name="Wallets">
                {() => <DummyScreen name="Wallets" />}
            </Drawer.Screen>
            <Drawer.Screen name="Settings">
                {() => <DummyScreen name="Settings" />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
