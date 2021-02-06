import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './styles';
import AntDesign from "react-native-vector-icons/AntDesign";

const StopSignImage = require("../../assets/stop.png");

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Help flatten the curve if you must travel, please exercise caution for your safety and the safety of our community.</Text>
            <View style={styles.learnMoreTextContainer}>
                <Text style={styles.learnMoreText}>Learn More</Text>
                <AntDesign style={styles.icon} name="arrowright" size={15} />
            </View>
            <View style={styles.stopSignImage} />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={StopSignImage} />
            </View>
            <View style={styles.triangleCorner} />
        </View>
    )
}

export default CovidMessage;
