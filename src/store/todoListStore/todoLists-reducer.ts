import {TodoListActionsType} from "./todoLists-actions.ts";

export type FilterType = 'all' | 'active' | 'complete';

export type TodoListResponse = {
  id: string
  addedDate: Date
  order: number
  title: string
}

export type TodoListType = {
  filter: FilterType
} & TodoListResponse

export const todoListReducer = (state: TodoListType[] = [], action: TodoListActionsType): TodoListType[] => {
  switch (action.type) {
    case "SET-TODO-LIST":
      return action.payload.todoLists.map(todoList => ({...todoList, filter: 'all'}));
    case "ADD-TODO-LIST":
      return [{...action.payload.todoList, filter: 'all'}, ...state];
    case "CHANGE-FILTER":
      return state.map(todoList => todoList.id === action.payload.todoId? {...todoList, filter: action.payload.filter} : todoList);
    default:
      return state
  }
}