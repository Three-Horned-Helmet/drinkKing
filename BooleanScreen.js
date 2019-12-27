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

  // props.members.length * 2
  // fetches info from opentdb
  async function getQuestions(x = "10") {
    console.log("getQuestions function", x);
    let response;
    try {
      console.log("trying stuff");
      response = await fetch(
        `https://opentdb.com/api.php?amount=10&type=boolean`
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (err) {
      console.error("err: ", err);
    }
  }

  useEffect(() => {
    console.log("using effect");
    getQuestions().then(result => {
      console.log(result, "result");
      setTrueFalseState({
        ...trueFalseState,
        questions: result.results,
        loading: false
      });
    });
  }, [console.log("state")]);

  const checkAnswer = bool => {
    console.log("checkAnswer", bool);

    if (
      bool ===
      trueFalseState.questions[trueFalseState.currentQuestion].correct_answer
    ) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const getNewPlayer = () => {
    // props.members
    let membersArray = trueFalseState.members;
    membersArray.pop(trueFalseState.currentPlayer);
    const name = membersArray[Math.floor(Math.random() * membersArray.length)];
    console.log(name, "prev function");

    return name;
  };

  const correctAnswer = () => {
    console.log("correctanswer");
    let currentPoints = trueFalseState.currentQuestion;
    currentPoints += 1;
    let newPlayer = getNewPlayer();
    console.log(newPlayer, "newplayer ");
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
    console.log("wrongAnswer");
    setTrueFalseState({
      ...trueFalseState,
      gameOver: true,
      backgroundColor: "#8B0000"
    });
  };
  const questionGenerator = () => {
    const question = trueFalseState.loading ? (
      <Text>Loading..</Text>
    ) : (
      <View>
        <Text style={styles.currentPlayer}>{trueFalseState.currentPlayer}</Text>
        <Text style={styles.currentPoints}>
          Current sips: {trueFalseState.currentQuestion + 1}
        </Text>
        <Text style={styles.question}>
          {trueFalseState.questions[trueFalseState.currentQuestion].question}
        </Text>
        <View style={styles.buttons}>
          <Button onPress={() => checkAnswer("True")} title="true" />
          <Button onPress={() => checkAnswer("False")} title="false" />
        </View>
      </View>
    );
    return question;
  };

  const gameOverGenerator = () => {
    const gameOver = (
      <Text style={styles.gameOverText}>
        {trueFalseState.currentPlayer} must drink{" "}
        {trueFalseState.currentQuestion} sips!
      </Text>
    );
    return gameOver;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: trueFalseState.backgroundColor,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10
    },
    buttons: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around"
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
      marginTop: 150,
      fontSize: 40
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
