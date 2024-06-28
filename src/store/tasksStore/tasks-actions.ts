import {TaskType} from "./tasks-reducer.ts";
import {TodoListResponse} from "../todoListStore/todoLists-reducer.ts";

export type TasksActionsType =
    GetTasksActionsType
    | SetTasksActionsType
    | UpdateTaskActionsType;

type GetTasksActionsType = ReturnType<typeof getTasksAC>;

export const getTasksAC = (todoId: string, tasks: TaskType[]) => {
  return {
    type: 'GET_TASKS',
    payload: {
      todoId,
      tasks
    }
  } as const
}

type SetTasksActionsType = ReturnType<typeof setTasksAC>

export const setTasksAC = (todoLists: TodoListResponse[]) => {
  return {
    type: 'SET_TASKS',
    payload: {
      todoLists,
    }
  } as const
}

type UpdateTaskActionsType = ReturnType<typeof updateTaskAC>

export const updateTaskAC = (todoId: string) => {
  return {
    type: 'UPDATE_TASK',
    payload: {
      todoId
    }
  } as const
}