export type FilterType = "all" | "active" | "completed";

export type TodoListType = {
  id: string;
  title: string;
  addedDate: Date;
  order: number;
};

export type TodolistDomainType = TodoListType & {
  filter: FilterType;
};

export type TaskType = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: Date;
  deadline: Date;
  id: string;
  todoListId: string;
  order: number;
  addedDate: Date;
};
export type TasksType = {
  [key: string]: TaskType[];
};

export type GetTasksResponse = {
  error: string | null;
  totalCount: number;
  items: TaskType[];
};
