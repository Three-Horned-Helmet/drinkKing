import React from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../GameClass";

const PekeLekenCompoment = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>PekeLeken Component</Text>
      <Button title="Press me" onPress={() => GameClass._endGame()} />
    </View>
  );
};

export default PekeLekenCompoment;
