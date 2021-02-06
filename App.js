/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import TripsScreen from "./src/screens/TripsScreen";
import DestinationScreen from "./src/screens/DestinationScreen";

const App = () => {
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
