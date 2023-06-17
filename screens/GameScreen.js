import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Cards";

function guessNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const GameScreen = (props) => {
  const [guessNum, setGuessNum] = useState(guessNumber(1, 100));

  if (guessNum == props.userNumber) {
    return (
      <View>
        <Text>Hurray your number is {guessNum}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <View>
          <Card>
            <Text style={styles.headerNumber}>{guessNum}</Text>
            <View style={styles.btn}>
              <Button title="Lower - " />
              <Button title="Greater + " />
            </View>
          </Card>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignContent: "space-between",
    marginTop: 20,
    with: "300",
    maxWidth: "80%",
  },
  headerNumber: {
    fontSize: 20,
    alignItems: "center",
  },
});

export default GameScreen;
