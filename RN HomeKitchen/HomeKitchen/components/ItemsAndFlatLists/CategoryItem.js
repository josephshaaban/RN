import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import RGB_HEX_Colors from "../../constants/Colors";

export default function CategoryItem({ navigation, category }) {
  const { title, imageSource } = category;
  return (
    <TouchableOpacity
      underlayColor={RGB_HEX_Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("CategoryDishesScreen", category)}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 11 }}
        style={styles.img}
        source={imageSource}
      >
        <LinearGradient
          colors={[RGB_HEX_Colors.kenyanSand, "transparent"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          opacity={0.6}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 11,
            position: "absolute",
          }}
        ></LinearGradient>
        <Text style={styles.text} opacity={1}>
          {title}
        </Text>
      </ImageBackground>
      {/* <Text>Hello</Text>
          <View style={styles.overlay} />
          <View style={{ border: "2px solid red" }}></View> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "center",
    width: 150,
    height: 150,
    marginLeft: 10,
    borderRadius: 11,
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
    color: RGB_HEX_Colors.white,
    top: "75%",
    fontSize: 20,
    opacity: 1,
  },
});
