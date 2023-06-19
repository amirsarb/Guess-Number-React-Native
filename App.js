import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const newGameHandler = () => {
    //  console.log("running");
    setUserNumber("");
    // content = <StartScreen handleStartGame={handleStartGame} />;
  };
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  let content = <StartScreen handleStartGame={handleStartGame} />;
  if (userNumber) {
    content = (
      <GameScreen userNumber={userNumber} newGameHandler={newGameHandler} />
    );
  }

  return (
    <View style={styles.screen}>
      <Header headerTitle={"My Game Starts!"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
