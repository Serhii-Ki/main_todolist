import axios from "axios";

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
      'API-KEY': `51768207-6c1b-4ce3-8f65-309bb8749f38`
    },
    withCredentials: true,
  });

  const getTodoLists = () => {
    return instance.get('todo-lists')
  }

  const addTodoListReq = (title: string) => {
    return instance.post('todo-lists', {title})
  }

  const getTasks = (todoId: string) => {
    return instance.get(`todo-lists/${todoId}/tasks`)
  }

  return {
    getTodoLists,
    addTodoListReq,
    getTasks
  }
}

export default  useRequest;