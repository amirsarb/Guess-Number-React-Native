import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../incs/Colors";
import Card from "../components/Cards";

const GameOverScreen = (props) => {
  const playerWinText =
    "🎉 Hurray You win! \n computer could't guess your number";
  const computerWinText =
    "😔 Sorry...You lost! \n Computer guessed your number.";

  if (props.winner === "player") finalText = playerWinText;
  else finalText = computerWinText;

  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.headerNumber}>{finalText}</Text>
        <Text style={styles.headerNumber}>Your number:</Text>

        <Text
          style={
            (styles.headerNumber,
            [{ color: "red", fontSize: 40, textDecorationLine: "underline" }])
          }
        >
          {props.targetNumber}
        </Text>
      </Card>
      <View style={[{ marginTop: 40 }]}>
        <Card>
          <Button
            title="Reset Game"
            onPress={() => {
              props.newGameHandler();
            }}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.fourth,
  },
  headerNumber: {
    fontSize: 20,
    alignItems: "center",
  },
});

export default GameOverScreen;
