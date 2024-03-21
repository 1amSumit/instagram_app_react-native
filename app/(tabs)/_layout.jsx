import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="feed" />
    </Tabs>
  );
};

export default Layout;
