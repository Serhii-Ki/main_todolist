import generateUniqueId from "generate-unique-id";
import {ActionsTasksType} from "./actions-todos";

type FilterType = 'all' | 'completed' | 'active';

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

    default:
      return state
  }
}