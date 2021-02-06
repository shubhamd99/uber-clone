import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.mediumGrey
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: "contain"
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    type: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 5,
    },
    time: {
        color: Colors.darkGrey
    },
    rightContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: 100,
    },
    price: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: "600",
        color: Colors.blackGrey
    }
});

export default styles;
