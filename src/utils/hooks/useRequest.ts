import axios from 'axios'
import {TodoListResponse} from "../../store/todoListStore/todoLists-reducer.ts";
import {TaskType} from "../../store/tasksStore/tasks-reducer.ts";

type CreateTodolistResponseType = {
  resultCode: number
  messages: string[]
  fieldsErrors: FieldErrorType[]
  data: {
    item: TodoListResponse
  }
}

type FieldErrorType = {
  error: string
  field: string
}

type CreateTaskResponseType = {
  resultCode: number
  messages: string[]
  data: TaskType
}

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
      'API-KEY': '51768207-6c1b-4ce3-8f65-309bb8749f38',
    },
  });

  const fetchGetTodoLists =  () => {
    return instance.get<TodoListResponse[]>('todo-lists')
        .then(res => res.data)
  }

  const fetchGetTasks = (todoId: string) => {
    return instance.get<TaskType[]>(`todo-lists/${todoId}/tasks`)
        .then(res => res.data)
  }

  const fetchAddTodoList = (title: string) => {
    return instance.post<CreateTodolistResponseType>('todo-lists', {title})
        .then(res => res.data)
  }

  const fetchAddTask = (todoId: string, title: string) => {
    return instance.post<CreateTaskResponseType>(`todo-lists/${todoId}/tasks`, {title})
        .then(res => res.data)
  }

  return {
    fetchGetTodoLists,
    fetchGetTasks,
    fetchAddTodoList,
    fetchAddTask
  }

}

export default useRequest;