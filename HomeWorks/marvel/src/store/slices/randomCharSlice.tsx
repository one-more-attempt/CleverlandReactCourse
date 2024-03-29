import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RandomCharData = {
  name: string;
  description: string;
  homepage: string;
  wikipage: string;
  photoURL: string;
};

export type RandomCharStateType = {
  randomCharData: RandomCharData;
  dataFromServerIsReady: boolean;
  error: boolean;
  isDataloading: boolean;
};

const INITIAL_STATE: RandomCharStateType = {
  randomCharData: {
    name: "",
    description: "",
    homepage: "",
    wikipage: "",
    photoURL: "",
  },
  dataFromServerIsReady: false,
  error: false,
  isDataloading: false,
};

export const randomCharSlice = createSlice({
  name: "randomCharSlice",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart(state) {
      state.isDataloading = true;
      state.dataFromServerIsReady = false;
    },

    fetchSuccess(state, action: PayloadAction<RandomCharData>) {
      state.randomCharData = action.payload;
      state.dataFromServerIsReady = true;
      state.isDataloading = false;
    },

    fetchError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
      state.isDataloading = false;
      state.dataFromServerIsReady = false;
    },
  },
});

export const randomCharSliceReducer = randomCharSlice.reducer;
export const randomCharSliceActions = randomCharSlice.actions;
