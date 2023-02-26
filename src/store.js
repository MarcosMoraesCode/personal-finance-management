import { configureStore } from "@reduxjs/toolkit";
import chartsSliceReducer from "./features/charts/chartsSlice";

export const store = configureStore({
  reducer: {
    initialSlices: chartsSliceReducer,
  },
});
