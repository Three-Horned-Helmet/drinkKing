import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import defStyles from "../default-styles";

const BooleanScreen = props => {
  const [trueFalseState, setTrueFalseState] = useState({
    correctAnswers: 0,
    backgroundColor: "#fff",
    currentQuestion: 0,
    questions: [],
    gameOver: false,
    members: [
      "Tormod",
      "Haakon",
      "Markus",
      "Sindre",
      "Thomas",
      "Lars",
      "Lorem"
    ],
    currentPlayer: "Tormod",
    loading: true
  });

  // fetches info from opentdb
  // n determines how many questions
  async function getQuestions(n = "10") {
    let response;
    try {
      response = await fetch(
        `https://opentdb.com/api.php?amount=${n}&type=boolean`
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (err) {
      console.error("err: ", err);
    }
  }

  useEffect(() => {
    getQuestions().then(result => {
      setTrueFalseState({
        ...trueFalseState,
        questions: result.results,
        loading: false
      });
    });
  }, []);

  // checks if answer is correct
  const checkAnswer = bool => {
    if (
      bool ===
      trueFalseState.questions[trueFalseState.currentQuestion].correct_answer
    ) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  // updates player turn
  const getNewPlayer = () => {
    let membersArray = trueFalseState.members;
    membersArray.pop(trueFalseState.currentPlayer);
    const name = membersArray[Math.floor(Math.random() * membersArray.length)];

    return name;
  };

  const correctAnswer = () => {
    let currentPoints = trueFalseState.currentQuestion;
    currentPoints += 1;
    let newPlayer = getNewPlayer();
    setTrueFalseState({
      ...trueFalseState,
      backgroundColor: "#23B631"
    });
    setTimeout(() => {
      setTrueFalseState({
        ...trueFalseState,
        currentPlayer: newPlayer,
        currentQuestion: currentPoints,
        backgroundColor: "#fff"
      });
    }, 200);
  };

  const wrongAnswer = () => {
    setTrueFalseState({
      ...trueFalseState,
      gameOver: true,
      backgroundColor: "#8B0000"
    });
  };
  const questionText = n => {
    return trueFalseState.questions[n].question.replace(/&quot;/g, '\\"');
  };

  // generates question
  const questionGenerator = () => {
    const question = trueFalseState.loading ? (
      <Text>Loading..</Text>
    ) : (
      <View>
        <Text style={defStyles.header}>True or False</Text>
        <Text style={defStyles.miniHeader}>{trueFalseState.currentPlayer}</Text>
        <Text style={styles.currentPoints}>
          Current sips: {trueFalseState.currentQuestion}
        </Text>
        <Text style={[defStyles.text, styles.statementText]}>
          {questionText(trueFalseState.currentQuestion)}
        </Text>
      </View>
    );
    return question;
  };

  // generates gameover component
  const gameOverGenerator = () => {
    const gameOver = (
      <Text style={styles.gameOverText}>
        {trueFalseState.currentPlayer} must drink{" "}
        {trueFalseState.currentQuestion + 1} sips!
      </Text>
    );
    return gameOver;
  };

  // style. Sanatize
  const styles = StyleSheet.create({
    buttonsContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",
      position: "absolute",
      bottom: 0
    },
    currentPoints: {
      fontSize: 20,
      marginTop: 0
    },
    gameOverText: {
      color: "#fff",
      fontSize: 50
    },
    statementText: {
      
    }
  });

  return (
    <View style={defStyles.container}>
      {trueFalseState.gameOver ? gameOverGenerator() : questionGenerator()}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[defStyles.button, styles.buttons]}
          onPress={() => checkAnswer("True")}
        >
          <Text style={defStyles.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defStyles.button, styles.buttons]}
          onPress={() => checkAnswer("False")}
        >
          <Text style={defStyles.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BooleanScreen;
