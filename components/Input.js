import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Color from "../incs/Colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Color.gray,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
