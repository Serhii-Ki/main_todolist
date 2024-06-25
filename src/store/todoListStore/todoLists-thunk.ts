import {Dispatch} from "redux";
import useRequest from "../../utils/hooks/useRequest.ts";
import {setTodoListAC} from "./todoLists-actions.ts";

export const getTodoListsTC = () => {
  return (dispatch: Dispatch) => {
    useRequest().getTodoLists().then(data => {
      if(typeof data === "string") {
        console.log(data)
      } else {
        dispatch(setTodoListAC(data))
      }
    })
  }
}