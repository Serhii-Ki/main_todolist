import {Dispatch} from "redux";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import useRequest from "../../utils/hooks/useRequest.ts";
import {addTaskAC, deleteTaskAC, getTasksAC} from "./tasks-actions.ts";

export const getTasksTC = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchGetTasks(todoId)
      dispatch(getTasksAC(todoId, res.data.items))
      dispatch(setSuccessedStatus())
    } catch (err) {
      dispatch(setFailedStatus())
    }
  }
}

export const addTaskTC = (todoId: string, title: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await useRequest().fetchAddTask(todoId, title)
      dispatch(addTaskAC(todoId, res.data.data.item))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteTaskTC = (todoId: string, taskId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchDeleteTask(todoId, taskId)
      if(res.data.resultCode === 0) {
        dispatch(deleteTaskAC(todoId, taskId))
        dispatch(setSuccessedStatus())
      } else {
        dispatch(setFailedStatus())
      }
    } catch (err) {
      console.log(err)
      dispatch(setFailedStatus())
    }
  }
}