import {useState} from "react";
import {useDispatch} from "react-redux";
import {ChangeCompletedAC, EditTaskAC, RemoveTaskAC} from "../../../store/tasks-actions.ts";

export const useTask = (todoId: string, taskId: string, taskTitle: string) => {
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [editInputValue, setEditInputValue] = useState<string>(taskTitle);
  const dispatch = useDispatch();

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  const removeTask = () => {
    dispatch(RemoveTaskAC(todoId, taskId))
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