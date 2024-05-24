import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store.ts";
import {FilterType, TasksType, TaskType} from "../../../utils/types.ts";
import {ChangeEvent, useState} from "react";
import {ChangeFilterAC, EditTodoAC, RemoveTodoAC} from "../../../store/todolists-actions.ts";
import {v4 as uuidv4} from "uuid";
import {AddTaskAC} from "../../../store/tasks-actions.ts";

export const useTodoList = (todoId: string, titleTodo: string, filter: FilterType) => {
  const tasks = useSelector<AppRootStateType, TasksType>(state => state.task);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [editInputValue, setEditInputValue] = useState<string>(titleTodo);
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [isErrorText, setIsErrorText] = useState<boolean>(false);

  let filterTasks: TaskType[];

  const filterTasksFn = () => {
    if(filter === 'completed'){
      return filterTasks = tasks[todoId].filter(task => task.completed)
    } else if(filter === 'active') {
      return filterTasks = tasks[todoId].filter(task => !task.completed)
    } else {
      return filterTasks = tasks[todoId];
    }
  }

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

  const removeTodoList = () => {
    dispatch(RemoveTodoAC(todoId))
  }

  const changeFiler = (filter: FilterType) => {
    dispatch(ChangeFilterAC(todoId, filter));
  }

  const addTask = () => {
    const taskId = uuidv4();
    if(inputValue.trim()) {
      dispatch(AddTaskAC(todoId, taskId, inputValue));
      setInputValue('')
    } else {
      setIsErrorText(true)
    }
  }

  const editTodo = () => {
    dispatch(EditTodoAC(todoId, editInputValue))
    setSpanMode()
  }

  const cancelEditTodo = () => {
    setSpanMode();
    setEditInputValue(titleTodo)
  }

  return {
    tasks,
    filterTasksFn,
    viewMode,
    setInputMode,
    setSpanMode,
    inputValue,
    onChangeInput,
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