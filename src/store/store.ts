import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {todolistsReducer} from "./todolists-reducer.ts";
import {tasksReducer} from "./tasks-reducer.ts";
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk'
import {ActionsTaskType} from "./tasks-actions.ts";
import {ActionsTodoType} from "./todolists-actions.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
  todoList: todolistsReducer,
  task: tasksReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


type AppActionsType = ActionsTaskType | ActionsTodoType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>;

type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = typeof store.dispatch;
type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionsType>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;