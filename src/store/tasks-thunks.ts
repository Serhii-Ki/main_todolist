import useRequest from "../utils/hooks/useRequest.ts";
import {AddTaskAC, RemoveTaskAC, setTaskAC} from "./tasks-actions.ts";
import {AppThunkType} from "./store.ts";

export const fetchTasksTC = (todoId: string): AppThunkType => {
  return (dispatch) => {
    useRequest().getTasks(todoId)
     .then(res => {
        dispatch(setTaskAC(todoId, res.data.items))
      })

  }
}

export const fetchAddTaskTC = (todoId: string, title: string): AppThunkType => {
  return async dispatch => {
    try {
      const res = await useRequest().addTaskReq(todoId, title);
      console.log(res.data)
      dispatch(AddTaskAC(todoId, res.data.data.item))
    } catch (err) {
      console.log(err)
    }
  }
};

export const fetchRemoveTaskTC = (todoId: string, taskId: string): AppThunkType => {
  return async dispatch => {
    try {
      await useRequest().removeTaskReq(todoId, taskId);
      dispatch(RemoveTaskAC(todoId, taskId));
    } catch (err) {
      console.log(err)
    }
  }
}