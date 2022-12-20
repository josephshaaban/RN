import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RGB_HEX_Colors from "../constants/Colors";

const PrimaryButton = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={[style.btnContainer, { backgroundColor: RGB_HEX_Colors.red }]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Ionicons
            name={"star-outline"}
            size={15}
            color={RGB_HEX_Colors.white}
          />
          <Text style={{ marginLeft: 15, color: RGB_HEX_Colors.white }}>
            4.2
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Follow = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.follow}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "rgba(101, 193, 140, 0.55)" }}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PreOrder = ({ onPress = () => {}, preOrder }) => {
  const title = preOrder ? "Pre Order" : "Order";
  const bgColor = preOrder ? RGB_HEX_Colors.red : RGB_HEX_Colors.green;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[style.btnContainer, { backgroundColor: bgColor }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: RGB_HEX_Colors.white }}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AddToCart = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.addToCart}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// todo swap between Delivery and pickup
const Delivery = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.Delivery}>
        <Text style={style.DeliveryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PickUp = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.PickUp}>
        <Text style={style.PickUpTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: RGB_HEX_Colors.white, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    height: 30,
    width: 80,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  follow: {
    backgroundColor: "rgba(101, 193, 140, 0.22)",
    height: 30,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCart: {
    backgroundColor: RGB_HEX_Colors.primaryColor,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  PickUp: {
    backgroundColor: RGB_HEX_Colors.white,
    width: 150,
    height: 60,
    borderRadius: 11,
    borderColor: RGB_HEX_Colors.primaryColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  PickUpTitle: {
    color: RGB_HEX_Colors.primaryColor,
    fontWeight: "bold",
    fontSize: 18,
  },
  Delivery: {
    backgroundColor: RGB_HEX_Colors.primaryColor,
    width: 150,
    height: 60,
    borderRadius: 11,
    borderColor: RGB_HEX_Colors.white,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  DeliveryTitle: {
    color: RGB_HEX_Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export { PrimaryButton, Follow, PreOrder, AddToCart, Delivery, PickUp };
