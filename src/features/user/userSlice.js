import {
  createSlice,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import startFirebase from "../../services/firebaseConfig";
import { ref, set, get, update, remove, child, push } from "firebase/database";

const db = startFirebase();

const initialState = {
  userId: localStorage.getItem("userId"),
  tokenId: localStorage.getItem("token"),
  expirationDate: localStorage.getItem("expirationDate"),
  userName: "",
  email: "",
  address: "",
};

export const createUser = createAsyncThunk(
  "userprofile/createUser",
  async (action, state) => {
    let idValue = state.getState().expensesData.dynamicId;

    try {
      await get(child(ref(db), `users`)).then((snapshot) => {
        if (snapshot.exists() === true) {
          let oldUsers = snapshot.val();

          const updates = {};
          updates[`users/`] = {
            ...oldUsers,
            [action.userId]: {
              balance: 0,
              dynamicId: 0,
              historyId: 0,
              userInfo: {
                address: {
                  city: "",
                  district: "",
                  street: "",
                },
                email: action.email,
                name: action.name,
              },
            },
          };
          update(ref(db), updates).then((res) => res);
        } else {
          set(ref(db, `users`), {
            [action.userId]: {
              balance: 0,
              dynamicId: 0,
              historyId: 0,
              userInfo: {
                address: {
                  city: "",
                  district: "",
                  street: "",
                },
                email: action.email,
                name: action.name,
              },
            },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchUserInformation = createAsyncThunk(
  "userprofile/fetchUserInformation",
  async (action, state) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${localStorage.getItem("userId")}/userInfo`)
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

export const editProfile = createAsyncThunk(
  "userprofile/editProfile",
  async (action, state) => {
    try {
      // console.log("payload", action.categoryId);
      await set(ref(db, `users/${localStorage.getItem("userId")}/userInfo`), {
        name: action.name,
        email: action.email,
        address: {
          street: action.street,
          district: action.district,
          city: action.city,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const resetData = createAsyncThunk(
  "userprofile/resetData",
  async (action, state) => {
    try {
      await get(child(ref(db), `users`)).then((snapshot) => {
        if (snapshot.exists() === true) {
          let oldUsers = snapshot.val();

          const updates = {};
          updates[`users/`] = {
            ...oldUsers,
            [localStorage.getItem("userId")]: {
              balance: 0,
              dynamicId: 0,
              historyId: 0,
              userInfo: {
                address: {
                  city: action.city,
                  district: action.district,
                  street: action.street,
                },
                email: action.email,
                name: action.name,
              },
            },
          };
          update(ref(db), updates).then((res) => res);
        } else {
          set(ref(db, `users`), {
            [localStorage.getItem("userId")]: {
              balance: 0,
              dynamicId: 0,
              historyId: 0,
              userInfo: {
                address: {
                  city: action.city,
                  district: action.district,
                  street: action.street,
                },
                email: action.email,
                name: action.name,
              },
            },
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    uploadUser: (state, action) => {
      state.userName = action.payload.name;
      state.address = action.payload.address;
      state.email = action.payload.email;
    },
    addUserInfo: (state, action) => {
      console.log("AQUII PAYLOAD", action.payload);
      console.log("Olha", action.payload.userId);
      console.log("Olha", action.payload.idToken);
      state.userId = action.payload.userId;
      state.tokenId = action.payload.idToken;
    },
    cleanUserInfo: (state, action) => {
      state.userId = null;
      state.tokenId = null;
      state.expirationDate = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInformation.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(fetchUserInformation.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      // console.log("Success", action.payload);
    });
    builder.addCase(editProfile.rejected, (state, action) => {
      //console.log("Rejected", action.error.message);
      //console.log(action.error);
    });
    builder.addCase(resetData.fulfilled, (state, action) => {
      console.log("Success", action.payload);
    });
    builder.addCase(resetData.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      console.log("Success", action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      console.log("Rejected", action.error.message);
      console.log(action.error);
    });
  },
});

export const { uploadUser, addUserInfo, cleanUserInfo } = userDataSlice.actions;

export default userDataSlice.reducer;
