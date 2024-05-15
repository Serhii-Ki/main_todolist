import {TodoListType} from "../types/types.ts";
import {todoInitial} from "../types/initState.ts";

export function todolistsReducer(state: TodoListType[] = todoInitial, action: any): TodoListType[]{
  switch(action.type){
    default:
      return state;
  }
}