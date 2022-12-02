import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import SecondaryHeader from "../components/SecondaryHeader";
import { Avatar, RadioButton } from "react-native-paper";
import Colors from "../constants/Colors";
import { AddToCart, PreOrder } from "../components/Buttons";
import { Ionicons } from "@expo/vector-icons";
import DetailsCartAbove from "../components/DetailsCartAbove";
import { Radios } from "../components/Radios";

const DetailsOneDish = ({ navigation }) => {
  const img1 = require("../assets/intro.png");
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <ScrollView>
      <DetailsCartAbove navigation={navigation} />
      <View style={{ paddingLeft: 10 }}>
        <Radios />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: Colors.gray,
    borderRadius: 20,
  },
});

export default DetailsOneDish;
