import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import RGB_HEX_Colors from "../constants/Colors";

const CartComponents = ({ food }) => {
  const img = require("../assets/intro.png");
  console.log("YEssssssss ", food);
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View style={{ width: "40%" }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderBottomLefttRadius: 20,
              borderTopLeftRadius: 20,
            }}
            source={img}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
            marginLeft: 10,
          }}
        >
          <View>
            <Text>Sandwich Tuntuni</Text>
            <Text style={{ color: RGB_HEX_Colors.red }}>Sandwich Tuntuni</Text>
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: RGB_HEX_Colors.red }}>AED 250.00</Text>
              <View style={{ flexDirection: "row", gap: 15, marginRight: 15 }}>
                <View
                  style={{
                    width: 40,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: RGB_HEX_Colors.gray,
                    borderRadius: 2,
                  }}
                >
                  <Ionicons
                    name="chevron-down-outline"
                    style={{ textAlign: "center", marginTop: 2 }}
                  />
                </View>
                <Text
                  style={{
                    width: 40,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: RGB_HEX_Colors.gray,
                    textAlign: "center",
                  }}
                >
                  2
                </Text>
                <View
                  style={{
                    width: 40,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: RGB_HEX_Colors.gray,
                    borderRadius: 2,
                  }}
                >
                  <Ionicons
                    name="chevron-up-outline"
                    style={{ textAlign: "center", marginTop: 2 }}
                  />
                </View>
              </View>
            </View>
          </View>
          <Ionicons name="close-circle-outline" size={30} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CartComponents;
