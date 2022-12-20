import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Chef from "../components/Chef";
import OwnScrollView from "../components/OwnScrollView";
import chefs from "../constants/chefs";

const Chefs = ({ navigation }) => {
  return (
    <OwnScrollView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={chefs}
        renderItem={({ item }) => <Chef infos={item} />}
      />
    </OwnScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
});

export default Chefs;
