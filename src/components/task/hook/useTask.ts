import {useState} from "react";
import {fetchRemoveTaskTC, fetchUpdateTaskTC} from "../../../store/tasks-thunks.ts";
import {useAppDispatch} from "../../../store/store.ts";

export const useTask = (todoId: string, taskId: string, taskTitle: string) => {
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [editInputValue, setEditInputValue] = useState<string>(taskTitle);
  const dispatch = useAppDispatch();

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  const removeTask = () => {
    dispatch(fetchRemoveTaskTC(todoId, taskId))
  }

  const changeCompleted = () => {
    dispatch(fetchUpdateTaskTC(todoId, taskId, null, true))
  }

  const editTask = () => {
    if(editInputValue){
      dispatch(fetchUpdateTaskTC(todoId, taskId, editInputValue, null));
      setViewMode(false)
    }
  }

  const cancelEditTask = () => {
    setSpanMode();
    setEditInputValue(taskTitle)
  }

  return {
    viewMode,
    editInputValue,
    setEditInputValue,
    setInputMode,
    setSpanMode,
    removeTask,
    changeCompleted,
    editTask,
    cancelEditTask
  }
}