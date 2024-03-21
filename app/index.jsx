import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../constants/Colors";

const Page = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Hallo</Text>
        <Text style={styles.subText}>there!</Text>
        <Text style={styles.dummyText}>
          Login to get latest updates of your community around you!
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.icon}
            name="mail-outline"
            size={24}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Enter your Email." />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.icon}
            name="mail-outline"
            size={24}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Enter your Password." />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  mainText: {
    fontWeight: "bold",
    fontSize: 44,
    color: Colors.primaryColor,
  },

  subText: {
    fontWeight: "bold",
    fontSize: 44,
    color: "#999",
    marginTop: -16,
  },

  dummyText: {
    fontSize: 14,
    color: "#888",
  },

  inputsContainer: {
    marginTop: 24,
    flexDirection: "column",
    gap: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },

  icon: {
    color: "#999",
  },

  input: {
    marginLeft: 12,
  },
});
