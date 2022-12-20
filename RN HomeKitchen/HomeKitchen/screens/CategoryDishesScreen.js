import * as React from "react";
import TrendingDishVFlatList from "../components/ItemsAndFlatLists/TrendingDishVFlatList";
import OwnScrollView from "../components/OwnScrollView";

const defaultImage = require("../assets/intro.png");
const CategoryDishesScreen = (props) => {
  const { navigation, route } = props;
  const category = route?.params
    ? route?.params
    : { title: "Unknown Category", imageSource: defaultImage };

  return (
    <OwnScrollView>
      {/* <View style={{ marginTop: 15 }}>
      <View style={{ marginLeft: 25 }}>
          <Title>{category.title}</Title>
        </View> */}
      <TrendingDishVFlatList navigation={navigation} />
      {/* </View> */}
    </OwnScrollView>
  );
};

export default CategoryDishesScreen;
