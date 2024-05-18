import {FilterType} from "../utils/types.ts";

export type ActionsTodoType = AddTodoType | RemoveTodoListType | ChangeFilterType | EditTodoType;

type AddTodoType = ReturnType<typeof AddTodoAC>;

export const AddTodoAC = (id: string, title: string) => {
  return {
    type: 'ADD-TODO',
    payload: {
      id,
      title
    }
  } as const
}

type RemoveTodoListType = ReturnType<typeof RemoveTodoAC>;

export const RemoveTodoAC = (todoId: string) => {
  return {
    type: 'REMOVE-TODO',
    payload: {
      todoId
    }
  } as const
}

type ChangeFilterType = ReturnType<typeof ChangeFilterAC>

export const ChangeFilterAC = (todoId: string, filter: FilterType) => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      todoId,
      filter
    }
  } as const
}

type EditTodoType = ReturnType<typeof EditTodoAC>

export const EditTodoAC = (todoId: string, title: string) => {
  return {
    type: 'EDIT-TODO',
    payload: {
      todoId,
      title
    }
  } as const
}