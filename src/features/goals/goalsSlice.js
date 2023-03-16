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
  userGoals: null,
  dynamicId: 0,
};

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

export const fetchGoalsData = createAsyncThunk(
  "usergoals/fetchGoalsData",
  async (action) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${userId}/goals`)
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

export const postNewGoal = createAsyncThunk(
  "usergoals/postNewGoal",
  async (action, state) => {
    try {
      let idValue = state.getState().expensesData.dynamicId;
      await get(child(ref(db), `users/${userId}/goals`)).then((snapshot) => {
        //  console.log("/expenses", snapshot.exists());
        if (snapshot.exists() === true) {
          //  console.log("expense existe: ", snapshot.val());

          //PEGO OS VALORES JÁ EXISTENTES NO BD E JOGO EM UM NOVO
          let oldGoals = snapshot.val();
          //console.log("ACTION", action);

          const updates = {};
          updates[`users/${userId}/goals`] = {
            ...oldGoals,
            [`goal-${idValue}`]: {
              id: `goal-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              allocated: action.inputPercentage.value,
              date: action.inputDate.value,
              term: action.term,
            },
          };
          update(ref(db), updates).then((res) => res);
        } else {
          //console.log("expense não existia: ", snapshot.val());
          //DESSA FORMA INICIA O NÓ DE CATEGORIA E SOBRESCREVE SE TIVER OUTROS
          set(ref(db, `users/${userId}/goals`), {
            [`goal-${idValue}`]: {
              id: `goal-${idValue}`,
              name: action.inputName.value,
              value: action.inputValue.value,
              allocated: action.inputPercentage.value,
              date: action.inputDate.value,
              term: action.term,
            },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const editAGoal = createAsyncThunk(
  "usergoals/editAGoal",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${userId}/goals/${action.goalId}`), {
        categoryName: action.categoryName,
        date: action.newDate,
        id: action.goalId,
        name: action.newExpenseName,
        //O VALUE NÃO SERÁ MODIFICADO NA EDIÇÃO, SERÁ NA PÁGINA DE APORTES
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeAGoal = createAsyncThunk(
  "usergoals/removeAGoal",
  async (action, state) => {
    try {
      //  console.log("payload", action);
      await remove(ref(db, `users/${userId}/goals/${action}`));
    } catch (err) {
      console.log(err);
    }
  }
);

export const goalDataSlice = createSlice({
  name: "goalsData",
  initialState,
  reducers: {
    addGoals: (state, action) => {
      state.userGoals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoalsData.fulfilled, (state, action) => {
      console.log("Success", state.dynamicId);
    });
    builder.addCase(fetchGoalsData.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(postNewGoal.fulfilled, (state, action) => {
      state.dynamicId += 1;
      //console.log("Novo id dinamico: ", state.dynamicId);
      set(ref(db, `users/${userId}/dynamicId`), state.dynamicId);
    });
    builder.addCase(postNewGoal.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(editAGoal.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(editAGoal.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(removeAGoal.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(removeAGoal.rejected, (state, action) => {
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
  },
});

export const { addGoals } = goalDataSlice.actions;

export default goalDataSlice.reducer;
