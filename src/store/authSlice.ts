import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isAuthenticated: boolean;
};

const initialState: InitialStateType = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
