import {FilterType} from "./todos-reducer";

export type ActionsTasksType = RemoveTodoType | AddTodoType | ChangeFilter | EditTodoType;

type RemoveTodoType = ReturnType<typeof removeTodoList>
export const removeTodoList = (todoId: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      todoId
    }
  } as const
};

type AddTodoType = ReturnType<typeof addTodoListAC>

export const addTodoListAC = (todoId: string, title: string) => {
  return {
    type: 'ADD-TODOLIST',
    payload: {
      todoId,
      title
    }
  } as const
}

type ChangeFilter = ReturnType<typeof changeFilterAC>;

export  const changeFilterAC = (todoId: string, filter: FilterType) => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      todoId,
      filter
    }
  } as const
};

type EditTodoType = ReturnType<typeof editTodoAC>

export  const editTodoAC = (todoId: string, title: string) => {
  return {
    type: 'EDIT-TODO',
    payload: {
      todoId,
      title
    }
  } as const
}