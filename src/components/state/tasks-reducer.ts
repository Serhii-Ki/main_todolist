import {firstId, initialTodoList, secondId} from "./todos-reducer";
import generateUniqueId from "generate-unique-id";
import {ActionsTasksType} from "./actions-tasks";

type TaskType = {
  id: string,
  title: string,
  isDone: boolean
};

export type TasksType = {
  [key: string] :TaskType[]
};

export const initialTasks: TasksType = {
  [firstId] : [
    {
      id: generateUniqueId(),
      title: 'HTML',
      isDone: true
    },
    {
      id: generateUniqueId(),
      title: 'CSS',
      isDone: true
    },
    {
      id: generateUniqueId(),
      title: 'JavaScript',
      isDone: false
    },
    {
      id: generateUniqueId(),
      title: 'react',
      isDone: false
    },
    {
      id: generateUniqueId(),
      title: 'TypeScript',
      isDone: false
    },
  ],
  [secondId]: [
    {
      id: generateUniqueId(),
      title: 'Beer',
      isDone: true
    },
    {
      id: generateUniqueId(),
      title: 'Fish',
      isDone: true
    },
    {
      id: generateUniqueId(),
      title: 'chase',
      isDone: false
    },
  ]
};

export const tasksReducer = (state: TasksType, actions: ActionsTasksType): TasksType => {
  switch (actions.type){
    case "REMOVE-TASK":{
      return {...state,
        [actions.payload.todoId]:
            state[actions.payload.todoId].filter(el =>
                el.id !== actions.payload.taskID
            )
      }
    }

    case "UPDATE-TASKS": {
      return {...state, [actions.payload.todoId]: []}
    }

    case "ADD-TASK": {
      const newTask = {
        id: generateUniqueId(),
        title: actions.payload.title,
        isDone: false
      }
      return {...state, [actions.payload.todoId]: [...state[actions.payload.todoId], newTask]}
    }

    case "CHANGE-CHECKED": {
      return {...state, [actions.payload.todoId]: state[actions.payload.todoId].map(task => task.id === actions.payload.taskId
        ? {...task, isDone: !task.isDone}
        : task
        )}
    }

    case "EDIT-TASK": {
      return {...state, [actions.payload.todoId]: state[actions.payload.todoId].map(task => task.id === actions.payload.taskId
          ? {...task, title: actions.payload.title}
          : task
        )}
    }

    default:
      return state;
  }
}