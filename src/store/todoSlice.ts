import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FilterType,
  TodolistDomainType,
  TodoListType,
} from "../utils/types/mainTypes.ts";
import { RootState } from "./store.ts";
import { useTodoRequest } from "../utils/hooks/useTodoRequest.ts";
import { appActions } from "./appSlice.ts";

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
      .addCase(fetchAddTodoList.rejected, (_, action) => {
        console.error(action.error);
      })
      .addCase(fetchAddTodoList.fulfilled, (state, action) => {
        state.push({ ...action.payload.todoList, filter: "all" });
      })
      .addCase(fetchDeleteTodoList.fulfilled, (state, action) => {
        const index = state.findIndex(
          (todo) => todo.id === action.payload.todoId,
        );
        if (index !== -1) state.splice(index, 1);
      });
  },
});

const fetchTodoLists = createAsyncThunk<{ todoLists: TodoListType[] }, void>(
  `${slice.name}/fetchTodolists`,
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(appActions.setLoadingStatus());
    try {
      const response = await useTodoRequest().getTodoLists();
      dispatch(appActions.setIdleStatus());
      return { todoLists: response.data };
    } catch (err) {
      dispatch(appActions.setErrorStatus());
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

const fetchDeleteTodoList = createAsyncThunk<{ todoId: string }, string>(
  `${slice.name}/fetchDeleteTodoList`,
  async (todoId: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await useTodoRequest().deleteTodoList(todoId);
      if (res.data.resultCode === 0) {
        return { todoId };
      } else {
        return rejectWithValue(res.data.messages[0]);
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

export const todoListsThunks = {
  fetchTodoLists,
  fetchAddTodoList,
  fetchDeleteTodoList,
};
