import {TaskType} from "../utils/types.ts";

export type ActionsTaskType =
    AddNewArrayType
    | RemoveTaskType
    | ChangeCompletedType
    | AddTaskType
    | EditTaskType
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

type ChangeCompletedType = ReturnType<typeof ChangeCompletedAC>

export const ChangeCompletedAC = (todoId: string, taskId: string) => {
  return {
    type: 'CHANGE-COMPLETED',
    payload: {
      todoId,
      taskId
    }
  } as const
}

type EditTaskType = ReturnType<typeof EditTaskAC>

export const EditTaskAC = (todoId: string, taskId: string, title: string) => {
  return {
    type: 'EDIT-TASK',
    payload: {
      todoId,
      taskId,
      title
    }
  } as const
}