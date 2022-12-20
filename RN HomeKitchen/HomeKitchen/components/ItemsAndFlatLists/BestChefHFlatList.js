import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { BEST_CHEF_LIST_DATA } from "../../constants/staticData";
import ChefAvatarItem from "./ChefAvatarItem";

export default function BestChefHFlatList({ navigation }) {
  const renderItem = ({ item }) => (
    <ChefAvatarItem chef={item} navigation={navigation} />
  );

  return (
    <View style={{ marginTop: 5, backgroundColor: "transparent" }}>
      <SafeAreaView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={BEST_CHEF_LIST_DATA}
          renderItem={renderItem}
        ></FlatList>
      </SafeAreaView>
    </View>
  );
}
