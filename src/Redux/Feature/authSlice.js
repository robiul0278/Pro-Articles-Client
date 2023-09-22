import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.user = actions.payload;
    },
    logOutUser: (state) => {
      state.user = {};
    },
  },
});

export const { addUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;