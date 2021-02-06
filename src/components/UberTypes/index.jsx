import React from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import UberTypeRow from '../UberTypeRow';
import styles from './styles';
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from '../../constants/Colors';

import typesData from "../../assets/data/types";

const UberTypes = () => {

    const confirm = () => {
        console.log("Confirmed");
    }

    return (
        <View style={styles.container}>
            <View style={styles.flexCenter}>
                <View style={styles.horizontalClip} />
                <View style={styles.promoCodeContainer}>
                    <Ionicons name="pricetag" size={15} color={Colors.green} />
                    <Text style={styles.promoText}>40% off promotion applied</Text>
                </View>
            </View>
            <FlatList
                style={{ height: 350 }}
                data={typesData}
                renderItem={({ item }) => <UberTypeRow type={item} />}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.paymentRow}>
                <View style={styles.iconContainer}>
                    <View style={styles.roundIcon}>
                        <Ionicons name="person" size={16} color={Colors.white} />
                    </View>
                    <View style={styles.personLockIconContainer}>
                        <Ionicons name="lock-closed-sharp" size={12} color={Colors.black}
                        style={styles.lockIcon} />
                    </View>
                </View>
                <View style={styles.middlePaymentContainer}>
                    <Text style={styles.paymentType}>Personal</Text>
                    <Text style={styles.paymentCard}>Visa 007</Text>
                </View>
                <View style={styles.rightPaymentContainer}>
                    <Ionicons name="ios-close" size={25} color={Colors.darkGrey} />
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Pressable onPress={confirm} style={styles.submitButton}>
                    <Text style={styles.buttonText}>Confirm Uber</Text>
                </Pressable>
                <View style={styles.driveTimeContainer}>
                    <Ionicons name="car-sport-sharp" size={25} color={Colors.black} />
                </View>
            </View>
        </View>
    )
}

export default UberTypes;
