import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Axios } from "../../../core/axios";

// const fetchAdminData = createAsyncThunk("admin/fetchAdminData", () => {
//   const { data } = axios.get("https://jsonplaceholder.typicode.com/posts");
//   console.log(data);
//   return data;
// });

const token =
  typeof window !== "undefined" ? localStorage.getItem("jwtToken") || null : "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "",
    token: token,
    user: [],
  },
  reducers: {
    setToken: (state, { payload }) => {
      console.log(state.user);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "jwtToken",
          (state.token = payload?.token?.data.jwtToken)
        );
      }
    },
  },
  // extraReducers: {
  //   [fetchAdminData.pending]: (state, action) => {
  //     state.status = "pending";
  //   },
  //   [fetchAdminData.fulfilled]: (state, action) => {
  //     state.user = action.payload;
  //     state.status = "fulfilled";
  //   },
  //   [fetchAdminData.rejected]: (state, action) => {
  //     state.status = "rejected";
  //   },
  // },
});

export const authActions = authSlice.actions;

export default authSlice;
