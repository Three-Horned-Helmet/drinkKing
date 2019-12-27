import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import mainMenu from "./components/menu/mainMenu"

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Play"
          onPress={() => this.props.navigation.navigate("Details")}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />

        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <Button
          title="Boolean"
          onPress={() => this.props.navigation.navigate("Boolean")}
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
        <Button
          title="Go home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class BooleanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Boolean</Text>
        <Button
          title="Go home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Settings: SettingsScreen,
    Boolean: BooleanScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
