import React from 'react'
import { View, Text } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import Colors from '../../constants/Colors';
import styles from './styles';

const PlaceRow = ({ data }) => {
    return (
        <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: (data.description === "Home" || data.description === "Work") ? Colors.lightBlue : "#A4A4A4" } ]}>
                {(data.description === "Home" || data.description === "Work")
                ? (data.description === "Work" ? <Entypo name="briefcase" size={20} color={Colors.white}/> : <Entypo name="home" size={20} color={Colors.white}/>)
                : <Entypo name="location-pin" size={20} color={Colors.white} />}
            </View>
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    )
}

export default PlaceRow;
