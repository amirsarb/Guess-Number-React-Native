import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Card from "../components/Cards";
import Color from "../incs/Colors";
const StartScreen = (props) => {
  return (
    <View style={styles.firstScreen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card style={styles.cardContainer}>
        <Text>Enter a Number</Text>
        <TextInput style={styles.inputContainer} />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={() => {}} />
          </View>
          <View>
            <Button title="Confirm" onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  firstScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: Color.fourth,
  },
  cardContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnContainer: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  inputContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "20%",
  },
  btn: {
    width: 100,
  },
});

export default StartScreen;
