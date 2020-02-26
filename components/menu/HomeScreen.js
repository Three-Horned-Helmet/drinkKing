import React from "react";
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const HomeScreen = props => {
  return (
    <ImageBackground
      source={require("../../assets/background-img.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/cooltext349523786485618.png")}
          style={{ width: "72%", height: "11%" }}
        />
        <Text style={styles.quoteTextStyle}>
          "The game that will get you fucked up!" {"\n"} - Julius Caesar
        </Text>

        <View style={styles.buttonPlay}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("AddNamesMenu")}
          >
            <Image
              source={require("../../assets/button_play.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  container: { 
    flex: 1, 
    alignItems: "center", 
    marginTop: 130 
  },
  quoteTextStyle: { 
    fontSize: 15, 
    color: "yellow", 
    textAlign: "center", 
    marginTop: 10, 
   // fontFamily: "sans-serif", 
    marginLeft: 25, 
    marginRight: 25 
  },
  buttonPlay: {
    width: 100, 
    height: 36,
    marginTop: 80 
  }
});

export default HomeScreen;
