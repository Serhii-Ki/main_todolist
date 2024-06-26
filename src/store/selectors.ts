import {AppRootStateType} from "./store.ts";
import {TodoListType} from "./todoListStore/todoLists-reducer.ts";
import {AppStateType} from "./appStore/app-reducer.ts";

export const getTodoLists = (state: AppRootStateType): TodoListType[] => state.todoLists;

export const getAppState = (state: AppRootStateType): AppStateType => state.appState;