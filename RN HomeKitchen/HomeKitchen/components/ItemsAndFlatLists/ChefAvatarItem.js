import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import RGB_HEX_Colors from "../../constants/Colors";
import UserAvatar from "../UserAvatar/UserAvatar";

export default function ChefAvatarItem({ navigation, chef }) {
  const { name, image, state } = chef;
  const active = state === "Active" ? true : false;
  return (
    <TouchableOpacity
      underlayColor={RGB_HEX_Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ChefProfileScreen", chef)}
    >
      <UserAvatar
        userName={name}
        size={80}
        backgroundColor={RGB_HEX_Colors.gray}
        src={image}
        active={active}
        loaderColor={RGB_HEX_Colors.gray}
        style={[styles.img]}
        borderRadius={11}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    resizeMode: "center",
    width: 80,
    height: 80,
    marginLeft: 10,
    // borderRadius: 11,
    backgroundColor: "transparent",
  },
  text: {
    textAlign: "center",
    color: RGB_HEX_Colors.white,
    top: "75%",
    fontSize: 20,
    opacity: 1,
  },
});
