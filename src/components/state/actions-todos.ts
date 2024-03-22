export type ActionsTasksType = RemoveTodoType;

type RemoveTodoType = ReturnType<typeof removeTodoList>
export const removeTodoList = (todoId: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    payload: {
      todoId
    }
  } as const
}