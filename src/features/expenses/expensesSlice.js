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
  balance: 0,
  dynamicId: 0,
  historyId: 0,
};
console.log(initialState.historyId);

export const fetchDynamicId = createAsyncThunk(
  "userexpenses/fetchDynamicId",
  async (action) => {
    try {
      const dbId = await get(child(ref(db), `users/${userId}/dynamicId`)).then(
        (snapshot) => {
          //console.log("id dinamico", snapshot.val());
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
export const fetchBalance = createAsyncThunk(
  "userexpenses/fetchBalance",
  async (action) => {
    try {
      const dbId = await get(child(ref(db), `users/${userId}/balance`)).then(
        (snapshot) => {
          //console.log("id dinamico", snapshot.val());
          return snapshot.val();
        }
      );
      return dbId;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

/*export const fetchHistoryId = createAsyncThunk(
  "userexpenses/fetchHistoryId",
  async (action) => {
    try {
      const dbId = await get(child(ref(db), `users/${userId}/historyId`)).then(
        (snapshot) => {
          console.log("history dinamico", snapshot.val());
          return snapshot.val();
        }
      );
      return dbId;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);*/
export const fetchCategoriesData = createAsyncThunk(
  "userexpenses/fetchCategoriesData",
  async (action) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${userId}/categories`)
      ).then((snapshot) => {
        // console.log("categorias carregadas: ", snapshot.val());
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
        //  console.log("/expenses", snapshot.exists());
        if (snapshot.exists() === true) {
          //  console.log("expense existe: ", snapshot.val());

          //PEGO OS VALORES JÁ EXISTENTES NO BD E JOGO EM UM NOVO
          let oldExpenses = snapshot.val();
          //console.log("ACTION", action);

          const updates = {};
          updates[`users/${userId}/expenses`] = {
            ...oldExpenses,
            [`expense-${idValue}`]: {
              id: `expense-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              categoryId:
                action.inputCategory.value !== "" &&
                action.inputCategory.value !== "New Category"
                  ? action.inputCategory.categoryId
                  : `category-${idValue - 1}`,
              categoryName:
                action.inputCategory.value !== "" &&
                action.inputCategory.value !== "New Category"
                  ? action.inputCategory.value
                  : action.inputNewCategory.value,
              date: action.inputDate.value,
            },
          };
          update(ref(db), updates).then((res) => res);
        } else {
          //console.log("expense não existia: ", snapshot.val());
          //DESSA FORMA INICIA O NÓ DE CATEGORIA E SOBRESCREVE SE TIVER OUTROS
          set(ref(db, `users/${userId}/expenses`), {
            [`expense-${idValue}`]: {
              id: `expense-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              categoryId:
                action.inputCategory.value !== "" &&
                action.inputCategory.value !== "New Category"
                  ? action.inputCategory.categoryId
                  : `category-${idValue - 1}`,
              categoryName:
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

      await get(child(ref(db), `users/${userId}/categories`)).then(
        (snapshot) => {
          //console.log("/categories", snapshot.exists());
          if (snapshot.exists() === true) {
            // console.log("category existe: ", snapshot.val());

            //PEGO OS VALORES JÁ EXISTENTES NO BD E JOGO EM UM NOVO
            let oldCategories = snapshot.val();

            const updates = {};
            updates[`users/${userId}/categories`] = {
              ...oldCategories,
              [`category-${idValue}`]: {
                id: `category-${idValue}`,
                category: action.inputNewCategory.value,
                spendLimit: action.inputSpend.value,
              },
            };
            update(ref(db), updates).then(
              (res) => {
                /*  console.log("resposta da categoria submit", res)*/
                return;
              }
              //  console.log("resposta da categoria submit", res)
            );
          } else {
            //console.log("category não existia: ", snapshot.val());
            //console.log(action.payload);
            //DESSA FORMA INICIA O NÓ DE CATEGORIA E SOBRESCREVE SE TIVER OUTROS
            set(ref(db, `users/${userId}/categories`), {
              [`category-${idValue}`]: {
                id: `category-${idValue}`,
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

export const editACategory = createAsyncThunk(
  "userexpenses/editACategory",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${userId}/categories/${action.categoryId}`), {
        id: action.categoryId,
        category: action.newCategoryName,
        spendLimit: action.newSpendLimit,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeACategory = createAsyncThunk(
  "userexpenses/removeACategory",
  async (action, state) => {
    try {
      // console.log("payload", action);
      await remove(ref(db, `users/${userId}/categories/${action}`));
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeAnExpense = createAsyncThunk(
  "userexpenses/removeAnExpense",
  async (action, state) => {
    try {
      //  console.log("payload", action);
      await remove(ref(db, `users/${userId}/expenses/${action}`));
    } catch (err) {
      console.log(err);
    }
  }
);

export const editAnExpense = createAsyncThunk(
  "userexpenses/editAnExpense",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${userId}/expenses/${action.expenseId}`), {
        categoryId: action.categoryId,
        categoryName: action.categoryName,
        date: action.newDate,
        id: action.expenseId,
        name: action.newExpenseName,
        value: action.newValue,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateHistoryId = createAsyncThunk(
  "userexpenses/updateHistoryId",
  async (action, state) => {
    try {
      console.log("Atualizando", action);
      await set(ref(db, `users/${userId}/historyId`), action);
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
    addBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: (builder) => {
    /* builder.addCase(fetchHistoryId.fulfilled, (state, action) => {
      //console.log("payload", action.payload);
      state.historyId = action.payload;
      console.log("Novo id: ", state.historyId);
    });
    builder.addCase(fetchHistoryId.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      console.log(action.error);
    });*/
    builder.addCase(fetchCategoriesData.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(fetchCategoriesData.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(fetchExpensesData.fulfilled, (state, action) => {
      //console.log("Success", action.payload);
    });
    builder.addCase(fetchExpensesData.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(postNewExpense.fulfilled, (state, action) => {
      state.dynamicId += 1;

      //console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    // REPETI PRA VER SE FUNCIONA

    builder.addCase(postNewExpense.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(postNewCategory.fulfilled, (state, action) => {
      state.dynamicId += 1;
      //console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(postNewCategory.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(fetchDynamicId.fulfilled, (state, action) => {
      //console.log("payload", action.payload);
      state.dynamicId = action.payload;
      //console.log("Novo id dinamico: ", state.dynamicId);
    });
    builder.addCase(fetchDynamicId.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(editACategory.fulfilled, (state, action) => {
      //state.dynamicId += 1;
      console.log("Deu certo");
      //set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(editACategory.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(removeACategory.fulfilled, (state, action) => {
      //state.dynamicId += 1;
      //  console.log("Deu certo");
      //set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(removeACategory.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(removeAnExpense.fulfilled, (state, action) => {
      //state.dynamicId += 1;
      console.log("Deu certo");
      //set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(removeAnExpense.rejected, (state, action) => {
      // console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      console.log("payload", action.payload);
      state.balance = action.payload;
      //console.log("Novo id dinamico: ", state.dynamicId);
    });
    builder.addCase(fetchBalance.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
  },
});

export const { addExpenses, addBalance } = expenseDataSlice.actions;

export default expenseDataSlice.reducer;
