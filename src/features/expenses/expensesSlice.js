import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import startFirebase from "../../services/firebaseConfig";
import { ref, set, get, update, remove, child, push } from "firebase/database";

const db = startFirebase();
const userId = "Marcos";

const initialState = {
  userExpenses: null,
  dynamicId: 0,
};

export const fetchDynamicId = createAsyncThunk(
  "userexpenses/fetchDynamicId",
  async (action) => {
    try {
      const dbId = await get(child(ref(db), `users/${userId}/dynamicId`)).then(
        (snapshot) => {
          console.log("id dinamico", snapshot.val());
          return snapshot.val();
        }
      );
      return dbId;
      //ANTES DO FIREBASE
      //const response = await axiosInstance.get("/category.json");
      //console.log("resposta axios", response.data);
      //return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const fetchCategoriesData = createAsyncThunk(
  "userexpenses/fetchCategoriesData",
  async (action) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${userId}/categories`)
      ).then((snapshot) => {
        console.log("categorias carregadas: ", snapshot.val());
        return snapshot.val();
      });
      return dbResponse;
      //ANTES DO FIREBASE
      //const response = await axiosInstance.get("/category.json");
      //console.log("resposta axios", response.data);
      //return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);
export const fetchExpensesData = createAsyncThunk(
  "userexpenses/fetchExpensesData",
  async (action, state) => {
    try {
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

export const postNewExpense = createAsyncThunk(
  "userexpenses/postNewExpense",
  async (action, state) => {
    try {
      let idValue = state.getState().expensesData.dynamicId;
      await get(child(ref(db), `users/${userId}/expenses`)).then((snapshot) => {
        console.log("/expenses", snapshot.exists());
        if (snapshot.exists() === true) {
          console.log("expense existe: ", snapshot.val());

          //PEGO OS VALORES JÁ EXISTENTES NO BD E JOGO EM UM NOVO
          let oldExpenses = snapshot.val();

          const updates = {};
          updates[`users/${userId}/expenses`] = {
            ...oldExpenses,
            [`expense-${idValue}`]: {
              id: `e-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              categoryId:
                action.inputCategory.value !== "" &&
                action.inputCategory.value !== "New Category"
                  ? action.inputCategory.value
                  : action.inputNewCategory.value,
              date: action.inputDate.value,
            },
          };
          update(ref(db), updates).then((res) => console.log("to aq", res));
        } else {
          console.log("expense não existia: ", snapshot.val());
          //DESSA FORMA INICIA O NÓ DE CATEGORIA E SOBRESCREVE SE TIVER OUTROS
          set(ref(db, `users/${userId}/expenses`), {
            [`expense-${idValue}`]: {
              id: `e-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              categoryId:
                action.inputCategory.value !== "" &&
                action.inputCategory.value !== "New Category"
                  ? action.inputCategory.value
                  : action.inputNewCategory.value,
              date: action.inputDate.value,
            },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const postNewCategory = createAsyncThunk(
  "userexpenses/postNewCategory",
  async (action, state) => {
    let idValue = state.getState().expensesData.dynamicId;

    try {
      //const idValue = initialState.dynamicId;
      //console.log("valor state:", idValue);

      await get(child(ref(db), `users/${userId}/categories`)).then(
        (snapshot) => {
          console.log("/categories", snapshot.exists());
          if (snapshot.exists() === true) {
            console.log("category existe: ", snapshot.val());

            //PEGO OS VALORES JÁ EXISTENTES NO BD E JOGO EM UM NOVO
            let oldCategories = snapshot.val();

            const updates = {};
            updates[`users/${userId}/categories`] = {
              ...oldCategories,
              [`category-${idValue}`]: {
                id: `c-${idValue}`,
                category: action.inputNewCategory.value,
                spendLimit: action.inputSpend.value,
              },
            };
            update(ref(db), updates).then((res) =>
              console.log("resposta da categoria submit", res)
            );
          } else {
            console.log("category não existia: ", snapshot.val());
            console.log(action.payload);
            //DESSA FORMA INICIA O NÓ DE CATEGORIA E SOBRESCREVE SE TIVER OUTROS
            set(ref(db, `users/${userId}/categories`), {
              [`category-${idValue}`]: {
                id: `c-${idValue}`,
                category: action.inputNewCategory.value,
                spendLimit: action.inputSpend.value,
              },
            });
          }
        }
      );
    } catch (err) {
      console.log(err);
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
    builder.addCase(postNewExpense.fulfilled, (state, action) => {
      state.dynamicId += 1;
      console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(postNewExpense.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(postNewCategory.fulfilled, (state, action) => {
      state.dynamicId += 1;
      console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(postNewCategory.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(fetchDynamicId.fulfilled, (state, action) => {
      console.log("Novo id dinamico: ", state.dynamicId);
    });
    builder.addCase(fetchDynamicId.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
  },
});

export const { addExpenses } = expenseDataSlice.actions;

export default expenseDataSlice.reducer;
