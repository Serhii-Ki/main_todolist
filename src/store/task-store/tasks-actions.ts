import {TaskType} from "../../utils/types.ts";

export type ActionsTaskType =
    AddNewArrayType
    | RemoveTaskType
    | AddTaskType
    | UpdateTaskType
    | SetTaskType;

type SetTaskType = ReturnType<typeof setTaskAC>

export const setTaskAC = (todoId: string, tasks: TaskType[]) => {
  return {
    type: 'SET-TASK',
    payload: {
      todoId,
      tasks
    }
  } as const
}

type AddNewArrayType = ReturnType<typeof AddNewArrayAC>;

export const AddNewArrayAC = (todoId: string) => {
  return {
    type: 'ADD-NEW-ARRAY',
    payload: {
      todoId
    }
  } as const
};

type AddTaskType = ReturnType<typeof AddTaskAC>

export const  AddTaskAC = (todoId: string, task: TaskType) => {
  return {
    type: 'ADD-TASK',
    payload: {
      todoId,
      task
    }
  } as const
}

type RemoveTaskType = ReturnType<typeof RemoveTaskAC>;

export const RemoveTaskAC = (todoId: string, taskId: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      todoId,
      taskId
    }
  } as const
}

type UpdateTaskType = ReturnType<typeof UpdateTaskTypeAC>

export const UpdateTaskTypeAC = (todoId: string, taskId: string, newTitle: string | null, completed: boolean | null) => {
  return {
    type: 'UPDATE-TASK',
    payload: {
      todoId,
      taskId,
      newTitle,
      completed
    }
  } as const
}

