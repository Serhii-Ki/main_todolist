import {Dispatch} from "redux";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import useRequest from "../../utils/hooks/useRequest.ts";
import {addTaskAC, deleteTaskAC, getTasksAC, updateTaskDateAC} from "./tasks-actions.ts";
import {AppRootStateType} from "../store.ts";

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

export const updateTaskDateTC = (todoId: string, taskId: string, title: string, status: number | null) => {
  return async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const task = getState().tasks[todoId].find(item => item.id === taskId);

    if(!task){
      return
    }

    const statusTask = task.status === 0 ? 1 : 0;

    const date = {
      title: status === null ? title : task.title,
      description: task.description,
      completed: task.completed,
      status: status !== null ? statusTask : task.status,
      priority: task.priority,
      startDate: task.startDate,
      deadline: task.deadline
    }

    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchUpdateTask(todoId, taskId ,date);
      if(res.data.resultCode === 0) {
        dispatch(updateTaskDateAC(todoId, taskId, title, status))
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