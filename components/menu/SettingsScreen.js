import React from "react";
import { Button, View, Text } from "react-native";

const SettingsScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Settings</Text>
      <Button
        title="Go home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

export default SettingsScreen;
