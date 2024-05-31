import {useState} from "react";
import {ChangeCompletedAC, EditTaskAC} from "../../../store/tasks-actions.ts";
import {fetchRemoveTaskTC} from "../../../store/tasks-thunks.ts";
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
    dispatch(ChangeCompletedAC(todoId, taskId))
  }

  const editTask = () => {
    if(editInputValue){
      dispatch(EditTaskAC(todoId, taskId, editInputValue));
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