import {Dispatch} from "redux";
import useRequest from "../../utils/hooks/useRequest.ts";
import {setTodoListAC} from "./todoLists-actions.ts";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";

export const getTodoListsTC = () => {
  return (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC())
    useRequest().getTodoLists().then(data => {
      if(typeof data === "string") {
        console.log(data)
        dispatch(setFailedStatus())
      } else {
        dispatch(setTodoListAC(data))
        dispatch(setSuccessedStatus())
      }
    })
  }
}