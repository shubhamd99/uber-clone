/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import { StatusBar, PermissionsAndroid, Platform } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import TripsScreen from "./src/screens/TripsScreen";
import DestinationScreen from "./src/screens/DestinationScreen";
import Geolocation from "@react-native-community/geolocation";

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
      <HomeScreen />
      {/* <DestinationScreen /> */}
      {/* <TripsScreen /> */}
    </>
  );
};

export default App;
