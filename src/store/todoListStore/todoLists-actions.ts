import {FilterType, TodoListResponse} from "./todoLists-reducer.ts";

export type TodoListActionsType =
    SetTodoListActionsType
    | AddTodoListActionsType
    | ChangeFilterActionsType;

type SetTodoListActionsType = ReturnType<typeof setTodoListAC>;

export const setTodoListAC = (todoLists: TodoListResponse[]) => {
  return {
    type: 'SET-TODO-LIST',
    payload: {
      todoLists
    }
  } as const
}

type AddTodoListActionsType = ReturnType<typeof addTodoListAC>

export const addTodoListAC = (todoList: TodoListResponse) => {
  return {
    type: 'ADD-TODO-LIST',
    payload: {
      todoList
    }
  } as const
}

type ChangeFilterActionsType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (todoId: string, filter: FilterType) => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      todoId,
      filter
    }
  } as const
}