import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const HomeScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Play" onPress={() => props.navigation.navigate("Login")} />
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("Login")}
      />
      <Button
        title="Boolean"
        onPress={() => props.navigation.navigate("Boolean")}
      />
    </View>
  );
};

export default HomeScreen;
