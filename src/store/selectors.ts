import {AppRootStateType} from "./store.ts";
import {TodoListType} from "./todoListStore/todoLists-reducer.ts";
import {AppStateType} from "./appStore/app-reducer.ts";
import {TaskType} from "./tasksStore/tasks-reducer.ts";

export const getTodoLists = (state: AppRootStateType): TodoListType[] => state.todoLists;

export const getAppState = (state: AppRootStateType): AppStateType => state.appState;

export const getTasks = (state: AppRootStateType, todoId: string): TaskType[] => state.tasks[todoId];

export const getAuthStatus = (state: AppRootStateType): boolean => state.auth.isLoggedIn;