import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

import axiosInstance from "../../axiosInstance";

const initialState = {
  userExpenses: null,
};

export const fetchCategoriesData = createAsyncThunk(
  "userexpenses/fetchCategoriesData",
  async (action) => {
    try {
      const response = await axiosInstance.get("/category.json");
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const fetchExpensesData = createAsyncThunk(
  "userexpenses/fetchExpensesData",
  async (action) => {
    try {
      const response = await axiosInstance.get("/expense.json");
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const expenseDataSlice = createSlice({
  name: "expensesData",
  initialState,
  reducers: {
    addExpenses: (state, action) => {
      state.userExpenses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesData.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(fetchCategoriesData.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(fetchExpensesData.fulfilled, (state, action) => {
      //console.log("Success", action.payload);
    });
    builder.addCase(fetchExpensesData.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
  },
});

export const { addExpenses } = expenseDataSlice.actions;

export default expenseDataSlice.reducer;
