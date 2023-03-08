import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newValue: -1,
  oldValue: -1,
  spendingHistory: [
    {
      month: "Jan",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Feb",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Mar",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Apr",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "May",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Jun",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Jul",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Aug",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Sep",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Oct",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Nov",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Dec",
      spendLimit: 0,
      totalSpent: 0,
      usedCategories: [],
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

        let index = arr[expenseDate.getMonth()].categoryList.findIndex(
          (category) => category === expense.categoryId
        );

        if (Number(index) === -1) {
          //console.log("passou aq");
          arr[expenseDate.getMonth()].categoryList.push(expense.categoryId);
          let oldSpendLimit = arr[expenseDate.getMonth()].spendLimit;
          let category = state.categories.find(
            (category) => category.id === expense.categoryId
          );

          //convertendo numero
          let initialValue = [...category.spendLimit];
          let commaIndex = initialValue.findIndex((element) => element === ",");
          initialValue.splice(commaIndex, 1, ".");
          let replacedValue = initialValue.join("");
          let convertedValue = Number(replacedValue).toFixed(2);

          let newSpendLimit = oldSpendLimit + Number(convertedValue);

          arr[expenseDate.getMonth()].spendLimit = newSpendLimit;
        }

        console.log(index);

        let oldValue = arr[expenseDate.getMonth()].value;
        // console.log("old value", oldValue);

        let newValue = oldValue + Number(convertedValue);

        arr[expenseDate.getMonth()].value = newValue;

        /*state.spendingHistory[expenseDate.getMonth()] = {
          ...state.spendingHistory[expenseDate.getMonth()],
          totalSpent:
            state.spendingHistory[expenseDate.getMonth()].totalSpent +
            Number(convertedValue),
        };*/
      });
      arr.forEach((item, index) => {
        state.spendingHistory[index].totalSpent = item.value;
        state.spendingHistory[index].spendLimit = item.spendLimit;
        state.spendingHistory[index].usedCategories = [...item.categoryList];
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
