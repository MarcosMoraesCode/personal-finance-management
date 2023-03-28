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
  userIncomes: null,
  dynamicId: 0,
  balance: 0,
};

export const fetchDynamicId = createAsyncThunk(
  "userincomes/fetchDynamicId",
  async (action) => {
    try {
      const dbId = await get(child(ref(db), `users/${userId}/dynamicId`)).then(
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
export const fetchBalance = createAsyncThunk(
  "userincomes/fetchBalance",
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

export const fetchIncomesData = createAsyncThunk(
  "userincomes/fetchIncomesData",
  async (action) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${userId}/incomes`)
      ).then((snapshot) => {
        return snapshot.val();
      });
      return dbResponse;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const postNewIncome = createAsyncThunk(
  "userincomes/postNewIncome",
  async (action, state) => {
    try {
      let idValue = state.getState().incomesData.dynamicId;
      //SETTING TODAY DATE

      await get(child(ref(db), `users/${userId}/incomes`)).then((snapshot) => {
        if (snapshot.exists() === true) {
          let oldIncomes = snapshot.val();

          const updates = {};
          updates[`users/${userId}/incomes`] = {
            ...oldIncomes,
            [`income-${idValue}`]: {
              id: `income-${idValue}`,
              name: action.inputName.value,
              value: 0,
            },
          };
          update(ref(db), updates).then((res) => res);
        } else {
          set(ref(db, `users/${userId}/incomes`), {
            [`income-${idValue}`]: {
              id: `income-${idValue}`,
              name: action.inputName.value,
              value: 0,
            },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const editAnIncome = createAsyncThunk(
  "userincomes/editAnIncome",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${userId}/incomes/${action.incomeId}`), {
        id: action.incomeId,
        name: action.newName,
        value: action.oldValue,

        //O VALUE NÃO SERÁ MODIFICADO NA EDIÇÃO, SERÁ NA PÁGINA DE APORTES
      });
    } catch (err) {
      console.log(err);
    }
  }
);
export const addMoneyToAnIncome = createAsyncThunk(
  "userincomes/addMoneyToAnIncome",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${userId}/incomes/${action.incomeId}`), {
        id: action.incomeId,
        name: action.name,
        value: action.newValue,
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeAnIncome = createAsyncThunk(
  "userincomes/removeAnIncome",
  async (action, state) => {
    try {
      //  console.log("payload", action);
      await remove(ref(db, `users/${userId}/incomes/${action}`));
    } catch (err) {
      console.log(err);
    }
  }
);

export const incomeDataSlice = createSlice({
  name: "incomesData",
  initialState,
  reducers: {
    addIncomes: (state, action) => {
      state.userIncomes = action.payload;
    },
    addBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIncomesData.fulfilled, (state, action) => {
      // console.log("Success", state.dynamicId);
    });
    builder.addCase(fetchIncomesData.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(postNewIncome.fulfilled, (state, action) => {
      state.dynamicId += 1;
      //console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(postNewIncome.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(editAnIncome.fulfilled, (state, action) => {
      //teste
    });
    builder.addCase(editAnIncome.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(removeAnIncome.fulfilled, (state, action) => {
      //teste
    });
    builder.addCase(removeAnIncome.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
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
    builder.addCase(addMoneyToAnIncome.fulfilled, (state, action) => {
      console.log("passou aqui", state.balance);
      set(ref(db, `users/${userId}/balance`), state.balance);
    });
    builder.addCase(addMoneyToAnIncome.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
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

export const { addIncomes, addBalance } = incomeDataSlice.actions;

export default incomeDataSlice.reducer;
