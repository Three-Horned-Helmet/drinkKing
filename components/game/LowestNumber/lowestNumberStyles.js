import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: "20%",
        marginBottom: "20%",
        backgroundColor: "rgba(255,255,255,0.5)",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 4,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "rgb(150, 0, 0)",
        marginBottom: 20
    },
    counterContainer: {
        flex: 1,
        flexDirection: "row",
    },
    eachButton: {
        // Maybe align
        backgroundColor: "rgba(100, 100, 255, 1)",
        height: 60,
        width: 35,
        marginBottom: 10,
        // borderColor: "black",
        // borderWidth: 2,
        borderRadius: 10,
      },
    eachButtonText: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
        marginTop: "auto",
        marginBottom: "auto"
    },
    counterButtonsContainer: {
        marginBottom: "auto",
        marginTop: "auto"
    },
    counterText: {
        fontSize: 25,
        marginRight: 20,
        marginLeft: 20,
        width: 40,
        textAlign: "center"
    },
    guessButton: {
        backgroundColor: "rgba(100, 100, 255, 1)",
        width: 120,
        borderRadius: 10,
        // borderColor: "black",
        // borderWidth: 2,
        position: "absolute",
        bottom: 40,
    },
    guessButtonText: {
        // Smaller fontsize
        width: 100,
        height: 40,
        fontSize: 25,
        textAlign: "center",
        color: "white",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    },
    currentTurnToPickText: {
        fontSize: 25,
        color: "rgba(200, 0, 0, 0.9)",
        marginBottom: 20
    }
})