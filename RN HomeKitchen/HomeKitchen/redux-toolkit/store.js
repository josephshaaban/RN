import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/Auth";
const CombineReducers = combineReducers({
  Auth: AuthSlice,
});

export const store = configureStore({
  reducer: CombineReducers,
});
