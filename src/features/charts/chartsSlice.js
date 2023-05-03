import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import startFirebase from "../../services/firebaseConfig";
import { ref, set, get, update, remove, child, push } from "firebase/database";

const initialState = {
  newValue: -1,
  oldValue: -1,
  yearSpendingHistory: [
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
  lastYearSpendingHistory: [
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
  expenses: [],
  categories: [],
  loadingData: false,
  clickedDate: "",
  selectedSlice: -1,
};

const db = startFirebase();
//const userId = "Marcos";

export const fetchExpensesData = createAsyncThunk(
  "usercharts/fetchExpensesData",
  async (action, state) => {
    try {
      let userId = state.getState().userData.userId;
      const dbResponse = await get(
        child(ref(db), `users/${userId}/expenses`)
      ).then((snapshot) => {
        return snapshot.val();
      });
      return dbResponse;
      //ANTES DO FIREBASE
      //const response = await axiosInstance.get("/expense.json");
      //return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const chartsSlice = createSlice({
  name: "initialSlices",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.oldValue = state.newValue;
      state.newValue = action.payload;
    },
    changeSlice: (state, action) => {
      state.selectedSlice = action.payload;
    },
    getThisYearHistoric: (state, action) => {
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
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
      ];
      const lastYearArr = [
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
        { value: 0, categoryList: [], spendLimit: 0 },
        { value: 0, categoryList: [], spendLimit: 0 },
      ];

      const actualDate = new Date();
      const actualMonth = actualDate.getMonth();
      const actualYear = actualDate.getFullYear();

      //A LÓGICA FUNCIONA MAS O GOOGLE CHARTS NÃO SUPORTA
      /*const checkLastTwelveMonths = () => {
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

      const expensesFilter = checkLastTwelveMonths();*/

      const thisYearExpenses = [];
      const lastYearExpenses = [];

      action.payload.forEach((expense) => {
        //convertendo data
        let stringDate = [...expense.expenseDate];
        let year = stringDate.slice(0, 4).join("");
        let month = stringDate.slice(5, 7).join("");
        let day = stringDate.slice(8, 10).join("");
        let expenseDate = new Date(year, month - 1, day);

        if (expenseDate.getFullYear() === actualDate.getFullYear()) {
          thisYearExpenses.push(expense);
        }
        if (expenseDate.getFullYear() === actualDate.getFullYear() - 1) {
          lastYearExpenses.push(expense);
        }
      });

      thisYearExpenses.forEach((expense) => {
        // console.log("roda", expense);
        //convertendo o numero
        /* let initialValue = [...expense.expenseValue];
        let commaIndex = initialValue.findIndex((element) => element === ",");
        initialValue.splice(commaIndex, 1, ".");
        let replacedValue = initialValue.join("");
        let convertedValue = Number(replacedValue).toFixed(2);*/

        //convertendo a data
        let stringDate = [...expense.expenseDate];
        let year = stringDate.slice(0, 4).join("");
        let month = stringDate.slice(5, 7).join("");
        let day = stringDate.slice(8, 10).join("");
        let expenseDate = new Date(year, month - 1, day);
        // console.log(expenseDate.getMonth());
        // console.log(arr);

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

          let newSpendLimit = oldSpendLimit + Number(category.spendLimit);

          arr[expenseDate.getMonth()].spendLimit = newSpendLimit;
        }

        //console.log(index);

        let oldValue = arr[expenseDate.getMonth()].value;
        // console.log("old value", oldValue);

        let newValue = oldValue + Number(expense.expenseValue);

        arr[expenseDate.getMonth()].value = newValue;

        state.yearSpendingHistory[expenseDate.getMonth()] = {
          ...state.yearSpendingHistory[expenseDate.getMonth()],
          totalSpent:
            state.yearSpendingHistory[expenseDate.getMonth()].totalSpent +
            Number(expense.expenseValue),
        };
      });

      lastYearExpenses.forEach((expense) => {
        //convertendo a data
        let stringDate = [...expense.expenseDate];
        let year = stringDate.slice(0, 4).join("");
        let month = stringDate.slice(5, 7).join("");
        let day = stringDate.slice(8, 10).join("");
        let expenseDate = new Date(year, month - 1, day);
        // console.log(expenseDate.getMonth());
        // console.log(lastYearArr);

        let index = lastYearArr[expenseDate.getMonth()].categoryList.findIndex(
          (category) => category === expense.categoryId
        );

        if (Number(index) === -1) {
          //console.log("passou aq");
          lastYearArr[expenseDate.getMonth()].categoryList.push(
            expense.categoryId
          );
          let oldSpendLimit =
            lastYearArr[expenseDate.getMonth()].spendLimit === -1
              ? 0
              : lastYearArr[expenseDate.getMonth()].spendLimit;
          let category = state.categories.find(
            (category) => category.id === expense.categoryId
          );

          let newSpendLimit = oldSpendLimit + Number(category.spendLimit);

          lastYearArr[expenseDate.getMonth()].spendLimit = newSpendLimit;
        }

        //console.log(index);

        let oldValue = lastYearArr[expenseDate.getMonth()].value;
        // console.log("old value", oldValue);

        let newValue = oldValue + Number(expense.expenseValue);

        lastYearArr[expenseDate.getMonth()].value = newValue;
      });

      arr.forEach((item, index) => {
        state.yearSpendingHistory[index].totalSpent = item.value;
        state.yearSpendingHistory[index].spendLimit = item.spendLimit;
        state.yearSpendingHistory[index].usedCategories = [
          ...item.categoryList,
        ];
      });

      state.loadingData = false;

      lastYearArr.forEach((item, index) => {
        state.lastYearSpendingHistory[index].totalSpent = item.value;
        state.lastYearSpendingHistory[index].spendLimit = item.spendLimit;
        state.lastYearSpendingHistory[index].usedCategories = [
          ...item.categoryList,
        ];
      });
    },
    getAllCategories: (state, action) => {
      action.payload.forEach((item) => {
        state.categories.push(item);
      });
    },
    changeClickedDate: (state, action) => {
      state.clickedDate = action.payload;
    },
    getAllExpenses: (state, action) => {
      let expensesArr = Object.values(action.payload);
      expensesArr.forEach((item) => {
        state.expenses.push(item);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExpensesData.fulfilled, (state, action) => {
      //console.log("Success", action.payload);
    });
    builder.addCase(fetchExpensesData.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
  },
});

export const {
  changeValue,
  getThisYearHistoric,
  getAllCategories,
  changeClickedDate,
  getAllExpenses,
  changeSlice,
} = chartsSlice.actions;

export default chartsSlice.reducer;
