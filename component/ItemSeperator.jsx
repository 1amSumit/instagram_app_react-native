import { View } from "react-native";
import React from "react";

const ItemSeperator = ({ isPost = false }) => {
  return <View style={isPost ? { width: 15 } : { width: 5 }}></View>;
};

export default ItemSeperator;
