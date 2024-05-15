import {combineReducers, legacy_createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer.ts";
import {tasksReducer} from "./tasks-reducer.ts";

const rootReducer = combineReducers({
  todoList: todolistsReducer,
  task: tasksReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);