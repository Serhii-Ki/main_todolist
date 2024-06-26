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

export const todoListReducer = (state: TodoListType[] = [], action: TodoListActionsType) => {
  switch (action.type) {
    case "SET-TODO-LIST":
      return action.payload.todoLists.map(todoList => ({...todoList, filter: 'all'}));
    default:
      return state
  }
}