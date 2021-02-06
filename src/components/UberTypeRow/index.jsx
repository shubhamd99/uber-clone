import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from '../../constants/Colors';

const UberTypeRow = (props) => {
    const { type } = props;

    const getImageUrl = () => {
        if (type.type === "UberX") {
            return require("../../assets/cars/UberX.jpeg");
        } else if (type.type === "Comfort") {
            return require("../../assets/cars/Comfort.jpeg");
        } else if (type.type === "UberXL") {
            return require("../../assets/cars/UberXL.jpeg");
        }
        return require("../../assets/cars/UberX.jpeg");
    }

    return (
        <View
        style={[
            styles.container,
            { backgroundColor: type.selected ? Colors.lightGrey : Colors.white,
            borderBottomColor: type.selected ? Colors.lightGrey : Colors.mediumGrey }
        ]}
        >
            <Image
                style={styles.image}
                source={getImageUrl()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{" "}
                    <Ionicons name="person" size={16} />
                    {" "}3
                </Text>
                <Text style={styles.time}>8.03PM droff off</Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name="pricetag" size={12} color={Colors.green} />
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </View>
    )
}

export default UberTypeRow;
