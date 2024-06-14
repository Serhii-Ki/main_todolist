import { useAppDispatch, useAppSelector} from "../../../store/store.ts";
import {FilterType} from "../../../utils/types.ts";
import {ChangeEvent, useState} from "react";
import {ChangeFilterAC} from "../../../store/todo-store/todolists-actions.ts";
import {
  fetchAddTodolistTC,
  fetchRemoveTodolistTC,
  fetchTodolistsTC,
  fetchUpdateTodolistTC
} from "../../../store/todo-store/todolists-thunks.ts";
import {fetchAddTaskTC, fetchTasksTC} from "../../../store/task-store/tasks-thunks.ts";
import {selectAllTasks} from "../../../store/selectors.ts";

export const useTodoList = (todoId: string = '', titleTodo: string = '', filter: FilterType = 'all') => {
  const tasks = useAppSelector(selectAllTasks)
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [editInputValue, setEditInputValue] = useState<string>(titleTodo);
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [isErrorText, setIsErrorText] = useState<boolean>(false);

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setIsErrorText(false)
  }

  const filteredTasks = () => {
    if(filter === 'active') {
      return tasks[todoId].filter(task => task.status === 0)
    } else if(filter === 'completed') {
      return tasks[todoId].filter(task => task.status === 1)
    }
    return tasks[todoId];
  }

  const getTodoLists = () => {
    dispatch(fetchTodolistsTC())
  }

  const getTasks = () => {
    dispatch(fetchTasksTC(todoId))
  }

  const addTodoListReq = (title: string) => {
    dispatch(fetchAddTodolistTC(title))
  }

  const removeTodoList = () => {
    return dispatch(fetchRemoveTodolistTC(todoId))
  }

  const changeFiler = (filter: FilterType) => {
    dispatch(ChangeFilterAC(todoId, filter));
  }

  const addTask = () => {
    if(inputValue.trim()) {
      dispatch(fetchAddTaskTC(todoId, inputValue));
      setInputValue('')
    } else {
      setIsErrorText(true)
    }
  }

  const editTodo = () => {
    dispatch(fetchUpdateTodolistTC(todoId, editInputValue))
    setSpanMode()
  }

  const cancelEditTodo = () => {
    setSpanMode();
    setEditInputValue(titleTodo)
  }

  return {
    tasks,
    filteredTasks,
    viewMode,
    setInputMode,
    setSpanMode,
    inputValue,
    onChangeInput,
    getTodoLists,
    getTasks,
    addTodoListReq,
    removeTodoList,
    changeFiler,
    addTask,
    editInputValue,
    setEditInputValue,
    editTodo,
    cancelEditTodo,
    isErrorText
  }
}