import {Dispatch} from "redux";
import useRequest from "../../utils/hooks/useRequest.ts";
import {addTodoListAC, setTodoListAC} from "./todoLists-actions.ts";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import {setTasksAC, updateTaskAC} from "../tasksStore/tasks-actions.ts";

export const getTodoListsTC = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchGetTodoLists();
      dispatch(setTodoListAC(res))
      dispatch(setTasksAC(res))
      dispatch(setSuccessedStatus())
    } catch (err) {
      dispatch(setFailedStatus())
    }
  }
}

export const addTodoListTC = (title: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await useRequest().fetchAddTodoList(title)
      console.log(res)
      dispatch(addTodoListAC(res.data.item))
      dispatch(updateTaskAC(res.data.item.id))
    } catch (err) {
      console.log(err)
    }
  }
}