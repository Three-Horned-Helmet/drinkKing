import React, {useState} from "react";
import { Button, View, Text } from "react-native";
import RandomQuestion from "./RandomQuestions";

const RandomQuestionComponent = props => {

  const [randomQuestionState, setRandomQuestionState] = useState({
    currentRandomQuestion: RandomQuestion._pickRandomQuestion(),
  })

  const handleNextQuestion = () => {
    setRandomQuestionState({})
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>RandomQuestionComponent</Text>
      <Text>{randomQuestionState.currentRandomQuestion}</Text>
      <Button title="next" onPress={() => {}}></Button>
    </View>
  );
};

export default RandomQuestionComponent;
