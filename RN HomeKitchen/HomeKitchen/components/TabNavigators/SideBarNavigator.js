// see https://stackoverflow.com/questions/69889406/how-to-combine-bottom-tab-navigator-with-drawer-navigator
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";
import RGB_HEX_Colors from "../../constants/Colors";
import { CHEF_USER_DATA } from "../../constants/staticData";
import LogIn from "../../screens/LogScreens/LogIn";
import NotificationsScreen from "../../screens/NotificationsScreen";
import UserAvatar from "../UserAvatar/UserAvatar";
import FooterTabNavigator from "./FooterTabNavigator";

const Drawer = createDrawerNavigator();

// see https://reactnavigation.org/docs/bottom-tab-navigator#tabbar
export default function SideBarNavigator({
  state,
  descriptors,
  navigation,
  name,
}) {
  const DrawerContent = (props) => {
    const token = useSelector((state) => state.Auth.token);
    console.log("home in token", token);
    return (
      <DrawerContentScrollView
        contentContainerStyle={{ flex: 1, marginHorizontal: 17, padding: 5 }}
      >
        <View
          style={{
            marginVertical: 23,
          }}
        >
          <Title
            style={{
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Menu
          </Title>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
              }}
            >
              <UserAvatar
                userName={CHEF_USER_DATA.name}
                size={80}
                // backgroundColor="#0be881"
                backgroundColor={RGB_HEX_Colors.gray}
                src={CHEF_USER_DATA.image}
                active={CHEF_USER_DATA.active}
                loaderColor={RGB_HEX_Colors.gray}
                rounded={true}
              />
            </View>
            <View
              style={{
                marginLeft: 11,
                alignSelf: "center",
              }}
            >
              <Title>{CHEF_USER_DATA.name}</Title>
              <Text>{CHEF_USER_DATA.email}</Text>
            </View>
          </View>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="FooterTabNavigator"
      screenOptions={({ route }) => ({
        drawerStyle: {
          backgroundColor: RGB_HEX_Colors.white,
          width: "75%",
        },
        headerTitleAlign: "center",
        headerTransparent: true,
        headerShadowVisible: false,
        headerRight: (props) => (
          <TouchableOpacity
            {...props}
            style={[props.style, { marginHorizontal: 11 }]}
            onPress={() => navigation.navigate("FAQ")}
          >
            <Ionicons
              name={"notifications-outline"}
              size={24}
              color={"black"}
              style={{ margin: 3 }}
            />
          </TouchableOpacity>
        ),
        // headerTransparent: true,
        drawerActiveTintColor: RGB_HEX_Colors.primaryColor,
        drawerInactiveTintColor: RGB_HEX_Colors.gray,
      })}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen
        name={"FooterTabNavigator"}
        component={FooterTabNavigator}
        options={({ navigation, route }) => {
          return {
            title: route.name,
            // don't display in DrawerItemList
            drawerItemStyle: { display: "none" },
          };
        }}
      />
      <Drawer.Screen
        name="MyAccount"
        component={NotificationsScreen}
        options={{
          title: "My account",
          drawerIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="FAQ"
        component={NotificationsScreen}
        options={{
          title: "FAQ",
          drawerIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={"frequently-asked-questions"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={NotificationsScreen}
        options={{
          title: "Settings",
          drawerIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Terms"
        component={NotificationsScreen}
        options={{
          title: "Terms and conditions",
          drawerIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "information" : "information-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="LogOut"
        component={LogIn}
        options={{
          title: "Log out",
          drawerIcon: ({ color, size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={"logout"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
