import * as React from "react";
import { View, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import TrendingDishesCart from "../components/TrendingDishesCart";

const defaultImage = require("../assets/intro.png");
const CategoryDishesScreen = (props) => {
  const { navigation, route } = props;
  const category = route?.params
    ? route?.params
    : { title: "Unknown Category", imageSource: defaultImage };

  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <View style={{ marginLeft: 25 }}>
          <Title>{category.title}</Title>
        </View>
        <TrendingDishesCart navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default CategoryDishesScreen;
