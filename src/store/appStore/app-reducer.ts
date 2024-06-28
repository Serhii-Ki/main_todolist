import {AppActionsType} from "./app-actions.ts";

type LoadStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export type AppStateType = {
  loadStatus: LoadStatusType
}

const initialState: AppStateType = {
  loadStatus: 'idle'
}

export const appReducer = (state: AppStateType = initialState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case "SET-LOADING-STATUS":
      return {
       ...state,
        loadStatus: 'loading'
      }
    case "SET-SUCCESSED-STATUS":
      return {
       ...state,
        loadStatus:'succeeded'
      }
    case "SET-FAILED-STATUS":
      return {
       ...state,
        loadStatus: 'failed'
      }
    default:
      return state
  }
}