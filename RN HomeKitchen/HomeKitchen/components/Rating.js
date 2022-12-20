import React, { useState } from "react";

import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            <Image
              style={styles.starImageStyle}
              // source={require('../assets/Vector.png')}
              source={
                item <= defaultRating
                  ? require("../assets/FilledVector.png")
                  : require("../assets/Vector.png")
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomRatingBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    color: "#000",
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: "center",
    fontSize: 16,
    color: "#000",
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    padding: 15,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    // marginTop: 30,
  },
  starImageStyle: {
    width: 22,
    height: 22,
    marginHorizontal: 3,
    resizeMode: "cover",
  },
});
