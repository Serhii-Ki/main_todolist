import { v4 as uuidv4 } from 'uuid';
import {TasksType, TodoListType} from "./types.ts";

const todoIdFirst: string = uuidv4();
const todoIdSecond: string = uuidv4();

export const tasksInitial: TasksType = {
  [todoIdFirst]: [
      {
        id: uuidv4(),
        title: 'HTML',
        completed: true
      },
    {
      id: uuidv4(),
      title: 'CSS',
      completed: true
    },
    {
      id: uuidv4(),
      title: 'Javascript',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'react',
      completed: false
    }
  ],
  [todoIdSecond]: [
    {
      id: uuidv4(),
      title: 'Молоко',
      completed: false
    },
    {
      id: uuidv4(),
      title: 'Хлеб',
      completed: true
    },
    {
      id: uuidv4(),
      title: 'Яйца',
      completed: false
    },
  ]
}

export const todoInitial: TodoListType[] = [
    {
      id: todoIdFirst,
      title: 'First todo',
      filter: 'all'
    },
  {
    id: todoIdSecond,
    title: 'Second todo',
    filter: 'all'
  }
]