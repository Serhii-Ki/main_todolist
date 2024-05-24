import {TodoListType} from "../utils/types.ts";
import {ActionsTodoType} from "./todolists-actions.ts";

const todoInitial: TodoListType[] = []

export function todolistsReducer(state: TodoListType[] = todoInitial, action: ActionsTodoType): TodoListType[]{
  switch(action.type){
    case "SET-TODO-LIST": {
      return action.payload.todoLists.map(todo => ({...todo, filter: 'all'}));
    }
    case 'ADD-TODO':
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        addedDate: new Date(),
        order: 0,
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