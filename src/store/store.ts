import { applyMiddleware, combineReducers, createStore, AnyAction } from 'redux';
import {thunk, ThunkDispatch} from "redux-thunk";
import {todoListReducer} from "./todoListStore/todoLists-reducer.ts";
import {tasksReducer} from "./tasksStore/tasks-reducer.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./appStore/app-reducer.ts";
import {authReducer} from "./authStore/auth-reducer.ts";


const rootReducer = combineReducers({
  todoLists: todoListReducer,
  tasks: tasksReducer,
  appState: appReducer,
  auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector