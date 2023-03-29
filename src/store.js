import { configureStore } from "@reduxjs/toolkit";
import chartsSliceReducer from "./features/charts/chartsSlice";
import expenseDataReducer from "./features/expenses/expensesSlice";
import goalDataReducer from "./features/goals/goalsSlice";
import historyDataReducer from "./features/history/historySlice";
import incomeDataReducer from "./features/incomes/incomesSlice";

export const store = configureStore({
  reducer: {
    initialSlices: chartsSliceReducer,
    expensesData: expenseDataReducer,
    goalsData: goalDataReducer,
    incomesData: incomeDataReducer,
    historyData: historyDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
