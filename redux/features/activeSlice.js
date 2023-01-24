import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};

const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    changeActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActive } = activeSlice.actions;

export const selectMenu = (state) => state.active.value;

export default activeSlice.reducer;
