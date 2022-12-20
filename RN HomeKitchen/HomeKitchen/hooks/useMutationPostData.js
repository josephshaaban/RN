import React from "react";
// import { useAlert } from "react-alert";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { makeItAuth } from "../redux/auth/authSlice";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeItAuth } from "../redux-toolkit/Auth/Auth";
export const useMutaionPostData = (
  ApiFunction,
  navigation,
  nameOfApi,
  successMessage,
  navigateUrl
) => {
  const [loading, setIsloading] = React.useState(false);
  const dispatch = useDispatch();

  const mutation = useMutation(ApiFunction, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('movies');
      // console.log("data", data?.data);
      // Alert.alert(successMessage);
      if (nameOfApi == "login") {
        AsyncStorage.setItem("token", data?.data?.token);
        dispatch(makeItAuth(data?.data?.token));
      }
      navigation.navigate(navigateUrl);
      setIsloading(false);
    },
    onError: (error) => {
      setIsloading(false);
      Alert.alert(error?.message);
      console.log("erorr", error);
    },
    onMutate: () => {
      setIsloading(true);
    },
  });

  return {
    mutation,
    loading,
  };
};
