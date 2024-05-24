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
      return state
      // return {...state, [action.payload.todoId] : [...state[action.payload.todoId], {
      //   id: action.payload.taskId,
      //   title: action.payload.title,
      //   completed: false
      //   }]}
    case 'REMOVE-TASK':
      return {...state,
        [action.payload.todoId]: state[action.payload.todoId].filter(task => task.id !== action.payload.taskId)
      }
    case "CHANGE-COMPLETED":
      return {...state,
        [action.payload.todoId]: state[action.payload.todoId].map(task =>
          task.id === action.payload.taskId
          ? {...task, completed: !task.completed}
          : task
        )
      }
    case "EDIT-TASK":
      return {...state,
        [action.payload.todoId]: state[action.payload.todoId].map(task =>
          task.id === action.payload.taskId
          ? {...task, title: action.payload.title}
          : task
        )
      }
    default:
      return state
  }
}