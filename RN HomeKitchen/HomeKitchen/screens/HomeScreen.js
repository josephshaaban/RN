import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import BestChefs from "../components/BestChefs";
import TrendingDishesCart from "../components/TrendingDishesCart";
import { Title } from "react-native-paper";
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ width: "100%", marginTop: 5, marginLeft: 15 }}>
        <SearchBar />
      </View>

      <View style={styles.marginLeftTop}>
        <View style={styles.chiefs}>
          <View>
            <Title style={{ marginLeft: 15 }}>The best chefs</Title>
          </View>

          <View>
            <Text style={{ color: "#F9A85D", marginRight: 15 }}>view All</Text>
          </View>
        </View>
        <BestChefs />
      </View>

      <View style={{ marginLeft: 15, marginTop: 15 }}>
        <View>
          <Title style={{ marginLeft: 15 }}>Categories</Title>
        </View>
        <Categories navigation={navigation} />
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ marginLeft: 25 }}>
          <Title>Trending Dishes</Title>
        </View>
        <TrendingDishesCart navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 25,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  chiefs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marginLeftTop: {
    marginTop: 15,
    marginLeft: 15,
  },
});

export default HomeScreen;
