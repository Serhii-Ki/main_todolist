import axios, {AxiosError} from 'axios'
import {TodoListResponse} from "../../store/todoListStore/todoLists-reducer.ts";

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
  });

  const errorHandler = (error: unknown | AxiosError) => {
    if (axios.isAxiosError(error))  {
      return error.message
    } else {
      return 'Some Error!'
    }
  }

  const getTodoLists = async () => {
    try {
      const res = await instance.get<TodoListResponse[]>('todo-lists')
      return res.data
    } catch (err) {
      return errorHandler(err)
    }
  }

  return {
    getTodoLists
  }

}

export default useRequest;