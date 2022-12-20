import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Chef from "../components/Chef";
// import Order from "../components/Order";
import OrderStatus from "../components/OrderStatus";
import chefs from "../constants/chefs";
import RGB_HEX_Colors from "../constants/Colors";
import { orders } from "../constants/staticData";
import CustomRatingBar from "../components/Rating";
import OwnScrollView from "../components/OwnScrollView";

const image = require("../assets/intro.png");

const OrderDetails = ({ navigation }) => {
  const [ratingCount, setRatingCount] = React.useState(0);
  const [isActiveOrders, setIsActiveOrders] = useState(true);

  return (
    <OwnScrollView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={orders}
        removeClippedSubviews
        // maxToRenderPerBatch={3}
        // style={styles.FlatListBg}
        renderItem={({ item }) => (
          <OrderStatus navigation={navigation} infos={item} />
        )}
      />

      <View style={styles.rate}>
        <Text style={styles.rateText}>Rate order</Text>
        <CustomRatingBar />
      </View>
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
    paddingVertical: 9,
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
  rate: {
    // flex: '1',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#B3B3B3",
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 18,
  },
  rateText: {
    marginRight: 8,
  },
});

export default OrderDetails;
