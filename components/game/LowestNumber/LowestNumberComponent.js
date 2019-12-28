import React, {useState} from 'react';
import { Button, View, Text, Keyboard,
    TouchableWithoutFeedback,
    TextInput} from "react-native";

import LowestNumberClass from "./LowestNumberClass"
import GameClass from "../GameClass"


const LowestNumberComponent = () => {

    LowestNumberClass._addMembers(GameClass._getMembers())

    const [numberPickedState, setNumberPickedState] = useState({
        pickedNumbers: [],
        inputNumber: 1,
        members: GameClass._getMembers(),
        currentTurn: 0,
        winner: "",
        peopleWhoHasToDrink: [],
    })

    const handleChangeInputText = (inputNumberText) => {
        setNumberPickedState({
            ...numberPickedState,
            inputNumber: inputNumberText.toString()
        })
    }

    const handleButtonClick = () => {
        let newCurrentTurn = numberPickedState.currentTurn
        numberPickedState.pickedNumbers.push(numberPickedState.inputNumber)
        LowestNumberClass._addNumberToArray(numberPickedState.inputNumber, numberPickedState.members[numberPickedState.currentTurn])
        setNumberPickedState({
            ...numberPickedState,
            currentTurn: numberPickedState.currentTurn += 1
        })
        console.log("Members", numberPickedState.members)
        if(!numberPickedState.members[newCurrentTurn+1]){
            console.log("DONE")
            let results = LowestNumberClass._finishGame()
            console.log("results", results.lowestNumber, results.lowestNumber.number)
            setNumberPickedState({
                ...numberPickedState,
                winner: results.lowestNumber,
                peopleWhoHasToDrink: results.peopleWhoNeedsToDrink
            })
        }
    }

    if(numberPickedState.winner){
        console.log("Winner", numberPickedState.winner)
        console.log("People who has to drink", numberPickedState.peopleWhoHasToDrink)
        let loserNumbers = " ", loserMembers = " ", winnerMember, winnerNumber
        if(numberPickedState.peopleWhoHasToDrink.length > 0){
            numberPickedState.peopleWhoHasToDrink.forEach((ele) => {
                loserNumbers += ele.number.toString() + ", "
                loserMembers += ele.member + ","
            })
        }

        if(numberPickedState.winner){
            winnerMember = numberPickedState.winner.member
            winnerNumber = numberPickedState.winner.number.toString()
        } else {
            winnerMember = "no one"
            winnerNumber = " "
        }

        return (
            <View>
                <Text>
                    The winner is: {winnerMember} with {winnerNumber}!! You can give out 5 sips.
                    The losers are: {loserMembers} ({loserNumbers}), take 3 sips!
                </Text>
            </View>
        )
    }

    return (
        <View>
            <Text>
                Lowest Number
            </Text>
            <Text>
                Turn: {numberPickedState.members[numberPickedState.currentTurn]}
            </Text>
            <TextInput
                keyboardType="numeric"
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                value={numberPickedState.inputNumber.toString()}
                defaultValue={"1"}
                onChangeText={inputNumberText => {
                    if (!inputNumberText) inputNumberText = 0;
                    handleChangeInputText(inputNumberText);
                }}
            />
            <Button
             title="Guess"
             onPress={() => {handleButtonClick()}}
            />
        </View>
    );
};

export default LowestNumberComponent;