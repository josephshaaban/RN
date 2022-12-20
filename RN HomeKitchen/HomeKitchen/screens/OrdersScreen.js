import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Chef from "../components/Chef";
import Order from "../components/Order";
import OwnScrollView from "../components/OwnScrollView";
import chefs from "../constants/chefs";
import RGB_HEX_Colors from "../constants/Colors";
import { orders, previousOrders } from "../constants/staticData";

const image = require("../assets/intro.png");

const Orders = ({ navigation }) => {
  const [isActiveOrders, setIsActiveOrders] = useState(true);

  return (
    <OwnScrollView style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => setIsActiveOrders(true)}
          style={[styles.tab, isActiveOrders ? styles.activeTab : ""]}
        >
          <Text
            style={[
              styles.textCenter,
              isActiveOrders ? styles.activeTabTextColor : "",
            ]}
          >
            Active Orders
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsActiveOrders(false)}
          style={[styles.tab, !isActiveOrders ? styles.activeTab : ""]}
        >
          <Text
            style={[
              styles.textCenter,
              !isActiveOrders ? styles.activeTabTextColor : "",
            ]}
          >
            previous Orders
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={isActiveOrders ? orders : previousOrders}
        removeClippedSubviews
        // maxToRenderPerBatch={3}
        // style={styles.FlatListBg}
        renderItem={({ item }) => (
          <Order navigation={navigation} infos={item} />
        )}
      />
    </OwnScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  tab: {
    width: "50%",
    borderBottomColor: "#00000033",
    borderBottomWidth: 1,
    paddingBottom: 9,
  },
  textCenter: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    color: "#B9B9B9",
    lineHeight: 36,
  },
  activeTabTextColor: {
    color: RGB_HEX_Colors.primaryColor,
  },
  activeTab: {
    borderBottomColor: RGB_HEX_Colors.primaryColor,
    borderBottomWidth: 2,
  },
  // FlatListBg: {
  //   backgroundColor: '#fff'
  // }
});

export default Orders;
