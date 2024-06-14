import axios from "axios";
import {ResponseType, TaskPutRequestType, TodoListResponseType} from "../types.ts";

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
      'API-KEY': `51768207-6c1b-4ce3-8f65-309bb8749f38`
    },
    withCredentials: true,
  });

  const getTodoLists = () => {
    return instance.get<TodoListResponseType[]>('todo-lists')
  }

  const addTodoListReq = (title: string) => {
    return instance.post<ResponseType>('todo-lists', {title})
  }

  const removeTodoListReq = (todoId: string) => {
    return instance.delete(`todo-lists/${todoId}`)
  }

  const updateTodoListReq = (todoId: string, title: string) => {
    return instance.put(`todo-lists/${todoId}`, {title})
  }

  const getTasks = (todoId: string) => {
    return instance.get(`todo-lists/${todoId}/tasks`)
  }

  const addTaskReq = (todoId: string, title: string) => {
    return instance.post(`todo-lists/${todoId}/tasks`, {title})
  }

  const removeTaskReq = (todoId: string, taskId: string) => {
    return instance.delete(`todo-lists/${todoId}/tasks/${taskId}`)
  }

  const updateTaskReq = (todoId: string, taskId: string, payload: TaskPutRequestType) => {
    return instance.put(`todo-lists/${todoId}/tasks/${taskId}`, payload)
  }

  return {
    getTodoLists,
    addTodoListReq,
    removeTodoListReq,
    updateTodoListReq,
    getTasks,
    addTaskReq,
    removeTaskReq,
    updateTaskReq
  }
}

export default  useRequest;