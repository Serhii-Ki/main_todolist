import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useRequest } from "../utils/hooks/useRequest.ts";
import { RootState } from "./store.ts";
import { LoginPayloadType } from "../utils/types/requestTypes.ts";

type InitialStateType = {
  isAuthenticated: boolean;
};

const initialState: InitialStateType = { isAuthenticated: false };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    });
  },
});

const authMe = createAsyncThunk(`${slice.name}/authMe`, async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useRequest().authMe();
    if (res.data.resultCode === 0) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  } catch (e) {
    rejectWithValue(e);
    return { isAuthenticated: false };
  }
});

const login = createAsyncThunk(
  `${slice.name}/login`,
  async (payload: LoginPayloadType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useRequest().login(payload);
      return res.data;
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const authReducer = slice.reducer;

export const authPath = slice.reducerPath;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const authThunks = { authMe, login };
