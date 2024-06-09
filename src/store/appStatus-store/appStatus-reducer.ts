import {StatusType} from "../../utils/types.ts";
import {AppStatusActionsType} from "./appStatus-actions.ts";

type initialType = {
  loadingStatus: StatusType,
  errorText: string | null
}

const initial: initialType = {
  loadingStatus: 'idle',
  errorText: null
}


export const appStatusReducer = (state: initialType = initial, actions: AppStatusActionsType) => {
  switch (actions.type) {
    case "SET-LOADING":
      return {
        ...state,
        loadingStatus: 'loading',
        errorText: null
      }
    case "SET-SUCCESS":
      return {
       ...state,
        loadingStatus:'success'
      }
    case "SET-ERROR":
      return {
       ...state,
        loadingStatus: 'error',
        errorText: actions.error
      }
    default:
      return state;
  }
}