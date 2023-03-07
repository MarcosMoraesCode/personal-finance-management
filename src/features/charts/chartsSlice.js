import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newValue: -1,
  oldValue: -1,
  spendingHistory: [
    {
      month: "Jan",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Feb",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Mar",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Apr",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "May",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Jun",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Jul",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Aug",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Sep",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Oct",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Nov",
      spendLimit: 0,
      totalSpent: 0,
    },
    {
      month: "Dec",
      spendLimit: 0,
      totalSpent: 0,
    },
  ],
  categories: [],
};

export const chartsSlice = createSlice({
  name: "initialSlices",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.oldValue = state.newValue;
      state.newValue = action.payload;
    },
    getAnnualHistoric: (state, action) => {
      const arr = [
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
      ];
      action.payload.forEach((expense) => {
        console.log(expense);

        //convertendo o numero
        let initialValue = [...expense.expenseValue];
        let commaIndex = initialValue.findIndex((element) => element === ",");
        initialValue.splice(commaIndex, 1, ".");
        let replacedValue = initialValue.join("");
        let convertedValue = Number(replacedValue).toFixed(2);

        //convertendo a data
        let stringDate = [...expense.expenseDate];
        let year = stringDate.slice(0, 4).join("");
        let month = stringDate.slice(5, 7).join("");
        let day = stringDate.slice(8, 10).join("");
        let expenseDate = new Date(year, month - 1, day);

        let oldValue = arr[expenseDate.getMonth()].value;
        // console.log("old value", oldValue);

        let newValue = oldValue + Number(convertedValue);

        arr.splice(expenseDate.getMonth(), 1, {
          value: newValue,
          categoryList: [],
          spendLimit: 0,
        });

        /*state.spendingHistory[expenseDate.getMonth()] = {
          ...state.spendingHistory[expenseDate.getMonth()],
          totalSpent:
            state.spendingHistory[expenseDate.getMonth()].totalSpent +
            Number(convertedValue),
        };*/
      });
      arr.forEach((item, index) => {
        state.spendingHistory[index].totalSpent = item.value;
      });
    },
    getAllCategories: (state, action) => {
      action.payload.forEach((item) => {
        state.categories.push(item);
      });
    },
  },
});

export const { changeValue, getAnnualHistoric, getAllCategories } =
  chartsSlice.actions;

export default chartsSlice.reducer;
