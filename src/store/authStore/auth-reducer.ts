import {ActionsAuthType} from "./auth-actions.ts";

const initialState = {
  isLoggedIn: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, actions: ActionsAuthType) => {
  switch (actions.type) {
    case "SIGN_IN":
      return {
        ...state,
        isLoggedIn: actions.payload.value
      }
    default:
      return state;
  }
}