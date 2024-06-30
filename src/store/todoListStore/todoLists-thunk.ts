import {Dispatch} from "redux";
import useRequest from "../../utils/hooks/useRequest.ts";
import {addTodoListAC, deleteTodoListAC, setTodoListAC, updateTodoListAC} from "./todoLists-actions.ts";
import {setFailedStatus, setLoadingStatusAC, setSuccessedStatus} from "../appStore/app-actions.ts";
import {setTasksAC, updateTaskAC} from "../tasksStore/tasks-actions.ts";

export const getTodoListsTC = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchGetTodoLists();
      dispatch(setTodoListAC(res.data))
      dispatch(setTasksAC(res.data))
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
      dispatch(addTodoListAC(res.data.data.item))
      dispatch(updateTaskAC(res.data.data.item.id))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteTodoListTC = (todoId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchDeleteTodoList(todoId)
      if(res.data.resultCode === 0){
        dispatch(deleteTodoListAC(todoId))
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

export const updateTodoListTC = (todoId: string, title: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setLoadingStatusAC())
      const res = await useRequest().fetchUpdateTodoList(todoId, title)
      if(res.data.resultCode === 0){
        dispatch(updateTodoListAC(todoId, title))
        dispatch(setSuccessedStatus())
      } else {
        console.log(res.data.messages[0])
        dispatch(setFailedStatus())
      }
    } catch (err) {
      console.log(err)
      dispatch(setFailedStatus())
    }
  }
}