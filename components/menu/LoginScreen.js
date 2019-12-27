import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = props => {
  const [participants, setParticipants] = useState([]);

  const [currentParticipant, setCurrentParticipant] = useState("");

  const renderParticipants = () => {
    return participants.map(item => <Text>{item}</Text>);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={currentParticipant}
        onChangeText={currentParticipant =>
          setCurrentParticipant(currentParticipant)
        }
        placeholder={"Nickname"}
      />

      <Button
        title="Submit"
        onPress={() => setParticipants([...participants, currentParticipant])}
      />
      {renderParticipants()}
    </View>
  );
};

export default LoginScreen;
