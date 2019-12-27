import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const BooleanScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Boolean</Text>
      <Button
        title="Go home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

export default BooleanScreen;
