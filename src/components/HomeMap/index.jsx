import React from 'react'
import { StyleSheet, Image, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import cars from "../../assets/data/cars" 

const HomeMap = () => {

    const getImageUrl = (type) => {
        if (type === "UberX") {
            return require("../../assets/cars/top-UberX.png");
        } else if (type === "Comfort") {
            return require("../../assets/cars/top-Comfort.png");
        } else if (type === "UberXL") {
            return require("../../assets/cars/top-UberXL.png");
        }
        return require("../../assets/cars/UberX.jpeg");
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
            >
                {cars.map((car) => (
                    <Marker
                        key={car.id}
                        coordinate={{ latitude: car.latitude, longitude: car.longitude }}
                    >
                        <Image style={styles.marker} source={getImageUrl(car.type)} />
                    </Marker>
                ))}
        </MapView>
    )
};

export default HomeMap;

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    marker: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    }
});
