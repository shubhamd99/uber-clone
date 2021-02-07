import React, { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from '../../constants/Colors';
import PlaceRow from './PlaceRow';
import { useNavigation } from "@react-navigation/native";

import Env from "../../constants/Env";

const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.4940881 } },
};

const GOOGLE_API_KEY = Env.GOOGLE_MAPS_APIKEY;

const DestinationScreen = () => {

    const navigation = useNavigation();

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        // When user enter both Origin and Destination address, we will redirect him to the Trips Screen
        if (originPlace && destinationPlace) {
            navigation.navigate("TripsScreen", { 
                originPlace,
                destinationPlace,
             });
        }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <View style={styles.circle} />
                    <View style={styles.verticalLine} />
                    <View style={styles.rectangle} />
                </View>
                <View style={styles.flexRow}>
                    <GooglePlacesAutocomplete
                        enablePoweredByContainer={false}
                        currentLocation={true}
                        currentLocationLabel={"Current Location"}
                        styles={{
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 130 },
                            container: {
                                flex: 0,
                                zIndex: 2,
                            },
                        }}
                        placeholder='Where From'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            setOriginPlace({ data, details });
                        }}
                        query={{
                            key: GOOGLE_API_KEY,
                            language: 'en',
                        }}
                        renderRow={(data) => <PlaceRow data={data} />}
                        renderDescription={(data) => data.description || data.vicinity}
                        predefinedPlaces={[homePlace, workPlace]}
                    />
                    <GooglePlacesAutocomplete
                        enablePoweredByContainer={false}
                        currentLocation={true}
                        currentLocationLabel={"Current Location"}
                        styles={{
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 80 },
                            container: {
                                flex: 0,
                            }
                        }}
                        placeholder='Where To?'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            setDestinationPlace({ data, details });
                        }}
                        query={{
                            key: GOOGLE_API_KEY,
                            language: 'en',
                        }}
                        renderRow={(data) => <PlaceRow data={data} />}
                        renderDescription={(data) => data.description || data.vicinity}
                        predefinedPlaces={[homePlace, workPlace]}
                    />
                </View>
                <View style={styles.sideContainer}>
                    <AntDesign name="plus" size={25} color={Colors.darkGrey} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DestinationScreen;
