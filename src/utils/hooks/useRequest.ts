import axios from 'axios'
import {TodoListResponse} from "../../store/todoListStore/todoLists-reducer.ts";

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
  });


  const getTodoLists =  () => {
    return instance.get<TodoListResponse[]>('todo-lists')
        .then(res => res.data)
  }

  return {
    getTodoLists
  }

}

export default useRequest;