import React, { useState, useEffect } from "react";

import { Button, StyleSheet, Text, View } from "react-native";

const TrueFalse = props => {
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
  }, [console.log(trueFalseState, "state")]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: trueFalseState.backgroundColor,
      alignItems: "center",
      justifyContent: "center"
    }
  });

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
    return membersArray[Math.floor(Math.random() * membersArray.length)];
  };

  const correctAnswer = () => {
    console.log("correctanswer");
    let currentPoints = trueFalseState.currentQuestion;
    currentPoints += 1;
    let newPlayer = getNewPlayer();
    setTrueFalseState({
      ...trueFalseState,
      currentQuestion: currentPoints,
      currentPlayer: newPlayer,
      backgroundColor: "#23B631"
    });
    setTimeout(() => {
      setTrueFalseState({
        ...trueFalseState,
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
        <Text>Player turn: {trueFalseState.currentPlayer}</Text>
        <Text>
          {trueFalseState.currentPlayer} must drink
          {trueFalseState.currentQuestion} sips!
        </Text>
        <Text>
          {trueFalseState.questions[trueFalseState.currentQuestion].question}
        </Text>
        <View>
          <Button title="true" onPress={() => checkAnswer("True")} />
          <Button title="false" onPress={() => checkAnswer("False")} />
        </View>
      </View>
    );
    return question;
  };

  const gameOverGenerator = () => {
    const gameOver = trueFalseState.loading ? <Text></Text> : <Text>AAA</Text>;
    return gameOver;
  };
  return (
    <View style={styles.container}>
      {trueFalseState.gameOver ? gameOverGenerator() : questionGenerator()}
    </View>
  );

  /* todo */
  // fetch informasjon fra api. Dobbelt så mange spørsmål som spillere
  // rask informasjon til brukeren. (velg hva du tror er riktig og send telefonen til din høyre)
  // score blir vist øverst til høyre
  // skjermen blinker grønt ved riktig valg
  // skjermen blir rød med stor tekst ved feil valg. "Du må drikke X slurker lawl"
  // "Gå tilbake til home screen"

  // fetch information from
};

export default TrueFalse;
