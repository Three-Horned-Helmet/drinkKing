import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AddNamesMenu from "./components/menu/AddNamesMenu";
import HomeScreen from "./components/menu/HomeScreen";
import BooleanScreen from "./components/menu/BooleanScreen";
import Game from "./components/game/GameScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddNamesMenu: AddNamesMenu,
    Boolean: BooleanScreen,
    GameScreen: Game
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
