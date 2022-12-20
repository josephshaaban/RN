import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = require("../../assets/intro.png");
const Intro = ({ navigation }) => {
  function registerAsUser() {
    return navigation.navigate("Registeration", { isChef: "False" });
  }
  function registerAsChef() {
    return navigation.navigate("Registeration", { isChef: "True" });
  }
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.body}>
          <Text style={styles.text}>Certified Chef</Text>
          <Text style={styles.textDescription}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </View>
        <TouchableOpacity
          onPress={registerAsUser}
          style={styles.buttonContienar}
        >
          <Text style={styles.button}>Register as user</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerAsChef} style={styles.chef}>
          <Text style={styles.button}>Register as chef</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: "60%",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  textDescription: {
    textAlign: "center",
    marginLeft: "13%",
    marginRight: "13%",
    fontWeight: "300",
  },
  body: {
    marginTop: "100%",
  },
  buttonContienar: {
    alignItems: "center",
    marginTop: "7%",
  },
  chef: {
    alignItems: "center",
  },
  button: {
    borderWidth: 3,
    width: "80%",
    marginBottom: "5%",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    borderRadius: 15,
    color: "#FAC835",
    borderColor: "#FAC835", //button background/border color
    overflow: "hidden",
  },
});

export default Intro;
