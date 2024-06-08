import { useAppDispatch, useAppSelector} from "../../../store/store.ts";
import {FilterType} from "../../../utils/types.ts";
import {ChangeEvent, useState} from "react";
import {ChangeFilterAC} from "../../../store/todolists-actions.ts";
import {fetchRemoveTodolistTC, fetchTodolistsTC, fetchUpdateTodolistTC} from "../../../store/todolists-thunks.ts";
import {fetchAddTaskTC, fetchTasksTC} from "../../../store/tasks-thunks.ts";
import {selectAllTasks} from "../../../store/selectors.ts";

export const useTodoList = (todoId: string = '', titleTodo: string = '', filter: FilterType = 'all') => {
  // const tasks = useSelector<AppRootStateType, TasksType>(state => state.task);
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
    dispatch(fetchTodolistsTC());
  }

  const getTasks = () => {
    dispatch(fetchTasksTC(todoId))
  }

  const removeTodoList = () => {
    dispatch(fetchRemoveTodolistTC(todoId))
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