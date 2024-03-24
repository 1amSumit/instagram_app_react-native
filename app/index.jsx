import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { Colors } from "../constants/Colors";
import PrimaryButton from "../component/PrimaryButton";
import { useMutation } from "@tanstack/react-query";
import { login } from "../servies/login";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      setErrors("User doesn't exists with this email.");
    },
  });

  const onSubmit = () => {
    if (
      email.trim().length === 0 ||
      email.includes("@") === false ||
      password.trim() < 7
    ) {
      console.log("error in inputs");
      setErrors("Email or password incorrect!.");
      return;
    }
    mutate({ email: email, password: password });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome</Text>
        <Text style={styles.subText}>back!</Text>
        <Text style={styles.dummyText}>
          Login to get latest updates of your community around you!
        </Text>
        {errors && (
          <Text style={{ textAlign: "center", color: Colors.primaryColor }}>
            {errors}
          </Text>
        )}
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Ionicons
            style={styles.icon}
            name="mail-outline"
            size={24}
            color="black"
          />
          <TextInput
            value={email}
            autoCapitalize="none"
            autoCorrect
            onChangeText={(text) => {
              setEmail(text);
              setErrors("");
            }}
            style={styles.input}
            placeholder="Enter your Email."
          />
        </View>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            style={styles.icon}
            name="lock"
            size={24}
            color="black"
          />
          <TextInput
            value={password}
            autoCapitalize="none"
            autoCorrect
            onChangeText={(text) => {
              setPassword(text);
              setErrors("");
            }}
            style={styles.input}
            placeholder="Enter your Password."
          />
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <Text style={{ color: Colors.blueTint }}>Forgot passowrd</Text>
        </View>
        <View>
          <PrimaryButton onPress={() => onSubmit()}>Sign in</PrimaryButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/signup")}>
            <Text style={{ color: Colors.primaryColor }}>
              {" "}
              create an account
            </Text>
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
