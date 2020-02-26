import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import RandomQuestion from "./RandomQuestions";

import styles from "./randomQuestions-styles";

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
    <TouchableOpacity
      onPress={() => {
        handleNextQuestion();
      }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Questions!</Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {randomQuestionState.currentRandomQuestion}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RandomQuestionComponent;
