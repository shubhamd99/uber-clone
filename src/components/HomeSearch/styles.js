import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    flexCenter: {
        alignItems: "center",
    },
    horizontalClip: {
        backgroundColor: Colors.mediumGrey,
        width: 60,
        height: 5,
        borderRadius: 25,
        marginBottom: 8,
    },
    inputBox: {
        backgroundColor: Colors.lightGrey,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderRadius: 8
    },
    inputText: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.blackGrey,
    },
    timeContainer: {
        flexDirection: "row",
        width: 100,
        justifyContent: "space-between",
        backgroundColor: Colors.background,
        padding: 8,
        alignItems: "center",
        borderRadius: 50
    },
    row: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.mediumGrey
    },
    iconContainer: {
        backgroundColor: "#b3b3b3",
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {
        marginLeft: 15,
        fontWeight: "600",
        fontSize: 16,
        color: Colors.darkGrey,
    },
    displayRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    lastRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    pointsText: {
        marginLeft: 8,
        fontWeight: "600",
        fontSize: 14,
        color: Colors.darkGrey, 
    },
    rewardsText: {
        fontWeight: "400",
        marginRight: 15,
        fontSize: 14,
        color: Colors.darkGrey,  
    }
});

export default styles;
