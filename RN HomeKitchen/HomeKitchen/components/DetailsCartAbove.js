import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { PreOrder } from "../components/Buttons";
import SecondaryHeader from "../components/SecondaryHeader";
import RGB_HEX_Colors from "../constants/Colors";

const DetailsCartAbove = ({ navigation }) => {
  const img1 = require("../assets/intro.png");
  return (
    <View>
      <View>
        <View>
          <ImageBackground
            source={img1}
            resizeMode="cover"
            style={{
              height: 280,
              justifyContent: "space-between",
              padding: 10,
              borderRadius: 50,
            }}
          >
            <SecondaryHeader navigation={navigation} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginLeft: 15,
                }}
              >
                <Avatar.Image
                  size={45}
                  source={img1}
                  style={{ marginRight: 10 }}
                />
                <Text style={{ color: RGB_HEX_Colors.primaryColor }}>
                  lorem ipsum
                </Text>
              </View>
              <View>
                <PreOrder
                  onPress={() => console.log("yes")}
                  title={"Pre Order"}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>suchi set</Text>
            <Ionicons
              name="star-outline"
              size={25}
              style={{ color: RGB_HEX_Colors.primaryColor, marginLeft: 15 }}
            />
            <Text
              style={{ marginLeft: 10, color: RGB_HEX_Colors.primaryColor }}
            >
              4.5
            </Text>
          </View>
          <View>
            <Ionicons
              name="heart-outline"
              size={25}
              style={{ color: RGB_HEX_Colors.gray }}
            />
          </View>
        </View>

        <View>
          <Text style={{ color: RGB_HEX_Colors.gray }}>
            ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem
            ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem
            ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem
            ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem ipsumlorrem
            ipsumlorrem ipsumlorrem ipsum
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}
        >
          <Text style={{ color: RGB_HEX_Colors.gray, marginRight: 10 }}>
            Delevery Time
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="time-outline"
              size={25}
              style={{ marginRight: 10 }}
            />
            <Text>30 min</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingLeft: 20,
          flexDirection: "row",
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
  );
};

export default DetailsCartAbove;
