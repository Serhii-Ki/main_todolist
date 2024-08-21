import { TodoListType } from "./mainTypes.ts";

export type ResponseType<T = {}> = {
  resultCode: number;
  messages: string[];
  data: T;
};

export type LoginPayloadType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type addTodoListResponse = {
  item: TodoListType;
};
