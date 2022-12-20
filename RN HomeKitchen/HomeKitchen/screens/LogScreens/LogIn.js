import React from "react";
import { useController, useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { LoginAccount } from "../../api/Login/Login";

// import axios from "../../Axios";
import { useMutaionPostData } from "../../hooks/useMutationPostData";
import LoginGoogle from "./LoginGoogle";

const image = require("../../assets/background.png");
const facebookIcon = require("../../assets/facebook-48px-icon.png");
const testUser = { phone_number: "+963935651058", password: "User@1234" }; // "token": "5b31fc6193bc2879d4b338805f1c0955da7c3d8f"

const LogIn = (props) => {
  const { navigation, route } = props;
  //   const [mobileNumber, setMobileNumber] = React.useState(
  //     route?.params?.phone_number ? route?.params?.phone_number : ""
  //   );
  //   const [password, setPassword] = React.useState(
  //     route?.params?.password ? route?.params?.password : ""
  //   );

  //   function login() {
  //     return axios
  //       .requestData("POST", "core/user/login", {
  //         phone_number: mobileNumber,
  //         password: password,
  //       })
  //       .then((res) => {
  //         Alert.alert("huhaa", `${res.status}`);
  //         Alert.alert("SOUNDS GOOOOD", `\n${res.data.msg}`);
  //       })
  //       .catch((err) => {
  //         Alert.alert("SOUNDS BAAAAAAAD!", `\n${err}`);
  //         // nevigate to sign-up for testing
  //         // deployment: preccess the error and then indecate user
  //         // error field/s
  //       });
  //   }

  const Input = ({ name, control }) => {
    let defaultVal = testUser.phone_number;
    let label = "Mobile Number";
    let type = "phone-pad";
    let obj = {
      marginTop: "30%",
      width: "80%",
      alignSelf: "center",
      backgroundColor: "#E4E4E4",
    };
    if (name == "password") {
      defaultVal = testUser.password;
      obj = {
        marginTop: "3%",
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#E4E4E4",
      };
      label = "Password";
      type = "flat";
    }
    const { field } = useController({
      control,
      name,
      defaultValue: defaultVal,
    });

    return (
      <TextInput
        label={label}
        type={type}
        keyboardType={type}
        value={field.value}
        onChangeText={field.onChange}
        style={obj}
        underlineColor="#E4E4E4"
        outlineColor="#E4E4E4"
        secureTextEntry={name == "password"}
      />
    );
  };
  const { loading, mutation } = useMutaionPostData(
    LoginAccount,
    navigation,
    "login",
    "success Login",
    "SideBarNavigator"
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const Data = {
      phone_number: data?.number,
      password: data?.password,
    };
    mutation.mutate(Data);
    // Alert.alert(JSON.stringify(data));
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={image} resizeMode="cover" style={styles.image}></Image>
      <Text style={styles.text}>Login</Text>

      <Input name={"number"} control={control} />
      <Input name={"password"} control={control} />

      <TouchableOpacity>
        <Text style={styles.textPass}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.login}
        disabled={loading ? true : false}
      >
        <Text style={styles.button}>{loading ? "Logging.." : "Login"}</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", top: "50%", right: 0, left: 0 }}>
        <ActivityIndicator animating={loading} size="large" color="#e6a807" />
      </View>
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
        <View style={styles.socialMediaItem}>
          <LoginGoogle />
        </View>
        <View style={styles.socialMediaItem}>
          <Image source={facebookIcon} />
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          height: 100,
          paddingTop: 10,
        }}
      >
        <Text>
          <Text>Not registered yet? </Text>
          <Text
            style={{ fontWeight: "bold" }}
            onPress={() => navigation.navigate("Intro")}
          >
            Create Account
          </Text>
        </Text>
      </View>
    </ScrollView>
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
    marginTop: "10%",
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
    alignSelf: "center",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogIn;

{
  /* <TextInput
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
      /> */
}
