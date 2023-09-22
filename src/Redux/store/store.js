import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../Feature/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});