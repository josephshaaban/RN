import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Title } from "react-native-paper";
import { Follow } from "../components/Buttons";
import DishCardItem from "../components/ItemsAndFlatLists/DishCardItem";
import OwnScrollView from "../components/OwnScrollView";
import UserAvatar from "../components/UserAvatar/UserAvatar";
import RGB_HEX_Colors from "../constants/Colors";
import { CHEF_CATEGORY_MEAL_LIST_DATA } from "../constants/staticData";

const ChefProfileScreen = ({ navigation, route, chefInfo }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = ({ sections, style }) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {sections.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                width: 120,
                borderBottomColor:
                  selectedCategoryIndex == index
                    ? RGB_HEX_Colors.primaryColor
                    : RGB_HEX_Colors.white,
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  width: "100%",
                  textAlign: "center",
                  color: RGB_HEX_Colors.primaryColor,
                }}
              >
                {category.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <OwnScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.avatar}>
          <UserAvatar
            userName={chefInfo.name}
            size={80}
            // backgroundColor="#0be881"
            backgroundColor={RGB_HEX_Colors.gray}
            src={chefInfo.image}
            active={chefInfo.active}
            loaderColor={RGB_HEX_Colors.gray}
            rounded={true}
            style={styles.Image}
          />
          <View style={{ width: "50%" }}>
            <Title>{chefInfo.name}</Title>
            <Text style={{ color: RGB_HEX_Colors.gray }}>
              {chefInfo.chefInfo.followers} followers
            </Text>
          </View>
        </View>
        <View style={{ marginRight: 5 }}>
          <Follow onPress={() => navigation.navigate("Home")} title="follow" />
        </View>
      </View>
      <View style={{ marginLeft: 35 }}>
        <Text style={{ marginVertical: 10 }}>{chefInfo.chefInfo.bio}</Text>
        <Text style={{ color: RGB_HEX_Colors.gray }}>
          {chefInfo.chefInfo.discryption}
        </Text>
      </View>

      <View style={{ marginVertical: 15 }}>
        <ListCategories sections={CHEF_CATEGORY_MEAL_LIST_DATA} />
      </View>

      <View>
        <FlatList
          showsVertishowalScrollIndicator={false}
          numColumns={2}
          data={CHEF_CATEGORY_MEAL_LIST_DATA[selectedCategoryIndex].meal_set}
          renderItem={({ item }) => {
            return <DishCardItem dishItem={item} navigation={navigation} />;
          }}
        />
      </View>
    </OwnScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  Image: {
    borderRadius: 37,
    width: 75,
    height: 75,
    left: 23,
    marginRight: 35,
  },
});

export default ChefProfileScreen;
