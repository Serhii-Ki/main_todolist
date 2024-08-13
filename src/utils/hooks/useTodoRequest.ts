import { useRequest } from "./useRequest.ts";

export function useTodoRequest() {
  const instance = useRequest();

  const getTodoLists = () => {
    return instance.get<ResponseType>("/todo-lists");
  };

  return {
    getTodoLists,
  };
}
