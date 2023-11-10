import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./Util/noteSlice";

export const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});
