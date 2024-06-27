import {Dispatch} from "redux";
import useRequest from "../../utils/hooks/useRequest.ts";
import {setTodoListAC} from "./todoLists-actions.ts";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import {setTasksAC} from "../tasksStore/tasks-actions.ts";

export const getTodoListsTC = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().getTodoLists();
      dispatch(setTodoListAC(res))
      dispatch(setTasksAC(res))
      dispatch(setSuccessedStatus())
    } catch (err) {
      dispatch(setFailedStatus())
    }
  }
}