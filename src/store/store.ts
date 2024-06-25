import { applyMiddleware, combineReducers, createStore, AnyAction } from 'redux';
import {thunk, ThunkDispatch} from "redux-thunk";
import {todoListReducer} from "./todoListStore/todoLists-reducer.ts";
import {tasksReducer} from "./tasksStore/tasks-reducer.ts";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
  todoLists: todoListReducer,
  tasks: tasksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();