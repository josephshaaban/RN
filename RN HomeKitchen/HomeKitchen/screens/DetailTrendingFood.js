import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Fellow, PreOrder } from "../components/Buttons";
import categories from "../constants/categories";
// import {ScrollView} from 'react-native-gesture-handler';
import Colors from "../constants/Colors";
import foods from "../constants/foods";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const DetailTrendingFood = ({ navigation, route }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={Colors.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("DetailsOneDish", food)}
      >
        <View style={styles.card}>
          <ImageBackground
            resizeMode="cover"
            source={img1}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 130,
              padding: 5,
            }}
          >
            <Ionicons name="heart-outline" size={28} />
            <PreOrder onPress={() => console.log("yes")} title={"Pre Order"} />
          </ImageBackground>
          <View>
            <View
              style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}
            >
              <Text>name</Text>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Ionicons
                  name={"star-outline"}
                  size={25}
                  color={Colors.primaryColor}
                />
                <Text>3.5</Text>
              </View>
            </View>
            <View style={{ height: 80, marginLeft: 10 }}>
              <Text style={{ color: Colors.green }}>Pickup</Text>
              <Text style={{ color: Colors.gray }}>
                {" "}
                loremlorem lorem loremlorem loremlorem loremlorem loremlorem
                lorem
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: Colors.red }}>AED 200.00</Text>
                <Text style={{ color: Colors.gray }}>|Qty 5</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {categories.map((category, index) => (
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
                    ? Colors.primaryColor
                    : Colors.white,
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
                  color: Colors.primaryColor,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const img1 = require("../assets/background.png");
  const item = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: Colors.white }}>
      <ScrollView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.avatar}>
            <Image source={img1} style={styles.Image} />
            <View style={{ width: "50%" }}>
              <Text>lorem lorem lorem lorem</Text>
              <Text style={{ color: Colors.gray }}>
                lorem lorem lorem lorem
              </Text>
            </View>
          </View>
          <View>
            <Fellow
              onPress={() => navigation.navigate("Home")}
              title="follow"
            />
          </View>
        </View>
        <View style={{ marginLeft: 35 }}>
          <Text style={{ marginVertical: 10 }}>
            lorem lorem lorem lorem lorem lorem lorem lorem{" "}
          </Text>
          <Text style={{ color: Colors.gray }}>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            lorem lorem{" "}
          </Text>
        </View>

        <View style={{ marginVertical: 15 }}>
          <ListCategories />
        </View>

        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={foods}
            renderItem={({ item }) => <Card food={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
  card: {
    height: 300,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.white,
  },
});

export default DetailTrendingFood;
