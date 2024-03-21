import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const RoundedStatus = ({ image, isOwner }) => {
  return (
    <View style={styles.statusContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/favicon.png")}
      />
    </View>
  );
};

export default RoundedStatus;

const styles = StyleSheet.create({
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
});
