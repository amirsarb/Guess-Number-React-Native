import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 10,
    backgroundColor: "#DB005B",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
  },
});
export default Header;
