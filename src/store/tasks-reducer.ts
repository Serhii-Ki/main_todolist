import {TasksType} from "../types/types.ts";
import {tasksInitial} from "../types/initState.ts";
import {ActionsTaskType} from "./tasks-actions.ts";

export function tasksReducer(state: TasksType = tasksInitial, action: ActionsTaskType): TasksType {
  switch (action.type) {
    case 'ADD-NEW-ARRAY':
      return {...state, [action.payload.todoId]: []};
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
    default:
      return state
  }
}