import React from 'react'
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeMap = () => {
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            >
        </MapView>
    )
};

export default HomeMap;

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%"
    }
});
