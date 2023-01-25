import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const absentOutSlice = createSlice({
  name: "out",
  initialState,
  reducers: {
    hasAbsentOut: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { hasAbsentOut } = absentOutSlice.actions;

export const isAbsentOut = (state) => state.absentOut.value;

export default absentOutSlice.reducer;
