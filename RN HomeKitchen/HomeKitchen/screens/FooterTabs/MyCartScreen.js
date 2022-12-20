import * as React from "react";
import { FlatList, Text, View } from "react-native";
import { Title } from "react-native-paper";
import { Delivery, PickUp } from "../../components/Buttons";
import CartComponents from "../../components/CartComponents";
import OwnScrollView from "../../components/OwnScrollView";
import RGB_HEX_Colors from "../../constants/Colors";
import { MEAL_LIST_DATA } from "../../constants/staticData";

const MyCartScreen = ({ navigation }) => {
  return (
    <OwnScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={MEAL_LIST_DATA}
        renderItem={({ item }) => <CartComponents food={item} />}
      />

      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Subtotal</Text>
          <Text>AED 2394.0</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Delivery</Text>
          <Text>AED 2394.0</Text>
        </View>
        <View
          style={{
            borderBottomColor: RGB_HEX_Colors.gray,
            borderWidth: 0.4,
            borderStyle: "solid",
            marginTop: 20,
          }}
        ></View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Title style={{ color: RGB_HEX_Colors.red }}>Total</Title>
          <Title style={{ color: RGB_HEX_Colors.red }}>AED 2394.0</Title>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-around",
          marginBottom: 15,
        }}
      >
        <PickUp title={"Pick Up"} />
        <Delivery title={"Delivery Address"} />
      </View>
    </OwnScrollView>
  );
};

export default MyCartScreen;
