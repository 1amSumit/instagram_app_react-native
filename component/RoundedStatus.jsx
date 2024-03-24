import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const RoundedStatus = ({ image, isOwner }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/favicon.png")}
        />
      </View>
      <Text style={styles.text}>sumit</Text>
    </View>
  );
};

export default RoundedStatus;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusContainer: {
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  text: {
    fontSize: 14,
    color: "#444",
  },
});
