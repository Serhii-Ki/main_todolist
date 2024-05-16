export type ActionsTaskType = AddNewArrayType | RemoveTaskType | ChangeCompletedType;

type AddNewArrayType = ReturnType<typeof AddNewArrayAC>;

export const AddNewArrayAC = (todoId: string) => {
  return {
    type: 'ADD-NEW-ARRAY',
    payload: {
      todoId
    }
  } as const
};

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