import { useRequest } from "./useRequest.ts";
import { GetTasksResponse } from "../types/mainTypes.ts";

export function useTasksRequest() {
  const instance = useRequest();

  const getTasks = (todolistId: string) => {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`);
  };

  return {
    getTasks,
  };
}
