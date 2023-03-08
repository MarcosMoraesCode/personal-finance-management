import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newValue: -1,
  oldValue: -1,
  spendingHistory: [
    {
      month: "Jan",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Feb",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Mar",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Apr",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "May",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Jun",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Jul",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Aug",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Sep",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Oct",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Nov",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
    {
      month: "Dec",
      spendLimit: -1,
      totalSpent: 0,
      usedCategories: [],
    },
  ],
  categories: [],
  loadingData: false,
  clickedDate: "",
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
      state.loadingData = true;
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
      const actualDate = new Date();
      const actualMonth = actualDate.getMonth();
      const actualYear = actualDate.getFullYear();

      const checkLastTwelveMonths = () => {
        let validExpensesKey = [];
        console.log("dentro", actualMonth);
        switch (actualMonth) {
          case 0:
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });
            validExpensesKey.push({ month: 5, year: actualYear - 1 });
            validExpensesKey.push({ month: 4, year: actualYear - 1 });
            validExpensesKey.push({ month: 3, year: actualYear - 1 });
            validExpensesKey.push({ month: 2, year: actualYear - 1 });
            validExpensesKey.push({ month: 1, year: actualYear - 1 });

            break;
          case 1:
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });
            validExpensesKey.push({ month: 5, year: actualYear - 1 });
            validExpensesKey.push({ month: 4, year: actualYear - 1 });
            validExpensesKey.push({ month: 3, year: actualYear - 1 });
            validExpensesKey.push({ month: 2, year: actualYear - 1 });

            break;
          case 2:
            console.log("passou aqui dentro");
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });
            validExpensesKey.push({ month: 5, year: actualYear - 1 });
            validExpensesKey.push({ month: 4, year: actualYear - 1 });
            validExpensesKey.push({ month: 3, year: actualYear - 1 });

            break;
          case 3:
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });
            validExpensesKey.push({ month: 5, year: actualYear - 1 });
            validExpensesKey.push({ month: 4, year: actualYear - 1 });

            break;
          case 4:
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });
            validExpensesKey.push({ month: 5, year: actualYear - 1 });

            break;
          case 5:
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });
            validExpensesKey.push({ month: 6, year: actualYear - 1 });

            break;
          case 6:
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });
            validExpensesKey.push({ month: 7, year: actualYear - 1 });

            break;
          case 7:
            validExpensesKey.push({ month: 7, year: actualYear });
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });
            validExpensesKey.push({ month: 8, year: actualYear - 1 });

            break;
          case 8:
            validExpensesKey.push({ month: 8, year: actualYear });
            validExpensesKey.push({ month: 7, year: actualYear });
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });
            validExpensesKey.push({ month: 9, year: actualYear - 1 });

            break;
          case 9:
            validExpensesKey.push({ month: 9, year: actualYear });
            validExpensesKey.push({ month: 8, year: actualYear });
            validExpensesKey.push({ month: 7, year: actualYear });
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });
            validExpensesKey.push({ month: 10, year: actualYear - 1 });

            break;
          case 10:
            validExpensesKey.push({ month: 10, year: actualYear });
            validExpensesKey.push({ month: 9, year: actualYear });
            validExpensesKey.push({ month: 8, year: actualYear });
            validExpensesKey.push({ month: 7, year: actualYear });
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });
            validExpensesKey.push({ month: 11, year: actualYear - 1 });

            break;
          case 11:
            validExpensesKey.push({ month: 11, year: actualYear });
            validExpensesKey.push({ month: 10, year: actualYear });
            validExpensesKey.push({ month: 9, year: actualYear });
            validExpensesKey.push({ month: 8, year: actualYear });
            validExpensesKey.push({ month: 7, year: actualYear });
            validExpensesKey.push({ month: 6, year: actualYear });
            validExpensesKey.push({ month: 5, year: actualYear });
            validExpensesKey.push({ month: 4, year: actualYear });
            validExpensesKey.push({ month: 3, year: actualYear });
            validExpensesKey.push({ month: 2, year: actualYear });
            validExpensesKey.push({ month: 1, year: actualYear });
            validExpensesKey.push({ month: 0, year: actualYear });

            break;
          default:
            break;
        }
        return validExpensesKey;
      };

      const expensesFilter = checkLastTwelveMonths();

      const lastTwelveMonthsExpenses = [];

      action.payload.forEach((expense) => {
        //convertendo data
        let stringDate = [...expense.expenseDate];
        let year = stringDate.slice(0, 4).join("");
        let month = stringDate.slice(5, 7).join("");
        let day = stringDate.slice(8, 10).join("");
        let expenseDate = new Date(year, month - 1, day);

        let validIndex = expensesFilter.findIndex(
          (validDate) =>
            validDate.month === expenseDate.getMonth() &&
            validDate.year === expenseDate.getFullYear()
        );

        if (validIndex !== -1) {
          lastTwelveMonthsExpenses.push(expense);
        }
      });

      lastTwelveMonthsExpenses.forEach((expense) => {
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
          let oldSpendLimit =
            arr[expenseDate.getMonth()].spendLimit === -1
              ? 0
              : arr[expenseDate.getMonth()].spendLimit;
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

        //console.log(index);

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
      console.log("concluiu");
      state.loadingData = false;
    },
    getAllCategories: (state, action) => {
      action.payload.forEach((item) => {
        state.categories.push(item);
      });
    },
    changeClickedDate: (state, action) => {
      state.clickedDate = action.payload;
    },
  },
});

export const {
  changeValue,
  getAnnualHistoric,
  getAllCategories,
  changeClickedDate,
} = chartsSlice.actions;

export default chartsSlice.reducer;
