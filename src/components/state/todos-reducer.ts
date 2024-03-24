import generateUniqueId from "generate-unique-id";
import {ActionsTasksType} from "./actions-todos";

export type FilterType = 'all' | 'completed' | 'active';

export type TodosType = {
  id: string,
  title: string,
  filter: FilterType
};


export const firstId = generateUniqueId();
export const secondId = generateUniqueId();

export const initialTodoList: TodosType[] = [{
  id: firstId,
  title: 'What to learn',
  filter: 'all'
},
  {
    id: secondId,
    title: 'What to buy',
    filter: 'all'
  }
];

export const todoListsReducer = (
    state: TodosType[],
    actions: ActionsTasksType
): TodosType[] => {
  switch (actions.type){
    case 'REMOVE-TODOLIST': {
      return state.filter(el => el.id !== actions.payload.todoId);
    }

    case "ADD-TODOLIST": {
      const newTodoList: TodosType = {
        id: actions.payload.todoId,
        title: actions.payload.title,
        filter: 'all'
      }

      return [...state, newTodoList];
    }

    case "CHANGE-FILTER": {
      return state.map(todo => todo.id === actions.payload.todoId
        ? {...todo, filter: actions.payload.filter}
        : todo
      )
    }

    case "EDIT-TODO": {
      return state.map(todo => todo.id === actions.payload.todoId
        ? {...todo, title: actions.payload.title}
        : todo
      )
    }

    default:
      return state
  }
}