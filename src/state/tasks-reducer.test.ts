import {firstId, secondId} from "./todos-reducer";
import generateUniqueId from "generate-unique-id";
import {tasksReducer, TasksType} from "./tasks-reducer";
import {addTaskAC, changeCheckedAC, editTaskAC, removeTaskAC, updateTasksAC} from "./actions-tasks";

const startate: TasksType = {
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

test('correct task should remove', () => {
  const endState: TasksType = tasksReducer(
      startate,
      removeTaskAC(firstId, startate[firstId][0].id)
      );

  expect(endState[firstId].length).toBe(4);
  expect(endState[firstId][0].id).toBe(startate[firstId][1].id);
});

test('correct new empty task obj should added', () => {
  const newTaskKey: string = generateUniqueId();
  const endState: TasksType = tasksReducer(
      startate,
      updateTasksAC(newTaskKey)
  );

  expect(Object.keys(endState).length).toBe(3);
  expect(newTaskKey in endState).toBe(true);
})

test('correct new task should added', () => {
  const title: string = 'title';
  const endState: TasksType = tasksReducer(
      startate,
      addTaskAC(firstId, title)
  );

  expect(endState[firstId].length).toBe(6);
  expect(endState[firstId][5].title).toBe(title);
});

test('correct checked task should changed', () => {
  const endState = tasksReducer(
      startate,
      changeCheckedAC(firstId, startate[firstId][0].id)
  );

  expect(endState[firstId][0].isDone).toBe(false);
});

test('correct task title should changed', () => {
  const newTitle: string = 'new title';
  const endState = tasksReducer(
      startate,
      editTaskAC(firstId, startate[firstId][0].id, newTitle)
  );

  expect(endState[firstId][0].title).toBe(newTitle);
})