import React from "react";
import { Button, View, Text } from "react-native";
import GameClass from "../GameClass";

import styles from "./pekeLeken-styles"
import defStyles from "../default-styles"

const PekeLekenCompoment = props => {
  return (
    <View
      style={defStyles.container}
    >
      <Text style={defStyles.header}>Pekeleken</Text>
    </View>
  );
};

export default PekeLekenCompoment;
