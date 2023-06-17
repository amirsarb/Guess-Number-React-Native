import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Cards";
import Color from "../incs/Colors";
import Input from "../components/Input";
import StartCard from "../components/StartCard";

const StartScreen = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const validateInput = (inputText) => {
    setInputVal(inputText.replace(/[^0-9]/g, ""));
  };

  let confimedElements = "";
  const confirmHandler = () => {
    if (inputVal <= 0 || inputVal > 99) {
      Alert.alert("Invalid Number", "Please enter number between 0 and 100", [
        { text: "Ok!", style: "destructive", onPress: () => {} },
      ]);
    } else {
      setConfirmed(() => {
        return true;
      });
    }
  };

  if (confirmed) {
    confimedElements = (
      <StartCard
        confirmedNumber={inputVal}
        handleStartGame={props.handleStartGame}
      />
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.firstScreen}>
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.cardContainer}>
          <Text>Enter a Number</Text>
          <Input
            value={inputVal}
            style={styles.inputContainer}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={validateInput}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={() => {
                  setInputVal("");
                }}
              />
            </View>
            <View>
              <Button title="Confirm" onPress={confirmHandler} />
            </View>
          </View>
        </Card>
        {confimedElements}
      </View>
    </TouchableWithoutFeedback>
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
  inputContainer: { width: 50 },
  btn: {
    width: 100,
  },
});

export default StartScreen;
