import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { CATEGORY_LIST_DATA } from "../../constants/staticData";
import CategoryItem from "./CategoryItem";

const CategoryHFlatList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <CategoryItem category={item} navigation={navigation} />
  );

  return (
    <View style={{ marginTop: 5 }}>
      <SafeAreaView>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={CATEGORY_LIST_DATA}
          renderItem={renderItem}
        ></FlatList>
      </SafeAreaView>
    </View>
  );
};

export default CategoryHFlatList;
