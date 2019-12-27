import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

const TrueFalse = props => {
    const [trueFalseState, setTrueFalseState] = useState({
      correctAnswers:0,
      questions:[],
      message: null,
      loading: true
    });

const x = 10
// props.members.length * 2
const  getQuestions = async (x) => {
  console.log('getQuestions function')
  let response = await fetch(`https://opentdb.com/api.php?amount=${x}&type=boolean`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  return response
}


  useEffect(() => {
    getQuestions().then(result => {
      console.log(result,'result')
      setTrueFalseState({
        ...trueFalseState,
        loading: false
      });
    });
  }, [console.log(trueFalseState)]);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Choose true or false!</Text>
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
}

export default TrueFalse;
