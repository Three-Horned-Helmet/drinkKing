import React, { useState } from "react";
import { Button, View, Text, ImageBackground } from "react-native";
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
    <ImageBackground style={{height: "100%", width: "100%"}} source={require("../../assets/background-img-add-names.jpg")}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {game}
    </View>
      <Button title="next game" style={{position: "absolute", zIndex: 100}} onPress={() => changeGame()} />

    </ImageBackground>
  );
};

export default GameScreen;
