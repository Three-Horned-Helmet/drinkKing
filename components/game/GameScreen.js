import React from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../game/GameClass";

const GameScreen = props => {
  GameClass._displayMembers();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>Best game</Text>
    </View>
  );
};

export default GameScreen;
