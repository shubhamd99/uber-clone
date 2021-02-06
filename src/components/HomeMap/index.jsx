import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeMap = () => {
    return (
        <View style={styles.container}>
            <Text>Im a map</Text>
        </View>
    )
};

export default HomeMap;

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor:  "#a0abff",
        justifyContent: "center",
        alignItems: "center",
    }
});
