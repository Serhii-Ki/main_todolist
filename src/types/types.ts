type FilterType = "all" | "active" | "completed";

type TaskType = {
  id: string,
  title: string,
  completed: boolean,
}

export type TasksType = {
  [key: string]: TaskType[]
}

export type TodoListType = {
  id: string,
  title: string,
  filter: FilterType
}