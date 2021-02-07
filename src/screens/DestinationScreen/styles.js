import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // height: "100%",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: Colors.lightGrey,
    },
    flexRow: {
        flexDirection: "column",
        width: "90%",
        paddingLeft: 30
    },
    sideContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "10%",
        paddingBottom: 15
    },
    circle: {
        position: "absolute",
        top: 20,
        left: 8,
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: Colors.blackGrey,
    },
    verticalLine: {
        position: "absolute",
        top: 54,
        left: -10,
        width: 45,
        height: 0.5,
        borderRadius: 50,
        backgroundColor: Colors.blackGrey,
        transform: [{ rotate: "90deg" }]
    },
    rectangle: {
        position: "absolute",
        bottom: 20,
        left: 8,
        width: 8,
        height: 8,
        backgroundColor: Colors.darkGrey,
    },
    textInput: {
        padding: 10,
        backgroundColor: Colors.lightGrey,
        marginVertical: 5
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: "#A4A4A4",
        padding: 5,
        borderRadius: 50,
        marginRight: 15
    },
    locationText: {
        color: Colors.darkGrey
    }
});

export default styles;
