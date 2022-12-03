import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, ImageBackground, FlatList } from "react-native";
import Colors from "../constants/Colors";
const img1 = require("../assets/intro.png");

const DATA = [
  { title: "Desert", imageSource: img1 },
  { title: "Desert", imageSource: img1 },
  { title: "Desert", imageSource: img1 },
];

export default function ScrollBar({ navigation }) {
  const Item = ({ category }) => {
    const { title, imageSource } = category;
    return (
      <TouchableOpacity
        underlayColor={Colors.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("CategoryDishesScreen", category)}
      >
        <ImageBackground style={styles.img} source={imageSource}>
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
        {/* <Text>Hello</Text>  */}
        {/* <View style={styles.overlay} />
    <View style={{border:'2px solid red'}}>
    </View> */}
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <Item category={item} />;

  return (
    <SafeAreaView>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "center",
    width: 150,
    height: 150,
    marginLeft: 10,
    borderRadius: 25,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 8,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(150,0,0,0.1)",
    borderRadius: 20,
  },
  text: {
    textAlign: "center",
    color: Colors.primaryColor,
    top: "70%",
    fontSize: 20,
  },
});
