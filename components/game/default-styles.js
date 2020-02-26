import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container: {
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
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "rgb(150, 0, 0)",
        marginBottom: 20
    },
    miniHeader: {
        fontSize: 25,
        color: "rgba(200, 0, 0, 0.9)",
    },
    text: {
        fontSize: 20,
        color: "rgba(200, 0, 0, 0.9)",
    },
    button: {
        backgroundColor: "rgba(100, 100, 255, 1)",
        borderRadius: 10,
        paddingTop: "2%",
        paddingBottom: "2%",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    }
})