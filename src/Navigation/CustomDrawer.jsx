import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Colors from '../constants/Colors';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.blackContainer}>

                <View style={{ marginBottom: 30, flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.userIconContainer}>
                        <FontAwesome name="user" size={28} color={Colors.blackGrey} />
                    </View>
                    <View>
                        <Text style={styles.nameText}>Shubham Dhage</Text>
                        <View style={styles.flexRow}>
                            <Text style={styles.ratingText}>5.0</Text>
                            <FontAwesome name="star" size={8} color={Colors.mediumGrey} />
                        </View>
                    </View>
                </View>

                <View style={styles.borderContainer}>
                    <Pressable style={[styles.flexRow, { justifyContent: "space-between" }]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.textBold}>Messages</Text>
                            <View style={styles.circle}/>
                        </View>
                        <View>
                            <SimpleLineIcons name="arrow-right" size={15} color={Colors.white}/>
                        </View>
                    </Pressable>
                </View>

                <Pressable style={{ marginTop: 10 }}>
                    <Text style={styles.textGrey}>Do more with your account</Text>
                </Pressable>

                <Pressable>
                    <Text style={styles.text}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
};

const styles = StyleSheet.create({
    blackContainer: {
        backgroundColor: Colors.black,
        padding: 15,
        marginBottom: 20,
    },
    userIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: Colors.mediumGrey,
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    nameText: {
        fontSize: 22,
        color: Colors.white,
        marginBottom: 4
    },
    ratingText: {
        color: Colors.mediumGrey,
        marginRight: 4
    },
    borderContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.darkGrey
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: Colors.lightBlue,
        marginLeft: 15
    },
    textBold: {
        color: Colors.white,
        fontWeight: "600",
        paddingVertical: 15,
    },
    text: {
        color: Colors.white,
        paddingVertical: 5,
    },
    textGrey: {
        color: Colors.darkGrey,
        paddingVertical: 5,
    }
});

export default CustomDrawer
