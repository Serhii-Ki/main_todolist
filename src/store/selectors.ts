import {AppRootStateType} from "./store.ts";


export const selectAllTodoLists = (state: AppRootStateType) => state.todoList;

export const selectAllTasks = (state: AppRootStateType) => state.task;