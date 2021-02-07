import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Colors from '../../constants/Colors';

import Env from "../../constants/Env";

const RouteMap = ({ origin, destination }) => {

    // console.log(origin.details.geometry.location, destination.details.geometry.location);

    const originLoc = origin ? {
            latitude: origin.details.geometry.location.lat,
            longitude: origin.details.geometry.location.lng,
        } : { latitude: 28.450527, longitude: -16.263045 };
    const destinationLoc = destination ? {
            latitude: destination.details.geometry.location.lat,
            longitude: destination.details.geometry.location.lng,
        } : { latitude: 28.460127, longitude: -16.269045 };

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            showsUserLocation
            initialRegion={{
                latitude: originLoc.latitude,
                longitude: originLoc.longitude,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
            >
                <MapViewDirections
                    origin={originLoc}
                    destination={destinationLoc}
                    strokeWidth={3}
                    strokeColor={Colors.black}
                    apikey={Env.GOOGLE_MAPS_APIKEY}
                />
                <Marker
                    coordinate={originLoc}
                    title={"Origin"}
                >
                    <View style={styles.markerRound}>
                        <View style={styles.markerCircle} />
                    </View>
                </Marker>
                <Marker
                    coordinate={destinationLoc}
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
