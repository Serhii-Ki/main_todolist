import useRequest from "../utils/hooks/useRequest.ts";
import {AddTaskAC, RemoveTaskAC, setTaskAC, UpdateTaskTypeAC} from "./tasks-actions.ts";
import {AppThunkType} from "./store.ts";
import {TaskPutRequestType} from "../utils/types.ts";

export const fetchTasksTC = (todoId: string): AppThunkType => {
  return (dispatch) => {
    useRequest().getTasks(todoId)
     .then(res => {
        dispatch(setTaskAC(todoId, res.data.items))
      })

  }
}

export const fetchAddTaskTC = (todoId: string, title: string): AppThunkType => {
  return async dispatch => {
    try {
      const res = await useRequest().addTaskReq(todoId, title);
      console.log(res.data)
      dispatch(AddTaskAC(todoId, res.data.data.item))
    } catch (err) {
      console.log(err)
    }
  }
};

export const fetchRemoveTaskTC = (todoId: string, taskId: string): AppThunkType => {
  return async dispatch => {
    try {
      await useRequest().removeTaskReq(todoId, taskId);
      dispatch(RemoveTaskAC(todoId, taskId));
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchUpdateTaskTC = (todoId: string, taskId: string, newTitle: null | string = null, completed: null | boolean = null ): AppThunkType => {
  return async (dispatch, getState) => {
    const task = getState().task[todoId].find(task => task.id === taskId);

    if(!task) {
      return
    }

    const payload: TaskPutRequestType = {
      title: newTitle || task.title,
      description: task.description,
      completed: completed !== null ? completed : task.completed,
      status: task.status,
      priority: task.priority,
      startDate: task.startDate,
      deadline: task.deadline
    }

    try {
      await useRequest().updateTaskReq(todoId, taskId, payload);
      dispatch(UpdateTaskTypeAC(todoId, taskId, newTitle, completed))
    } catch (err) {
      console.log(err)
    }
  }
}