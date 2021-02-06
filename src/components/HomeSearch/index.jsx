import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../../constants/Colors';

const HomeSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flexCenter}>
                <View style={styles.horizontalClip} />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name="clockcircle" size={20} color={Colors.darkGrey} />
                    <Text>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={16} />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={20} color={Colors.background} />
                </View>
                <Text style={styles.destinationText}>Outer Ring Road, Bengaluru</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, { backgroundColor: Colors.lightBlue }]}>
                    <Entypo name="home" size={20} color={Colors.background} />
                </View>
                <Text style={styles.destinationText}>IBD Royal City, Jabalpur</Text>
            </View>

            <View style={styles.lastRow}>
                <View style={styles.displayRow}>
                    <View>
                        <MaterialCommunityIcons name="star-four-points" size={25} color={"#FFA600"} />
                    </View>
                    <Text style={styles.pointsText}>302 pts</Text>
                </View>
                <View style={styles.displayRow}>
                    <Text style={styles.rewardsText}>Rewards Hub</Text>
                    <MaterialIcons name="arrow-forward-ios" size={15} color={"#BBBAB9"} />
                </View>
            </View>
            
        </View>
    )
};

export default HomeSearch;

