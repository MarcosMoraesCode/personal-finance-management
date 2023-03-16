import { configureStore } from "@reduxjs/toolkit";
import chartsSliceReducer from "./features/charts/chartsSlice";
import expenseDataReducer from "./features/expenses/expensesSlice";
import goalDataReducer from "./features/goals/goalsSlice";

export const store = configureStore({
  reducer: {
    initialSlices: chartsSliceReducer,
    expensesData: expenseDataReducer,
    goalsData: goalDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
