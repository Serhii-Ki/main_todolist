import axios from "axios";

function useRequest() {
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
  });

  const getTodoLists = () => {
    return instance.get('todo-lists')
  }

  const addTodoListReq = (title: string) => {
    return instance.post('todo-lists', {title})
  }

  return {
    getTodoLists,
    addTodoListReq
  }
}

export default  useRequest;