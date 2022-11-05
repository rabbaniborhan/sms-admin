import { createSlice } from "@reduxjs/toolkit";

const idState = {
  id: "",
};

const idSlice = createSlice({
  name: "id-slice",
  initialState: idState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload.id;
      console.log(state.id);
    },
  },
});

export const idActions = idSlice.actions;
export default idSlice;
