import { configureStore } from "@reduxjs/toolkit";
import { authPath, authReducer } from "./authSlice.ts";
import { appPath, appReducer } from "./appSlice.ts";
import { todoListPath, todoListReducer } from "./todoSlice.ts";

export const store = configureStore({
  reducer: {
    [authPath]: authReducer,
    [appPath]: appReducer,
    [todoListPath]: todoListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
