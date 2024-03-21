import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../constants/Colors";
import PrimaryButton from "../component/PrimaryButton";

const Page = () => {
  const router = useRouter();
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
          <AntDesign style={styles.icon} name="user" size={24} color="black" />
          <TextInput style={styles.input} placeholder="Enter your Username." />
        </View>
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
          <SimpleLineIcons
            style={styles.icon}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Enter your Password." />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            style={styles.icon}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput style={styles.input} placeholder="Re-type your password" />
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: Colors.blueTint }}>Forgot passowrd</Text>
        </View>
        <View>
          <PrimaryButton>Sign in</PrimaryButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/")}>
            <Text style={{ color: Colors.primaryColor }}> sign in</Text>
          </TouchableOpacity>
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
    marginTop: 4,
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
    width: "100%",
    paddingRight: 64,
  },
});
