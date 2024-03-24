import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RoundedStatus from "../../component/RoundedStatus";
import ItemSeperator from "../../component/ItemSeperator";
import PostImage from "../../component/PostImage";

const data = [1, 2, 3, 4, 5, 6, 7, 8];

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
        <FlatList
          data={data}
          renderItem={(item) => <RoundedStatus />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeperator}
        />
      </View>
      <View style={styles.postsContainer}>
        <FlatList
          data={data}
          renderItem={(item) => <PostImage />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeperator}
        />
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
    paddingVertical: 4,
  },
  postsContainer: {},
});
