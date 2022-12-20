import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Title } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const Chef = ({ infos }) => {
  // handle Follow chef
  const FollowChef = () => {};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={infos?.userImage}
          style={styles.image}
          imageStyle={{ borderRadius: 100 }}
          resizeMode="stretch"
        >
          {infos?.isOnline && <View style={styles.isOnline}></View>}
        </ImageBackground>

        <View style={styles.infosContainer}>
          <View style={styles.leftInfos}>
            <Title style={styles.name}>{infos.name}</Title>
            <Title style={styles.followers}>{infos.followers} followers</Title>

            <View style={styles.cockImageContainer}>
              {infos?.images?.map((cock, index) => {
                if (index < 2) {
                  return (
                    <ImageBackground
                      source={cock}
                      style={styles.cockImage}
                      imageStyle={{ borderRadius: 5 }}
                      resizeMode="stretch"
                    ></ImageBackground>
                  );
                }
                if (index == 2) {
                  return (
                    <ImageBackground
                      source={cock}
                      style={styles.cockImage}
                      imageStyle={{ borderRadius: 5 }}
                      resizeMode="stretch"
                    >
                      <View style={styles.numOfRestImages}>
                        <Text style={styles.restText}>+{infos?.imagesNum}</Text>
                      </View>
                    </ImageBackground>
                  );
                }
              })}
            </View>
          </View>
        </View>

        <View style={styles.rightInfos}>
          {infos?.isFollowed ? (
            <AntDesign name="checkcircle" size={19} color="#65C18C" />
          ) : (
            <TouchableOpacity
              style={styles.followBtn}
              color="red"
              onPress={() => FollowChef()}
            >
              <Text style={styles.textFollowBtn}>Follow</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.bottomDivider} />
    </View>
  );
};

export default Chef;

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    width: "100%",
    paddingVertical: 10,
    // marginHorizontal: 23 ,
    display: "flex",
    flexDirection: "row",
    // borderBottomColor: '#33333355',
    // borderBottomWidth: 1 ,
    // borderBottomEndRadius: 20,
    // borderBottomStartRadius: 20,
  },
  image: {
    width: 72,
    height: 86,
    borderRadius: 20,
    marginRight: 10,
  },
  isOnline: {
    position: "absolute",
    bottom: 9,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#5EDAA7",
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
    lineHeight: 14.52,
    color: "#9F9F9F",
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
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
});
