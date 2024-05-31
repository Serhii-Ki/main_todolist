import useRequest from "../utils/hooks/useRequest.ts";
import {EditTodoAC, RemoveTodoAC, setTodoListsAC} from "./todolists-actions.ts";
import {AppThunkType} from "./store.ts";

export const fetchTodolistsTC = (): AppThunkType => {
  return (dispatch) => {
    useRequest().getTodoLists()
     .then(res => {
        dispatch(setTodoListsAC(res.data))
      })
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