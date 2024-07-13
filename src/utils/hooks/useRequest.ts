import axios from 'axios'
import {TodoListResponse} from "../../store/todoListStore/todoLists-reducer.ts";
import {TaskType} from "../../store/tasksStore/tasks-reducer.ts";

type GetTasksResponseType = {
  error: null
  items: TaskType[]
  totalCount: number
}

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
  data: {
    item: TaskType
  }
}

type ResponseType<D = unknown> = {
  resultCode: number
  messages: string[]
  data: D
}

type updateTaskResponseType = {
  title: string
  description: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
}

type SignupDataType = {
  email: string
  password: string
  confirm_password: string
  rememberMe: boolean
}

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
      'API-KEY': '51768207-6c1b-4ce3-8f65-309bb8749f38',
    },
  });

  const fetchSignUp = (signupData: SignupDataType) => {
    return instance.post<ResponseType>('auth/login', signupData)
  }

  const fetchGetTodoLists =  () => {
    return instance.get<TodoListResponse[]>('todo-lists')
  }

  const fetchGetTasks = (todoId: string) => {
    return instance.get<GetTasksResponseType>(`todo-lists/${todoId}/tasks`)
  }

  const fetchAddTodoList = (title: string) => {
    return instance.post<CreateTodolistResponseType>('todo-lists', {title})
  }

  const fetchAddTask = (todoId: string, title: string) => {
    return instance.post<CreateTaskResponseType>(`todo-lists/${todoId}/tasks`, {title})
  }

  const fetchDeleteTodoList = (todoId: string) => {
    return instance.delete<ResponseType>(`todo-lists/${todoId}`)
  }

  const fetchDeleteTask = (todoId: string, taskId: string) => {
    return instance.delete<ResponseType>(`todo-lists/${todoId}/tasks/${taskId}`)
  }

  const fetchUpdateTodoList = (todoId: string, title: string) => {
    return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
  }

  const fetchUpdateTask = (todoId: string, taskId: string, data: updateTaskResponseType) => {
    return instance.put<ResponseType>(`todo-lists/${todoId}/taskss/${taskId}`, data)
  }

  return {
    fetchSignUp,
    fetchGetTodoLists,
    fetchGetTasks,
    fetchAddTodoList,
    fetchAddTask,
    fetchDeleteTodoList,
    fetchDeleteTask,
    fetchUpdateTodoList,
    fetchUpdateTask
  }

}

export default useRequest;