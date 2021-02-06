import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeMap = (props) => {
    return (
        <View style={[styles.container, { height: props.height || "42%" }]}>
            <Text style={{ fontSize: 30 }}>I'm a Map</Text>
        </View>
    )
};

export default HomeMap;

const styles = StyleSheet.create({
    container: {
        height: "42%",
        backgroundColor:  "#a0abff",
        justifyContent: "center",
        alignItems: "center",
    }
});
