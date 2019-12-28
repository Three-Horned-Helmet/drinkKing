import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../game/GameClass";

const GameScreen = props => {
  const [allGames, setAllGames] = useState({
    listOfGames: GameClass._getAllGames(),
    activeGame: GameClass._getAllGames(),
    counter: 0
  });

  const changeGame = () => {
    setAllGames({
      ...allGames,
      counter: allGames.counter+1
    });
  };

  let game = allGames.listOfGames[allGames.counter%allGames.listOfGames.length].component;

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
