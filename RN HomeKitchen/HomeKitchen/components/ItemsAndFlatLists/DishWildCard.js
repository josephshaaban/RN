import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import RGB_HEX_Colors from "../../constants/Colors";
import { PrimaryButton } from "../Buttons";

const DishWildCard = ({ navigation, dishItem }) => {
  return (
    <TouchableHighlight
      underlayColor={RGB_HEX_Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsOneDish", dishItem)}
    >
      <View style={{ height: 240 }}>
        <View style={styles.cartCard}>
          <ImageBackground
            source={dishItem.image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
          >
            <Ionicons
              name={"heart-outline"}
              size={25}
              color={RGB_HEX_Colors.primaryColor}
            />
            <View style={styles.bottomCart}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name={"person-outline"}
                  size={25}
                  color={RGB_HEX_Colors.primaryColor}
                />
                <Text style={{ marginLeft: 10 }}>avatar</Text>
              </View>
              <View>
                <PrimaryButton
                  onPress={() => navigation.navigate("Home")}
                  title="Get Started"
                />
              </View>
            </View>
          </ImageBackground>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>suchi</Text>
            </View>
            <View style={{ marginLeft: 15 }}>
              {/* <Ionicons name={"heart"} size={25} color={RGB_HEX_Colors.primaryColor} /> */}
              <Text style={{ color: RGB_HEX_Colors.red }}>
                lorem ipsum lorem ipsum
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: RGB_HEX_Colors.gray }}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem
              ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cartCard: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: RGB_HEX_Colors.white,

    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  bottomCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 70,
  },
});

export default DishWildCard;
