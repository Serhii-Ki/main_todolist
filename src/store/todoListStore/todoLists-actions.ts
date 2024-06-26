import {TodoListResponse} from "./todoLists-reducer.ts";

export type TodoListActionsType = SetTodoListActionsType;

type SetTodoListActionsType = ReturnType<typeof setTodoListAC>;

export const setTodoListAC = (todoLists: TodoListResponse[]) => {
  return {
    type: 'SET-TODO-LIST',
    payload: {
      todoLists
    }
  } as const
}
