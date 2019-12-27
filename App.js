import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BooleanScreen from "./components/menu/BooleanScreen";
import LoginScreen from "./components/menu/LoginScreen";
import HomeScreen from "./components/menu/HomeScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Boolean: TrueFalse
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
