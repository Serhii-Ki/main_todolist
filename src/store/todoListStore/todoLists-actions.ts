import {FilterType, TodoListResponse} from "./todoLists-reducer.ts";

export type TodoListActionsType =
    SetTodoListActionsType
    | AddTodoListActionsType
    | ChangeFilterActionsType
    | DeleteTodoListActionsType
    | UpdateTodoListActionsType;

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

type DeleteTodoListActionsType = ReturnType<typeof deleteTodoListAC>

export const deleteTodoListAC = (todoId: string) => {
  return {
    type: 'DELETE-TODO-LIST',
    payload: {
      todoId
    }
  } as const
}

type UpdateTodoListActionsType = ReturnType<typeof updateTodoListAC>

export const updateTodoListAC = (todoId: string, title: string) => {
  return {
    type: 'UPDATE-TODO-LIST',
    payload: {
      todoId,
      title
    }
  } as const
}