import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlue,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    text: {
        color: Colors.whiteBlue,
        fontSize: 15,
        marginBottom: 10,
        width: "90%"
    },
    learnMoreTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    learnMoreText: {
        color: Colors.background,
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 4
    },
    icon: {
        color: Colors.background,
    },
    stopSignImage: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: Colors.lightGrey,
        borderTopLeftRadius: 40,
        width: 60,
        height: 20,
        borderStyle: "solid",
    },

    triangleCorner: {
        position: "absolute",
        bottom: 0,
        right: 57,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 20,
        borderTopWidth: 16,
        borderRightColor: "transparent",
        borderTopColor: Colors.lightGrey,
        transform: [{ rotate: "180deg" }]
    },

    imageContainer: {
        position: "absolute",
        right: -5, 
        bottom: 0,
    },

    image: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
    }
});

export default styles;
