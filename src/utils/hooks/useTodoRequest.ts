import { useRequest } from "./useRequest.ts";
import { TodoListType } from "../types/mainTypes.ts";

export function useTodoRequest() {
  const instance = useRequest();

  const getTodoLists = () => {
    return instance.get<TodoListType[]>("/todo-lists");
  };

  return {
    getTodoLists,
  };
}
