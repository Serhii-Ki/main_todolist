import { configureStore } from "@reduxjs/toolkit";
import { authPath, authReducer } from "./authSlice.ts";

export const store = configureStore({
  reducer: {
    [authPath]: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
