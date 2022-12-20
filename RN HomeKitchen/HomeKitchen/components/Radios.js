import * as React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import RGB_HEX_Colors from "../constants/Colors";

export const Radios = ({ checked, setChecked }) => {
  return (
    <View>
      <View
        style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
      >
        <View
          style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={{ color: RGB_HEX_Colors.gray }}>lorem ipsum</Text>
        </View>
        <View
          style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}
        >
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={{ color: RGB_HEX_Colors.gray }}>lorem ipsum</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginLeft: 20, alignItems: "center" }}
      >
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
        />
        <Text style={{ color: RGB_HEX_Colors.gray }}>lorem ipsum</Text>
      </View>
    </View>
  );
};
