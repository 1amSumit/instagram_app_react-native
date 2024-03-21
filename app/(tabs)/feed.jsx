import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Instagram</Text>
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
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 26,
  },
});
