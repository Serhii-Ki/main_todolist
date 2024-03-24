export type ActionsTasksType = RemoveTaskType | UploadTasksType | AddTaskType | ChangeChecked | EditTaskType;

type RemoveTaskType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (todoId: string, taskID: string) => {
  return {
    type: 'REMOVE-TASK',
    payload: {
      todoId,
      taskID
    }
  } as const
};

type UploadTasksType = ReturnType<typeof updateTasksAC>

export const updateTasksAC = (todoId: string) => {
  return {
    type: 'UPDATE-TASKS',
    payload: {
      todoId
    }
  } as const
};

type AddTaskType = ReturnType<typeof addTaskAC>

export const addTaskAC = (todoId: string, title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      todoId,
      title
    }
  } as const
};

type ChangeChecked = ReturnType<typeof changeCheckedAC>

export const changeCheckedAC = (todoId: string, taskId: string) => {
  return {
    type: 'CHANGE-CHECKED',
    payload: {
      todoId,
      taskId
    }
  } as const
};

type EditTaskType = ReturnType<typeof editTaskAC>

export const editTaskAC = (todoId: string, taskId: string, title: string) => {
  return {
    type: 'EDIT-TASK',
    payload: {
      todoId,
      taskId,
      title
    }
  } as const
};