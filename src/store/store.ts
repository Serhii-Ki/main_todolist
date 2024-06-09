import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {todolistsReducer} from "./todo-store/todolists-reducer.ts";
import {tasksReducer} from "./task-store/tasks-reducer.ts";
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk'
import {ActionsTaskType} from "./task-store/tasks-actions.ts";
import {ActionsTodoType} from "./todo-store/todolists-actions.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appStatusReducer} from "./appStatus-store/appStatus-reducer.ts";
import {AppStatusActionsType} from "./appStatus-store/appStatus-actions.ts";


const rootReducer = combineReducers({
  todoList: todolistsReducer,
  task: tasksReducer,
  appStatus: appStatusReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


type AppActionsType = ActionsTaskType | ActionsTodoType | AppStatusActionsType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>;

type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;