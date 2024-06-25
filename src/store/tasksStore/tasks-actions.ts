import {TaskType} from "./tasks-reducer.ts";

export type TasksActionsType = GetTasksActionsType;

type GetTasksActionsType = ReturnType<typeof getTasksAC>;

export const getTasksAC = (todoId: string, tasks: TaskType) => {
  return {
    type: 'GET_TASKS',
    payload: {
      todoId,
      tasks
    }
  }
}