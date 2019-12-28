import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../game/GameClass";

const GameScreen = props => {
  const [allGames, setAllGames] = useState({
    activeGame: GameClass._getOneGame()
  });

  const changeGame = () => {
    const arrayCopy = allGames.activeGame;
    arrayCopy.shift();
    setAllGames({
      activeGame: arrayCopy
    });
  };

  console.log("All games", allGames)

  let game = allGames.activeGame[0].component;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {game}
      <Button title="next game" onPress={() => changeGame()} />
    </View>
  );
};

export default GameScreen;
