import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./features/activeSlice";

export const store = configureStore({
  reducer: {
    active: activeReducer,
  },
});
