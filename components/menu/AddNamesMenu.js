import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";

import GameClass from "../game/GameClass";

const AddNamesMenu = props => {
  const [loginDetails, setLoginDetails] = useState({
    participants: [],
    currentParticipant: "",
    numberOfParticipants: 0
  });

  const setAutoFillNameCount = numberOfParticipants => {
    setLoginDetails({
      ...loginDetails,
      numberOfParticipants: numberOfParticipants
    });
  };

  const handleNumberOfParticipants = amount => {
    setLoginDetails({
      ...loginDetails,
      numberOfParticipants: parseInt(amount)
    });
  };

  const autoFillNames = () => {
    console.log("hi");
    const amount = Array(loginDetails.numberOfParticipants)
      .fill()
      .map((e, i) => i + 1);

    setLoginDetails({
      ...loginDetails,
      participants: amount
    });
    GameClass._addMembers(loginDetails.participants);
    props.navigation.navigate("GameScreen");
  };

  const handleParticipantPush = x => {
    const participantsArray = loginDetails.participants;

    participantsArray.push(x);
    setLoginDetails({
      ...loginDetails,
      participants: participantsArray,
      currentParticipant: ""
    });

    GameClass._addMembers(loginDetails.participants);
  };
  const DismissKeyboard = ({ children }) => {
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>;
  };

  const renderParticipants = () => {
    return loginDetails.participants.map((item, index) => (
      <Text key={index}>{item}</Text>
    ));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Autofill names"
        onPress={() => setAutoFillNameCount(loginDetails.numberOfParticipants)}
      />
      <TextInput
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={loginDetails.numberOfParticipants.toString()}
        defaultValue={"0"}
        onChangeText={numberOfParticipants => {
          if (!numberOfParticipants) numberOfParticipants = 0;
          handleNumberOfParticipants(numberOfParticipants);
        }}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={loginDetails.currentParticipant}
        onChangeText={currentParticipant =>
          setLoginDetails({ ...loginDetails, currentParticipant })
        }
        placeholder={"Nickname"}
      />
      <Button
        title="Submit"
        onPress={() => handleParticipantPush(loginDetails.currentParticipant)}
      />
      {renderParticipants()}
      {loginDetails.participants.length > 0 ||
      loginDetails.numberOfParticipants > 0 ? (
        <Button title="Continue" onPress={() => autoFillNames()} />
      ) : null}
    </View>
  );
};

export default AddNamesMenu;
