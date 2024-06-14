export type FilterType = "all" | "active" | "completed";

export type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: Date
  deadline: Date
  id: string
  todoListId: string
  order: number
  addedDate: Date
}

export type TaskPutRequestType = Omit<TaskType, 'id' | 'todoListId' | 'order' | 'addedDate'>;

export type TasksType = {
  [key: string]: TaskType[]
}

export type TodoListResponseType = {
  id: string
  title: string
  addedDate: Date
  order: number
}

export type TodoListType = {
  filter: FilterType
} & TodoListResponseType

export type StatusType = 'idle' | 'loading' | 'success' | 'error';

export type ResponseType = {
  resultCode: number
  messages: string[]
  data: {
    item: TodoListResponseType
  }
}