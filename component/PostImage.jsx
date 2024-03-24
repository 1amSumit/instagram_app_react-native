import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import BelowPostContenet from "./BelowPostContenet";

const PostImage = () => {
  return (
    <View>
      <View style={styles.profileNameContainer}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <View style={styles.profileImageContaner}>
            <Image
              style={styles.profileImage}
              source={require("../assets/images/icon.png")}
            />
          </View>
          <Text style={styles.username}>Sumit0718</Text>
        </View>
        <View style={{ justifyContent: "center", alignContent: "center" }}>
          <Text style={{ color: "#fff", fontSize: 18 }}>...</Text>
        </View>
      </View>
      <View style={styles.imageContiner}>
        <Image
          style={styles.image}
          source={require("../assets/images/img.jpg")}
        />
      </View>
      <View>
        <BelowPostContenet />
      </View>
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  imageContiner: {
    width: "100%",
    height: 650,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  profileNameContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "black",
    gap: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  profileImageContaner: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  username: {
    color: "#ddd",
    fontSize: 12,
  },
});
