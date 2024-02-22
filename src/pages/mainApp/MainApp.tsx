import generateUniqueId from 'generate-unique-id';
import { useState } from 'react';
import TodoList from '../../components/todoList/TodoList';

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

	const deleteTask = () => {
		console.log('Delete Task');
	};

	return (
		<div>
			{todoLists.map(item => {
				return (
					<TodoList
						key={item.id}
						title={item.title}
						filter={item.filter}
						tasks={tasks[item.id]}
						deleteTask={deleteTask}
					/>
				);
			})}
		</div>
	);
}

export default MainApp;
