import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";
import { LoginPayloadType } from "../utils/types/requestTypes.ts";
import { appActions } from "./appSlice.ts";
import { useAuthRequest } from "../utils/hooks/useAuthRequest.ts";

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
  const { dispatch, rejectWithValue } = thunkAPI;
  try {
    const res = await useAuthRequest().authMe();
    if (res.data.resultCode === 0) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  } catch (e) {
    rejectWithValue(e);
    return { isAuthenticated: false };
  } finally {
    dispatch(appActions.setAppInitialized({ isInitialized: true }));
  }
});

const login = createAsyncThunk(
  `${slice.name}/login`,
  async (payload: LoginPayloadType, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      dispatch(appActions.setStatus({ status: "loading" }));
      const res = await useAuthRequest().login(payload);
      if (res.data.resultCode === 0) {
        dispatch(appActions.setStatus({ status: "succeeded" }));
        return { isAuthenticated: true };
      } else {
        rejectWithValue(res.data);
        dispatch(appActions.setStatus({ status: "failed" }));
      }
    } catch (e) {
      rejectWithValue(e);
      dispatch(appActions.setStatus({ status: "failed" }));
    }
  },
);

const logout = createAsyncThunk(`${slice.name}/logout`, async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await useAuthRequest().logout();
    if (res.data.resultCode === 0) {
      return { isAuthenticated: false };
    } else {
      rejectWithValue(res.data);
    }
  } catch (e) {
    rejectWithValue(e);
  }
});

export const authReducer = slice.reducer;

export const authPath = slice.reducerPath;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const authThunks = { authMe, login, logout };
