import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./features/activeSlice";
import absentEntryReducer from "./features/absentEntrySlice";
import absentOutReducer from "./features/absentOutSlice";

export const store = configureStore({
  reducer: {
    active: activeReducer,
    absentEntry: absentEntryReducer,
    absentOut: absentOutReducer,
  },
});
