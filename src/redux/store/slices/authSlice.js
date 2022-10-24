import { createSlice } from "@reduxjs/toolkit";

const token =
  typeof window !== "undefined" ? localStorage.getItem("jwtToken") || null : "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: token,
  },
  reducers: {
    setToken: (state, actions) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "jwtToken",
          (state.token = actions.payload?.token?.data.jwtToken)
        );
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
