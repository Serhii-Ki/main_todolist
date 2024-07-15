import {Dispatch} from "redux";
import useRequest, {SigninDataType} from "../../utils/hooks/useRequest.ts";
import {signInAC} from "./auth-actions.ts";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";


export const signInTC = (data: SigninDataType) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      useRequest().fetchSignIn(data)
          .then((res) => {
            if(res.data.resultCode === 0) {
              dispatch(signInAC(true));
              dispatch(setSuccessedStatus());
            } else {
              dispatch(setFailedStatus())
            }
          })
    } catch (e) {
      dispatch(setFailedStatus())
    }
  }
}