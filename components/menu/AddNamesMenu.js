import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  StyleSheet
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
    console.log("helllo??");

    const amount = Array(loginDetails.numberOfParticipants)
      .fill()
      .map((e, i) => (i + 1).toString());

    setLoginDetails({
      ...loginDetails,
      participants: amount
    });

    GameClass._addMembers(amount);
    props.navigation.navigate("GameScreen");
  };

  const handleParticipantPush = x => {
    console.log("yoooooo");
    console.debug("text");
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

  const removeParticipants = (name) => {
    console.log(name)
    let allParticipants = this.loginDetails.participants
    allParticipants.splice(allParticipants.indexOf(name), 1)
    console.log(allParticipants)
    
    setLoginDetails({
      ...loginDetails,
      participants: allParticipants,
    });
  }

  const renderParticipants = () => {
    return loginDetails.participants.map((item, index) => (
      <TouchableWithoutFeedback  key={index} onPress={() => removeParticipants(item)}>
        <Text style={styles.participantsList}>
          {item}
        </Text>
      </TouchableWithoutFeedback>
    ));
  };

  return (
    <ImageBackground
      source={require("../../assets/background-img-add-names.jpg")}
      style={styles.backgroundImage}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginLeft: 15,
          marginRight: 15
        }}
      >
        <View
          style={{ flex: 1, marginBottom: 290, justifyContent: "space-evenly" }}
        >
          {loginDetails.participants.length > 0 ||
          loginDetails.numberOfParticipants > 0 ? (
            <Button title="Continue" onPress={() => autoFillNames()} />
          ) : (
            <Text style={styles.title}>Add participants</Text>
          )}
          <View>
            <TextInput
              keyboardType="numeric"
              style={styles.inputs}
              value={loginDetails.numberOfParticipants.toString()}
              defaultValue={"0"}
              onChangeText={numberOfParticipants => {
                if (!numberOfParticipants) numberOfParticipants = 0;
                handleNumberOfParticipants(numberOfParticipants);
              }}
            />
            {/* <TouchableOpacity
      style={styles.autoFillNames}
        onPress={() =>  setAutoFillNameCount(loginDetails.numberOfParticipants)}
      >
        <Image
          source={require("../../assets/button_autofill-names.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity> */}

            <Button
              title="Autofill Names"
              onPress={() =>
                setAutoFillNameCount(loginDetails.numberOfParticipants)
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.inputs}
              value={loginDetails.currentParticipant}
              onChangeText={currentParticipant =>
                setLoginDetails({ ...loginDetails, currentParticipant })
              }
              placeholder={"Nickname"}
            />
            <Button
              title="Submit"
              onPress={() =>
                handleParticipantPush(loginDetails.currentParticipant)
              }
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginTop: 25,
            textAlign: "center",
            width: "20%"
          }}
        >
          {renderParticipants()}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  autoFillNames: {
    width: "50%",
    height: "7%"
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  inputs: {
    height: 40,
    borderColor: "yellow",
    borderWidth: 1,
    fontSize: 25,
    backgroundColor: "black",
    color: "rgb(200, 200, 200)",
    textAlign: "center"
  },
  participantsList: {
    color: "yellow",
    fontSize: 30,
    textAlign: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  }
});

export default AddNamesMenu;
