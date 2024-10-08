import { useRequest } from "./useRequest.ts";
import { TodoListType } from "../types/mainTypes.ts";
import { addTodoListResponse, ResponseType } from "../types/requestTypes.ts";

export function useTodoRequest() {
  const instance = useRequest();

  const getTodoLists = () => {
    return instance.get<TodoListType[]>("/todo-lists");
  };

  const addTodoList = (title: string) => {
    return instance.post<ResponseType<addTodoListResponse>>("/todo-lists", {
      title,
    });
  };

  const deleteTodoList = (id: string) => {
    return instance.delete<ResponseType>(`todo-lists/${id}`);
  };

  return {
    getTodoLists,
    addTodoList,
    deleteTodoList,
  };
}
