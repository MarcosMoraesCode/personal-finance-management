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
  userName: "",
  email: "",
  address: "",
};

export const fetchUserInformation = createAsyncThunk(
  "userprofile/fetchUserInformation",
  async (action) => {
    try {
      const dbResponse = await get(
        child(ref(db), `users/${userId}/userInfo`)
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
      await set(ref(db, `users/${userId}/userInfo`), {
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
      // console.log("payload", action.categoryId);
      await set(ref(db, `users`), {
        [userId]: {
          balance: 0,
          dynamicId: 0,
          historyId: 0,
          userInfo: {
            name: action.name,
            email: action.email,
            address: {
              street: action.street,
              district: action.district,
              city: action.city,
            },
          },
        },
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
  },
});

export const { uploadUser } = userDataSlice.actions;

export default userDataSlice.reducer;
