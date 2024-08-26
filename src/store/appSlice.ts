import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

const slice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
  },
  reducers: {
    setLoadingStatus: (state) => {
      state.status = "loading";
    },
    setErrorStatus: (state) => {
      state.status = "failed";
    },
    setIdleStatus: (state) => {
      state.status = "idle";
    },
    setAppInitialized: (
      state,
      action: PayloadAction<{ isInitialized: boolean }>,
    ) => {
      state.isInitialized = action.payload.isInitialized;
    },
    setStatus: (
      state,
      action: PayloadAction<{ status: RequestStatusType }>,
    ) => {
      state.status = action.payload.status;
    },
  },
});

export const appReducer = slice.reducer;

export const appActions = slice.actions;

export const appPath = slice.reducerPath;

export const selectApp = (state: RootState) => state.app;
