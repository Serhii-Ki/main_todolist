import {TaskType} from "./tasks-reducer.ts";
import {TodoListResponse} from "../todoListStore/todoLists-reducer.ts";

export type TasksActionsType =
    GetTasksActionsType
    | SetTasksActionsType
    | UpdateTaskActionsType 
    | AddTaskActionsType
    | DeleteTaskActionsType;

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

type AddTaskActionsType = ReturnType<typeof addTaskAC>

export const addTaskAC = (todoId: string, task: TaskType) => {
  return {
    type: 'ADD_TASK',
    payload: {
      todoId,
      task
    }
  } as const
}

type DeleteTaskActionsType = ReturnType<typeof deleteTaskAC>

export const deleteTaskAC = (todoId: string, taskId: string) => {
  return {
    type: 'DELETE_TASK',
    payload: {
      todoId,
      taskId
    }
  } as const
}