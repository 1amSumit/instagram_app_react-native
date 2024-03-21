import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RoundedStatus from "../../component/RoundedStatus";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Instagram</Text>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <AntDesign name="hearto" size={24} color="black" />
          <Feather name="message-circle" size={24} color="black" />
        </View>
      </View>
      <View style={styles.statusConatiner}>
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
        <RoundedStatus />
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 22,
  },
  statusConatiner: {
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 6,
  },
});
