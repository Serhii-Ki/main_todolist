import {StatusType} from "../../utils/types.ts";
import {AppStatusActionsType} from "./appStatus-actions.ts";

const initial = {
  loadingStatus: 'idle' as StatusType
}

type initialType = ReturnType<typeof initial>;

export const appStatusReducer = (state: initialType = initial, actions: AppStatusActionsType) => {
  switch (actions.type) {
    case "SET-LOADING":
      return {
        ...state,
        loadingStatus: 'loading'
      }
    case "SET-SUCCESS":
      return {
       ...state,
        loadingStatus:'success'
      }
    default:
      return state;
  }
}