import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const gettoken = async () => {
  const token = await AsyncStorage.getItem("token");
  return token;
};
const token = gettoken();
const initialState = {
  isAuth: token ? true : false,
  token: token,
};
const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    makeItAuth: (state, action) => {
      console.log("action", action.payload);
      state.isAuth = true;
      state.token = action.payload;
    },
  },
});

export const { makeItAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
