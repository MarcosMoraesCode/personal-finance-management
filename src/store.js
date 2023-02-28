import { configureStore } from "@reduxjs/toolkit";
import chartsSliceReducer from "./features/charts/chartsSlice";
import expenseDataReducer from "./features/expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    initialSlices: chartsSliceReducer,
    expensesData: expenseDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
