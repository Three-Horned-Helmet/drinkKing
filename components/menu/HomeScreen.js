import React from "react";
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

const HomeScreen = props => {
  console.log(props);
  return (
    <ImageBackground
      source={require("../../assets/background-img.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: 130 }}>
        <Image
          source={require("../../assets/cooltext349523786485618.png")}
          style={{ width: "72%", height: "11%" }}
        />
        <Text style={{ fontSize: 15, color: "white", textAlign: "center", marginTop: 10 }}>
          "The game that will get you fucked up!" {"\n"} - Julius Caesar
        </Text>

        <View style={{ width: 80, height: 30, marginTop: 80 }}>
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

export default HomeScreen;
