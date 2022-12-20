import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { AddToCart } from "../components/Buttons";
import RGB_HEX_Colors from "../constants/Colors";

import DetailsCartAbove from "../components/DetailsCartAbove";
import OwnScrollView from "../components/OwnScrollView";
import { Radios } from "../components/Radios";
import SelectTime from "../components/SelectTime";

const DetailsOneDish = ({ navigation }) => {
  const img1 = require("../assets/intro.png");
  const [text, onChangeText] = React.useState("Useless Text");
  const [checked, setChecked] = React.useState("first");
  return (
    <OwnScrollView>
      <DetailsCartAbove navigation={navigation} />
      <View style={{ paddingLeft: 10 }}>
        {checked == "first" ? (
          <Radios checked={checked} setChecked={setChecked} />
        ) : (
          <SelectTime />
        )}
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={{ padding: 10 }}>
        <AddToCart title={"Add To Cart"} />
      </View>
    </OwnScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: RGB_HEX_Colors.gray,
    borderRadius: 20,
  },
});

export default DetailsOneDish;
