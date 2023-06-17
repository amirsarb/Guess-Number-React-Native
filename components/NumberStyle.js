import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../incs/Colors";

const NumberStyle = (props) => {
  return <Text>{props.children}</Text>;
};

const styles = StyleSheet.create({
  number: {
    borderWidth: 2,
    borderColor: Colors.third,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NumberStyle;
