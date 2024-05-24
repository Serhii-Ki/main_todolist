import { applyMiddleware, combineReducers, createStore } from 'redux'
import {todolistsReducer} from "./todolists-reducer.ts";
import {tasksReducer} from "./tasks-reducer.ts";
import { thunk} from 'redux-thunk'


const rootReducer = combineReducers({
  todoList: todolistsReducer,
  task: tasksReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

