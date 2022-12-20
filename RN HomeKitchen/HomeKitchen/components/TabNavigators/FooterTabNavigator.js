import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";
import HomeScreen from "../../screens/FooterTabs/HomeScreen";

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RGB_HEX_Colors from "../../constants/Colors";
import MyCartScreen from "../../screens/FooterTabs/MyCartScreen";
import WashListScreen from "../../screens/FooterTabs/WashListScreen";
import Orders from "../../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const tabList = {
  homeTab: { name: "Home", focusedIcon: "home", icon: "home-outline" },
  wishListTab: {
    name: "Wishlist",
    focusedIcon: "heart",
    icon: "heart-outline",
  },
  orderListTab: { name: "Orders", focusedIcon: "list", icon: "list-outline" },
  cartTab: { name: "My Cart", focusedIcon: "cart", icon: "cart-outline" },
};

const tabNamesKeysMap = {
  Home: "homeTab",
  Wishlist: "wishListTab",
  Orders: "orderListTab",
  "My Cart": "cartTab",
};

const FooterTabNavigator = ({ navigation, route }) => {
  function getHeaderTitle(route) {
    const routeName =
      getFocusedRouteNameFromRoute(route) ?? "FooterTabNavigator";

    switch (routeName) {
      case "FooterTabNavigator":
        return "Home";
      case "Home":
        return "Home";
      case "Wishlist":
        return "Wishlist";
      case "Orders":
        return "Orders";
      case "My Cart":
        return "My Cart";
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName={tabList.homeTab.name}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: RGB_HEX_Colors.primaryColor,
        tabBarInactiveTintColor: "grey",
        tabBarLabelPosition: "beside-icon",
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              numberOfLines={1}
              style={[styles.label, { color }, styles.labelBeside]}
            >
              {focused ? route.name : ""}
            </Text>
          );
        },
        tabBarStyle: {
          // padding: 10,
          // height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const tabName = tabNamesKeysMap[route.name];
          const tabIcon = focused
            ? tabList[tabName]["focusedIcon"]
            : tabList[tabName]["icon"];
          return <Ionicons name={tabIcon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={tabList.homeTab.name}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: tabList.homeTab.name,
        })}
      />
      <Tab.Screen
        name={tabList.wishListTab.name}
        component={WashListScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: tabList.wishListTab.name,
        })}
      />
      <Tab.Screen
        name={tabList.orderListTab.name}
        component={Orders}
        options={({ navigation }) => ({
          headerShown: false,
          title: tabList.orderListTab.name,
        })}
      />
      <Tab.Screen
        name={tabList.cartTab.name}
        component={MyCartScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: tabList.cartTab.name,
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
  labelBeside: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 3,
  },
});

export default FooterTabNavigator;
