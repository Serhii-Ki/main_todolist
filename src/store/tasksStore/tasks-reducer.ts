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

export const tasksReducer = (state: TasksType = {}, action: TasksActionsType): TasksType => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        [action.payload.todoId]: action.payload.tasks
      }
    case "SET_TASKS":
      return action.payload.todoLists.reduce((acc, item) => {
        if(!state[item.id]){
          acc[item.id] = [];
        }
        return acc;
      }, state)
    case "UPDATE_TASK":
      return {
        ...state,
        [action.payload.todoId]: []
      }
    case "ADD_TASK":
      return {
        ...state,
        [action.payload.todoId]: [action.payload.task, ...state[action.payload.todoId]]
      }
    case "DELETE_TASK":
      return {
        ...state,
        [action.payload.todoId]: state[action.payload.todoId].filter(task => task.id!== action.payload.taskId)
      }
    case "UPDATE_TASK_DATE":
      if(action.payload.status !== null){
        return {
          ...state,
          [action.payload.todoId]: state[action.payload.todoId].map(task => task.id === action.payload.taskId
           ? {...task, status: task.status === 0 ? 1 : 0}
            : task)
        }
      } else {
        return {
          ...state,
          [action.payload.todoId]: state[action.payload.todoId].map(task => task.id === action.payload.taskId
           ? {...task, title: action.payload.title}
            : task)
        }
      }
    default:
      return state
  }
}