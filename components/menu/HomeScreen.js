import React from "react";
import { Button, View, Text } from "react-native";

const HomeScreen = props => {
  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Play"
        onPress={() => props.navigation.navigate("AddNamesMenu")}
      />
    </View>
  );
};

export default HomeScreen;
