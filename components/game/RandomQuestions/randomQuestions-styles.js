import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        marginTop: "15%",
        marginBottom: "15%",
        width: "80%",
        borderRadius: 4,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleContainer: {
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "rgb(150, 0, 0)",
        marginBottom: 20
    },
    questionContainer:{

    },
    questionText: {
        fontSize: 20,
        color: "rgba(200, 0, 0, 0.9)",

    },
    buttonContainer: {
        position:"absolute",
        bottom: 10
    }
})