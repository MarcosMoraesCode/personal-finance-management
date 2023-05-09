import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import startFirebase from "../../services/firebaseConfig";
import { ref, set, get, update, remove, child, push } from "firebase/database";

const db = startFirebase();
//const userId = "tPhKzmkhBOhSF94vmxz7ye07NnZ2";

const initialState = {
  userHistory: null,
  historyId: 0,
};

export const fetchHistoryId = createAsyncThunk(
  "userhistory/fetchHistoryId",
  async (action, state) => {
    try {
      let userId = state.getState().userData.userId;
      const dbId = await get(child(ref(db), `users/${userId}/historyId`)).then(
        (snapshot) => {
          //console.log("history dinamico", snapshot.val());
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
export const postNewHistory = createAsyncThunk(
  "userhistory/postNewHistory",
  async (action, state) => {
    try {
      let idValue = state.getState().historyData.historyId;
      let userId = state.getState().userData.userId;
      //SETTING TODAY DATE

      await get(child(ref(db), `users/${userId}/histories`)).then(
        (snapshot) => {
          if (snapshot.exists() === true) {
            let oldHistory = snapshot.val();

            const updates = {};
            updates[`users/${userId}/histories`] = {
              ...oldHistory,
              [`history-${idValue}`]: {
                id: `history-${idValue}`,
                type: action.type,
                name: action.name,
                value: action.value,
                date: action.date,
                itemId: action.itemId !== undefined ? action.itemId : "default",
              },
            };
            update(ref(db), updates).then((res) => res);
          } else {
            set(ref(db, `users/${userId}/histories`), {
              [`history-${idValue}`]: {
                id: `history-${idValue}`,
                type: action.type,
                name: action.name,
                value: action.value,
                date: action.date,
                itemId: action.itemId !== undefined ? action.itemId : "default",
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

export const fetchHistoriesData = createAsyncThunk(
  "userhistories/fetchHistoriesData",
  async (action, state) => {
    try {
      let userId = state.getState().userData.userId;
      const dbResponse = await get(
        child(ref(db), `users/${userId}/histories`)
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

export const historyDataSlice = createSlice({
  name: "historiesData",
  initialState,
  reducers: {
    addHistories: (state, action) => {
      state.userHistory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistoryId.fulfilled, (state, action) => {
      //console.log("payload", action.payload);
      state.historyId = action.payload;
      //console.log("Novo id dinamico: ", state.historyId);
    });
    builder.addCase(fetchHistoryId.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(fetchHistoriesData.fulfilled, (state, action) => {
      // console.log("Success", state.dynamicId);
    });
    builder.addCase(fetchHistoriesData.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
    builder.addCase(postNewHistory.fulfilled, (state, action) => {
      state.historyId += 1;
      //console.log("Novo id dinamico: ", state.historyId);
      let userId = localStorage.getItem("userId");
      set(ref(db, `users/${userId}/historyId`), state.historyId);
    });
    builder.addCase(postNewHistory.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      // console.log(action.error);
    });
  },
});

export const { addHistories } = historyDataSlice.actions;

export default historyDataSlice.reducer;
