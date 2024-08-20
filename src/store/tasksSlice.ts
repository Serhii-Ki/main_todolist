import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TasksType, TaskType } from "../utils/types/mainTypes.ts";
import { RootState } from "./store.ts";
import { useTasksRequest } from "../utils/hooks/useTasksRequest.ts";

const slice = createSlice({
  name: "tasks",
  initialState: {} as TasksType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state[action.payload.todolistId] = action.payload.tasks;
    });
  },
});

const fetchTasks = createAsyncThunk<
  { tasks: TaskType[]; todolistId: string }, // Тип возвращаемого значения
  string
>(`${slice.name}/fetchTasks`, async (todolistId: string, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await useTasksRequest().getTasks(todolistId);
    return { tasks: res.data.items, todolistId };
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const tasksReducer = slice.reducer;

export const tasksPath = slice.reducerPath;

export const selectedTasks = (state: RootState) => state.tasks;

export const tasksThunks = { fetchTasks };
