import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
        <Text style={styles.currentPlayer}>{trueFalseState.currentPlayer}</Text>
        <Text style={styles.currentPoints}>
          Current sips: {trueFalseState.currentQuestion}
        </Text>
        <Text style={styles.question}>
          {questionText(trueFalseState.currentQuestion)}
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.eachButton} onPress={() => checkAnswer("True")}>
              <Text style={styles.eachButtonText}>True</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.eachButton} onPress={() => checkAnswer("False")}>
              <Text style={styles.eachButtonText}>False</Text>
          </TouchableOpacity>
          {/* <Button onPress={() => checkAnswer("True")} title="true" />
          <Button onPress={() => checkAnswer("False")} title="false" /> */}
        </View>
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
    container: {
      flex: 1,
      backgroundColor: trueFalseState.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10
    },
    eachButton: {
      backgroundColor: "rgba(0, 0, 255, 0.7)",
      height: 50,
      width: 100,
      borderColor: "black",
      borderWidth: 2,
      borderRadius: 10,
    },
    eachButtonText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
    buttons: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-around",      
      height: 30,
      marginBottom: 30,
    },
    currentPoints: {
      fontSize: 25,
      marginTop: 20
    },
    currentPlayer: {
      marginTop: 40,
      fontSize: 40
    },
    question: {
      marginTop: 50,
      fontSize: 25
    },
    gameOverText: {
      color: "#fff",
      fontSize: 50
    }
  });

  return (
    <View style={styles.container}>
      {trueFalseState.gameOver ? gameOverGenerator() : questionGenerator()}
    </View>
  );
};

export default BooleanScreen;
