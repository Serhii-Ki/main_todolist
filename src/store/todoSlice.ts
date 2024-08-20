import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TodolistDomainType, TodoListType } from "../utils/types/mainTypes.ts";
import { RootState } from "./store.ts";
import { useTodoRequest } from "../utils/hooks/useTodoRequest.ts";

const slice = createSlice({
  name: "todo",
  initialState: [] as TodolistDomainType[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoLists.fulfilled, (_, action) => {
      return action.payload.todoLists.map((tl) => ({ ...tl, filter: "all" }));
    });
  },
});

const fetchTodoLists = createAsyncThunk<{ todoLists: TodoListType[] }, void>(
  `${slice.name}/fetchTodolists`,
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await useTodoRequest().getTodoLists();
      return { todoLists: response.data };
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const todoListReducer = slice.reducer;

export const todoListPath = slice.reducerPath;

export const todolistActions = slice.actions;

export const selectTodoLists = (state: RootState) => state.todo;

export const todoListsThunks = { fetchTodoLists };
