import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const absentEntrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    hasAbsentEntry: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { hasAbsentEntry } = absentEntrySlice.actions;

export const isAbsentEntry = (state) => state.absentEntry.value;

export default absentEntrySlice.reducer;
