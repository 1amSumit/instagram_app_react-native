import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";

const BelowPostContenet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.leftIconsContainer}>
          <FontAwesome6 name="heart" size={24} color="#fff" />
          <Ionicons name="chatbubble-outline" size={24} color="#fff" />
          <Ionicons name="paper-plane-outline" size={24} color="#fff" />
        </View>
        <View>
          <FontAwesome5 name="bookmark" size={24} color="#fff" />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.likeTextContainer}>
          <Text style={styles.subTextLike}>
            28 <Text>likes</Text>
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.username}>
            username{" "}
            <Text style={styles.subTextDesc}>
              Hallo there is the only way to get luck it way dfg dfg dfgsf gs
              sdf{" "}
            </Text>
          </Text>
        </View>
        <View style={styles.commentBtncontainer}>
          <TouchableOpacity style={styles.commentBtn}>
            <Text style={styles.btnText}>View all 4 comments</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>6 hours ago</Text>
        </View>
      </View>
    </View>
  );
};

export default BelowPostContenet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingBottom: 14,
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftIconsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  content: {
    paddingHorizontal: 12,
  },
  subTextLike: {
    color: "#fff",
    fontWeight: "bold",
  },
  descContainer: {
    flexDirection: "row",
    width: 320,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
  },
  subTextDesc: {
    color: "#ccc",
    fontWeight: "normal",
  },
  commentBtncontainer: {
    marginTop: 6,
  },
  btnText: {
    color: "#ccc",
    fontWeight: "normal",
  },
  timeContainer: {
    marginTop: 4,
  },
  timeText: {
    color: "#ccc",
    fontWeight: "normal",
    fontSize: 12,
  },
});
