import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "./Cards";
import NumberStyle from "./NumberStyle";

const StartCard = (props) => {
  return (
    <Card style={styles.startCard}>
      <Text style={styles.headerCard}>You selected</Text>
      <View style={styles.numberStyle}>
        <NumberStyle>{props.confirmedNumber}</NumberStyle>
      </View>
      <View>
        <Button
          title="Start Game"
          onPress={() => props.handleStartGame(props.confirmedNumber)}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  startCard: {
    marginTop: 10,
    alignItems: "center",
  },
  headerCard: {
    fontSize: 20,
  },
});

export default StartCard;
