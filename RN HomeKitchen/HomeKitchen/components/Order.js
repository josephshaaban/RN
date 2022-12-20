import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Title } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Order = ({ navigation, infos }) => {
  // handle Follow chef
  const FollowChef = () => {};

  //   console.log("navigate ".repeat(20), navigation);

  // returning suitable style class and the text that match every order status
  const detectOrderStatus = (status) => {
    switch (status) {
      case 1:
        return {
          color: styles.orderStatus1,
          text: "Pending",
        };
      case 2:
        return {
          color: styles.orderStatus2,
          text: "On the way",
        };
      case 3:
        return {
          color: styles.orderStatus3,
          text: "Processing",
        };
      case 4:
        return {
          color: styles.orderStatusDelivered,
          text: "Delivered",
        };

      default:
        break;
    }
  };

  return (
    <TouchableHighlight
      underlayColor={Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("orderDetails")}
    >
      {/* <View style={styles.mainContainer}> */}
      <View style={styles.container}>
        <View style={styles.orderImageContiner}>
          <Image style={styles.image} source={infos?.orderImage} />
        </View>

        <View style={styles.infosContainer}>
          <View style={styles.leftInfos}>
            <Title style={styles.name}>{infos.name}</Title>

            <Title style={styles.followers}>
              <Text>{infos?.created_at} minutes ago</Text>
              <View style={styles.divider}></View>
              <Text
                style={[
                  detectOrderStatus(infos?.orderStatus).color,
                  styles.orderStatusText,
                ]}
              >
                {" "}
                {detectOrderStatus(infos?.orderStatus).text}{" "}
              </Text>
            </Title>

            <View style={styles.cockImageContainer}>
              <Text style={styles.price}>AED {infos?.price}</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.rightInfos}>


            </View> */}
      </View>

      {/* <View style={styles.bottomDivider} /> */}
    </TouchableHighlight>
  );
};

export default Order;

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  container: {
    marginVertical: 10,
    // paddingVertical: 10 ,
    // marginHorizontal: 23 ,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // borderBottomColor: '#33333355',
    // borderBottomWidth: 1 ,
    // borderBottomEndRadius: 20,
    // borderBottomStartRadius: 20,
    // borderColor: '#555',
    // borderWidth: 1 ,
    borderRadius: 8,
    padding: 2,
  },
  orderImageContiner: {
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    // borderColor: 'black',
    // borderWidth: 1 ,
    borderRadius: 5,
    marginRight: 15,
  },
  image: {
    width: 27,
    height: 27,
    // marginRight: 10
  },
  infosContainer: {
    flex: 1,
  },
  leftInfos: {
    flexDirection: "column",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16.94,
    color: "#1A1A1A",
  },
  followers: {
    fontSize: 12,
    lineHeight: 16.52,
    color: "#9F9F9F",
    // back
    alignItems: "center",
    justifyContent: "center",
    //    paddingRight: 15
  },
  divider: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#9F9F9F",
    marginHorizontal: 5,
    paddingHorizontal: 3,
    marginHorizontal: 3,
  },
  price: {
    fontWeight: "600",
    fontSize: 14,
    color: "black",
    lineHeight: 16.94,
  },
  cockImageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  cockImage: {
    width: 38,
    height: 39,
    marginHorizontal: 4,
  },
  numOfRestImages: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#1a1a1a55",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  restText: {
    color: "white",
  },
  rightInfos: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    // paddingRight: 23,
    // backgroundColor: 'black'
  },
  followBtn: {
    // color: 'red',
    backgroundColor: "#65C18C66",
    borderRadius: 9,
    width: 68,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textFollowBtn: {
    color: "#65C18C",
    fontSize: 11,
    lineHeight: 12.1,
  },
  bottomDivider: {
    width: "75%",
    height: 1,
    backgroundColor: "#00000022",
    alignSelf: "center",
  },
  orderStatusText: {
    fontSize: 14,
  },
  orderStatus1: {
    color: "#E6431E",
  },
  orderStatus2: {
    color: "#76E61E",
  },
  orderStatus3: {
    color: "#E6BA1E",
  },
  orderStatusDelivered: {
    color: "#E6BA1E",
  },
});
