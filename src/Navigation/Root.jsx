import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

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
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator;
