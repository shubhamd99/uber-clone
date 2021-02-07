import React, { useEffect, useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from '../../constants/Colors';

import Env from "../../constants/Env";

const GOOGLE_API_KEY = Env.GOOGLE_MAPS_APIKEY;

const DestinationScreen = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.log("redirect to result..")
        }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.verticalLineContainer}>
                    <View style={styles.circle} />
                    <View style={styles.verticalLine} />
                    <View style={styles.rectangle} />
                </View>
                <View style={styles.flexRow}>
                    <GooglePlacesAutocomplete
                        styles={{
                           
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 50 },
                            container: {
                                flex: 0,
                                zIndex: 2,
                            }
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
                    />
                    <GooglePlacesAutocomplete
                        styles={{
                            textInput: styles.textInput,
                            listView: { position: "absolute", top: 50 },
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
