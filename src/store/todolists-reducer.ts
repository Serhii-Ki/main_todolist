import {TodoListType} from "../types/types.ts";
import {todoInitial} from "../types/initState.ts";
import {ActionsTodoType} from "./todolists-actions.ts";

export function todolistsReducer(state: TodoListType[] = todoInitial, action: ActionsTodoType): TodoListType[]{
  switch(action.type){
    case 'ADD-TODO':
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        filter: 'all'
      }];
    case "REMOVE-TODO":
      return state.filter(todo => todo.id!== action.payload.todoId);
    case "CHANGE-FILTER":
      return state.map(todo => todo.id === action.payload.todoId
        ? {...todo, filter: action.payload.filter}
        : todo
      )
    case "EDIT-TODO":
      return state.map(todo => todo.id === action.payload.todoId
        ? {...todo, title: action.payload.title}
        : todo
      )
    default:
      return state;
  }
}