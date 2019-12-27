import React from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../game/GameClass";

const GameScreen = props => {
  let gameToBeRendered = GameClass._getRandomGame();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {gameToBeRendered}
    </View>
  );
};

export default GameScreen;
