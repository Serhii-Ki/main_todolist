import {AppRootStateType} from "./store.ts";


export const selectAllTodoLists = (state: AppRootStateType) => state.todoList;

export const selectAllTasks = (state: AppRootStateType) => state.task;

export const selectAppStatus = (state: AppRootStateType) => state.appStatus.loadingStatus;

export const selectorAppState = (state: AppRootStateType) => state.appStatus;