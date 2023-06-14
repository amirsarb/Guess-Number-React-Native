import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Card from "../components/Cards";
const StartScreen = (props) => {
  return (
    <View style={styles.firstScreen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card style={styles.cardContainer}>
        <Text>Enter a Number</Text>
        <TextInput style={styles.inputContainer} />
        <View style={styles.btnContainer}>
          <Button title="Cancel" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
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
    backgroundColor: "#FFF4F4",
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

    // borderWidth: 1,
    // borderRadius: 10,
  },
  inputContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: "20%",
  },
});

export default StartScreen;
