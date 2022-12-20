import { Ionicons } from "@expo/vector-icons";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Title } from "react-native-paper";
import RGB_HEX_Colors from "../../constants/Colors";
import { PreOrder } from "../Buttons";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

function DishCardItem({ dishItem, navigation }) {
  const {
    id,
    title,
    image,
    rate,
    price,
    dishes_count,
    preOrder,
    description,
    pickup,
    delivery,
    is_deleted,
  } = dishItem;

  const currency = "AED";
  const sep = delivery & pickup ? " / " : " ";

  return is_deleted ? (
    <></>
  ) : (
    <TouchableHighlight
      underlayColor={RGB_HEX_Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DetailsOneDish", dishItem)}
      disabled={dishes_count == 0 ? true : false}
    >
      <View style={styles.card}>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: image }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 130,
            padding: 5,
          }}
        >
          <Ionicons name="heart-outline" size={28} />
          <PreOrder onPress={() => console.log("yes")} preOrder={preOrder} />
        </ImageBackground>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              marginLeft: 10,
              // height: 30,
            }}
          >
            <Title style={{ fontSize: 17 }}>
              {`${title} `}
              <Text style={{ color: RGB_HEX_Colors.gray }}>{` \u2022  `}</Text>
            </Title>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name={"star"}
                size={18}
                color={RGB_HEX_Colors.primaryColor}
              />
              <Text
                style={{ color: RGB_HEX_Colors.primaryColor }}
              >{` ${rate}`}</Text>
            </View>
          </View>
          <View
            style={{
              // height: 120,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: RGB_HEX_Colors.green,
                alignContent: "flex-start",
              }}
            >{`${delivery ? "Delivery" : ""}${sep}${
              pickup ? "Pick-up" : ""
            }`}</Text>
            <Text
              style={{
                color: RGB_HEX_Colors.gray,
                alignContent: "space-between",
              }}
            >
              {description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ color: RGB_HEX_Colors.red }}>
                {`${currency} ${price} `}
              </Text>
              <Text style={{ color: RGB_HEX_Colors.gray }}>
                {`| Qty ${dishes_count}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: RGB_HEX_Colors.white,
  },
});

export default DishCardItem;
