import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FilterType,
  TodolistDomainType,
  TodoListType,
} from "../utils/types/mainTypes.ts";
import { RootState } from "./store.ts";
import { useTodoRequest } from "../utils/hooks/useTodoRequest.ts";

const slice = createSlice({
  name: "todo",
  initialState: [] as TodolistDomainType[],
  reducers: {
    changeTodoListFilter: (
      state,
      action: PayloadAction<{ todoId: string; filter: FilterType }>,
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.todoId);
      if (todo) {
        todo.filter = action.payload.filter;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoLists.fulfilled, (_, action) => {
        return action.payload.todoLists.map((tl) => ({ ...tl, filter: "all" }));
      })
      .addCase(fetchAddTodoList.fulfilled, (state, action) => {
        state.push({ ...action.payload.todoList, filter: "all" });
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

const fetchAddTodoList = createAsyncThunk<{ todoList: TodoListType }, string>(
  `${slice.name}/fetchAddTodoList`,
  async (title: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await useTodoRequest().addTodoList(title);
      if (response.data.resultCode === 0) {
        return { todoList: response.data.data.item };
      } else {
        return rejectWithValue(response.data.messages[0]);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const todoListReducer = slice.reducer;

export const todoListPath = slice.reducerPath;

export const todolistActions = slice.actions;

export const selectTodoLists = (state: RootState) => state.todo;

export const todoListsThunks = { fetchTodoLists, fetchAddTodoList };
