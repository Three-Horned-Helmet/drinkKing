import React, { useState } from "react";
import { Button, View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./lowestNumberStyles";

import LowestNumberClass from "./LowestNumberClass";
import GameClass from "../GameClass";

const LowestNumberComponent = () => {
  LowestNumberClass._addMembers(GameClass._getMembers());

  const [numberPickedState, setNumberPickedState] = useState({
    members: GameClass._getMembers(),
    currentTurn: 0,
    winner: "",
    peopleWhoHasToDrink: []
  });

  const handleChangeInputText = inputNumberText => {
    setNumberPickedState({
      ...numberPickedState,
      inputNumber: inputNumberText.toString()
    });
  };

  const handleButtonClick = () => {
    let newCurrentTurn = numberPickedState.currentTurn + 1;
    //numberPickedState.pickedNumbers.push(numberPickedState.inputNumber);

    LowestNumberClass._addNumberToArray(
      numberScroller.activeNumber,
      numberPickedState.members[numberPickedState.currentTurn]
    );

    setNumberPickedState({
      ...numberPickedState,
      currentTurn: newCurrentTurn
    });

    setNumberScroller({
      ...numberScroller,
      activeNumber: 0
    });

    if (numberPickedState.members.length <= newCurrentTurn) {
      let results = LowestNumberClass._finishGame();
      setNumberPickedState({
        ...numberPickedState,
        winner: results.lowestNumber,
        peopleWhoHasToDrink: results.peopleWhoNeedsToDrink
      });
    }
  };

  //------------
  const [numberScroller, setNumberScroller] = useState({
    numbersArray: Array(20)
      .fill()
      .map((ele, index) => index + 1),
    activeNumber: 0
  });

  //------------

  // I need to clean this up....
  if (numberPickedState.winner) {
    let loserNumbers = " ",
      loserMembers = " ",
      winnerMember,
      winnerNumber;
    if (numberPickedState.peopleWhoHasToDrink.length > 0) {
      numberPickedState.peopleWhoHasToDrink.forEach(ele => {
        loserNumbers += ele.number.toString() + ", ";
        loserMembers += ele.member + ",";
      });
    }

    if (numberPickedState.winner) {
      winnerMember = numberPickedState.winner.member;
      winnerNumber = numberPickedState.winner.number.toString();
    } else {
      winnerMember = "no one";
      winnerNumber = " ";
    }

    return (
      <View>
        <Text>
          The winner is: {winnerMember} with {winnerNumber}!! You can give out 5
          sips. The losers are: {loserMembers} ({loserNumbers}), take 3 sips!
        </Text>
      </View>
    );
  }

  // ------------------------

  const increaseActiveNumberScroller = num => {
    // num = +1 || -1
    let newActiveNumber = numberScroller.activeNumber + num;

    if (newActiveNumber < 0)
      newActiveNumber = numberScroller.numbersArray.length - 1;
    else if (newActiveNumber > numberScroller.numbersArray.length - 1)
      newActiveNumber = 0;

    setNumberScroller({
      ...numberScroller,
      activeNumber: newActiveNumber
    });
  };

  const renderNumberScroller = () => {
    let viewArray = [];
    let arrayCounter = numberScroller.activeNumber - 2;

    if (arrayCounter < 0)
      arrayCounter = numberScroller.numbersArray.length + arrayCounter;

    for (let i = 0; i < 5; i++) {
      if (arrayCounter >= numberScroller.numbersArray.length) arrayCounter = 0;
      viewArray.push(numberScroller.numbersArray[arrayCounter]);
      arrayCounter++;
    }

    return viewArray.reverse().map((ele, index) => {
      if (index === 0 || index === viewArray.length - 1) {
        return (
          <Text
            style={[styles.counterText, { color: "rgba(0, 0, 0, 0.15)" }]}
            key={ele}
          >
            {ele}
          </Text>
        );
      } else if (index === 1 || index === viewArray.length - 2) {
        return (
          <Text
            style={[styles.counterText, { color: "rgba(0,0,0,0.35)" }]}
            key={ele}
          >
            {ele}
          </Text>
        );
      }
      return (
        <Text style={[styles.counterText, {color: "rgb(190, 0, 0)", fontWeight:"bold"}]} key={ele}>
          {ele}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lowest Number</Text>

      <Text style={styles.currentTurnToPickText}>
        {numberPickedState.members[numberPickedState.currentTurn]}'s turn to
        pick!
      </Text>

      {/* --------- */}
      <View style={styles.counterContainer}>
        <View>{renderNumberScroller()}</View>
        <View style={styles.counterButtonsContainer}>
          <TouchableOpacity
            style={styles.eachButton}
            onPress={() => increaseActiveNumberScroller(1)}
          >
            <Text style={styles.eachButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.eachButton}
            onPress={() => increaseActiveNumberScroller(-1)}
          >
            <Text style={styles.eachButtonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* --------- */}

      {/* <View style={{ height: 100 }}>
        <ScrollView>
          {numberScroller.numbersArray.map(ele => {
            return <Text key={ele}>{ele}</Text>;
          })}
        </ScrollView>
      </View> */}

      {/* ---------- */}

      <TouchableOpacity
        style={styles.guessButton}
        onPress={() => handleButtonClick()}
      >
        <Text style={styles.guessButtonText}>Guess</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LowestNumberComponent;
