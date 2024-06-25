import {TasksActionsType} from "./tasks-actions.ts";


export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
  id: string
  todoListId: string
  order: number
  addedDate: Date
}

type TasksType = {
  [key: string]: TaskType[]
}

export const tasksReducer = (state: TasksType = {}, action: TasksActionsType) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        [action.payload.todoId]: action.payload.tasks
      }
    default:
      return state
  }
}