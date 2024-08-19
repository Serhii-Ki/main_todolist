import { createSlice } from "@reduxjs/toolkit";
import { TodoListType } from "../utils/types/mainTypes.ts";

const initialState: TodoListType[] = [];

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
