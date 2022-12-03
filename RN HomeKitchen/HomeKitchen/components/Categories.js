import React from "react";
import { View, Text } from "react-native";
import ScrollBar from "./ScrollBar";

const Categories = ({ navigation }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <ScrollBar navigation={navigation} />
    </View>
  );
};

export default Categories;
