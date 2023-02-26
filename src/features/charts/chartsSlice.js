import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newValue: -1,
  oldValue: -1,
};

export const chartsSlice = createSlice({
  name: "initialSlices",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.oldValue = state.newValue;
      state.newValue = action.payload;
    },
  },
});

export const { changeValue } = chartsSlice.actions;

export default chartsSlice.reducer;
