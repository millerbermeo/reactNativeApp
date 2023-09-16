import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 60,
        backgroundColor: "aliceblue",
    },

    imgPrincipal: {
        width: 280,
        height: 290,
        zIndex: 20,
    },

    login: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 10,
    },

    textInputs:{
        color: "#B5B2B2",
        fontWeight: "600",
    },

    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderBottomWidth: 1, 
    },

    texto: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
        position: "absolute",
        top: 150,
        left: 20,
        zIndex: 20
    },

    contetImg: {
        width: "100%",
        display: "flex"
    },

    text: {
        marginTop: 20,
        fontSize: 15,
        textAlign: "center",
        marginBottom: 5,
    },

    btnOptions: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center"
    },

    remember: {
        transform: [{ translateX: -8 }, { translateX: -8 }],
        color: "#B5B2B2",
        fontWeight: "500",
        fontSize: 14
    },  


    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },

    form: {
        width: "100%",
        backgroundColor: "aliceblue",
        padding: 10,
        elevation: 8,
        shadowColor: 'gray',
        zIndex: 10,
        transform: [{ translateY: -20 }, { translateY: -25 }],
    },

    check:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        transform: [{ translateX: -12 }, { translateX: -12 }],
    },

    textForgot: {
        textAlign: "right",
        fontWeight: "bold",
        padding: 10,
        color: "blue"
    },

    button: {
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold"
    },

    imageContent:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: 15,
        marginTop: 20
    },

    image: {
        borderRadius: 100,
        margin: 40,
        width: 50, 
        height: 50, 
        padding: 0,
        margin: 0
    },

    texLine: {
        flexDirection: 'row', 
        alignItems: 'center', 
      },
      line: {
        width: 90,
        height: 1, 
        backgroundColor: '#B5B2B2', 
        marginHorizontal: 5,
      },

      social: {
        fontSize: 18,
        color: "gray",
        fontWeight: "500",

      },

      contentFooter:{
        display: "flex",
        gap: 5,
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 20 
      },

      textUser: {
        fontWeight: "bold",

      },
      singup: {
        color: "blue"
      }



});