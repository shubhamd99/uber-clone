/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { useEffect } from "react";
import { StatusBar, PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import RootNavigator from './src/Navigation/Root';

enableScreens();

// If you need to have geolocation API aligned with the browser (cross-platform apps),
// or want to support backward compatibility
navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === "android") {
        requestLocationPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []); // Empty array means it will run only on component mount

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default App;
