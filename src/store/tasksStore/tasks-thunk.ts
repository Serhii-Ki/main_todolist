import {Dispatch} from "redux";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import useRequest from "../../utils/hooks/useRequest.ts";
import {getTasksAC} from "./tasks-actions.ts";

export const getTasksTC = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchGetTasks(todoId)
      dispatch(getTasksAC(todoId, res.items))
      dispatch(setSuccessedStatus())
    } catch (err) {
      dispatch(setFailedStatus())
    }
  }
}