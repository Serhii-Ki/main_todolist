import generateUniqueId from 'generate-unique-id';
import { useState } from 'react';
import TodoList from '../../components/todoList/TodoList';

import AddForm from '../../components/addForm/AddForm';
import styles from './main.module.css';

export type TodoListType = {
	id: string;
	title: string;
	filter: string;
};

export type TasksType = {
	id: string;
	title: string;
	isDone: boolean;
};

export type TasksObjType = {
	[key: string]: TasksType[];
};

function MainApp() {
	const firstId = generateUniqueId();
	const secondId = generateUniqueId();

	const todoListsVar: TodoListType[] = [
		{
			id: firstId,
			title: 'What to learn',
			filter: 'all',
		},
		{
			id: secondId,
			title: 'What to buy',
			filter: 'all',
		},
	];

	const tasksObj: TasksObjType = {
		[firstId]: [
			{
				id: generateUniqueId(),
				title: 'HTML',
				isDone: false,
			},
			{
				id: generateUniqueId(),
				title: 'CSS',
				isDone: false,
			},
			{
				id: generateUniqueId(),
				title: 'JavaScript',
				isDone: false,
			},
			{
				id: generateUniqueId(),
				title: 'React',
				isDone: true,
			},
			{
				id: generateUniqueId(),
				title: 'Typescript',
				isDone: true,
			},
		],
		[secondId]: [
			{
				id: generateUniqueId(),
				title: 'Banana',
				isDone: false,
			},
			{
				id: generateUniqueId(),
				title: 'Milk',
				isDone: true,
			},
			{
				id: generateUniqueId(),
				title: 'Beer',
				isDone: false,
			},
		],
	};

	const [todoLists, setTodoLists] = useState<TodoListType[]>(todoListsVar);
	const [tasks, setTasks] = useState<TasksObjType>(tasksObj);

	const addTask = (id: string, title: string) => {
		const newTasks: TasksType = {
			id: generateUniqueId(),
			title: title,
			isDone: false,
		};
		setTasks(prevTasksState => ({
			...prevTasksState,
			[id]: [...prevTasksState[id], newTasks],
		}));
	};

	const addTodoList = (title: string) => {
		console.log(title);
	};

	const deleteTask = (todoListId: string, taskId: string) => {
		setTasks(prevTasksState => ({
			...prevTasksState,
			[todoListId]: prevTasksState[todoListId].filter(
				task => task.id !== taskId
			),
		}));
	};

	const onChangeChecked = (todoListId: string, taskId: string) => {
		setTasks(prevTasksState => ({
			...prevTasksState,
			[todoListId]: prevTasksState[todoListId].map(task =>
				task.id === taskId ? { ...task, isDone: !task.isDone } : task
			),
		}));
	};

	const onChangeFilter = (todoListId: string, newFilter: string) => {
		setTodoLists(
			todoLists.map(list =>
				list.id === todoListId ? { ...list, filter: newFilter } : list
			)
		);
	};

	return (
		<>
			<div className={styles.addList}>
				<h3>Add new todoList</h3>
				<AddForm buttonTitle='add' addTask={addTodoList} />
			</div>
			<div className={styles.wrapper}>
				{todoLists.map(item => {
					return (
						<TodoList
							key={item.id}
							title={item.title}
							filter={item.filter}
							tasks={tasks[item.id]}
							todoListId={item.id}
							deleteTask={deleteTask}
							addTask={addTask}
							onChangeChecked={onChangeChecked}
							onChangeFilter={onChangeFilter}
						/>
					);
				})}
			</div>
		</>
	);
}

export default MainApp;
