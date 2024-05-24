import {Dispatch} from "redux";
import useRequest from "../utils/hooks/useRequest.ts";
import {setTaskAC} from "./tasks-actions.ts";

export const fetchTasksTC = (todoId: string) => {
  return (dispatch: Dispatch) => {
    useRequest().getTasks(todoId)
     .then(res => {
        dispatch(setTaskAC(todoId, res.data.items))
      })

  }
}