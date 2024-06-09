import useRequest from "../../utils/hooks/useRequest.ts";
import {AddTodoAC, EditTodoAC, RemoveTodoAC, setTodoListsAC} from "./todolists-actions.ts";
import {AppThunkType} from "../store.ts";
import {setErrorAC, setLoadingAC, setSuccessAC} from "../appStatus-store/appStatus-actions.ts";
import {AddNewArrayAC} from "../task-store/tasks-actions.ts";

export const fetchTodolistsTC = (): AppThunkType => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingAC())
      const res = await useRequest().getTodoLists();
      console.log(res)
      dispatch(setTodoListsAC(res.data));
      dispatch(setSuccessAC())
    } catch (err) {
      dispatch(setErrorAC(String(err)))
    }
  }
}

export const fetchAddTodolistTC = (title: string): AppThunkType => {
  return async dispatch => {
    try {
      dispatch(setLoadingAC())
      const res = await useRequest().addTodoListReq(title);
      dispatch(AddTodoAC(res.data.data.item.id, title))
      dispatch(AddNewArrayAC(res.data.data.item.id))
      dispatch(setSuccessAC())
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchRemoveTodolistTC = (todoId: string): AppThunkType => {
  return async dispatch => {
    try {
      await useRequest().removeTodoListReq(todoId);
      dispatch(RemoveTodoAC(todoId))
    } catch (err) {
      console.log(err)
    }
  }
};

export const fetchUpdateTodolistTC = (todoId: string, title: string): AppThunkType => {
  return async dispatch => {
    try {
      await useRequest().updateTodoListReq(todoId, title);
      dispatch(EditTodoAC(todoId, title))
    } catch (err) {
      console.log(err)
    }
  }
}