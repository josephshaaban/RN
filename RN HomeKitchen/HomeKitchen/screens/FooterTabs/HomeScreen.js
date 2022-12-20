import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Title } from "react-native-paper";
import BestChefHFlatList from "../../components/ItemsAndFlatLists/BestChefHFlatList";
import CategoryHFlatList from "../../components/ItemsAndFlatLists/CategoryHFlatList";
import TrendingDishVFlatList from "../../components/ItemsAndFlatLists/TrendingDishVFlatList";
import OwnScrollView from "../../components/OwnScrollView";
import SearchBar from "../../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  return (
    <OwnScrollView>
      <View style={{ width: "100%", marginTop: 5, marginLeft: 15 }}>
        <SearchBar />
      </View>

      <View style={styles.marginLeftTop}>
        <View style={styles.chiefs}>
          <View>
            <Title style={{ marginLeft: 15 }}>The best chefs</Title>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Chefs")}>
            <Text style={{ color: "#F9A85D", marginRight: 15 }}>view All</Text>
          </TouchableOpacity>
        </View>
        <BestChefHFlatList navigation={navigation} />
      </View>

      <View style={styles.marginLeftTop}>
        <View>
          <Title style={{ marginLeft: 15 }}>Categories</Title>
        </View>
        <CategoryHFlatList navigation={navigation} />
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={{ marginLeft: 25 }}>
          <Title>Trending Dishes</Title>
        </View>
        <TrendingDishVFlatList navigation={navigation} />
      </View>
    </OwnScrollView>
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
