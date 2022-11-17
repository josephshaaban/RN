import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import axios from "../Axios";

const image = require("../assets/background.png");

const Login = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    console.log(mobileNumber, password);
    return axios
      .requestData("POST", "core/user/login", {
        phone_number: mobileNumber,
        password: password,
      })
      .then((res) => {
        console.log("SOUNDS GOOOOD:", res);
      })
      .catch((err) => {
        // console.error(err);
        // nevigate to sign-up for testing
        // deployment: preccess the error and then indecate user
        // error field/s
      });
  }

  function GLogIn() {
    console.log("Google LogIn pressed");
  }
  function FBLogIn() {
    console.log("FB LogIn pressed");
    // try {
    //   await Facebook.initializeAsync({
    //     appId: "8253294898076858",
    //     androidClientId: "8253294898076858",
    //     appName: "HomeKitchen",
    //   });
    //   console.log("facebooooooooooooook d!!!!!!!!!!!!!!!!!!!!!!!!");
    //   const { type, token, expirationDate, permissions, declinedPermissions } =
    //     await Facebook.logInWithReadPermissionsAsync({
    //       permissions: ["public_profile"],
    //     });
    //   if (type === "success") {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    //   } else {
    //     // type === 'cancel'
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }
  }

  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image}></Image>
      <Text style={styles.text}>Login</Text>
      <TextInput
        label="Mobile number"
        type={"phone-pad"}
        keyboardType={"phone-pad"}
        value={mobileNumber}
        onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
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
      <TouchableOpacity>
        <Text style={styles.textPass}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={login} style={styles.login}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>

      <View style={{ marginTop: "7%", flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "black",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />
        <Text style={{ alignSelf: "center", paddingHorizontal: 10 }}>
          Or sign up with
        </Text>
        <View
          style={{
            backgroundColor: "black",
            height: 1,
            flex: 1,
            alignSelf: "center",
          }}
        />
      </View>
      <View style={styles.socialMediaContainer}>
        {/* <TouchableOpacity onPress={FBLogIn}> */}
        <View style={styles.socialMediaItem}>
          <FontAwesome5 name="facebook-square" size={50} color="black" />
        </View>

        {/* <Text style={{ textAlign: "center" }}>facebook</Text> */}
        {/* </TouchableOpacity> */}
        {/* <TouchableOpacity
        onPress={GLogIn}
        style={{
          height: 1,
          flex: 1,
          alignSelf: "left",
        }}
      >
        <Text> */}
        <View style={styles.socialMediaItem}>
          <FontAwesome5 name="google" size={50} color="black" />
        </View>

        {/* </Text>
      </TouchableOpacity> */}
      </View>

      {/* <Text style={styles.text}>Login</Text>
            <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input2}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
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
    alignSelf: "flex-end",

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
  socialMediaContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center", // if you want to fill rows left to right
    alignContent: "center",
    margin: "6%",
    color: "black",
    justifyContent: "center",
  },
  socialMediaItem: {
    width: "50%", // is 50% of container width
    // padding: 10,
    alignSelf: "center",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
