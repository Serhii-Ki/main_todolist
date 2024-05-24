import {Dispatch} from "redux";
import useRequest from "../utils/hooks/useRequest.ts";
import {setTodoListsAC} from "./todolists-actions.ts";

export const fetchTodolistsTC = () => {
  return (dispatch: Dispatch) => {
    useRequest().getTodoLists()
     .then(res => {
        dispatch(setTodoListsAC(res.data))
      })
  }
}