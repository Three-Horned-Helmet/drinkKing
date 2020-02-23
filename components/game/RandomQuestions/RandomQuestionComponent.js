import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import RandomQuestion from "./RandomQuestions";

const RandomQuestionComponent = props => {
  const [randomQuestionState, setRandomQuestionState] = useState({
    currentRandomQuestion: RandomQuestion._pickRandomQuestion()
  });

  const handleNextQuestion = () => {
    setRandomQuestionState({
      ...randomQuestionState,
      currentRandomQuestion: RandomQuestion._pickRandomQuestion()
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{color: "white"}}>RandomQuestionComponent</Text>
      <Text style={{color: "white"}}>{randomQuestionState.currentRandomQuestion}</Text>
      <Button
        title="next"
        onPress={() => {
          handleNextQuestion();
        }}
      ></Button>
    </View>
  );
};

export default RandomQuestionComponent;
