export type ActionsTasksType = RemoveTaskType;

type RemoveTaskType = ReturnType<typeof removeTask>

export const removeTask = (todoId: string, taskID: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      todoId,
      taskID
    }
  } as const
}