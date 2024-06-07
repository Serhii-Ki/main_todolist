import {TasksType} from "../utils/types.ts";
import {ActionsTaskType} from "./tasks-actions.ts";

export const tasksInitial: TasksType = {}

export function tasksReducer(state: TasksType = tasksInitial, action: ActionsTaskType): TasksType {
  switch (action.type) {
    case "SET-TASK":
      return {
        ...state,
        [action.payload.todoId]: action.payload.tasks
      }
    case 'ADD-NEW-ARRAY':
      return {...state, [action.payload.todoId]: []};
    case "ADD-TASK":
      return {...state, [action.payload.todoId] : [...state[action.payload.todoId], action.payload.task]}
    case 'REMOVE-TASK':
      return {...state,
        [action.payload.todoId]: state[action.payload.todoId].filter(task => task.id !== action.payload.taskId)
      }
    case "UPDATE-TASK":
      if(action.payload.newTitle) {
        return {...state,
          [action.payload.todoId]: state[action.payload.todoId].map(task =>
            task.id === action.payload.taskId
             ? {...task, title: action.payload.newTitle || task.title}
              : task
          )
        }
      } else {
        return {...state,
          [action.payload.todoId]: state[action.payload.todoId].map(task =>
            task.id === action.payload.taskId
             ? {...task, status: task.status ? 0 : 1}
              : task
          )
        }
      }
    default:
      return state
  }
}