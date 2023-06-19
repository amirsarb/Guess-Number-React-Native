import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Cards";
import Color from "../incs/Colors";

function guessNumber(min, max, exception) {
  const rnd = Math.floor(Math.random() * (max - min) + min);
  if (rnd === exception) return guessNumber(min, max, exception);
  return rnd;
}

const GameScreen = (props) => {
  const [guessNum, setGuessNum] = useState(
    guessNumber(1, 100, props.userNumber)
  );
  const lowerNumber = useRef(1);
  const higherNumber = useRef(100);
  var direction = "";
  const handleGuessNumber = (newNumber) => {
    setGuessNum(() => {
      return newNumber;
    });
  };
  const nextMove = (thisAction) => {
    if (guessNum < props.userNumber) direction = "up";
    else direction = "down";

    if (
      (direction === "up" && thisAction === "lower") ||
      (direction === "down" && thisAction === "higher")
    ) {
      console.log(thisAction);
      Alert.alert("Say the truth!", "Please be honest!", [
        { text: "Okay!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "up") lowerNumber.current = guessNum;
    else higherNumber.current = guessNum;

    handleGuessNumber(
      guessNumber(lowerNumber.current, higherNumber.current, guessNum)
    );
  };

  if (guessNum == props.userNumber) {
    return (
      <View style={styles.screen}>
        <Card>
          <Text style={styles.headerNumber}>🎉 Hurray Your Number is</Text>
          <Text
            style={
              (styles.headerNumber,
              [{ color: "red", fontSize: 40, textDecorationLine: "underline" }])
            }
          >
            {guessNum}
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
  } else {
    return (
      <View style={styles.screen}>
        <View>
          <Card>
            <Text style={styles.headerNumber}>Is this your number?</Text>
            <Text style={styles.styleNumber}>{guessNum}</Text>
            <View style={styles.btn}>
              <Button
                title="🔽Down"
                onPress={() => {
                  nextMove("lower");
                }}
              />
              <Button
                title="🔼UP"
                onPress={() => {
                  nextMove("higher");
                }}
              />
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
    backgroundColor: Color.fourth,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    with: "300",
    maxWidth: "80%",
  },
  headerNumber: {
    fontSize: 20,
    alignItems: "center",
  },
  styleNumber: {
    fontSize: 30,
    padding: 5,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Color.secondary,
  },
});

export default GameScreen;
