import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "../incs/Colors";
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 10,
    shadowColor: Color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Card;
