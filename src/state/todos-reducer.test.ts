import {FilterType, firstId, secondId, todoListsReducer, TodosType} from "./todos-reducer";
import {addTodoListAC, changeFilterAC, editTodoAC, removeTodoList} from "./actions-todos";
import generateUniqueId from "generate-unique-id";

const startState: TodosType[] = [{
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

test('correct todolist should remove', () => {
  const endSate: TodosType[] = todoListsReducer(
      startState,
      removeTodoList(startState[0].id)
  );

  expect(endSate.length).toBe(1);
  expect(endSate[0].id).toBe(startState[1].id);
});

test('correct todolist should added', () => {
  const todoId: string = generateUniqueId();
  const title: string = 'New title';

  const endSate: TodosType[] = todoListsReducer(
      startState,
      addTodoListAC(todoId, title)
  );

  expect(endSate.length).toBe(3);
  expect(endSate[2].title).toBe(title);
  expect(endSate[2].id).toBe(todoId);
});

test('correct todolist filter should changed', () => {
  const newFilter: FilterType = 'active';

  const endState: TodosType[] = todoListsReducer(
      startState,
      changeFilterAC(startState[0].id, newFilter)
  );

  expect(endState[0].filter).toBe(newFilter);
  expect(endState[1].filter).toBe(startState[1].filter);
});

test('correct todolist title should changed', () => {
  const newTitle: string = 'New title';

  const endState: TodosType[] = todoListsReducer(
      startState,
      editTodoAC(startState[0].id, newTitle)
  );

  expect(endState[0].title).toBe(newTitle);
  expect(endState[1].title).toBe(startState[1].title);
})