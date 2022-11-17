import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import axios from "../Axios";

const image = require("../assets/background.png");

const Registeration = ({ navigation, isChef }) => {
  const [fullname, setFullName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  function register({ navigation }) {
    const data = {
      is_chef: false,
      password: password,
      password2: password,
      phone_number: mobileNumber,
      full_name: fullname,
      user_name: "test",
      email: "test@example.com",
    };

    return axios
      .requestData("POST", "core/user/signup", data)
      .then((res) => {
        console.log("SOUNDS GOOOOD:", res);
        return navigation.navigate("Login");
      })
      .catch((err) => {
        // console.error(err);
        // nevigate to sign-up for testing
        // deployment: preccess the error and then indecate user
        // error field/s
      });
  }

  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image}></Image>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput
        label="Full Name"
        type="flat"
        value={fullname}
        onChangeText={(name) => setFullName(name)}
        underlineColor="#E4E4E4"
        outlineColor="#E4E4E4"
        style={{
          marginTop: "30%",
          width: "80%",
          alignSelf: "center",
          backgroundColor: "#E4E4E4",
        }}
      />
      <TextInput
        label="Mobile number"
        type="phone-pad"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={(number) => setMobileNumber(number)}
        underlineColor="#E4E4E4"
        outlineColor="#E4E4E4"
        style={{
          marginTop: "3%",
          width: "80%",
          alignSelf: "center",
          backgroundColor: "#E4E4E4",
        }}
      />
      <TextInput
        label="Password"
        type="flat"
        value={password}
        onChangeText={(pass) => setPassword(pass)}
        underlineColor="#E4E4E4"
        outlineColor="#E4E4E4"
        style={{
          marginTop: "3%",
          width: "80%",
          alignSelf: "center",
          backgroundColor: "#E4E4E4",
        }}
        secureTextEntry={true}
      />
      <TextInput
        label="Password"
        type="flat"
        value={password2}
        onChangeText={(pass) => setPassword2(pass)}
        underlineColor="#E4E4E4"
        outlineColor="#E4E4E4"
        style={{
          marginTop: "3%",
          width: "80%",
          alignSelf: "center",
          backgroundColor: "#E4E4E4",
        }}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={register} style={styles.login}>
        <Text style={styles.button}>Sign-up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate("Login");
        }}
      >
        <Text style={styles.textPass}>I have account, Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    color: "#1A1A1A",
    marginTop: "30%",
    fontSize: 40,
    fontWeight: "bold",
  },
  textPass: {
    alignSelf: "center",

    color: "#1A1A1A",
    marginTop: "5%",
    marginRight: "10%",
    fontWeight: "bold",
    fontSize: 12,
  },
  image: {
    flex: 1,
    height: "50%",
    width: "100%",
    opacity: 0.2,
    alignSelf: "center",
    position: "absolute",
  },
  input: {
    alignSelf: "center",
    width: "80%",
    height: 40,
    placeholderTextColor: "#1A1A1A",
    marginTop: "35%",
    borderWidth: 1,
    padding: 10,
  },
  input2: {
    alignSelf: "center",
    width: "80%",
    height: 40,
    margin: "4%",
    borderWidth: 1,
    padding: 10,
  },
  login: {
    alignItems: "center",
    marginTop: "30%",
  },
  button: {
    borderWidth: 3,
    width: "80%",
    backgroundColor: "#FAC835",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    borderRadius: 15,
    color: "#fff",
    borderColor: "#FAC835", //button background/border color
    overflow: "hidden",
  },
});

export default Registeration;
