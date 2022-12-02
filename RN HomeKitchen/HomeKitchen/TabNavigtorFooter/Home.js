import React from "react";
import HomeScreen from "../screens/HomeScreen";

import DetailsScreen from "../screens/DetailsScreen";
import SettingsScreen from "../screens/SettingScreen";
import PreferedScreen from "../screens/PreferedScreen";
import { Header } from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Orders";
const preferedName = "Prefered";

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "basket" : "basket-outline";
          } else if (rn === preferedName) {
            iconName = focused ? "heart" : "heart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={({ navigation }) => ({
          title: homeName,
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name={detailsName}
        component={DetailsScreen}
        options={({ navigation }) => ({
          title: detailsName,
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name={preferedName}
        component={PreferedScreen}
        options={({ navigation }) => ({
          title: preferedName,
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Tab.Screen
        name={settingsName}
        component={SettingsScreen}
        options={({ navigation }) => ({
          title: settingsName,
          header: () => <Header navigation={navigation} />,
        })}
      />
    </Tab.Navigator>
  );
};
export default Home;
