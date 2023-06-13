import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const StartScreen = (props) => {
  return (
    <View style={styles.firstScreen}>
      <Text style={styles.title}>Start New Game</Text>
      <View style={styles.cardContainer}>
        <Text>Enter a Number</Text>
        <TextInput style={styles.inputContainer} />
        <View style={styles.btnContainer}>
          <Button title="Cancel" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
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
    padding: 10,
    alignItems: "center",
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: "white",
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: "20",
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
