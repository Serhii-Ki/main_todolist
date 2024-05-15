import {TasksType} from "../types/types.ts";
import {tasksInitial} from "../types/initState.ts";

export function tasksReducer(state: TasksType = tasksInitial, action: any): TasksType {
  switch (action.type) {
    default:
      return state
  }
}