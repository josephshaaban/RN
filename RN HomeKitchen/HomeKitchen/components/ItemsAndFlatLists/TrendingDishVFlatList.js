import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { MEAL_LIST_DATA } from "../../constants/staticData";
import DishWildCard from "./DishWildCard";

const TrendingDishVFlatList = ({ navigation }) => {
  return (
    <SafeAreaView>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={MEAL_LIST_DATA}
        renderItem={({ item }) => (
          <DishWildCard navigation={navigation} dishItem={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default TrendingDishVFlatList;
