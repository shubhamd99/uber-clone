import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Colors from '../../constants/Colors';

import Env from "../../constants/Env";

const RouteMap = () => {

    const origin = { latitude: 28.450527, longitude: -16.263045 };
    const destination = { latitude: 28.460127, longitude: -16.269045 };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            initialRegion={{
                latitude: 28.460127,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
            >
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    strokeWidth={3}
                    strokeColor={Colors.black}
                    apikey={Env.GOOGLE_MAPS_APIKEY}
                />
                <Marker
                    coordinate={origin}
                    title={"Origin"}
                >
                    <View style={styles.markerRound}>
                        <View style={styles.markerCircle} />
                    </View>
                </Marker>
                <Marker
                    coordinate={destination}
                    title={"Destination"}
                >
                    <View style={styles.markerRectangle}>
                        <View style={styles.markerCircle} />
                    </View>
                </Marker>
        </MapView>
    )
};

export default RouteMap;

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    markerRound: {
        alignItems: "center",
        justifyContent: "center",
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: Colors.black,
    },
    markerRectangle: {
        alignItems: "center",
        justifyContent: "center",
        width: 15,
        height: 15,
        backgroundColor: Colors.black,
    },
    markerCircle: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: Colors.white
    }
});
